---
layout: post
title: "Zebra, the New Consensus-Compatible Zcash Node Client"
excerpt: "The Zcash Foundation and Parity Technologies are proud to present Zebra, a consensus-compatible Zcash node client written in Rust."
categories: blog
tags: [partnerships, Parity, development]
date: 2019-06-17
author: sonya
---

The Zcash Foundation and Parity Technologies are proud to present [Zebra](https://github.com/ZcashFoundation/zebra), a consensus-compatible Zcash node client written in Rust, released under the [GPL 3.0 license](https://www.gnu.org/licenses/gpl-3.0.en.html). The Electric Coin Company’s [implementation](https://github.com/zcash/zcash) is no longer the only full-fledged Zcash node software available.

As a project, Zebra was [first announced](https://www.zfnd.org/blog/parity-partnership/) seven months ago, in October, 2018. It has come to fruition two months earlier than expected, thanks to diligent work by the Zebra development team.

However, we recommend running Zebra on testnet for the time being. It is an alpha product, subject to change in the coming months as the Zcash Foundation’s burgeoning technical team takes over from Parity. The Foundation expects — but cannot guarantee — that Zebra will be usable on mainnet by the time [Zcash Blossom](https://z.cash/upgrade/blossom/) activates. (The target for Blossom activation is late October this year.)

Parity has published an [informative blog post about Zebra](https://www.parity.io/parity-releases-zebra-in-collaboration-with-zcash-foundation/) and its purpose:

> Alternative client implementations help developers quickly detect implementation-specific bugs that could cause consensus-related issues. Multiple client implementations also attract a broader audience of developers, who can start contributing in a language they’re familiar with. Zebra allows Rust developers to easily start hacking on and contributing to Zcash.

Parity CTO Fredrik Karryson said, “The community wins across the board, as there are now more core developers working on clients, with more interests represented and clients taking different approaches on how to build apps on top. Zcash can now boast a more diversified community that can effectively tailor experiences for Layer 2 developers as well as end-users.”

The Foundation’s Executive Director, Josh Cincinnati, recently described how Zebra plays a role in [“multisig” Zcash governance](https://www.zfnd.org/blog/multisig-governance/):

> One of the reasons for engaging Parity to build an alternative, consensus-compatible Zcash implementation is to create leverage for an intentional chainsplit, should that ever become necessary. If we have a network with lots of nodes that are running non-ECC software, that defends against unilateral control by the people who maintain the first implementation (or any given implementation).

We encourage you to start getting acquainted with [Zebra’s code and documentation](https://github.com/ZcashFoundation/zebra). Marek Kotewicz from Parity and the Zcash Foundation’s Anna Kaplan, who focused on Zebra during her internship, gave a [joint lightning talk about Zebra](https://www.youtube.com/watch?v=WduXasm8l-Y) at Zero Knowledge Summit in March.

This coming Saturday, on June 22, Anna Kaplan and Zcash Foundation engineer Deirdre Connolly will give the talk “Making Zcash Shine with Rust.” You’ll be able to [watch the livestream on YouTube](https://www.youtube.com/watch?v=4W6GKohcntQ&list=PL40dyJ0UYTLLjPZaKjdhMoCNanb77_Ztj&index=5).
