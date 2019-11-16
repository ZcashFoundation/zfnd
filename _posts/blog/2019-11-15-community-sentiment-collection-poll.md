---
layout: post
title: "Zcash Dev Fund Community Sentiment Collection Poll"
excerpt: "Proposals for the future of Zcash development funding."
categories: blog
tags: [governance]
date: 2019-11-15
author: zcashboard
---

Today, the Foundation begins [community sentiment collection](https://www.zfnd.org/blog/updated-community-sentiment-timeline/) regarding the 13 active Zcash Improvement Proposals that address development funding. This blog post contains a finalized poll of those ZIPs, along with relevant links. You can [find more details on the Zcash Community Forum](https://forum.zcashcommunity.com/t/future-of-zcash-dev-funding-high-signal-low-noise/34179).

## How to vote

**With respect to each ZIP, you are asked this question: “Do you approve of the plan specified in this proposal?” The answer options are *yes*, *no*, or *abstain*.** You can vote yes (or no, or abstain) on multiple proposals.

If you are an advisory panel member, you will receive [Helios](http://heliosvoting.org) vote invitation via email.

If you are a Zcash Community Forum member with an account created before March, 2019, [here is the polling thread](https://forum.zcashcommunity.com/t/community-sentiment-collection-poll-on-nu4-dev-fund-zips/35439).

### Instructions for Zcash miners

We ask that miners add an OP_RETURN output to their Zcash coinbase transactions between **Saturday, November 16** and **Saturday, November 30** (we'll consult the timestamps in the block header). The OP_RETURN should contains votes encoded in ASCII as below:

`for each [proposal] { [proposal number] + [y for approve, n for disapprove, a for abstain]}`

This is better illustrated with an example. Since there are 13 final polling questions, a voting miner could add a single OP_RETURN output in their coinbase transaction. Here is a random example ballot encoded in ASCII:

`1Y2Y3N4N5Y6A7A8N9Y10N11N12Y13Y`

Which would correspond to:

* Proposal 1: Approve
* Proposal 2: Approve
* Proposal 3: Disapprove
* Proposal 4: Disapprove
* Proposal 5: Approve
* Proposal 6: Abstain
* Proposal 7: Abstain
* Proposal 8: Disapprove
* Proposal 9: Approve
* Proposal 10: Disapprove
* Proposal 11: Approve
* Proposal 12: Approve
* Proposal 13: Approve

Miners with questions about the process are welcome to email [contact@zfnd.org](mailto:contact@zfnd.org).

## Eligible ZIPs

The ZIPs are listed in chronological order, based on when each was initially posted on the Zcash Community Forum. Titles for each proposal were written by the respective authors.

We have provided high-level summaries of each proposal ([as requested](https://forum.zcashcommunity.com/t/a-grand-compromise-synthesis-zip-proposal/34812/69)). **Please do not view these summaries as replacements for the full proposals themselves. Each proposal contains nuances that should be considered when casting your vote.**

### [Proposal 1: “Keep the block distribution as initaly defined. 90% to miners”](https://forum.zcashcommunity.com/t/final-zip-proposal-keep-the-block-distribution-as-initaly-defined-90-to-miners/33843)

* Total percentage of block rewards allocated to dev fund: **0%**
* Mandated dev fund duration: **0 years**
* Percentage of block rewards to ECC: **0%**
* Percentage of block rewards to ZF: **0%**
* Percentage of block rewards to other developers: **0%**
* Requires new accountability mechanisms for ECC and/or ZF: **No**
* Requires creation of a new entity to steward some or all funds: **No**
* Requires changes to ZF board: **No**

### [Proposal 2: “A genuine opt-in protocol level, development donation option”](https://forum.zcashcommunity.com/t/final-zip-proposal-genuine-protocol-opt-in-out-donation-feature-updated-02-sept/33846)

* Total percentage of block rewards allocated to dev fund: **0% default; more possible via donation**
* Mandated dev fund duration: **0 years; donations possible in perpetuity**
* Percentage of block rewards to ECC: **0% default; more possible via donation**
* Percentage of block rewards to ZF: **0% default; more possible via donation**
* Percentage of block rewards to other developers: **0% default; more possible via donation**
* Requires new accountability mechanisms for ECC and/or ZF: **No**
* Requires creation of a new entity to steward some or all funds: **No**
* Requires changes to ZF board: **No**

### [Proposal 3: “20% split between the ECC and the Foundation”](https://forum.zcashcommunity.com/t/dev-fund-proposal-20-split-between-the-ecc-and-the-foundation/33862)

* Total percentage of block rewards allocated to dev fund: **20%**
* Mandated dev fund duration: **4 years minimum**
* Percentage of block rewards to ECC: **10%**
* Percentage of block rewards to ZF: **10%**
* Percentage of block rewards to other developers: **0%**
* Requires new accountability mechanisms for ECC and/or ZF: **Yes**
* Requires creation of a new entity to steward some or all funds: **Yes after year 4 (voting entity)**
* Requires changes to ZF board: **No**

### [Proposal 4: “20% to any combination of ECC, Zfnd, Parity, or ‘burn’”](https://forum.zcashcommunity.com/t/dev-fund-proposal-miner-directed-dev-fund-was-20-to-any-combination-of-ecc-zfnd-parity-or-burn/33864)

* Total percentage of block rewards allocated to dev fund: **20% maximum**
* Mandated dev fund duration: **4 years**
* Percentage of block rewards to ECC: **20% maximum, based on miner signaling**
* Percentage of block rewards to ZF: **20% maximum, based on miner signaling**
* Percentage of block rewards to other developers: **20% maximum, based on miner signaling**
* Requires new accountability mechanisms for ECC and/or ZF: **No**
* Requires creation of a new entity to steward some or all funds: **No**
* Requires changes to ZF board: **No**


### [Proposal 5: “ZCFS (Zcash Community Funding System”)](https://forum.zcashcommunity.com/t/zip-proposal-zcfs-zcash-community-funding-system/33898)

* Total percentage of block rewards allocated to dev fund: **0%**
* Mandated dev fund duration: **0 years**
* Percentage of block rewards to ECC: **0%; more possible via donation**
* Percentage of block rewards to ZF: **0%; more possible via donation**
* Percentage of block rewards to other developers: **0%; more possible via donation**
* Requires new accountability mechanisms for ECC and/or ZF: **No**
* Requires creation of a new entity to steward some or all funds: **No**
* Requires changes to ZF board: **No**

### [Proposal 6: “Blocktown Development Fund Proposal: 10% to a 2-of-3 multisig with community involved Third Entity”](https://forum.zcashcommunity.com/t/blocktown-development-fund-proposal-10-to-a-2-of-3-multisig-with-community-involved-third-entity/34782)

* Total percentage of block rewards allocated to dev fund: **10%**
* Mandated dev fund duration: **4 years with the option to extend**
* Percentage of block rewards to ECC: **Undetermined, contingent on 2-of-3 agreement**
* Percentage of block rewards to ZF: **Undetermined, contingent on 2-of-3 agreement**
* Percentage of block rewards to other developers: **Undetermined, contingent on 2-of-3 agreement**
* Requires new accountability mechanisms for ECC and/or ZF: **Yes**
* Requires creation of a new entity to steward some or all funds: **Yes**
* Requires changes to ZF board: **No**

### [Proposal 7: “Dev Fund Supplemental Proposal: enforce devfund commitments with legal charter”](https://forum.zcashcommunity.com/t/dev-fund-supplemental-proposal-enforce-devfund-commitments-with-legal-charter/34709)

*This ZIP addresses legal requirements for disbursement and does not specify other aspects of funding distribution.*

### [Proposal 8: “Kek’s proposal: fund ECC for 2 more years”](https://forum.zcashcommunity.com/t/kek-s-proposal-fund-ecc-for-2-more-years/34778)

* Total percentage of block rewards allocated to dev fund: **20%**
* Mandated dev fund duration: **2 years**
* Percentage of block rewards to ECC: **20%**
* Percentage of block rewards to ZF: **0%**
* Percentage of block rewards to other developers: **0%**
* Requires new accountability mechanisms for ECC and/or ZF: **No**
* Requires creation of a new entity to steward some or all funds: **No**
* Requires changes to ZF board: **No**

### [Proposal 9: “Dev Fund Strategic Council Approach”](https://forum.zcashcommunity.com/t/dev-fund-proposal-5-entity-strategic-council-approach/34801)

* Total percentage of block rewards allocated to dev fund: **20%**
* Mandated dev fund duration: **4 years**
* Percentage of block rewards to ECC: **Undetermined, contingent on 5-person Strategic Council**
* Percentage of block rewards to ZF: **Undetermined, contingent on 5-person Strategic Council**
* Percentage of block rewards to other developers: **Undetermined, contingent on 5-person Strategic Council**
* Requires new accountability mechanisms for ECC and/or ZF: **Yes**
* Requires creation of a new entity to steward some or all funds: **Yes**
* Requires changes to ZF board: **No**

### [Proposal 10: “A Grand Compromise/Synthesis ZIP Proposal”](https://forum.zcashcommunity.com/t/a-grand-compromise-synthesis-zip-proposal/34812)

* Total percentage of block rewards allocated to dev fund: **20%**
* Mandated dev fund duration: **4 years**
* Percentage of block rewards to ECC: **30%**
* Percentage of block rewards to ZF: **30%**
* Percentage of block rewards to other developers: **40%**
* Requires new accountability mechanisms for ECC and/or ZF: **Yes**
* Requires creation of a new entity to steward some or all funds: **Yes**
* Requires changes to ZF board: **No**

### [Proposal 11: “Decentralizing the Dev Fee”](https://forum.zcashcommunity.com/t/decentralizing-the-dev-fee/35252)

* Total percentage of block rewards allocated to dev fund: **20%**
* Mandated dev fund duration: **4 years**
* Percentage of block rewards to ECC: **35% if Principal Developer**
* Percentage of block rewards to ZF: **25%, capped at $500k per month**
* Percentage of block rewards to other developers: **40%**
* Requires new accountability mechanisms for ECC and/or ZF: **Yes**
* Requires creation of a new entity to steward some or all funds: **No**
* Requires changes to ZF board: **Yes**

### [Proposal 12: “Dev Fund Proposal: Dev Fund to ECC + Zfnd + Major Grants”](https://forum.zcashcommunity.com/t/dev-fund-proposal-dev-fund-to-ecc-zfnd-major-grants/35364)

* Total percentage of block rewards allocated to dev fund: **20%**
* Mandated dev fund duration: **4 years**
* Percentage of block rewards to ECC: **35%, capped at $700k per month**
* Percentage of block rewards to ZF: **25%, capped at $700k per month**
* Percentage of block rewards to other developers: **40%, capped at $700k per month; the funds are allotted to ECC if there are no other viable candidates**
* Requires new accountability mechanisms for ECC and/or ZF: **Yes**
* Requires creation of a new entity to steward some or all funds: **No**
* Requires changes to ZF board: **Yes**

### [Proposal 13: “Keep It Simple, Zcashers (KISZ): 10% to ECC, 10% to Zfnd”](https://forum.zcashcommunity.com/t/zip-keep-it-simple-zcashers-kisz-10-to-ecc-10-to-zfnd/35425)

* Total percentage of block rewards allocated to dev fund: **20%**
* Mandated dev fund duration: **4 years**
* Percentage of block rewards to ECC: **10%**
* Percentage of block rewards to ZF: **10%**
* Percentage of block rewards to other developers: **0%**
* Requires new accountability mechanisms for ECC and/or ZF: **No**
* Requires creation of a new entity to steward some or all funds: **No**
* Requires changes to ZF board: **No**

## Timeline recap

Polling will last from **November 16th** until **November 30th**. No later than **Tuesday, December 3rd,** the Foundation will post its summary of the results. No later than **Friday, December 6th,** the Zcash Foundation board will publish analysis on which upgrades we can support, based on sentiment and board discussion. After that, if the Foundation’s guidance diverges from ECC’s position, we will meet to reconcile. After reconciliation, if further ZIP specification or updates are needed, we will consult with authors/ECC and (if necessary) engage in another round of sentiment analysis.

## Thanks to the proposal authors and community

We are deeply grateful for the community’s engagement with this process, and for the authors’ meticulous and thoughtful contributions. We are excited to begin the sentiment collection and look forward to sharing the results.
