---
layout: post
title: "Decoding Bitcoin Messages with Tokio Codecs"
excerpt: "How we used Tokio's codec functionality to implement the Bitcoin wire protocol"
categories: blog
tags: []
date: 2020-02-14
author: hdevalence
---

In one of our [previous posts][network-stack], we wrote an overview of the
structure of the asynchronous network stack we designed for [Zebra], the Zcash
Foundation's forthcoming node implementation.  This post will zoom in to take a
close look at one small but interesting component: how we use Tokio's [codec]
functionality to implement the Bitcoin wire protocol used by Zcash.

Tokio's codecs provide a generic way to bridge between two fundamental
abstractions for async code: the `AsyncRead` and `AsyncWrite` traits, which
provide asynchronous byte-oriented I/O[^1], and the `Stream` and `Sink` traits,
which provide asynchronous streams and sinks of typed values.

It does this by providing two traits, [`Encoder`][tokio_encoder] and
[`Decoder`][tokio_decoder], and a [`Framed<T, U>`][tokio_framed] adapter which
wraps a byte-oriented `T: AsyncRead + AsyncWrite` and uses the `U: Encoder +
Decoder` to produce a `Stream + Sink` of the items produced by the codec.  For
implementors, this means that all that's required is to implement `Encoder` and
`Decoder` – specifying how items should turn into bytes and how bytes should be
parsed into items – and the `Framed` machinery handles the work of producing an
item-oriented `Stream + Sink`, allowing the rest of the code to focus on
handling individual items.

Because Zcash inherited its network protocol from Bitcoin, Zebra needs to work
with the (Zcash flavor of the) Bitcoin wire protocol.  Using Tokio's codecs,
this involves three steps: defining an item type, implementing the `Decoder`
trait, and implementing the `Encoder` trait.

## Bitcoin's wire format and our `Message` type.

The Bitcoin wire protocol encodes messages using a custom header structure
followed by an arbitrary-length payload.  The message structure is as follows:

|--------------:|:-------------------------------------------------------|
|      4 bytes  | magic value identifying the network the message is for |
| 12 bytes      | null-padded ascii identifier for message type          |
| 4 bytes       | little-endian encoding of payload length               |
| 4 bytes       | payload checksum (truncated double SHA-256)            |
| arbitrary     | message payload                                        |

Rather than using, e.g., numeric codes, the message type is identified using an
ascii string, such as `block\0\0\0\0\0\0\0`.  This ascii string is used in
`zcashd` in a long chain of `if` statements that combine parsing the message
payload with processing the payload contents.

Instead, we treat the entire header structure as an encoding detail and create
a `Message` enum with a variant for each message type.  Enums are an extremely
convenient and powerful tool, because they allow expressing [sum
types][sum_type], saying that a value can take on one of several different
variants and allowing the compiler to check that all possible variants are
handled.  And rather than containing byte payloads, each `Message` variant
contains a fully-parsed internal representation of the payload data.

This means that **all message parsing and validation is performed in one
place**, in the codec, so that the rest of the implementation is provided with
either an error or a parsed and validated internal representation of the
message's content.  If you're curious, you can see the full description of the
`Message` enum in the [internal documentation for the `zebra-network`
crate][message_docs]. [^2]

## The `Decoder` trait

The core functionality of the [`Decoder`][tokio_decoder] trait is provided by
the `decode` method:
```rust
fn decode(
    &mut self, 
    src: &mut BytesMut
) -> Result<Option<Self::Item>, Self::Error>;
```
It's worth unpacking the types in this method signature, because they reveal a
lot of information about how the decoder works.

First, since the receiver of the `decode` method is `&mut self`, we know that
the decoder is able to keep some decoding state and update it as it's asked to
decode messages.

Next, the `src` buffer is a `&mut BytesMut`.  The [`BytesMut` type][bytesmut]
is from the [`bytes` crate][bytes], which provides abstractions for zero-copy
handling of byte arrays.  The `Bytes` and `BytesMut` types are essentially
lightweight views into a reference-counted backing buffer, so that copying and
manipulating values doesn't require copying the underlying data.  Multiple
`Bytes` objects can have overlapping views of the same data, while the
`BytesMut` type guarantees exclusive access and therefore allows mutation.

Passing a `&mut BytesMut` reference to the source buffer means that the view of
the source buffer is shared between the codec and its caller (because of
`&mut`), so the codec can mark some portion of the source buffer as having been
consumed, and that that view is an exclusive view of the source buffer (because
of `BytesMut`), so the codec can take ownership of the data it consumes.

Finally, the return type is a `Result<Option<Self::Item>, Self::Error>`.  This
means that instead of just signaling that an error occurred (returning
`Err(Self::Error)`) or that an item was parsed (returning `Some(Self::Item)`),
a codec can also signal that no error occurred but that no item is ready yet
(returning `Ok(None)`).  In an asynchronous context, this allows "trial
decoding" as new data arrives, producing frames as soon as they are ready.

# Implementing `Decoder`


```ascii
Feb 21 13:58:26.159 TRACE peer{addr=V4(127.0.0.1:8233)}: zebra_network::peer::connection: awaiting response to client request
Feb 21 13:58:26.159 TRACE peer{addr=V4(127.0.0.1:8233)}: zebra_network::protocol::external::codec: src buffer does not have an entire header, waiting self.state=DecodeState::Head
Feb 21 13:58:26.160 TRACE peer{addr=V4(127.0.0.1:8233)}: zebra_network::protocol::external::codec: read header from src buffer self.state=DecodeState::Head magic=Magic("24e92764") command=block body_len=11102 checksum=Sha256dChecksum("0413899b")
Feb 21 13:58:26.160 TRACE peer{addr=V4(127.0.0.1:8233)}: zebra_network::protocol::external::codec: src buffer does not have an entire body, waiting self.state=DecodeState::Body { body_len: 11102, command: "block\u{0}\u{0}\u{0}\u{0}\u{0}\u{0}\u{0}", checksum: Sha256dChecksum("0413899b") } len=4492
Feb 21 13:58:26.160 TRACE peer{addr=V4(127.0.0.1:8233)}: zebra_network::protocol::external::codec: reading block body=b"\x04\0\0\0\x9e\x86\x1d\xf1\xd9j.\xe5 \x11w\x0f\xab\xa65\x12\x923\x9eL\x05\xd3\xa3\x08\xc3\x07\xcdZ\x0e\0\0\0\xdd7\xbe]\n\xec\x03\xecC\xb6\x8b\x8d\x81S\xe6\x16\xb5\n\x91\x95\xae\xbe\xc6K\xbb\xa9\x83\x84\xac\xa3^P\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0[b\x14X#\xb2\x13\x1dj}\0\x10\0\0\0\0\0\0\0\0\x10\0}kW=\x02\0\0\0\0\0\0\0\
```


[^1]: Unfortunately there is not yet consensus in the async Rust ecosystem
  about what exactly the `AsyncRead` and `AsyncWrite` traits should be, mainly
due to disagreement about the best way to handle uninitialized buffers and
vectored I/O.  More details can be found in [this
issue](https://github.com/tokio-rs/tokio/pull/1744) and in these comments:
[1](https://github.com/tokio-rs/tokio/pull/1744#issuecomment-558736715),
[2](https://github.com/tokio-rs/tokio/pull/1744#issuecomment-558970440).

[^2]: We render two copies of the documentation for our crates.  One is
  [`doc.zebra.zfnd.org`](https://doc.zebra.zfnd.org), containing documentation
for the public interfaces of these crates; the other is
[`doc-internal.zebra.zfnd.org`](https://doc-internal.zebra.org), containing
documentation for all of the internal items.  Because we translate the Bitcoin
network protocol into our own request/response protocol, we don't publicly
expose the `Message` type from the `zebra-network` crate, so this link is to
the internal documentation.

[network-stack]: https://www.zfnd.org/blog/a-new-network-stack-for-zcash/
[Zebra]: https://github.com/ZcashFoundation/zebra
[codec]: https://docs.rs/tokio-util/0.2.0/tokio_util/codec/index.html
[tokio_encoder]: https://docs.rs/tokio-util/0.2.0/tokio_util/codec/trait.Encoder.html
[tokio_decoder]: https://docs.rs/tokio-util/0.2.0/tokio_util/codec/trait.Decoder.html
[tokio_framed]: https://docs.rs/tokio-util/0.2.0/tokio_util/codec/struct.Framed.html
[sum_type]: https://en.wikipedia.org/wiki/Sum_type
[bytesmut]: https://docs.rs/bytes/0.5.4/bytes/struct.BytesMut.html
[bytes]: https://docs.rs/bytes/0.5.4/bytes/
