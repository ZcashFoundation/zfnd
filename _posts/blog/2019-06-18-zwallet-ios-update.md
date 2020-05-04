---
layout: post
title: "Z Wallet iOS Effort Discontinued"
excerpt: "The Zcash Foundation and XMR Systems have released the source code to the WIP project."
categories: blog
tags: [wallets, partnerships, development]
image: zwallet-ios-image1.png
date: 2019-06-18
author: sonya
---

In November, 2018, the Zcash Foundation [announced](https://www.zfnd.org/blog/wallet-agreements/) that XMR Systems, known for its iOS app [X Wallet](https://xwallet.tech/), would be developing an iOS reference wallet for Zcash (tentatively titled Z Wallet). Our priorities for the new app: Shielded-first, open-source, and user-friendly.

We’re ready to share the results of that partnership.

XMR Systems has designed a simple, intuitive, and beautiful user interface. It was implemented using Apple’s native Swift programming language, to ensure a fantastic user experience.

Unfortunately, one key piece of this wallet is missing: A specialized library for constructing shielded transactions directly on your iOS device. That library isn’t ready for production yet.

We could have compromised the quality of the wallet, but that would have meant sacrificing the accessibility and privacy properties that made the project so exciting and special.

Instead, the Zcash Foundation and XMR Systems have jointly decided to close the project. Since the release of Sapling, Zcash has made tremendous efficiency improvements, but mobile wallets remain a unique challenge.

The Zcash Foundation and XMR Systems are publicly releasing the Swift code for Z Wallet, as well as the user interface assets. The code is available in the [GitHub repo](https://github.com/ZcashFoundation/zwallet-ios) under the MIT license. We hope that it will help future Zcash wallet developers.

![Zwallet Screenshot 1](/images/zwallet-ios-image1.png)

The Zcash Foundation recognizes the importance of first-class mobile options for Zcash users, and intends to undertake or fund iOS wallet development again in the future.
