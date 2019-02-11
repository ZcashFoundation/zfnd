---
layout: post
title: "Partnering with KZen Networks to Enable Private Multisig"
excerpt: "KZen Networks is undertaking a research project funded by the Zcash Foundation."
categories: blog
tags: []
image:
  feature: 
date: 2019-02-11
author: sonya
---

[KZen Networks](https://www.kzencorp.com/) is undertaking a research project funded by the Zcash Foundation. “The goal of this endeavor,” KZen wrote [on the firm’s blog](LINK TK), “is to provide a cryptographic library to support threshold key generation and signing in Sapling — something that we believe will seriously improve the way Zcash and all its properties are supported in a wallet.”

KZen’s work will enable n-of-n multisig transactions using Sapling Zcash, _without_ requiring a consensus change. The library will be a stepping stone to more exotic multisig constructions, thereby improving the experience for Zcash users who want flexibility and security in storing their $ZEC privately. Users shouldn’t have to resort to transparent addresses — or less private cryptocurrencies — for their multisig needs.

In a Coin Center article, BitGo cofounder Ben Davenport explained [why multisig is a critical feature](https://coincenter.org/entry/what-is-multi-sig-and-what-can-it-do) for cryptocurrencies, especially to encourage adoption by businesses:

> Since anyone with access to the keys can move the money without leaving a trace, if multiple people have access to the keys [in the absence of multisig], there is no real way to achieve accountability or prevent insider theft. Bitcoin’s history is littered with insider thefts which are publicly claimed to be external hacks. The Bitcoin businesses which have successfully avoided theft have tightly controlled the number of people who have access to the keys. They have relied on the principals of the businesses to be the ultimate gatekeepers, as well as using physical safeguards and key-­splitting techniques to ensure a single person cannot transact on his own. But for larger businesses to embrace Bitcoin, it is not a tenable solution to require the CEO and CFO to be involved in every transaction. Organizations need to be able to define their own internal policies on who can transact, for how much, and with whose approval. 

Davenport continued:

> There are some immediate advantages that can be gained from using multi-­sig technology. First, we can completely eliminate single points of failure by ensuring that the keys for an address are generated and stored on completely separate devices. For instance, one key might be generated on the user’s laptop, while the other is generated on the phone, making it necessary to have both devices in order to transact. Malware which infects the laptop cannot steal any funds, because it does not have the key stored on the phone. Secondly, we can achieve redundancy. In the previous scenario, what happens if the user loses their phone?

> If a third key were kept offline in a vault, and a 2-of-3 scheme were used, then the user could tolerate losing either device, and still manage to recover his funds using the remaining device in conjunction with the offline key. Third, we can begin to address the access control problem.

Support for multisig transactions will level up the security available to Zcash users, and broaden the types of users who can safely take advantage of Zcash’s robust privacy while mitigating other threads to their funds.
