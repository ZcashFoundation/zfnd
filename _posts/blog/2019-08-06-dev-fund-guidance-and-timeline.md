---
layout: post
title: "Zcash Foundation Guidance on Dev Fund Proposals"
excerpt: "Evaluating the path forward for Zcash."
categories: blog
tags: [governance]
date: 2019-08-06
author: zcashboard
---

Zcash community and broader cryptocurrency ecosystem, we write to you after numerous hours of debate about Zcash dev funds, the upgrade process, and cryptocurrency governance in general. We hope this post provides clarity on the Zcash Foundation's stance, our plans for evaluating potentially controversial Zcash upgrades, and where we're all going from here.

To be clear, throughout this document "dev fund" refers to ZEC distributed from block rewards for the express purpose of continuing work on Zcash.

## The TL;DR

The Foundation believes any compulsory dev fund for Zcash must include accountability requirements for the use of funds for every recipient organization. Moreover, such funds should not be used to directly enrich investors or founders.

We strongly prefer that any protocol-based dev fund be distributed to nonprofits and the Foundation cannot accept a fully mandatory fund that pays out even partially to a for-profit company. We encourage ECC to convert into a not-for-profit organization.

We have established a timeline for collecting community sentiment in between the due date for ZIP drafts, August 31, and the feature selection date of October 31. We hope to hear from any and all community members before the final decisions are made at the end of October.

## What, precisely, counts as Zcash?

In practice, Zcash is a network that consists of thousands of computers owned by independent persons and companies, all of them running instances of zcashd, open-source software that is maintained by the Electric Coin Company (also called ECC, and previously known colloquially as the Zcash Company).

From a legal perspective, the [Zcash trademark](https://electriccoin.co/trademark-policy/) is currently enforced, protected, and owned by ECC. As things stand today, ECC has the authority to decide what products and services can legally be labeled Zcash.

We expect both legal and practical changes to this authority. ECC and the Zcash Foundation are negotiating a *shared* trademark agreement. In addition, we hope to see wide usage of [Zebra (zebrad)](https://github.com/ZcashFoundation/zebra), the Foundation's independent, consensus-compatible node software.

We expect both Zebra and the trademark agreement to be in place long before NU4 is activated. Both will help the Zcash Foundation and Electric Coin Company have [more balanced roles](https://www.zfnd.org/blog/multisig-governance/) within the Zcash ecosystem.

Regardless of any trademark agreement between the Foundation and ECC, users are always free to fork the cryptocurrency or exit the ecosystem, although not necessarily with equal resources at their disposal. In either case, users cannot take the network effect with them — exchanges, services that integrate Zcash, stores that accept Zcash, etc. — unless they leave en masse.

Zcash *is* whatever the bulk of network users and miners want it to be, but the Foundation and the Company play an undeniable role in supporting that choice with software development and legal defense. We need to honor that role.

## Where the Foundation stands

Currently there are several potential ZIPs related to dev funding for NU4, all of which are listed in a [thread on the Zcash Community Forum](https://forum.zcashcommunity.com/t/future-of-zcash-dev-funding-high-signal-low-noise/34179). The Foundation stated on the forum in [late May](https://forum.zcashcommunity.com/t/the-future-of-zcash-in-the-year-2020/32372/193) that it would only support proposals that:

- don't rely on the Foundation being a single gatekeeper of funds
- don't change the upper bound of ZEC supply
- have some kind of opt in mechanism for choosing to disburse funds (from miners and/or users)

Those comments resulted from the Zcash Foundation's initial analysis, based on the information that was available about potential proposals at the time. (No concrete plans had been described or suggested when these comments were written.)

After significantly more deliberation, both internally (within the Foundation board and among its employees) and on the Zcash Community Forum, we're ready to share updated guidelines about what the Foundation will endorse in NU4 — both what we'll integrate into Zebra, and what we'll consider to be Zcash going forward (according to the as-yet-unsigned trademark agreement).

Here are the acceptable options, in order of the Foundation's preference:

1. Transition from the current Founder's Reward to a compulsory Zcash dev fund. For-profit entities would not be eligible recipients of the dev fund. Funds would be disbursed equally across recipient nonprofits, all required to adhere to transparency and accountability requirements.
2. Transition from the Founder's Reward to an opt-in Zcash dev fund, where miners choose to distribute the funds to recipient organizations, or burn the funds forever.
3. Allow the Founder's Reward to sunset at its current expiry period, without extension or creation of any new model.

None of these options make the Foundation the sole arbiter of Zcash development spending, and the total supply of ZEC would continue to *never* exceed 21 million. Many of the [current forum proposals](https://forum.zcashcommunity.com/t/future-of-zcash-dev-funding-high-signal-low-noise/34179) would fit the criteria above with small modifications.

### The problem with opting in

We still consider an opt-in, miner-driven dev fund to be acceptable. However, we have concluded that a "miners' choice" approach entails significant hazards that would be difficult to mitigate.

If most miners only have a short-term interest in Zcash, their incentive could be to burn ZEC every time, in order to decrease the available supply and (theoretically) raise the price via deflation. On the other hand, the effect would be diffused over all coinholders, not just the miner of each block.

Another opt-in approach might be user-driven, where those sending transactions across the Zcash network are able to make the "burn or distribute" choice. However, the technical design of such an approach continues to elude us, and presents a major engineering challenge; too risky to be a viable choice for now. Even a miner-driven approach adds some development complexity, although we believe it to be more manageable.

The Zcash Foundation board and executives realize that our current position has evolved from what was written on the forum two months ago. Since late May, discussions among board members, employees, and others have convinced us that "miners' choice" is not ideal. We believe that relying on miners' choice has a greater chance of endangering Zcash and the [Foundation's mission](https://www.zfnd.org/about/#mission).

### The need for accountability requirements

One goal of an opt-in, miner-driven fund is to use the Zcash protocol itself to enable reliable signaling, and ensure that funding recipients are held accountable. But it carries the potential risks listed above. However, feedback and transparency don't *have* to be integrated at the protocol level. Instead, they can be commitments made by the recipients of a compulsory dev fund.

We believe strongly in the notion of specific pre-commitments to accountability, for both the Foundation and any other organization that receives funds. More discussion needs to be had here, but at a bare minimum we suggest the following measures:

* Monthly public developer calls, detailing current technical roadmap and updates
* Quarterly tech roadmap reports and updates
* Quarterly financial reports, detailing spending levels/burn rate and cash/ZEC on hand
* A yearly, audited financial report akin to the Form 990 for US-based nonprofits
* Yearly reviews of organization performance, along the lines of our ["State of the Zcash Foundation" report](https://www.zfnd.org/blog/foundation-in-2019/)

Regardless of the exact measures, the Zcash Foundation is committed to evaluating each organization's commitment to the accountability requirements set forth by any compulsory dev fund. We equally commit to conducting our own yearly reviews of each recipient organization, to determine whether it has met or failed the precommited accountability requirements and to inform future funding allocation decisions.

### Why only nonprofits? What would this mean for the ECC?

Based on our discussions, the Zcash Foundation has established the position that **compulsory funds from protocol rewards should not fund for-profit companies**. (To be clear, an entity doesn't have to be a 501(c)(3) to qualify. Other nonprofit structures are acceptable too.)

At its most fundamental level, a for-profit company is beholden to its shareholders. Protocol-based development funds are meant to solve tragedies of the commons, in order to provide public goods for everyone. If a business claims that its only business model is a compulsory protocol reward, its investors could demand cost-cutting to extract maximum profit with minimal effort — particularly when other ecosystem participants are contributing to protocol development.

We are also sensitive to regulatory risk. We firmly believe that Zcash, as it currently exists, is not a security for purposes of either United States or international investor protection regulations. We believe this to be the case because of (a) the decentralized nature of the community of independent persons running the network software and (b) the inherent usefulness of Zcash as a means of making private peer-to-peer payments and as a robust long-term store of value.

Stocks and other traditional securities, by contrast, are sought primarily as investments rather than useful items. That investment expectation is reliant upon the essential entrepreneurial efforts of a third party. If a for-profit corporation was enshrined within the protocol as essential to the continued development of Zcash, and that corporation was foremost legally obliged to make profits for its shareholders, then that could weaken the argument that Zcash is not a security. That would existentially jeopardize the viability of this technology within the United States, or any other nation that imposes strict limitations on the issuance and trading of securities.

Apart from misaligned corporate incentives and regulatory risk, the other extreme hypothetical is a company that ignores its investors and puts all of its protocol-based revenue into a selfless product roadmap. Wouldn't that just be a nonprofit with less accountability?

Normally, a privately held for-profit is beholden to its shareholders and customers — the customers demonstrate their approval by purchasing products and services, thus providing revenue to the company, while the shareholders buy (or sell) stock to demonstrate their approval (or disapproval) of the company's long-term prospects.

These signals break down when a company's only business model is a compulsory protocol reward; there is no dynamic market mechanism regulating the company's revenue via purchasing decisions, and the shareholders might have the skewed incentives discussed above. For-profit organizations are not ideal when it comes to public accountability.

For all of those reasons, the Zcash Foundation considers it important only to support dev funds that disburse to nonprofit entities. However, **we don't want to be the only nonprofit that works on Zcash as a dev fund recipient**.

Despite being a for-profit company, the Electric Coin Company has already defined a [public-focused mission](https://electriccoin.co/about/) that would make any nonprofit proud: "Empower everyone with economic freedom and opportunity." ECC has also set an admirable standard for the cryptocurrency industry by practicing [radical transparency](https://electriccoin.co/blog/continued-funding-and-transparency/). The company has provided, and has committed to continuing to provide, a high level of public visibility into its operations — exceeding not only the requirements of a private company, but also most nonprofits.

If ECC is to accept community funds, we ask the company to reorganize as a nonprofit entity, thus formalizing its commitment to transparency and accountability. We think doing so would bolster public confidence, ultimately helping the ECC team continue its amazing work to build a privacy-focused protocol for the public good.

### The "no dev fund" option

Doing nothing is always an option.

It is crucial, however, that we all understand what that would mean in practice. Without a dev fund, there would not be two (or more) organizations directly supporting Zcash protocol development after the Founders' Reward runs out in 2020.

ECC would run out of money. Most likely, 95% of Zcash maintenance and innovation would fall to the Foundation. The organization would remain solvent for a couple of years, but around 2023 (potentially sooner) our endowment will run out. After that point, without significant donor support, we would have to operate at a skeletal capacity or dissolve.

Zcash would survive, as so many purely community-maintained cryptocurrencies manage to do, but it is doubtful that its full potential would be realized. Zero-knowledge cryptography is exceptionally cutting-edge, exceptionally esoteric, and exceptionally expensive to research and develop. It's simply not possible to meet the ambitious goal of private, digital cash by cloning and merging upstream projects like Bitcoin.

Zcash is not Bitcoin. There are numerous differences between Bitcoin and Zcash, but the germane one is that unlike Bitcoin, Zcash does not have a widely dispersed set of wealthy, generous, early-adopter benefactors who are willing to fund its open-source protocol development. We can reasonably assume that Bitcoin was a special case with regards to its initial distribution and the community's ability to self-fund.

Younger projects may never be able to recreate Bitcoin's starting conditions. The Zcash Foundation team will do our best to support the Zcash protocol without a dev fund, but we realize that such a future will slow down the cryptocurrency, and thus the spread of its privacy benefits.

### Various levels of funding and the Zcash Foundation

In response to existing dev-funding proposals, Sarang Noether of Monero Research Labs introduced critical questions [on the Zcash Community Forum](https://forum.zcashcommunity.com/t/lack-of-information-about-future-funding/34267/9). He asked the Foundation to outline the operational consequences of different funding scenarios. The Foundation outlined our 2019 budget and spending activities in the ["State of the Zcash Foundation" post mentioned earlier](https://www.zfnd.org/blog/foundation-in-2019/), and we'd like to provide a similar level of guidance about our budget at various levels of prospective spending.

In 2020, we expect the Foundation to have 10 full-time staff, half or more being engineers or researchers. Zcon costs should stay relatively flat, but we'll likely compensate for our increased internal capacity by combining and reducing the external grant and research funding targets. Other expenses (a catch-all that includes logistics, operations, travel, and overhead) will rise proportionally to the size of our organization.

We expect to spend roughly **$3.7mm** a year, with the largest cost being **$2mm** for wages. With our current spending for 2019, and our assets as they are today, the Zcash Foundation could operate at this level until 2023. At that point we'd need a donation pipeline to continue operating without a dev fund.

With this budget, we would maintain and improve Zebra, contribute to upstream cryptography and privacy projects, run Zcon, and fund third-party projects and initiatives through ZF Grants.

If our budget was **$4.7mm** a year, we'd aim to hire five more people, including four more technical personnel, with at least one or two focused on mobile or front-end experience, to help with deeper iOS and Android Zebra integrations. The non-technical hire would focus on running our ZF Grants.

If our budget was **$5.7mm** a year, we would likely disburse more funds to grantees, spend money on more security auditing for Zebra and third-party open-source Zcash projects, and spend more on speculative research contracts (like our [FPGA project](https://www.zfnd.org/blog/fpga-acceleration-project/) this year).

If our budget was **$6.7mm** a year, we would likely spend more resources on events beyond Zcon, engage in broader education work, hoping to build a long-tail of protocol contributors outside the Electric Coin Company/Foundation, and do even more advocacy work for Zcash and privacy in general (where not limited by our nonprofit status).

Anything above **^6.7mm** per year would be put toward our endowment.

If a dev fund granted 10% of the next block reward period to the Foundation, we'd receive 625,000 ZEC over four years, or 156,250 ZEC per year. At $50 per ZEC, that would be equivalent to $7.8mm per year (the price of ZEC is volatile, but we think $50 is a reasonable baseline).

With a dev fund, we wouldn't use our current endowment to fund continuing operations, saving it instead for future operations — or potentially staking, if Zcash migrates to proof of stake.

At the low end, 5% of the block reward (at $50 ZEC) would enable our baseline budget, while 10% would enlarge our likely spend and reasonable margin for ZEC volatility.

## How the Foundation will select a particular proposal

### Timelines

Our timeline for selecting proposals is still informed by the ECC's Network Upgrade Pipeline. Here are the relevant NU4 deadlines:

- **ZIP draft submission deadline — Aug 31, 2019**
- **Feature selection done — October 31, 2019**
- Testnet beta code release — March 31, 2020
- Testnet activation — May 31, 2020
- Mainnet activation — October 2020

Current and future proposals will continue to be debated on the Zcash Community Forum until **advocates open pull requests in the [ZIP repo](https://github.com/zcash/zips) by August 31**.

For ZIPs that the Foundation deems controversial (which we assume will include any proposal related to dev funds), we will conduct three different mechanisms for collecting community sentiment, purely in the form of "yay or nay" polls on individual ZIPs. These and other methods were brainstormed during a governance workshop at Zcon1.

### Reviving the Community Advisory Panel

We will revive last year's [Community Advisory Panel](https://www.zfnd.org/blog/governance-results/) and request old members to both:

* invite one new member of their choosing
* vote on the proposals (once they have been submitted as ZIPs).

The polls will **open September 3 and be due September 17.**

### Miner signaling

We will invite mining pools to signal their support of a given proposal using the coinbase text of blocks collected **between September 3 and September 17.**

### Forum sentiment

We will open a forum post to collect votes **between September 3 and September 17.** We will only accept votes from forum members that have accounts created before March 2019, as a minor attempt to prevent gaming.

### Sentiment summary

By September 24, the Foundation will publish a data summary for the general public. While we don't intend to formally analyze sentiment beyond the three methods described, the Foundation is happy to consider other forms of community feedback collected by other parties during the same two-week period. We will include such data in our summary if it is valuable and was collected in good faith.

The summary will serve as guidance to the Foundation's board (and hopefully others) in supporting a specific proposal, but it is not binding. Your feedback and insights are crucial, but the Foundation is ultimately accountable to its mission, as determined by the board.

### Final decision

No later than October 15, the Foundation will publicly state its support for qualifying NU4 ZIPs, along with an explanation if our decisions diverge from the community sentiment that we've collected. If there is split with ECC, we will seek to reconcile it before October 31, or we'll follow the stipulations in the trademark agreement (if it is signed by then).

The full timeline for gathering community sentiment, and Zcash Foundation decisions, is as follows:

- August 2019
  - Continue discussion and proposal submission on the forums
  - Re-activate the Community Advisory Panel
- August 31st, 2019
  - **ZIP draft submissions are due** (PRs open)
- September 3rd, 2019
  - Polling about ZIPs begins via Community Advisory Panel, miners, and forum users
- September 17th, 2019
  - Polling period ends
- No later than September 24th, 2019
  - Foundation publishes a summary of the poll results
- No later than October 15th, 2019
  - Foundation's decision on which upgrades to support alongside rationale
- Late October 2019
  - If divergent, attempt reconciliation with ECC on upgrade path
- October 31st, 2019
  - Feature selection for NU4 locked in

## Reflecting on Promises Again

When the Ycash fork was announced, the Foundation's executive director Josh Cincinnati wrote the following:

> Permanence of Promises and Promises of Permanence
>
> One final thought for the community's consideration.
> Now is a good moment to reflect on the permanence of promises, and the promise of permanence. This fork is motivated by @hloo's view that promises have been broken, and are at risk of being broken again in the future. What if promises about Zcash or Ycash must be broken in the future to ensure their survival? Where do we draw the line?
>
> My view is that if there's a technical or economic reason to break a promise, the onus is on the proposer to explain why it's worth it, and to cultivate broad, overwhelming consensus as best as they can.

All of this dev fund discussion comes back to this point. This outline is the Foundation's best effort at both collecting that consensus and providing guidance on how such a promise can be minimally broken to ensure the survival of a protocol that provides robust privacy in internet payments for all. It was a hard thing for us to write, and it will be a hard journey for the Zcash community to navigate. But we must try, not just for our cryptocurrency niche, but for everyone who wants a future where private, immutable payments are the norm.
