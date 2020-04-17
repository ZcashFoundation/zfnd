---
layout: post
title: "A New Network Stack For Zcash"
excerpt: "We give a deep dive into the network architecture of Zebra, the Foundation's Zcash node implementation"
categories: blog
tags: [development]
date: 2020-01-28
author: hdevalence
---

In the Foundation's [engineering roadmap for 2020][roadmap], we overviewed our
plans for [Zebra][zebra], our Rust implementation of Zcash.  Announced last
summer at Zcon1, Zebra aims to support the core strength of Zcash – its
best-in-class cryptography – by placing it on a solid foundation, providing a
modern, modular implementation that can be broken into components and used in
many different contexts.  In that post, we briefly described the new network
stack we designed and implemented for Zebra.  As a fork of Bitcoin, Zcash
inherited Bitcoin's network protocol; in this post, we'll do a deep dive on
Zebra's network stack.

Our new stack is designed around the asynchronous RPC abstractions provided by
[Tower][tower], which is used in Buoyant's [linkerd][linkerd], and inspired in
turn from [Twitter's Finagle][finagle-paper].  (Many thanks go to [Eliza
Weisman][eliza] for pointing us in the right direction and giving design
feedback).  It isolates the Bitcoin state machine for each peer connection,
exposing only a clean request/response API, and then encapsulates all the peer
connections behind a connection pool that can load-balance outbound requests
over all available peers.  The connection pool is dynamically sized in response
to [backpressure][backpressure-tokio], automatically crawling the network to
find new peers when outbound demand (requests from the node to the network) is
high, and closing existing connections to shed load when inbound demand
(requests from the network to the node) is high.

## Bitcoin's Legacy Network Protocol

Zcash was originally a fork of Bitcoin, adding fully private transactions
implemented using zero-knowledge proofs.  As the first ever production-scale
deployment of [zk-SNARKs][snark], it's understandable that its original
development was focused on bringing zk-SNARKs to production, rather than
redesigning the Bitcoin blockchain.  But this meant that Zcash inherited its
network protocol from Bitcoin, which in turn inherited it from a
poorly-specified C++ codebase written in 2009 by Satoshi before their
disappearance.

The Bitcoin network protocol does not specify any concept of requests or
responses.  Instead, nodes send each other messages, which are processed one at
a time and might or might not cause the recipient to generate other messages.
Often, those messages can also be sent unsolicited.  For instance, node `A`
might send a `getblocks` message to node `B`, and node `B` might “respond” with
an `inv` message advertising inventory to node `A`, but `B`’s `inv` message is
not connected in any way to `A`’s `getblocks` message.  Since `B` can also send
`A` unsolicited `inv` messages as part of the gossip protocol, both nodes need
to maintain complex connection state to understand each other.

In `zcashd`, all messages are processed one at a time in this [900-line
function in `main.cpp`][zcashd-process], and in `bitcoind`, which has been
refactored since `zcashd` was forked, this is performed by [this 1400-line C++
function][bitcoin-process].  Not only is the required connection state
enormous, making it very difficult to exhaustively understand and test, it's
also shared between different peer connections.

When thinking about what we wanted our network layer to look like, we knew this
was what we didn’t want.  An enormous, complex state machine shared between
connections is a sure sign of future trouble for maintainability, security, and
performance.  So what would be the appropriate foundation?

## A `tower`ing Interlude

[Tower][tower] is a Rust library providing “modular and reusable components for
building robust networking clients and servers”, drawing on the ideas of [_Your
Server as a Function_][finagle-paper].  The core building block of Tower is the
[`tower::Service`][tower-service] trait, which defines an abstract RPC interface:

```rust
pub trait Service<Request>
where
    <Self::Future as Future>::Output == Result<Self::Response, Self::Error>, 
{
    type Response;
    type Error;
    type Future: Future;
    fn poll_ready(&mut self, cx: &mut Context) -> Poll<Result<(), Self::Error>>;
    fn call(&mut self, req: Request) -> Self::Future;
}
```

If you're already familiar with async Rust, this might make sense.  But if
you're not, it's worth unpacking this code a little bit.  First, it defines a
[*trait*][rustbook-trait], which are Rust's concept of “interfaces”.  The
`Service` trait models an asynchronous function from a `Request` to a
`Response`, and because Rust is statically typed, these type variables are
declared as part of the trait definition.  A particular implementation of the
`Service` trait declares the concrete types for these variables as part of the
implementation.

Next, let's look at the `call` method.  This takes a mutable reference to the
service, `&mut self`, and a `Request`, and returns a future whose eventual
output will be a `Result<Response, Error>`, i.e., either a successful response
or an error.  Because the `call` method takes a `&mut self`, a service is
allowed to mutate internal state while processing a request.

The key component of this trait, however, is the `poll_ready` method, used to
propagate backpressure.  Backpressure is a term used to describe mechanisms for
different parts of a software system to perform flow control by communicating
about throughput.  [This blog post][backpressure-blog] has a more detailed
explanation, but as a simple example, consider copying data from a fast SSD to
a slower HDD.  Because data can only be written to the HDD at a slower rate,
reading data from the SSD at a faster rate will only mean larger buffers and
more resource consumption.

The `Service` contract requires that callers MUST call `poll_ready` to
determine readiness before calling `call`.  This mechanism allows correct
propagation of backpressure information through an entire tree of `Service`
calls.  

There is another important benefit of this design.  By formalizing an
asynchronous function from a `Request` to a `Response` as a trait, `tower`
allows writing middleware that transforms `Service`s in a generic way.  For
instance, [`tower::buffer`][tower-buffer] provides a generic wrapper for adding
a bounded buffer to any `Service`; [`tower::timeout`][tower-timeout] provides
generic request timeouts; [`tower::retry`][tower-retry] provides generic retry
behaviour with configurable policies; [`tower-load`][tower-load] provides
generic load-measurement instrumentation, etc.  And, because these are
implemented using zero-cost abstractions, the generic middleware adds no
runtime cost beyond the cost required to implement their behaviour.

## A Request/Response Protocol for Zcash

To make use of these tools and to simplify our internal architecture, we
opted to design an internal request/response protocol for communicating with
the Zcash network. We model this communication as a duplexed connection, with
inbound requests from remote peers to our node on the one hand and outbound
requests from various parts of our node to the Zcash network. 

This choice simplifies our internal architecture, because each part of the
code that needs to obtain data from the network can create an appropriate
request and obtain a response future, without having to keep track of any
other state. In contrast, `zcashd` processes all messages in a single
function, making it complicated to isolate state. And because our
request/response protocol is internally defined, we can evolve it to cleanly
factor responsibility between different parts of the code without
compatibility issues.

However, Zebra needs to talk to `zcashd` nodes that communicate using the
legacy Bitcoin wire protocol, which is not request/response based. To handle
this, we perform per-peer protocol translation between the legacy Bitcoin
wire protocol and our internal protocol. At a high level, when we connect to
a remote node, we create a `Connection` object with a per-connection event
loop, together with a `Client` object (implementing the `Service` trait) that
can make requests to that `Connection`. 

The `Connection` maintains a reference to a `Service` that handles inbound
requests, as well as state determining whether there is currently an outbound
request awaiting a response. If there is, it waits for incoming messages from
the remote peer, checks if they should be interpreted as a response to the
pending request, and if not, interprets them as a request from the remote
peer to our node. Otherwise, it waits for either an incoming message from the
remote peer or for a request from the corresponding `Client`.

Each Bitcoin message type corresponds to a variant of an internal `Message`
enum, and we use a [Tokio codec][tokio-codec] to transform a generic
`AsyncRead + AsyncWrite` byte source into a `Stream` and `Sink` of
`Messages`. The incoming stream of peer messages is instrumented to fire a
timestamp event into a channel that allows non-blocking collection of
per-peer last-seen information.

This design ensures that each connection's message handling state is
completely isolated from each other connection's state. For instance, it is
invulnerable to the [`ping` attack][pingreject], since each connection's
heartbeat messages are fired from independent timers.

It also supports backpressure. The service handling inbound requests from the
network to our node handles backpressure by load shedding, causing the
connection to close to reduce inbound request load. Outbound requests to the
remote peer are sent by its `Client` handle, which reports backpressure based
on whether the `Connection` has a pending request (plus a small buffer).

Finally, although we have no immediate plans in this direction, on a much
longer time horizon, this provides a pathway to gradually sunset the Bitcoin
wire protocol in Zcash by stabilizing some part of Zebra's internal protocol,
defining a wire format (e.g., ProtoBufs) for it, and then pushing that
protocol across the wire to compatible nodes.

## Building a Connection Pool

One downside of the design above is that we lose some throughput
communicating with individual peers, because we make requests one at a time
and cannot do message pipelining. To compensate, we connect to many peers
simultaneously, and provide a connection pool that tracks readiness
information of all connections and load-balances outbound requests over ready
peers. This connection pool allows us to model "the network" rather than
individual peer connections. Our implementation is adapted with
Zcash-specific behaviour from a fork of [`tower-balance`][tower-balance],
which provides a generic connection pool. As described in that crate's
documentation, it

> Distributes requests across inner services using the [Power of Two Choices][p2c].
>
> As described in the [Finagle Guide][finagle]:
>
> > The algorithm randomly picks two services from the set of ready endpoints and
> > selects the least loaded of the two. By repeatedly using this strategy, we can
> > expect a manageable upper bound on the maximum load of any server.
> >
> > The maximum load variance between any two servers is bound by `ln(ln(n))` where
> > `n` is the number of servers in the cluster.

Note that there are two levels of endpoint selection here: first, whether an
endpoint (in our case, a peer connection) is ready, and second, a notion of
loading. We use [`tower-load`][tower-load] to wrap every client handle with
an load measurement instrument. Currently, we measure its [peak
exponentially-weighted moving average][peakewma] of response latency to
prioritize faster peers.

This design works well for basic requests independent of peer selection, but
many requests required for Zcash, e.g., a request for some particular
inventory item, can only be made to a subset of connected peers, e.g., the
ones that have recently advertised that inventory hash, and other requests
require specialized logic (e.g., transaction diffusion). This specialized
routing logic can be implemented inside the connection pool, so that it
continues to abstract away "the rest of the network" into one endpoint.

The connection pool reports backpressure based on whether it has ready
peer connections to service a request. If it does not, in addition to
signaling unreadiness to its caller, it also fires a demand signal to a peer
crawler task to request additional peers, described in more detail below.

## Crawling the Network

The connection pool begins with a set of initial seed peers specified in a
config file, and when remote peers handshake with our node, the resulting
`Client` handles are passed through a channel to the connection pool. To find
additional peers to connect to, we spawn a task that automatically crawls the
network and assembles a set of candidate peers. Crawling begins as soon as
the network comes online, and continues periodically while it is live. The
candidate set is filtered according to last-seen timestamps and heartbeat
intervals to avoid duplicate connections to existing peers without the need
for synchronized state.

Unlike `zcashd`, which maintains a fixed number of outbound connections, we
attempt to connect to as many peers as possible, subject to resource limits
and backpressure. Increasing the number of peer connections is a double-edged
sword: it increases the capacity for outbound requests from our node to the
network, but it also increases the demand of inbound requests from the
network to our node. We handle backpressure from inbound requests by shedding
load, closing the corresponding peer connections and immediately reducing the
volume of inbound requests.

Outbound connections are initiated in response to either a demand signal from
the connection pool, or a long-running timer. This grows the connection pool
gradually over time, or more rapidly in response to spikes in outbound demand.

All of this machinery is completely encapsulated inside of the connection
pool, so the entire networking API used by the rest of the node fits on [one
page][zebra-network].  The relationships of the internal components are summarized
in [this diagram][zebra-network-diagram].

## Summing Up & Next Steps

This post described our networking stack. Since finishing up its basic
architecture at the end of November, we've been busy working on a bunch of
other fronts, to be described in future blog posts:

* implementing structured generation to allow integrating property-based
  testing throughout the entire codebase, led by [Deirdre Connolly][dconnolly];

* producing a standalone implementation of [RedJubjub][redjubjub] signatures,
  into which we can integrate support for [FROST], a round-optimized threshold
  Schnorr multisignature scheme designed by the Foundation's own [Chelsea
  Komlo][komlo];

* working through the Zcash specification, identifying
  [mismatches][ed25519-zebra] between the spec and the implementation;
 
* writing careful definitions of [core data structures][transaction-enum] using
  algebraic datatypes, so that structurally invalid data cannot be represented
  internally.

We're excited to share more details on these and other projects on our way to
shipping Zebra in time for NU3 activation!

[roadmap]: https://www.zfnd.org/blog/eng-roadmap-2020/
[zebra]: https://github.com/zcashfoundation/zebra
[2020]: https://www.zfnd.org/blog/eng-roadmap-2020/
[tower]: https://docs.rs/tower
[linkerd]: https://linkerd.io
[backpressure-tokio]: https://tokio.rs/docs/overview/#backpressure
[snark]: https://z.cash/technology/zksnarks/
[bitcoin-process]: https://github.com/bitcoin/bitcoin/blob/c7e6b3b343e836ff41e9a8872187e0b24f13064d/src/net_processing.cpp#L1883-L3220
[zcashd-process]: https://github.com/zcash/zcash/blob/f0003239f87c2bfcff18986144e080c7ed501eb1/src/main.cpp#L5404-L6310
[finagle-paper]: https://monkey.org/~marius/funsrv.pdf
[eliza]: https://twitter.com/mycoliza
[tower-service]: https://docs.rs/tower/latest/tower/trait.Service.html
[rustbook-trait]: https://doc.rust-lang.org/book/ch10-02-traits.html
[backpressure-blog]: https://medium.com/@jayphelps/backpressure-explained-the-flow-of-data-through-software-2350b3e77ce7
[tower-buffer]: https://docs.rs/tower/0.3.1/tower/buffer/index.html
[tower-timeout]: https://docs.rs/tower/0.3.1/tower/timeout/index.html
[tower-retry]: https://docs.rs/tower/0.3.1/tower/retry/index.html
[tower-load]: https://docs.rs/tower-load/0.3.0/tower_load/
[tower-balance]: https://docs.rs/tower-balance/0.3.0/tower_balance/
[tower-discover]: https://docs.rs/tower/0.3.1/tower/discover/index.html
[pingreject]: https://crypto.stanford.edu/timings/pingreject.pdf
[finagle]: https://twitter.github.io/finagle/guide/Clients.html#power-of-two-choices-p2c-least-loaded
[p2c]: http://www.eecs.harvard.edu/~michaelm/postscripts/handbook2001.pdf
[peakewma]: https://docs.rs/tower-load/0.3.0/tower_load/peak_ewma/struct.PeakEwma.html
[zebra-network]: https://doc.zebra.zfnd.org/zebra_network/index.html
[zebra-network-diagram]: https://github.com/ZcashFoundation/zebra/blob/main/design/zebra-network.txt
[tokio-codec]: https://docs.rs/tokio-util/0.2.0/tokio_util/codec/index.html
[redjubjub]: https://docs.rs/redjubjub
[FROST]: https://crysp.uwaterloo.ca/software/frost/
[ed25519-zebra]: https://github.com/ZcashFoundation/ed25519-zebra/issues/1
[dconnolly]: https://github.com/dconnolly
[komlo]: https://chelseakomlo.com
[transaction-enum]: https://doc.zebra.zfnd.org/zebra_chain/transaction/enum.Transaction.html
