---
layout: post
title: "Bringing Privacy to Cosmos with Zcash"
excerpt: "An early look at how we'll bridge Cosmos and Zcash."
categories: blog
tags: [research]
date: 2020-05-06
author: hdevalence
---

New projects designed to build interoperability between blockchain asset are
rapidly gaining steam; protocols like Cosmos, Polkadot, and Ethereum 2.0. The
Foundation knows there's a path to bring the privacy gains of Zcash to these
projects — benefiting all users of these protocols, strengthening the
already-strong Zcash anonymity set, and re-defining Zcash's role in this
ever-evolving ecosystem. We believe Zcash itself should match this evolution,
to become a de-facto, shared privacy layer for cryptoassets, in addition to
private, digital cash.

And we're starting that journey by bringing privacy to the Cosmos ecosystem.

Why do this with Zcash? Zcash is unique among privacy solutions in that it has
strong network effects: new users gain anonymity from all prior transactions of
existing users, while in turn contributing to a greater anonymity set for the
entire system. Our plan is to take advantage of these network effects by giving
Cosmos users access to this anonymity set through an IBC-enabled pegzone.

## What is a pegzone?

[Cosmos] is designed to enable cross-blockchain asset transfers.  These
transfers are accomplished by the Inter-Blockchain Communication (IBC)
protocol, which provides a standardized way to lock up assets on one chain and
provide bearer assets on another chain.

This provides horizontal scalability by allowing different "zones" –
blockchains with sovereign consensus mechanisms – to easily interoperate, or,
as the Cosmos slogan puts it, to provide an "internet of blockchains".

IBC requires transaction finality on each of the chains. However, proof-of-work
systems only have probabilistic finality: if miners produce a longer block
chain, transactions could be removed. However, there's still a conceptual gap
between absolute finality required by IBC and the probabilistic finality
provided by a proof-of-work chain.

The gap is addressed by a [pegzone], a blockchain that works as an adapter for
probabilistic finality by declaring transactions to be final after some number
of confirmations.

## Project phasing

This work will proceed in two phases, with the design of the first phase
enabling the features of the second phase. In the first phase, the pegzone will
provide tokens backed by ZEC in the existing Zcash shielded pool. These tokens
can be sent throughout the Cosmos ecosystem, allowing Cosmos users to trade and
use ZEC. In the second phase, we plan to add a shielded pool to the pegzone
itself, providing shielded staking, shielded IBC assets, and shielded
cross-chain transfers. This plan provides an increasingly useful privacy layer
for the Cosmos ecosystem, while growing the anonymity set of Zcash.

We plan to build the Zcash portions of this project using the [Zebra]
libraries, which provide modular, reusable components for working with the
Zcash chain.

## Initial design document

We've published our initial design document on our [zcash-pegzone repo] on
Github with more details. We're looking forward to sharing more with the
community as we continue development; this is the first step of a much bigger
journey for Zcash, and we're excited to help make Zcash the go-to protocol for
cryptoasset privacy.

[Cosmos]: https://cosmos.network
[pegzone]: https://blog.cosmos.network/the-internet-of-blockchains-how-cosmos-does-interoperability-starting-with-the-ethereum-peg-zone-8744d4d2bc3f
[Zebra]: https://github.com/ZcashFoundation/zebra
[zcash-pegzone repo]:https://github.com/ZcashFoundation/zcash-pegzone
