---
layout: post
title: "The New ZIP Process and Zcash Governance"
excerpt: "The future of Zcash protocol development."
categories: blog
tags: [governance]
image:
  feature: 
date: 2019-03-05
author: sonya
---

The Foundation has suggested [changes](https://github.com/zcash/zips/blob/a998182f185fe5e741ac8b2f8aa57d3d31e58c2f/zip-0000.rst) to the Zcash Improvement Proposal process, which will be critical for protocol development going forward. We want to explain our intent to the community, establish the importance of ZIPs for ongoing Zcash governance, and make the new procedures clear before finalization.

**Ideally, _all_ future consensus and upgrade changes will go through the ZIP process. It will constitute an open, standardized path for evaluating and deciding what goes into Zcash.**

The following details may be subject to further change. Feedback is more than welcome! Please share substantive thoughts by commenting on the [GitHub pull request](https://github.com/zcash/zips/pull/206). There is also a [Zcash Community Forum thread](https://forum.zcashcommunity.com/t/updated-zip-process-proposal/32750) for informal discussion. Lastly, feel free to contact the Foundation’s Executive Director by emailing josh@zfnd.org.

## What, Who, How… and Why

Governance fundamentally consists of three questions: What should we do, who gets to decide, and how are the deciders chosen and held accountable? A robust, active ZIP process answers these questions with respect to the Zcash protocol. The [document](https://github.com/zcash/zips/blob/a998182f185fe5e741ac8b2f8aa57d3d31e58c2f/zip-0000.rst) covers this thoroughly, but here are the most important passages:

> A Zcash Improvement Proposal (ZIP) is a design document providing information to the Zcash community, or describing a new feature for Zcash or its processes or environment. The ZIP should provide a concise technical specification of the feature and a rationale for the feature.

> We intend ZIPs to be the primary mechanism for proposing new features, for collecting community input on an issue, and for documenting the design decisions that have gone into Zcash. The author(s) of the ZIP (known as Champions in this document) are responsible for building consensus within the community and documenting dissenting opinions.

Further down:

> The current ZIP Editors are Daira Hopwood, representing the [Electric Coin Company, previously called the Zcash Company], and Josh Cincinnati, representing the Zcash Foundation. [...] The current design of the ZIP Process dictates that there are always at least two ZIP Editors: one from the [Electric Coin Company] and one from the Zcash Foundation. Additional Editors may be selected by consensus among the current Editors.

Foregrounding the ZIP process is a significant procedural change. Historically, the Electric Coin Company has handled the vast majority of Zcash protocol development (notwithstanding help from third-party open-source contributors). That is still largely the case, although the Foundation’s [node partnership with Parity Technologies](https://www.zfnd.org/blog/parity-partnership/) is a big step toward establishing a larger group of well-resourced development stakeholders.

The Electric Coin Company’s modus operandi was to write ZIPs after deciding internally which features would be included in its [Network Upgrade Pipeline](https://z.cash/blog/the-zcash-network-upgrade-pipeline/). That was a practical way to handle things at the time, but it is no longer sufficient as the Zcash ecosystem continues to expand and mature. In the future, the Network Upgrade Pipeline will persist, but it will be downstream of the ZIP process rather than the other way around.

As Electric Coin Company CTO Nathan Wilcox [wrote in December, 2018](https://z.cash/blog/the-zcash-network-upgrade-pipeline):

> The Network Upgrade Pipeline is an execution process, not a governance or evaluation process. It doesn’t define how decisions are made, although it does clarify roles for making “execution decisions,” such as if a proposed specification meets the criteria to begin implementation and design audits.

Alongside our joint rejuvenation of the ZIP process, the Electric Coin Company [plans to refine its NUP](https://forum.zcashcommunity.com/t/call-for-nu3-zips-and-network-upgrade-pipeline-process-changes/32749). Most notably:

> **All features to be considered for inclusion in a Network Upgrade must have an associated Draft-ZIP:** Starting in Network Upgrade 3, all goals that are under consideration for the next Network Upgrade must be documented in at least a Draft-ZIP. [...]

> **Network upgrade Draft-ZIPs must be complete two months before feature selection:** We received a great deal of feedback indicating that the community did not get a sufficient chance to respond to the proposed goals for Blossom, and that some requirements were added too late to be properly considered. The Company is now asking that ZIPs for all network upgrade changes are at least in draft form two months before feature selection; for NU3 this is the end of March 2019. This will give the Company that time to decide which of the ZIPs we can commit to implementing (possibly with help from the broader community!) during this network upgrade. This will also give the community a chance to provide feedback on the ZIPs up for consideration. ZIPs which aren’t ready to be submitted as a draft by the deadline can instead go into the next NUP, which starts six months later.

Currently, the Electric Coin Company is still free to choose which ZIPs are incorporated into `zcashd`, though they have committed to publishing their own feature requests as ZIPs. In the future, when there are multiple implementations, ZIPs proposed by the Electric Coin Company will go through the same process and face the same scrutiny as ZIPs proposed by the Foundation or any other entity or individual. In fact, the Company has worked with the Foundation to flesh out the proposed changes. We commend the organization’s willingness to relinquish its unilateral control over Zcash development in service of the community’s needs.

The Foundation’s independence is important; we do not and will never serve the Electric Coin Company. Our [mission](https://www.zfnd.org/about/#mission) is paramount. That said, we deeply appreciate the mutual productive relationship. Few startups prioritize their values as the Electric Coin Company has.

Zcash the software and Zcash the network have always been open for anyone to use, but Zcash protocol development has not been accessible to the same degree. The new ZIP process will allow current community members to increase their influence, while laying the groundwork for future teams and contributors to have a say in the direction of Zcash protocol development.
