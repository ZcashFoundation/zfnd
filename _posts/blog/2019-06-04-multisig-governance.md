---
layout: post
title: "Zcash Governance: A Step Toward Decentralization"
excerpt: "Executive Director Josh Cincinnati discusses the balance of power in Zcash governance."
categories: blog
tags: [governance]
date: 2019-06-04
author: acityinohio
---

Executive Director Josh Cincinnati spoke about the “multisig model” of Zcash governance at [Devcon4](https://youtu.be/Bl8qdiJQ4Tc) in November, 2018, and the [MIT Bitcoin Expo](https://www.youtube.com/watch?v=ZRqrRU4iHs8) in March, 2019. The following blog post is loosely based on his presentations. For a shorter version, [review the slides](https://www.zfnd.org/resources/multisig-governance-slides.pdf).

## Governance in Practice

Cryptocurrency governance is hard to get right. It can drive success and innovation, or it can lead to existential failure.

Intractable disagreements have caused projects to implode or fracture, and communities have converged on choices with disastrous unintended consequences. (In fact, those dilemmas may correlate!) Even when a governance crisis can be settled eventually, there are heavy opportunity costs. For example, time spent arguing about what to do is also time spent losing momentum and goodwill.

Today, cryptocurrency governance usually boils down to negotiations between a handful of prominent stakeholders. Sometimes that involves collective self-advocacy by groups of users, but not always. A given project’s power dynamics become clear when you examine how the people and organizations involved go about collaborating, allocating resources, and resolving conflicts. Especially resolving conflicts!

A previous Zcash Foundation [blog post](https://www.zfnd.org/blog/new-zip-process/) put it like this: “Governance fundamentally consists of three questions: What should we do, who gets to decide, and how are the deciders chosen and held accountable?”

Those questions prompt further questions: Who is in charge of prioritizing and vetoing ideas? How do those decisions become concrete options, AKA runnable code, and how is the software spread to miners and other users? The answers are important.

Cryptocurrency governance is “ratified” on-chain, so to speak, but writing the software is inherently upstream of network consensus. (That said, projects across the space are experimenting with new on-chain governance mechanisms. I’ll be intrigued to see how they fare over the next few years.)

Governance processes should be designed to:

* strike the right balance between deliberation and action
* juggle the concerns of various stakeholders and user populations
* produce concrete plans or policies that will advance the community’s goals

All three of those properties are important, and [implementation details](https://www.zfnd.org/blog/new-zip-process/) will shape the results.

## 2-of-2 > 1-of-1

Effective governance depends on sound incentives and sound judgment — both individual and collective. Many cryptocurrency projects have started to formalize decision-making, including Zcash, in order to increase transparency and provide a clear avenue for participation.

As the Executive Director of the Zcash Foundation, it’s part of my job to help establish Zcash governance processes that encourage a robust, thriving ecosystem. At least one constraint is obvious: Long-term control of Zcash by any single entity would threaten the purpose and integrity of the project. (It would also conflict with the Foundation’s own [mission](https://www.zfnd.org/about/#mission).)

In my report on the Foundation’s [2018 progress and 2019 plans](https://www.zfnd.org/blog/foundation-in-2019/), I explained why and how the Zcash Foundation must counterbalance the Electric Coin Company’s power over the Zcash ecosystem. My concern is not that the Electric Coin Company _does_ subvert Zcash to serve its own interests; my concern is that the ECC would be able to do so.

The Founders’ Reward recipients who decided to pledge funds to the Zcash Foundation created a bimodal power distribution for Zcash. That is an effective dynamic in systems designed for gridlock — yes, [including the United States government](https://www.nytimes.com/1994/10/09/weekinreview/the-nation-gridlock-the-way-it-used-to-be.html). As an American, I’ll be the first to admit that we have political problems, but the law grinds slowly for a reason. Systems that can be changed suddenly or drastically are risky in multiple ways, and especially dangerous if a tyrant can gain control.

Like [Arjun Balaji](https://twitter.com/arjunblj?lang=en) has said, we’re trying to build protocols that will last for generations. Zcash and its ilk are meant to outlast all of us. That requires a long-term mindset. We need to protect against emergent behaviors that might be fine with the people you know working on the project — but imagine 50 years from now when you don’t know anyone involved.

What kind of social mores will keep the project healthy, and how can we codify those without delaying progress too much? Zcash multisig governance is one answer to those questions, and we’re currently exploring and iterating on how it ought to work. Ideally, over the next few years, Zcash the protocol will be defined by a multisig governance model, where 2-of-2 consent is required to modify the protocol or introduce new features.

To date, Zcash development decisions have been a black box, with occasional exceptions. Many of the decisions have fallen to the Electric Coin Company or ECC-driven processes alone. Granted, that setup was intentional. A startup, able to hire and build quickly, was a good fit for launching Zcash. The approach made sense for bootstrapping a new cryptocurrency.

However, we can’t accept a single point of failure indefinitely. Those of us who care about Zcash can’t allow one company to make unilateral decisions. That isn’t appropriate for any protocol intended to benefit the public at large.

It’s up to the Zcash Foundation, with the help of the Zcash community, to be the second party in the multisig model of Zcash governance. In the future, we hope there will be more! Bolt Labs, or Parity Technologies, or other businesses, or other nonprofits, or collectives of users, could be involved. The multisig model of Zcash governance is 2-of-2 right now, but it doesn’t have to stay that way forever.

## Then and Now

The Foundation has a friendly relationship with the Electric Coin Company, but our independence is becoming more critical, not less, as our influence over Zcash increases.

As you may know, Zcash emerged from a couple of [academic papers](http://zerocoin.org/talks_and_press). In 2015, that research formed the basis for a commercial startup, formerly known as the Zcash Company and now called the Electric Coin Company.

The cryptocurrency launched with a funding mechanism called the [Founders’ Reward](https://electriccoin.co/blog/funding/), meant to reward the inventors of Zcash (hence the name), incentivize their continued engagement, and pay for ongoing development. A handful of Founders’ Reward beneficiaries chose to pledge some of their Zcash to a nonprofit entity, the Zcash Foundation.

For a couple of years, that entity barely existed, and didn’t do much. But we [revved up](https://www.zfnd.org/blog/hello-world/) in [2017](https://www.zfnd.org/blog/welcome-josh/), disbursing a few exploratory grants and figuring out how to run a nonprofit. The Electric Coin Company did literally everything else.

During 2018 and early 2019, the Zcash Foundation expanded its capacity significantly, making efforts to improve preexisting programs and establish new ones. (We plan to [continue that trend](https://www.zfnd.org/blog/foundation-in-2019/), of course.)

Currently, the Electric Coin Company still handles the vast majority of protocol development. The team maintains `zcashd`, which is the only production-ready node implementation, and conducts larger-scale business development and marketing initiatives than the Foundation.

However, both the Electric Coin Company and the Zcash Foundation are building open-source reference wallets and libraries for Zcash. Strategic [partnerships](https://www.zfnd.org/tags/#partnerships) and technical hires have enabled the Foundation to begin making direct contributions to Zcash development, including a new consensus-compatible [node implementation](https://www.zfnd.org/blog/parity-partnership/) that will compete with `zcashd`, as well as speculative [cryptography research](https://www.zfnd.org/blog/henry-de-valence/).

## Institutional Incentives

What are the structural differences between the two organizations? Do they matter?

The Electric Coin Company is a for-profit startup that answers to its shareholders. There is nothing wrong with commercial businesses, certainly! But the _telos_ of that type of legal entity is different from the _telos_ of a mission-driven nonprofit.

As a 501(c)3 public charity, the Zcash Foundation is beholden to the [duty of care, duty of loyalty, and duty of obedience](https://www.councilofnonprofits.org/tools-resources/board-roles-and-responsibilities). Ultimately, the Board of the Foundation holds the Executive Director (me) accountable for advancing the Zcash Foundation’s goals.

Happily, the Electric Coin Company and the Zcash Foundation share the value of spreading technology that allows people to preserve their privacy. Both organizations primarily focus on improving the Zcash protocol and ecosystem.

Many cryptocurrency projects are based in Switzerland or Malta, with an organization there acting as the sole, central arbiter of protocol development. Startups are also common, both in Silicon Valley and elsewhere.

So why bother to have a United States nonprofit, when that choice imposes strict constraints? Because the constraints are a feature rather than a bug.

The restrictions and transparency requirements rest on long-standing legal tradition. For example, the Zcash Foundation’s conflict-of-interest policy is enshrined in our bylaws. We are following in the footsteps of many open-source software 501(c)(3)s, which have been around since before cryptocurrency was invented.

Eventually, the Foundation will have to fulfill the [public support test](https://www.501c3.org/understanding-the-501c3-public-support-test/):

> Public charities [...] are expected to have both diverse control and diverse funding. [...] As for funding sources, charities are required to have a broad base of public support, which is where the public support test comes in.

> The simplest definition of the IRS public support test states that at least 1/3 (33.3%) of donations must be given by donors who give less than 2% of the nonprofit’s overall receipts.  Exceptions include any gifts received from other _donative_ public charities and/or a government source, such as a state or federal grant.  For organizations that also get funds from sales of goods or services (this is called _program revenue_), such revenue counts toward the public support test also.

Although paths to fulfilling this legal requirement can be idiosyncratic, the idea is to have a long tail of financial supporters, rather than only relying on large donors. The expectation means that public charities cannot rely on a handful of wealthy individuals indefinitely; they need to cultivate a genuine constituency.

## Governance Levers

Let’s examine the practical game theory of Zcash governance.

One of the reasons for engaging Parity to build an alternative, consensus-compatible Zcash implementation is to create leverage for an intentional chainsplit, should that ever become necessary. If we have a network with lots of nodes that are running non-ECC software, that defends against unilateral control by the people who maintain the first implementation (or any given implementation).

For those of you who followed Bitcoin during the Segwit activation drama, it’s very similar to the situation with BIP 148 and the idea of a user-activated soft fork. That’s a powerful, powerful tool to have for governing your protocol. I will admit that there are certain tradeoffs in having multiple implementations, but I think the benefits are worth it.

The trademark agreement should act as the legal equivalent of the same kind of plausible threat. Right now, the Electric Coin Company has sole ownership of the Zcash trademark, but we’re negotiating for dual ownership or a licensing agreement, so that both the Electric Coin Company and the Zcash Foundation have to agree on what constitutes Zcash.

You can think of the alternative node as the realpolitik implementation of a plausible chainsplit, and the trademark agreement is the legal equivalent.

My hope is that none of these plausible threats will have to be used. But the fact that plausible threats can exist is a hedge against unpopular or solely self-interested decision-making about the Zcash protocol.

The Zcash Foundation and Electric Coin Company also have plenty of opportunities to work together. For example, the [Zcash Improvement Proposal process](https://www.zfnd.org/blog/new-zip-process/) now includes a Zcash Foundation editor (currently me, although someone else at the Foundation will assume that responsibility in the future) as well as an Electric Coin Company editor. The Electric Coin Company has made a commitment to use the ZIP process to get buy-in for development plans, alongside the Company’s own Network Upgrade Pipeline.

Lastly, the Zcash Foundation will continue experimenting with involving the community in governance. Most options are vulnerable to gaming and manipulation, so obviously we want to steer clear of those. Our [first process](https://www.zfnd.org/blog/governance-voting/) was overly top-down, but there are other methods that we’re looking into, like voting through the shielded Sapling pool, which would be interesting for advisory votes. I hope that once we work out a fair, functional system, we can incorporate it into the Zcash Foundation bylaws.

## Conclusion

We’re on the right path toward 2-of-2 multisig governance. But again, that’s not the final goal. Eventually, the Zcash Foundation and the Electric Coin Company should be joined by myriad stakeholders who contribute ZIPs and participate in evaluation. Obviously, in my view, Bitcoin is the gold standard there.

Ultimately, this setup for the Foundation and the Electric Coin Company is one of many governance experiments happening across the industry — and Zcash itself is one of many privacy experiments. I am grateful for the blooming of different projects with different governance models, not to mention the various technical approaches to privacy.

Governance is the biggest unsolved problem of the last, oh, 200,000 years. The conundrum is not unique to cryptocurrencies. We do have new possibilities, since so much can be automated and programmed in these new systems. But the more that we can learn from the traditional bureaucratic legal world, and from previous open-source projects, the better.
