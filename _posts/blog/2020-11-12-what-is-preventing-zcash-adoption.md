---
layout: post
title: "What is Preventing Zcash Adoption?"
excerpt: "What do we need to do to build the future for private, digital cash?"
categories: blog
tags: 
date: 2020-11-12
author: zfteam
---

Zcash, as it exists today, is not being used as globally-accepted, private, digital cash.

It should be. Everyone working on Zcash remains optimistic about achieving the promise of private, digital cash — but we do ourselves a disservice if we don't explicitly discuss the gaps in the ecosystem that prevent this.

The Zcash Foundation wants Zcash to be a default-safe and fully-private system. We should be transparent about where we are today in the Zcash ecosystem, what obstacles prevent us from achieving our goals of widespread trust and user adoption, and what we need to do to build the future for private, digital cash. 

**Simply put, shielded transactions are what make Zcash a candidate for universally accepted private, digital cash, and the lack of shielded adoption is the single most important technical and advocacy challenge we face.**

In order to understand the magnitude of the challenge, it is important to define a shielded transaction. Like Bitcoin, the Zcash network can transfer value over the internet from one individual to another, without a third-party intermediary. Unlike Bitcoin, **Zcash's core feature is that the sender, receiver, and payment information associated with that value transfer can be proven, but is NOT revealed, allowing for full financial privacy.**

Currently, Zcash has two types of transactions: transparent and shielded. A transparent transaction is no different than a Bitcoin transaction, whereas a shielded transaction actually uses the distinguishing privacy technology of Zcash. For a multitude of reasons, transparent transactions are most common by a large margin, therefore making Zcash a less-adopted version of Bitcoin. 

Even if we didn't achieve full-shielded adoption, a larger *anonymity set* (i.e. lots more shielded transactions) would benefit all Zcash users, because larger crowds provide more privacy for everyone involved, while making privacy-invading technologies more expensive.

Shielded transactions are the entire reason why Zcash exists and is the only way to send money privately within Zcash. Prioritizing this functionality is the most important thing the Zcash ecosystem should be doing right now. 

## What are the barriers to shielded adoption?

### Acquiring shielded Zcash

Exchanges have multiple roles in the adoption of Zcash: they're the main on-ramp for new users, and (for better or worse) their hosted wallets are where many decide to store their ZEC.

One of the biggest hurdles is helping exchanges understand how shielded transactions can be compliant with regulations. Exchanges have to comply with laws that do not specify exactly how shielded transactions can fit into a risk calibrated anti-money laundering program, and will therefore need to develop strategies and best practices to employ these transactions for the benefit of their customers' privacy while remaining compliant. There are other organizations that are working diligently on these problems, so we'll focus on everything else.

For exchanges, supporting shielded transactions is difficult compared to transparent; many of them have extensive Bitcoin-based tooling that makes transaction support significantly easier to integrate. Zcash-specific tooling introduces additional risk and ongoing maintenance work. These kinds of investments are a lower priority for cryptocurrencies with a smaller market capitalization and user base, such as Zcash.

The Sapling upgrade has made shielded support easier, but the tooling needs significant improvements, such as hardware security modules (HSMs) that exchanges often need to support secure, shielded transactions.

### Shielded developer support and tooling

Setting up shielded support using zcashd is honestly more difficult than it should be for most developers, which *directly impacts* the upstream issues of exchange support and easy access for users.

The Foundation is tackling this head-on with the way we're developing Zebra; developers will be able to choose which libraries they need, without necessarily running a full-blown Zebra node, simplifying developer integration greatly.

### Easy access on devices including mobile and web browsers

For users that do not store their Zcash on exchanges, we need more points of shielded usage on consumer-facing wallets and point-of-sale platforms/APIs. This situation would greatly improve with more developer-friendly shielded integrations and meeting users where they are (their phones, web browsers, and hardware wallets).

### User studies

The ECC's research on wallet usage and adoption is thorough and helpful for wallet adoption, but there are other foundational layers to the ecosystem that would benefit from user studies as well. In order to achieve better decentralization, Zcash needs more full nodes. And by understanding the experiences of Zcash and other cryptocurrency enthusiasts and developers, we can improve the technology so that other users can adopt it.

### Improving the Zcash Protocol Specification

If you handed a developer the Zcash spec, and asked them to implement the Zcash protocol, they would not be able to implement a consensus-compatible node from that document alone. They would need help from experienced Zcash engineers, because the specification does not describe all of the details required for the protocol to operate. Currently, Zcash specification work is focused on documenting newly introduced changes to the Zcash protocol, but for some older parts of the protocol, the spec is still incomplete. For example, the spec says "do it like Bitcoin" in many places. It assumes considerable knowledge of Zcash, and of legacy Bitcoin versions. (These assumptions come from Zcash's origins as a fork of Bitcoin.) The unique parts of the Zcash protocol are well-specified, including Sprout and Sapling cryptography. But it will take significant engineering effort to create a comprehensive specification for the entire Zcash Protocol.

We can reduce this effort by simplifying the Zcash protocol and its implementations. Changes like these would help experienced developers focus on specifying the core parts of the Zcash protocol. And they would reduce the engineering effort required for new projects that use the Zcash protocol. 

### Developer community 

Longer-term — for Zebra and other Zcash tooling — having a robust and large developer community of outside contributors is vital to building a healthy and decentralized open protocol. The Rust community is a great standard-bearer on this front, but there are many open source communities that excel here and we'd do well to learn from them.

We need to support the broader open-source ecosystem, and work hard to make sure that Zcash is accessible to as many people as possible.

From a technical perspective, the zcashd codebase is exceptionally complicated, due to its history as a fork of an older Bitcoin implementation. Zebra is intended to make it easier for external developers to contribute, but there's work to be done on educating and welcoming more contributors to the fold.

## Where we go from here

Everyone in Zcash should be methodically and diligently working toward removing these barriers that prevent shielded adoption. 

**The truth is that Zcash could work as private digital cash for millions of people today if everyone focused on making the existing protocol better, by reducing the barriers for shielded adoption.**

The Foundation has supported numerous initiatives and grants to boost legitimate shielded usage based on addressing these gaps — including our Zbay and ZecWallet grants, Ledger wallet support for shielded addresses, shielded multisignature support, and last but not least, Zebra. 

We're making investments to  boost shielded adoption, and we aren't alone. Along with the  MGRC and ECC, we have a broad and diverse community to tackle these problems together. Let's grow Zcash.


