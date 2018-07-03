---
layout: post
title: "Zcash Foundation Governance Process Results"
excerpt: "How the decisions of the Community Governance Panel will shape the Foundation's strategy going forward."
categories: blog
tags: [governance]
image:
  feature: zcashfoundation.github.io/images/sutirta-budiman-585560-unsplash (1).jpg
date: 2018-07-03
author: zcashboard
---
Throughout June, the Zcash Foundation carried out an experimental governance process. We first announced it [back in April](https://z.cash.foundation//blog/zcon0-and-community-governance/) and recently [shared the results](https://www.youtube.com/watch?v=m8gv8rvcV08&list=PL40dyJ0UYTLK507afWUMgzUYeh-i4qQWS&index=19) at Zcon0 on June 28.

The Foundation's governance system is outlined on the [Elections page](https://github.com/ZcashFoundation/Elections#the-community-governance-panel) that Chairman Andrew Miller and Executive Director Josh Cincinnati wrote:

> Our approach — which we anticipate will evolve over time — will be to appoint a “Community Governance Panel,” consisting of a broad collection of people who have contributed in some way to the Zcash community via some public & visible presence. The challenges with this approach:

> * Can we make it broad representation (e.g. not all US?)
> * Not stacked with insiders to the Zcash Foundation directors, or to the Zcash Company
> * The selection outcome is transparent.

> The Foundation will be spearheading the selection of the panel and proactively reaching out to community members; the main criteria for selection will be that prospective panel members had some demonstrable public presence and/or contributed in some way to the ecosystem; both would work well in a system with a publicly verifiable ballot.

Executive Director Josh Cincinnati explained in his April [announcement](https://z.cash.foundation//blog/zcon0-and-community-governance/):

> “Advisory? So these decisions are non-binding?” Technically yes; the Foundation Board can’t abdicate responsibility for the Foundation, although we want broad accountability and public input for matters that fall under the Foundation’s purview. That said, other ballot decisions may simply be advisory because we don’t (currently) have the authority to make those decisions — e.g., a ballot to redefine parameters in the Zcash blockchain in a future hard fork. (“the blocks need to be 1 terabyte, etc”) But the fact that the community might be strongly in favor of such a technical change should hold weight for the current maintainers of Zcash and for future work of the Foundation.

# Community Governance Panel

In accordance with these guidelines, we compiled a list of [Community Governance Panel members](https://github.com/ZcashFoundation/Elections/blob/master/2018-Q2/governance_panel.md) by actively reaching out to people, both individually and in broad public posts, to request participation. Ultimately we recruited 72 Panel members, and [64 of them voted](https://vote.heliosvoting.org/helios/elections/cdc15aa6-6f75-11e8-b5e0-0e48ec97cebb/view), comprising 88.88% turnout. The voters weighed in on [six ballot proposals and nine Board candidates](https://z.cash.foundation//blog/governance-voting/).

# Board Election

The Community Governance Panel selected [Ian Miers](https://cs.jhu.edu/~imiers/) and [Amber Baldet](http://www.amberbaldet.com/) as new Board members. After unanimous approval from the existing Board, they replaced outgoing members Naval Ravikant and Yan Zhu. Given the strength of the candidate pool, enacting the Community Governance Panel’s appointment preferences was straightforward.

# Ballot Proposals and Results

The ballot proposals were offered to voters as statements they could endorse or reject, via an “Agree” or “Disagree” vote. (This is one of the things we will probably change next time, for example by offering a “No confidence” or “Reject this question” option.)

The Board and Foundation leadership decided to consider the margin of agreement or disagreement relevant; a unanimous “Agree” or “Disagree” has more weight in informing the Foundation’s strategy than a close decision.

It is important for the Foundation to remain mindful of the Zcash constituents not represented by the Community Governance Panel. For example, anyone who doesn’t speak English — a group that includes multitudes of potential users with dire privacy needs, and many of the miners who secure the Zcash network. The community governance process was undeniably flawed, but it still yielded useful information about community sentiment.

## Results and Interpretation

### The Zcash community wishes to preserve ASIC resistance, discouraging the use of ASIC mining equipment in favor of GPU mining equipment. The Zcash Foundation should therefore adopt this as a priority.

#### [Details and discussion](https://github.com/ZcashFoundation/Elections/pull/1)

#### Votes: Agree 19, Disagree 45

Frankly, the result of this vote was surprising to many members of the community, including Zcash Foundation leadership.

We are interpreting it as a directive to look for ways to preserve decentralization and reduce monopoly chokepoints without trying to shut out ASICs specifically. Complete ASIC resistance is an effort that many community members believe is technically impossible and would just encourage stealth ASIC mining.

Changing the proof-of-work algorithm is a definite possibility. That decision will be substantially influenced by the Zcash Company, given that their development team de facto stewards the protocol _at this point in time_.  This will undoubtedly change as we continue to pursue an [independent Zcash node implementation](https://github.com/ZcashFoundation/GrantProposals-2017Q4/issues/32).

Reminder, the Company is a separate entity from the Foundation. As we’ve shared before, the Zcash Foundation plans to make our own technical hires by the end of the year.

A dual proof-of-work approach that encourages both GPU and ASIC miners is under discussion, as is the possibility of moving to proof-of-stake. According to Zcash Company CEO Zooko Wilcox, “The Zcash Company is going to choose a deadline and before that deadline we’re going to commit to what mining rules we are and aren’t willing to provide tech support for. And the deadline and decision will be when Sapling activates — October 28 — at the latest but hopefully earlier.”

### The Foundation should commit to a plan for migrating the Zcash protocol to a new proof of work algorithm with a hard-fork planned between September 30, 2020 and December 31, 2020, with the following tasks: 1) Selecting a thermodynamically efficient (not ASIC-resistant!), currently unused proof-of-work algorithm 2) Hosting and building an open hardware specification for the selected PoW algorithm 3) Assembling a consortium of hardware companies to build hardware against this open specification, while encouraging upstream contributions 4) Building an open source, cross-platform, user-friendly, p2pool-esque piece of mining software for use with this hardware 5) Manage the hard fork upgrade process across users, wallets, exchanges

#### [Details and discussion](https://github.com/ZcashFoundation/Elections/pull/21)

#### Votes: Agree 38, Disagree 26

This is a case where the margin of the decision comes into play. Given that the voters supported this proposal, but not overwhelmingly, and also based on direct feedback from the Board, we are interpreting this result as an endorsement of the goals — but not necessarily the implementation details — of the proposal. An open hardware specification would support decentralization and help reduce monopoly chokepoints; we have begun to explore establishing a hardware manufacturer working group.

### The Foundation should be open to discussing changes to monetary policy and/or supply schedule.

#### [Details and discussion](https://github.com/ZcashFoundation/Elections/pull/18)

#### Votes: Agree 31, Disagree 33

Given the ambivalence of the vote, the Foundation considers this a “no action” directive.

### Any significant effort by the Foundation to develop or promote a cryptocurrency shall be directed at either the (1) Zcash blockchain; or (2) chain forks (chain splits) of the Zcash blockchain that approximately carry forward the percentage stakes of Zcash holders immediately before the fork (split) to the money supply in circulation immediately after the fork (split).

#### [Details and discussion](https://github.com/ZcashFoundation/Elections/pull/14)

#### Votes: Agree 41, Disagree 23

This looks like substantial community endorsement that our primary efforts should be focused on Zcash and its good-faith derivatives, as they have been so far. This doesn’t preclude contributions to other projects, but our engagement with other cryptocurrencies and open-source projects will primarily focus on developments that could carry back into Zcash.

### The Foundation should prioritize transitioning ownership of the Zcash trademark from the Zcash Company to the Foundation.

#### [Details and discussion](https://github.com/ZcashFoundation/Elections/blob/master/2018-Q2/General-Measures/trademark_ballot.md)

#### Votes: Agree 48, Disagree 15

Taking ownership of the trademark was the decision with the largest margin of victory. We are in talks with the Company to do so, although obviously we have no legal standing to make demands. The Company has shown an active interest in working out an agreement.

### And just for fun: The Foundation should endeavor to establish the official Zcash mascot as one of the following choices. You may pick up to two:
* **Zeal, a collection of Zebras** — 28 votes
* **Waterbear** — 17 votes
* **Squirrel** — 12 votes
* **Axolotl** — 11 votes
* **A Talking Horse** — 6 votes

The winning zeal is a symbolically rich mascot. [It is difficult to pinpoint individual zebras](https://twitter.com/mineZcash/status/1012350571267928064) in a sufficiently large, dense, and active group of them. Just as it should be difficult — well, ideally impossible — to identify shielded addresses and transactions in the full Zcash anonymity set.

Foundation Chairman Andrew Miller [quipped on Twitter](https://twitter.com/socrates1024/status/1013407091611009025), “Hey, credit where it's due! Zooko *opposed* the zeal and preferred tardigrades. This small, symbolic victory is a sign of the @ZcashFoundation's ability to bring balance and enable a community override.”

And Neal Jayu [pondered](https://twitter.com/NealJayu/status/1013144846339657735), “Now that the zeal has been chosen as the @ZcashFoundation mascot, does that make us $ZEC fans... #Zcash zealots?”

The Foundation wholeheartedly embraces the Community Governance Panel’s mascot decision. We plan to incorporate zeal imagery into our visual identity going forward. If the Zcash community at large wishes to follow suit, we will be delighted, although we have no desire to compel them. In an effort to be inclusive, the Foundation will also consider zebra-striped tardigrades, zebra sharks, aardwolves, and the like.

# Feedback

Many participants told us that the governance process was confusing. A handful of would-be participants said that it was not announced widely enough. We have conducted two detailed postmortems, [one with the Foundation’s Board](https://github.com/ZcashFoundation/ZcashFoundation/blob/master/board-documents/minutes/2018-06-28.md) and one with a broader group of Zcash stakeholders, in addition to receiving ad hoc individual opinions. (More is welcome! Email contact@z.cash.foundation.)

Specific points of contention that we plan to address or at least consider next time:

* Confusing, fractured user experience
* Lack of streamlined communication
* No single "source of truth" resource page
* Unclear and too-flexible deadlines
* Both overly vague and overly specific ballot proposals
* Unknown security of Helios (the system that we used to gather encrypted votes)
* The word “Governance” was misleading; better to use "Advisory" or similar
* Lack of a parallel stake-based vote

# Conclusion

Thank you to everyone who participated in any capacity! We deeply appreciate your contributions to supporting and improving Zcash! If you have any questions or comments, don’t hesitate to get in touch. Again, our email address is contact@z.cash.foundation.
