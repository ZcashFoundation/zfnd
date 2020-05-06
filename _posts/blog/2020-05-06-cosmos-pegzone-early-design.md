---
layout: post
title: "Bringing Privacy to Cosmos with Zcash"
excerpt: "An early look at how we'll bridge Cosmos and Zcash."
categories: blog
tags: [research]
date: 2020-05-05
author: hdevalence
---

Protocols like Cosmos, Polkadot, and Ethereum 2.0 that aim to add
interoperability across different blockchains are rapidly gaining steam.
The Zcash Foundation knows there's a path to bring the privacy gains of
Zcash to these projects — benefiting all of their users, strengthening
the already-strong Zcash anonymity set, and re-defining Zcash's role in
this ever-evolving ecosystem as the shared privacy layer for
cryptoassets.

And we're starting that journey by bringing privacy to the Cosmos
ecosystem.

Why do this with Zcash? Zcash is unique among privacy solutions in that
it has strong network effects: new users gain anonymity from all prior
transactions of existing users, while in turn contributing to a greater
anonymity set for the entire system. Our plan is to take advantage of
these network effects by giving Cosmos users access to this anonymity
set through an IBC-enabled pegzone.  

This work will proceed in two phases, with the design of the first phase
enabling the features of the second phase. In the first phase, the
pegzone will provide tokens backed by ZEC in the existing Zcash shielded
pool, and secured by a novel shielded-compatible staking mechanism.
These tokens can be sent throughout the Cosmos ecosystem, allowing
Cosmos users to trade and use ZEC.  In the second phase, we plan to add
a shielded pool to the pegzone itself, providing shielded staking,
shielded IBC assets, and shielded cross-chain transfers.

This plan provides an increasingly useful privacy layer for the Cosmos
ecosystem, while growing the anonymity set of Zcash.  And our
library-first design for [Zebra] will let us build the Zcash portions of
the project using modular, reusable components.

We've published our initial design document on our [zcash-pegzone repo] on
Github with more details. We're looking forward to sharing more with the
community as we continue development; this is the first step of a much bigger
journey for Zcash, and we're excited to help make Zcash the go-to protocol for
cryptoasset privacy.

[Cosmos]: https://cosmos.network
[pegzone]: https://blog.cosmos.network/the-internet-of-blockchains-how-cosmos-does-interoperability-starting-with-the-ethereum-peg-zone-8744d4d2bc3f
[Zebra]: https://github.com/ZcashFoundation/zebra
[zcash-pegzone repo]:https://github.com/ZcashFoundation/zcash-pegzone
