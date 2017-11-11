---
layout: post
title: "Announcing the world's largest multi-party computation ceremony"
excerpt: "The Zcash Foundation is excited to announce that we have already begun coordinating a Powers of Tau ceremony."
categories: blog
tags: [zapps]
image:
  feature:
date: 2017-11-11
modified: 2017-11-11
author: ebfull
author: amiller
---

# Announcing the world's largest multi-party computation ceremony
zk-SNARKs are an incredible tool for privacy preserving protocols and verifiable computation. They are short, easy to verify [zero-knowledge proofs](https://z.cash/technology/zksnarks.html) of arbitrary statements. They are also non-interactive, making them very useful for cryptocurrencies like Zcash and many other projects.

However, currently practical zk-SNARK schemes have a catch: for a given computation that you'd like to create proofs for, some **public parameters** must be constructed. These parameters are used to construct and verify proofs. If the "randomness" used to construct the parameters is compromised by an adversary, it is possible for that adversary to construct false proofs.

Last year, Zcash performed a [parameter generation ceremony](https://z.cash/technology/paramgen.html) for the initial Sprout release of its zk-SNARKs. In order to protect the parameters from compromise, the ceremony leveraged a [multi-party computation protocol](https://z.cash/blog/generating-zcash-parameters.html). This protocol has the property that only _one_ participant needs to destroy their secret randomness (aka "toxic waste") in order to protect the integrity of the parameters. In other words, every single participant of the ceremony would have to be compromised by an adversary.

The protocol used in the Sprout ceremony has some limitations: it couldn't scale beyond a handful of participants, it couldn't tolerate faults/aborts, and it required very expensive computations. As a result, the ceremony only involved six participants, and took months of planning, engineering and cryptographic design to pull off. This is not a sustainable process for future zk-SNARK parameter generation, including the planned Zcash Sapling upgrade and many other "z-apps" expected in the future.

Sean Bowe, Ariel Gabizon, and Ian Miers have recently pre-printed a new multi-party computation protocol [(https://eprint.iacr.org/2017/1050)](https://eprint.iacr.org/2017/1050) that has several important advantages over the prior one used in the first Zcash ceremony:

* It allows for a single, gigantic ceremony to take place for all possible zk-SNARK circuits within a given size bound. The results of this ceremony are partial zk-SNARK parameters for the entire community. We call this communal ceremony the **Powers of Tau**.
* If you want to use zk-SNARKs in your protocols, you still have to do an additional MPC ceremony specific to your application. But because of the Powers of Tau ceremony, the application-specific part of the ceremony is much cheaper to perform and the costs per-participant scale linearly with respect to the circuit complexity.
* The best part is that the Powers of Tau (as well as the application-specific MPCs) can scale to hundreds (or even thousands) of participants. As the number of participants grows, it becomes implausible that all of them could be compromised.

The Powers of Tau ceremony proceeds in turns, one turn for each participant. You can think of this process as a bit like shuffling a deck of cards in public. Each participant shuffles the deck, proves that they did not modify or add any of the cards, and then hands the deck to the next participant.

More concretely, In each participant's turn, they use a tool to sample some randomness and perform a computation. The result of each computation is then added to a [public transcript](https://github.com/ZcashFoundation/powersoftau-attestations/), so that the entire protocol can be publicly verified. As long as one participant successfully destroys their randomness when they're finished, the resulting parameters are secure. As more and more participants are added, it becomes unlikely that an adversary could have compromised everyone. This is especially true as participants have enormous flexibility in the counter-measures they employ.

## The Zcash Foundation's Powers of Tau Ceremony
The Zcash Foundation is excited to announce that we have already begun coordinating a Powers of Tau ceremony. Because the results of this ceremony are intended for general public use (not just for Zcash), we want to involve as many diverse participants as possible (professionals, startups, enterprises, and even just ordinary members of the community). 

In order to dispel any concern that we (either the Foundation or the Zcash Company) are domineering the process or pulling strings, we are letting the ceremony evolve in an organic way, through ad hoc consensus. At this point, we have no idea who all the participants will be, in what order they will take turns, or on what operating systems and hardware they'll run their computations.

We are hosting a [public mailing list](https://lists.z.cash.foundation/mailman/listinfo/zapps-wg) where we are discussing the ceremony, and informally choosing who goes next. There is also an active discussion on the Zcash Community chat [#mpc](https://chat.zcashcommunity.com/channel/mpc) If you'd like to be a participant or just observe the process, please come on by :) We are also hosting a [repository](https://github.com/ZcashFoundation/powersoftau-attestations/) that includes the reports from all the participants.

We currently have a pure [Rust implementation](https://github.com/ebfull/powersoftau/) for the code that participants can run, as well as a reference implementation of verification tools. Beyond this, the operational details are left up to the participants themselves. We are hoping participants use a variety of different architectures and platforms, and we also encourage participants to modify the code or use an alternative implementation instead.

As this public ceremony continues, and more and more varied participants are involved, we believe the  trustworthiness of this process will become more and more self-evident. We note that the Powers of Tau cryptography protocol is currently undergoing peer review. In the meantime, we are optimistically starting the process now. Should any flaws be found, we may need to start over. The main resource at stake is the volunteer participants' time and attention. Our hope is that over the next several months, extensive peer review takes place and additional verification tools and implementations are developed. We anticipate concluding the ceremony at some point in Q1 2018, in time for the output to be used in the Zcash [Sapling](https://z.cash/tag/sapling.html) upgrade, as well as by any other SNARK-enabled applications (zapps) in the future.
