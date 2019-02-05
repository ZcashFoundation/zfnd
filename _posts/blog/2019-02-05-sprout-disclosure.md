---
layout: post
title: "Concerning the Sprout Vulnerability CVE-2019-7167"
excerpt: "The Foundation comments on the recent disclosure by the Company"
categories: blog
tags: []
image:
  feature: 
date: 2019-02-05
author: acityinohio
---

*We strongly recommend you read the [disclosure in full from the Zcash Company](url_here) before reading this response.*

Yesterday the Foundation became aware of an inflation/counterfeiting bug that affected the Zcash Sprout shielded pool until the Sapling activation on October 28th, 2018. We commend the Zcash Company on the heroic effort they displayed in responsibly disclosing and fixing the bug in Sapling, and their [transparent and thorough report on the disclosure](url_here). They deserve praise for how they handled a very delicate situation. Counterfeiting --- more commonly called inflation --- bugs are not unique to Zcash, having appeared in [Monero](https://src.getmonero.org/2017/05/17/disclosure-of-a-major-bug-in-cryptonote-based-currencies.html) and [Bitcoin](https://bitcoincore.org/en/2018/09/20/notice/). The nature of any applied cryptographic system is that bugs are inevitable; what matters is how you report and mitigate them.

Like the Company, we believe the chance of an exploit on mainnet is vanishingly small, thanks in large part to their extensive mitigations. But based on our understanding of the exploit, we are concerned that it's non-zero (however small that may be). Unlike the inflation bugs in Bitcoin and Monero, the way Zcash's privacy pool works it's impossible to know if it's been exploited...**until Sprout addresses are deprecated.** Once deprecated, ostensibly all Sprout holders will have moved their ZEC into Sapling addresses and any Zcash user will be able to detect unintended inflation in the transparent addresses used as part of that transition. This brings new urgency to a privacy-preserving turnstile tool to help users transition from Sprout to Sapling, and it's one the Foundation would be happy to support in tandem with the Company, along with an accelerated deprecation schedule for Sprout.

Best case scenario: we accelerate the adoption of Sapling and prove without a doubt that an exploit didn't happen. Worst (and very unlikely) case: somehow the bug was exploited, which we detect as the Sprout pool empties and users transition to Sapling addresses. In this case, we will encourage users to follow the guidelines set by [the Company here.](https://z.cash/blog/defense-against-counterfeiting-in-shielded-pools/)

