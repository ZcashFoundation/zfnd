---
layout: post
title: "Target Metrics and Key Performance Indicators for the MGRC"
excerpt: "In accordance to ZIP 1014 "
categories: blog
tags:
date: 2020-12-01
author: amiller
---

This post aims to set out some initial ideas and guiding thoughts for KPIs that both the MGRC and ZF could broadly use. [ZIP 1014](https://zips.z.cash/zip-1014) requires us (the Zcash Foundation) to develop key performance indicators (KPIs) to support the MGRC and help focus its priorities and expectations of it. (This is written as "SHALL strive to" in ZIP 1014, which is odd in terms of RFC-alese, since SHALL is binding but the "strive to" seems to make it more like a SHOULD. But I digress). There's a good discussion to have about whether we should be the sole keepers of such KPIs or if this is something the MGRC or some other part of the community should provide. In any case we think starting this discussion and providing a minimum of KPIs is an important way the ZF can contribute. We have already been working at identifying performance goals for our own programs, such as Zebra and our other (non-MGRC) grants, so this is a good opportunity to continue. Also besides "defining," KPIs, we can likely help in conducting measurement and data collection.

Coming up with metrics is tricky but important. All of us participating in the Zcash ecosystem would likely agree in broad strokes about tasks that are likely to be helpful for Zcash --- in a nutshell, "Shielded adoption" is king --- although we disagree on the relative prioritization (which is why the MGRC is tasked with judging this). Anything that makes Zcash more useful as a privacy-preserving financial infrastructure for public use falls in line with this. But metrics and KPIs will be especially important when it comes to evaluating the relative success of individual programs and deciding how and when to pivot or reallocate.

It's inherently difficult to come up with metrics for any project because of the gap between what we want to achieve versus what we can quantify and measure. It's well known It's common to overfit and optimize for metrics, even well designed ones. Cryptocurrency is especially difficult because we often aim to consider incentivized or malicious behavior. Even among cryptocurrencies, it may be even more difficult in Zcash since data collection efforts can easily work against the privacy-oriented goals in Zcash (this is something that Tor Project for example has grappled with and we can learn from).

### Quantitative wishlist
To get started, here are a few quantitative goals that are desirable (all of them can be seen as forms of "shielded adoption"), but may not be directly quantifiable. Think of these like a wishlist for KPIs, that the KPIs we end up with may indirectly measure.
* Increased shielded transaction volume in Zcash. We're making public financial infrastructure to better society, so usage matters. Naturally, this is impossible to measure directly since shielded transactions are shielded. :zebrashades:
* Increased diversity of usage (usages from different regions/languages). Reaching a broader audience around the world improves our strength through decentralization and opens up additional opportunities for development and participation.
* Better public awareness of how to get the most effective privacy benefits. This includes not just using shielded transactions, but using them effectively, not just a quick trip and back from t-pool.

#### Quantities that we may be able to measure:
* Number of shielded transactions
We can count the number of shielded transactions Z2Z, Z2T, T2Z. For transaction volume, we can only directly track Z2T and T2Z. Both the shielded totals as well as the percentage of shielded vs transparent may be relevant to track. 
A challenge is that shielded transactions may be gameable. It isn't hard to spam the blockchain full of shielded transactions, even for a very low cost when the fees are low.
* Number of users (of Zebra, ZcashD, or wallets?)
We could aim to count the distinct users of Zcashd, Zebrad, or wallets. It's not possible to separate our individual users who run multiple nodes in a cloud. While we can measure the number of full nodes that accept incoming connections, it's more difficult to count the number of clients. 
For services that provide services, we could ask for their help in collecting tallies of the number of distinct users.
* Nodes / services running (from network measurements)
* Software downloads
Software downloads is easy to track and to break down by reasons, widely used by other software projects (like mobile apps) and is related to number of users.
* Social media / blogs etc, public communication from others
* Results of experiments/surveys geared towards ease of use (see below).

**Keeping it simple.** Our current thinking is that for MGRC as a whole, focusing on just the number of shielded transactions & percentage of shielded transactions may be a good enough KPIs to focus on. The others are complementary but may be helpful in more fine grained discussion of projects, since it will likely be challenging to determine what portion of success may be attributed to which projects.

**Flexibility.**  Although a focus on shielded adoption KPIs can be a good way to determine a grant project is working well, it doesn't mean that the only worthwhile projects target these KPIs. We imagine that the MGRC may accept flexible narrative explanations to account for projects it finds valuable that don't fit into these. The SHOULD language of ZIP-1014 leaves room for this.

**Why leave price out?** We are (perhaps conspicuously) leaving price out of our metrics. Although price is easy to quantify, we'd expect it to correlate with others. One reason why is that price is not directly related to how useful it is --- for example using Zcash for payments, exchanging between another currency and Zcash in between --- does not matter to the price. It is also potential to be affected by opinions or actions of large players in the market, which we can't predict or account for.

Here are a couple of ideas of measurement activities we could carry out:
**Measurement Proposal 1**: Building up network measurement capabilities to inform KPIs related to software usage.
    One of the difficulties is in measuring how much *usage* occurs, and where such usage occurs, because it's by nature privacy preserving. This proposal is to take ideas from Tor Metrics. TTP frequently runs measurement campaigns that provide privacy preserving information about Tor usage. For example, it involves collecting peer information but sanitizing it to just the country level, no finer grained than that. We have overlap & connections to Tor Project we could use to get ideas on how to do this. We could include software built-in to Zebra & encourage similar features added to zcashd https://metrics.torproject.org/

We previously had a dashboard created by Jason Davies we may be able to revive. It would be great to have a dashboard for nodes, shielded transactions software and downloads for regions.

**Measurement Proposal 2**: Mark and recapture experiments for Z2Z.
I've been brainstorming an idea about a "Mark and Recapture" campaign that might solve a couple of goals at once, including giving us something to measure about how usable Z2Z transactions & software are, might also improve usage/training goals of z2z transactions (like the earn campaign but not tied to an exchange). In a nutshell we'd give out small amounts of Zcash with instructions to perform a z2z transaction (say, to one of several charities w/ a view key) and get a small reward for doing so. As a complementary method, we could send voluntary/anonymous surveys to users who’ve signed up to collect additional info, such as which wallets they have used.
