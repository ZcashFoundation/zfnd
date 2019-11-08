---
layout: post
title: "Restarting Community Sentiment Collection for Dev Fund Proposals"
excerpt: "As promised, the Foundation is restarting community sentiment collection regarding the future of Zcash development funding."
categories: blog
tags: [governance]
date: 2019-11-08
author: zcashboard
---

As promised, the Foundation is restarting community sentiment collection regarding the future of Zcash development funding. The sentiment collection approach remains the same as [we described in August](https://www.zfnd.org/blog/dev-fund-guidance-and-timeline/#how-the-foundation-will-select-a-particular-proposal), with the exception that we don't know the new NU4 feature selection deadline yet. We will update this post as soon as it's available, but it shouldn't prevent us from moving forward on sentiment collection.

## New timeline (summary)

- Today: ZF reaches out to ZIP authors to encourage collaboration.
- **EOD Thursday, November 14**: Deadline for changing, combining, or withdrawing proposals for evaluation in the sentiment collection poll.
- **Friday, November 15**: ZF publishes specific poll with finalized ZIPs that will be used for forum, advisory panel, and miners.
- **Saturday, November 16**: Polling opens for forum users, advisory panel, and miners.
- **Saturday, November 30**: Polling closes.
- **No later than Tuesday, December 3**: ZF publishes summary results in a blog post.
- **No later than Friday, December 6**: ZF publishes analysis on which upgrades we can support, based on sentiment and board discussion.
- **Week of December 9**: If ZF’s guidance diverges from ECC’s position, we will meet to reconcile. After reconciliation, if further ZIP specification or updates are needed, consult with authors/ECC and (_if necessary_) engage in another round of sentiment analysis.
- **TBD**: Feature selection locked in for NU4.

## The details

From now until **EOD Thursday, November 14**, we encourage submitted ZIP authors to collaborate on consolidating their proposals as much as they can. If there are ambiguous parts of the proposal, authors (and community members through the forum) should endeavor to specify as much as possible. **We believe there's an opportunity to streamline the current selection to a handful of stronger proposals and hope to see that happen in the next week.**

On **Friday, November 15**, ZF will post an ordered ballot of eligible, finalized proposals, likely in sync with [an updated forum megathread](https://forum.zcashcommunity.com/t/future-of-zcash-dev-funding-megathread-everything-in-one-place/34063).

With respect to each proposal, the question will be the same: "Do you approve of this ZIP?" There are three answer options for each proposal: 1) Yes, 2) No, or 3) Abstain. 

Polling will open on **Saturday, November 16** and close on **Saturday, November 30** for our [Community Governance Panel](https://www.zfnd.org/governance/community-advisory-panel/), Zcash miners at large, and [Zcash Community Forum](https://forum.zcashcommunity.com) users with accounts created prior to March 2019. For the forum, we'll have a locked topic with the poll at the top of the page. For the community advisory panel, we will invite those users and conduct a [Helios vote](https://heliosvoting.org/) like last year.

### On miner signaling

To be frank, we have low expectations that miners will participate. Various sources have indicated that miners aren’t interested in this process. We've received no response after many attempts to reach the operators of significant Zcash mining pools. But we still want to give them an opportunity to provide input in the same manner as forum users and panel members.

To do so, we ask that miners add an OP_RETURN output to their Zcash coinbase transactions between **Saturday, November 16** and **Saturday, November 30** (we'll use the timestamps in the block header as a guide here). The OP_RETURN should have their votes encoded in ASCII in a manner below:

`for each [poll question] { [poll question number] + [y for yes, n for no, a for abstain]}`

This is better illustrated with an example; let's say there are five final polling questions around ZIPs posted by the Foundation, then a voting miner could add a single OP_RETURN output in their coinbase transaction that might contain the following encoded in ASCII:

`1Y2N3A4N5Y`

Which would correspond to "Yes on Question 1, No on Question 2, Abstain on Question 3, No on Question 4, and Yes on Question 5."

Miners who have questions about this are always welcome to reach out to us at [contact@zfnd.org](mailto:contact@zfnd.org). We will repeat these instructions in the published polling questions.

## After sentiment collection

Once the polling closes on **Saturday, November 30, 2019**, the Foundation will publish a summary of the results no later than **Tuesday, December 3**.

No later than **Friday, December 6, 2019** the Foundation will publish acceptable upgrades based on this analysis and board discussion. If there is divergence with ECC and/or if further specification is needed in the proposals, the Foundation will attempt to reconcile and specify, in concert with both ECC and the proposal author(s).

We do not have an updated timeline on feature inclusion for NU4, but will update this post and our timeline appropriately as soon as one is agreed upon.

The Foundation is excited to see the results of the sentiment collection and thrilled to help shepherd this process. Let's get polling!

