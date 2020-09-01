---
layout: post
title: "Zcash Network Privacy: An Assessment of Current State and Future Work."
excerpt: "We at the Foundation assess the network privacy for users of Zcash
and future improvements."
categories: blog
tags: [privacy]
date: 2020-09-01
author: chelseakomlo
---

Network privacy is a critical component to protecting users' privacy online,
even when encryption protocols protect against eavesdropping adversaries from
learning the content of network traffic directly.
Similarly, while blockchains like Zcash use privacy-preserving cryptographic
protocols to hide identifiable information about user identities and
transaction information persisted to the blockchain, additional information
such as a user's IP address can still leak to adversaries actively observing
the network as these transactions are taking place and allow for
deanonymization attacks.

As a first step towards improving Zcash network privacy, we at the Zcash
Foudnation have created a more
comprehensive analysis of the current state of network privacy in Zcash,
identified possible attack vectors and adversaries,
and clarified where identifiable information about Zcash users can be leaked
even when shielded transactions are used.
Within this analysis, we classify threats that are of
top-level priority, threats we hope to address in the near future, and threats
that we consider to be out of scope. Finally, we consider a range of network
privacy mechanisms and assess their effectiveness against mitigating these
threats.

In writing this analysis, we have already had many helpful discussions and
feedback from members of the Zcash community.
We hope to continue to hear from more Zcash community members about potential
adversaries we missed or attack vectors that we did not consider. More eyes
improves the security of any product, and Zcash is no different. We look forward to
hearing your thoughts and questions, and to implementing these network privacy
improvements in Zebra as next steps.

Our complete analysis and findings can be found
[here](https://github.com/ZcashFoundation/tech-reports/blob/master/network-privacy-assessment/network-privacy.pdf).



