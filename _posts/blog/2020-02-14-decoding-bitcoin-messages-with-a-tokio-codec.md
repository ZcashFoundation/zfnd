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

## The `Message` type

The Bitcoin wire protocol has many different kinds of messages, identified on
the wire by a 12-byte ascii header.  To represent them internally, we created a
`Message` enum with a variant for each message type.  Enums are an extremely
convenient and powerful tool, because they allow expressing [sum
type][sum_type] relationships, saying that a value can take on one of several
different variants and allowing the compiler to check that 


[^1]: Unfortunately there is not yet consensus in the async Rust ecosystem
  about what exactly the `AsyncRead` and `AsyncWrite` traits should be, mainly
due to disagreement about the best way to handle uninitialized buffers and
vectored I/O.  More details can be found in [this
issue](https://github.com/tokio-rs/tokio/pull/1744) and in these comments:
[1](https://github.com/tokio-rs/tokio/pull/1744#issuecomment-558736715),
[2](https://github.com/tokio-rs/tokio/pull/1744#issuecomment-558970440).

[network-stack]: https://www.zfnd.org/blog/a-new-network-stack-for-zcash/
[Zebra]: https://github.com/ZcashFoundation/zebra
[codec]: https://docs.rs/tokio-util/0.2.0/tokio_util/codec/index.html
[tokio_encoder]: https://docs.rs/tokio-util/0.2.0/tokio_util/codec/trait.Encoder.html
[tokio_decoder]: https://docs.rs/tokio-util/0.2.0/tokio_util/codec/trait.Decoder.html
[tokio_framed]: https://docs.rs/tokio-util/0.2.0/tokio_util/codec/struct.Framed.html
[sum_type]: https://en.wikipedia.org/wiki/Sum_type
