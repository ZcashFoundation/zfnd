---
layout: post
title: "ZIP 1014 Poll Results"
excerpt: "We have convergence!"
categories: blog
tags: [governance]
date: 2020-01-30
author: zcashboard
---

The [combined Community Advisory Panel and forum user poll on ZIP 1014](/blog/zip-1014-poll/) is complete. Of 119 eligible participants, 88 voted, representing similar levels of turnout to the first community sentiment poll. You can view [the results directly on Helios.](https://vote.heliosvoting.org/helios/elections/43b9bec8-39a1-11ea-914c-b6e34ffa859a/view)

The results are quite clear (with the exception of one question). The community is clearly in favor of ZIP 1014, with ECC receiving 35% of the four-year dev fund, the Foundation receiving 25%, and Major Grants receiving 40%. There should not be a monthly Funding cap, nor a mandated volatility reserve. We are thrilled with the community's clear approval of the ZIP with these requirements.

## The Question 3 Conundrum: How to Deal with Major Grants

There is however a noticeable exception, one which surprised the Foundation. Question 3 asks the following:

> Do you believe the Foundation should have independent authority in determining Major Grants, or should there be a new Major Grant Review Committee as prescribed in this ZIP?

34 voters felt the Foundation should have independent authority, 34 felt that there should be an explicit formation of a Major Grant Review Committee as specified in ZIP 1014, and 20 voters thought either option was acceptable. Both options received a "majority" of support if you count 20 voters finding each option acceptable.

For questions 2 and 5, we [had suggested](https://forum.zcashcommunity.com/t/community-sentiment-polling-results-nu4-and-draft-zip-1014/35560/475) a runoff poll. The purpose of a runoff for Question 2 or 5 was clear, since all options were either independent (in the case of Question 5) or on a sliding scale (in the case of Question 2).

However, the results for Question 3 suggest a runoff or additional polling wouldn't be useful or instructive, and would delay us further in converging on a final ZIP. The result was a perfect stalemate, with each choice receiving enough approval (including the 20 "fine with either option") votes to constitute a majority within the Community Advisory Panel. In either case, as [Madars Vida](https://madars.org/) put it in the [burgeoning forum thread on the topic](https://forum.zcashcommunity.com/t/major-grants-committee/35871/51), "The only question is whether there should be [Major Grants] committee determining the recipients, but the funds would first arrive at ZF is inherent in both answers."

## Synthesizing the Major Grant Review Committee

In aggregate, the community clearly approves of either choice. The Foundation's duty is to synthesize the choices to capture the goals of both approaches: Long term, the Zcash ecosystem should have a stable, independent Major Grant Review Committee. Short term, a flexible approach to enable effective grant disbursement right after NU4 activates is ideal, while the community has time to discuss and optimize the final structure of the committee.

Here is how we plan to [synthesize these viewpoints in ZIP 1014](https://zips.z.cash/zip-1014) with minimal changes to achieve these goals. We will modify the [Major Grant slice description as follows](https://zips.z.cash/zip-1014#zf-mg-slice-zcash-foundation-for-major-grants):
- Keep sections 1-5, delete current 6,7
- New Section 6: Major Grants awards are subject to approval by a five-seat Major Grant Review Committee. The Major Grant Review Committee's funding decisions will be final, requiring no approval from the ZF Board, but are subject to veto if the Foundation judges them to violate the ZF's operating documents or U.S. law.
- New Section 7: Initially the ZF SHALL appoint the members of the Major Grant Review Committee and the ZF SHALL have authority to change or modify the Committee's membership. To align with the Future Community Governance timeline (more on that below), the terms and election structure for members of the Major Grant Review Committee SHALL be decided in a new ZIP and ratified by the ZF Community Panel (or successor mechanism) no later than the end of 2021.
- New Section 8: The Major Grant Review Committee is subject to the same conflict of interest policy that governs the ZF Board of Directors (i.e. they MUST recuse themselves when voting on proposals where they have a financial interest). Additionally, no one with interest in or association with the ECC may sit on the Major Grant Review Committee --- since the ECC can be a beneficiary, this avoids those potential conflicts altogether. The ZF SHALL continue to operate the Community Panel and SHOULD work toward making it more representative and independent (more on that below).

This modification accomplishes what both sides of the poll desired: leeway for the Foundation to bootstrap the Major Grant process, plus a defined path toward eliminating the Foundation's control over that process.

We will not conduct any additional community sentiment polling. The Foundation will be submitting these changes as a PR into a new ZIP, one which we are confident represents the community's will. We'll add that link here when available.

### Next Steps

We will work on coordinating an NU4 activation timeline with the ECC. After that, the Foundation will set up the Major Grant Review Committee structure to ensure we have the bootstrap process ready before NU4.

Congratulations to everyone in the Zcash community who participated in this historic process; this is truly a remarkable feat, and we are honored to have played our part in stewarding the dev fund discussion and resolution.
