---
layout: post
title: "The Zcash Foundation has Finished an Audit of FROST"
excerpt: "FROST Implementation Audit"
categories: blog
tags: [frost]
Date: 2021-03-29
author: zfteam
---

The Zcash Foundation is pleased to announce our completion of an audit for our [FROST implementation](https://github.com/ZcashFoundation/redjubjub/blob/main/src/frost.rs). This implementation is a first step and does not yet include support for re-randomization nor the DKG, but these will be features that we will add next (and will complete separate audits for each).

For this audit, we worked with JP Aumasson and Adrian Hamelink from [Taurus](https://www.taurushq.com) and Omer Shlomovits from [ZenGo](https://www.zengo.com/), who have deep experience [evaluating the security](https://eprint.iacr.org/2020/1052) of multi-party signature schemes. We have finished implementing their recommended security measures, and they have signed off on our mitigations.
We are happy to say that no major security issues were found in our implementation.

The full audit findings can be found [here](https://github.com/ZcashFoundation/redjubjub/blob/main/zcash-frost-audit-report-20210323.pdf). We will be releasing a first stable version of this implementation in the coming weeks, along with mitigations for the usability recommendations as well. As said, we are currently implementing features for full compatibility with the Zcash protocol by finalizing the design of re-randomization in a threshold setting, and will also implement the DKG as specified in the [FROST paper](https://eprint.iacr.org/2020/852). We’ll keep the community updated on our progress as we go along.

