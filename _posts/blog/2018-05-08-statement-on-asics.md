---
layout: post
title: "The Zcash Foundation's Role in the Zcash ASIC Resistance Debate"
excerpt: "Where we go from here"
categories: blog
tags: []
image:
  feature:
date: 2018-05-08
author: acityinohio
---

## TL;DR: The Foundation is developing ASIC resistance as an option while simultaneously researching ASIC resistance

The only thing hotter than the GPUs securing the Zcash network is the debate surrounding ASIC resistance. You don’t need to look further than the most-debated [Zcash Forum thread of all time](https://forum.z.cash/t/let-s-talk-about-asic-mining/27353) from February, or the debates that routinely pop up in the [community chat](https://chat.zcashcommunity.com/).

The ASIC resistance question has taken on new urgency now that Bitmain has announced the availability of the [AntMiner Z9 mini](https://twitter.com/BITMAINtech/status/992034662875779072), an Equihash-focused ASIC that seems tailor-made for Zcash, shipping in late June. Another complicating factor is that the Zcash Company’s chief, Zooko, has signalled ambivalence about ASIC resistance.

The Foundation is in the process of adopting community feedback as part of our own [governance process](https://github.com/ZcashFoundation/Elections), and in fact has already planned to represent the community's interest in this debate via a [proposed ballot for our election process](https://github.com/ZcashFoundation/Elections/pull/1).

If the world had stood still, I imagine this would have been the only step necessary to take right now, collecting the community's feedback and iteratively transform the community's voice into an official Foundation position. But the world doesn't stand still, as Bitmain has reminded us. We’re still planning on including an ASIC resistance ballot measure in our election process, but we also think that the community expects more from us than waiting until June to act.

Consequently, we are currently taking the following steps: 

- _Investigation and principled decision making._ We are committing funds and effort to investigate the presence and power of ASICs on the Zcash network. We do not know for sure how effective the upcoming AntMiner Z9 mini will be, or the degree to which ASICs already affect the mining process, or whether more powerful ASICs will be developed in the future. All of these questions matter when deciding to change the Equihash parameters, adopt a new PoW type altogether, or welcome ASICs. Board member Andrew Miller is planning to create a proposal through the grants program to [convene a Technical Advisory Board](https://freedom-to-tinker.com/2015/05/11/bitcoin-faces-a-crossroads-needs-an-effective-decision-making-process/) to provide scientifically grounded inputs into this decision.

- _Making research and development of a more ASIC resistant strategy an immediate technical priority for the Foundation._ We have already outlined a technical roadmap for the next year and are in the process of hiring and project-planning to execute on it. Our roadmap includes development on Bolt payment channels, on alternative wallets, and starting an independent, consensus-compatible implementation of full node software. We are now adding ASIC resistance development as an additional technical priority.

- Based on continued community approval and the results of our investigation above, we have a rough goal of developing and submitting a mitigation plan through the ZIP process, targeting a deployment in late 2018. Having the ability to carry out a PoW change in the future, especially if it is lead by the Foundation, means we should start now. The Company is signalling they may not do this, but we think there is a already a loud and clear interest in the community to at least have this option available. (This is an easy case, the governance experiments are really about harder cases!)

- _Continuing to run the ballot process to gauge community sentiment._

## Why Are We Bothering to Evaluate ASIC Power on the Network?

Sometimes miner manufacturer claims are hot air. What if the efficiency gains are minimal compared to new GPUs? Would it be worth engaging in a potentially contentious fork, or splitting the community, if GPUs were still competitive?

Or, more gravely, perhaps these new ASICs are more advanced than we thought and could handle _different_ parameters of Equihash. One of the "easy wins" that is often suggested in the community is to update Equihash parameters (which would still take a while to thoroughly test) to maintain ASIC resistance, but if this AntMiner has the ability to adapt to new parameters, then such a fork would be a waste of effort.

Simply put, there are too many unknowns to commit to any particular path yet. By putting resources into investigation we can make better decisions and have options available.

## ...But We Are Committing to Funding an ASIC-Resistant Path

The Foundation believes it's important to maintain the power of GPUs in Zcash mining. However—and this nuance is important—**we also recognize that ASIC resistance may be a red herring, for the health and decentralization of the protocol in the long term.** Perhaps there is another path that we could take, with ample time for community buy-in—and we welcome input on getting there.

**In the short term, we consider it critical to protect the community members who are building the ecosystem with us.** If it's necessary based on our evaluation of the ASICs on the network, we will **hire a developer to construct and submit a [ZIP](https://github.com/zcash/zips) to mitigate its effect on the network.** If the Zcash core development team and community approves, it will ideally be deployed by late 2018.

## Want to Help? Consider Our Grant Process

While we are committed to engaging in these activities ourselves, we encourage particularly passionate and talented members of the community to [apply to our 2018Q2 Grant Program](https://github.com/ZcashFoundation/GrantProposals-2018Q2) to augment or replace our work here. Yes, we are eager to give money away to help preserve the health of the network.

## Moving the Conversation Forward

Even if we manage to neuter a wave of Equihash ASICs, this will not be the end of the discussion. Inevitably, some new ASIC will arise, and we may have to go through this process again.

I'm all for a Sisyphean effort now and again, but perhaps there is a better solution—one that subverts the entire "ASIC resistance" debate? Eventually we will need one, because I'm not sure how sustainable the whack-a-mole strategy will be for the community. There has to be a better way—and I think it starts with reframing the discussion away from "ASIC resistance" and towards the perceived _goals_ of ASIC resistance—decentralization, less concentrated proof of work, and accessibility to the network.

But in the meantime, we must act, and act we shall.

Update: the original version of this post implied that the Foundation was taking a definitive stance for ASIC resistance. It has been edited for clarity to indicate that the Foundation is putting resources into *researching* ASIC resistance: advantages, disadvantages and potential implementation paths. Early feedback on this post encouraged us to submit this update, but for all edits, you can see [full commit history on on GitHub and track changes made here](https://github.com/ZcashFoundation/zcashfoundation.github.io/commits/master). For people in the community who do not like this approach, or demand simpler and swifter action: we know you don't want to accept 'It's complicated and we're still figuring it out.' But, it's complicated and we're still figuring it out. We'll work together to learn as fast as we can and take the appropriate action as fast as we can. Thank you for your support.

_Thanks to [Andrew Miller](https://twitter.com/socrates1024), [Sonya Mann](https://twitter.com/sonyaellenmann), and the [#the-zcash-foundation](https://chat.zcashcommunity.com/channel/the-zcash-foundation) for their input and feedback._
