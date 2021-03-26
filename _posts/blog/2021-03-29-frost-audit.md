---
layout: post
title: "The Zcash Foundation has Finished an Audit of FROST"
excerpt: "FROST Implementation Audit"
categories: blog
tags: [staff]
Date: 2021-03-29
author: chelseakomlo
---

The Zcash Foundation is pleased to announce our completion of an audit for our first implementation [FROST implementation](https://github.com/ZcashFoundation/redjubjub/blob/main/src/frost.rs). This implementation is a first step and does not yet include support for re-randomziation nor the DKG, but these will be features that we will add next (and will complete separate audits for each).

For this audit, we worked with JP Aumasson and Adrian Hamelink from the [Taurus Group](https://www.taurushq.com) and Omer Shlomovits from [ZenGo](https://www.zengo.com/), who have deep experience [evaluating the security](https://eprint.iacr.org/2020/1052) of multi-party signature schemes. We have finished implemented their recommended security measures, and are in the process of fixing
 up recommended usability recommendations now. We are happy to say that major security issues were found in our implementation.

The full audit findings can be found [here](). We will be releasing a first stable version of this implementation in the coming weeks. As said, we are currently implementing features for full compatibility with the Zcash protocol by finalizing the design of re-randomization in a threshold setting, and will also implement the DKG as specified in the [FROST paper](https://eprint.iacr.org/2020/852). We’ll keep the community updated on our progress as we go along.

