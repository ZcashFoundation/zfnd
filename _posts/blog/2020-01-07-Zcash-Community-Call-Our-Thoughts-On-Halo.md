---
layout: post
title: "Zcash Community Call: Our Thoughts on Halo"
excerpt: "Join us on January 14."
categories: blog
Tags: 
date: 2021-01-08
author: zfteam
---

**Please join us January 14 at 22:30 UTC to discuss Halo. You can sign up [here](https://docs.google.com/forms/d/1ESj4pz3ZvaH9nHbxZOygKXZS8-Gf8hXkwseODef8Vsg/edit#responses) to participate**.

The [Zcash Foundation is focused on growing user adoption](https://www.zfnd.org/blog/the-zcash-foundation-would-like-to-grow-user-adoption/) in 2021. It is great to see the Electric Coin Company and the community excited for this shared vision. As [Nathan Wilcox of the ECC stated](https://twitter.com/least_nathan/status/1337162728562065408):

> It's wonderful to see this vision and roadmap for Zcash that’s both independent of ECC while also built around shared core values. We look forward to collaborating with complementary strengths and focused on amazing things for Zcash in 2021!


We look forward to collaborating with the ECC, the ZOMG, and the community in growing shielded adoption for all users, current and future. In order to do this well, we believe that a conservative approach is warranted when considering major upgrades to the Zcash protocol.

Since the launch of Zcash in 2016, the Zcash technical community has grown dramatically. Where at the beginning, the Zcash was only the Electric Coin Company (ECC), today there is a vibrant ecosystem around Zcash that consists of users, wallet developers, exchanges, L2 solutions, and the Zcash Foundation. 

As co-stewards of the stability and maturity of the Zcash protocol, the Zcash Foundation is focused on removing barriers to entry for all Zcash users, and minimize the risks of protocol complexity for existing and future ecosystem participants.

The ECC has proposed a scientifically ambitious upgrade to the core Zcash protocol: Halo 2. Halo 2 is currently proposed to activate in the next network upgrade (NU5) that is slated for summer of 2021, six months from today. We fully support Halo's objectives of removing the trusted setup and improving the scalability of Zcash. However, the deployment of Halo brings a number of challenges to Zcash that make it in many ways the most elaborate Zcash Network Upgrade yet. 

At the Foundation, we believe that Halo must be adopted in a manner that improves Zcash's ability to increase shielded user adoption, without increasing  the difficulties for Zcash users, or making Zcash more complex to develop and maintain. [Past protocol upgrades](https://docs.google.com/drawings/d/1WAvIkVBv_fC4L4wDoAJaMTYVh3dJbwhR5YuP5HgOjFw/edit) such as Sapling have benefited from a thorough process of scientific and engineering review — in the case of Sapling, nearly 14-months of lead time, with extensive outside code review, before implementation on mainnet. We believe that Halo 2, with its novel cryptographic optimizations, requires at least the same degree of scrutiny.

More concretely, we believe that the following conditions must be met before a major upgrade such as Halo is activated on mainnet:

1. The Halo 2 proof system and specification for the new circuit and consensus changes should be published as a ZIP or cryptographic specification along the lines of the [Sapling specification](https://github.com/zcash/zips/blob/master/protocol/sapling.pdf).
2. The new Halo 2 proof system should receive appropriate independent scientific peer review, specifically peer review that verifies any new efficiency optimizations used in the proving system.
3. The Halo 2 implementation and all consensus changes should receive extensive outside code review, along the lines of the excellent [NCC Group report](https://research.nccgroup.com/wp-content/uploads/2020/07/NCC_Group_Zcash2018_Public_Report_2019-01-30_v1.3.pdf) that ECC commissioned for Sapling and Overwinter. 
4. Any changes to consensus rules such as Sprout deprecation or use of new turnstiles should be clearly announced to the community well in advance of deployment.
5. Software API changes, such as modifications to [librustzcash](https://github.com/zcash/librustzcash) (currently used by wallets and some exchanges) should be explained to the community as part of the proposed ZIP release process, and software libraries should be finalized with sufficient time for developers to integrate and test them.
6. Have a deprecation proposal, so that if this new feature needs to be migrated away from in the future, protocol complexity stays down over time.
7. **Most critically, wallet developers, exchanges, and node developers should be given sufficient time to review all of these changes.**

We do not expect ECC to address each of these points immediately, nor do we ask that they perform these tasks on their own. Zcash Foundation is happy to assist both financially with outside review efforts and provide developer resources to make sure that the Halo 2 launch is successful.

At the same time, we believe that achieving these tasks on a realistic timeline will take substantially more than the approximately 4-5 months that remain between the current publication schedule for ZIP 224 in late January and the current proposed launch date for Halo on mainnet this June. We are asking ECC to make a firm commitment to meeting each of the requirements above, and to [propose a concrete timeline](https://docs.google.com/drawings/d/1WAvIkVBv_fC4L4wDoAJaMTYVh3dJbwhR5YuP5HgOjFw/edit) that allows the necessary sequenced review and ecosystem upgrades to take place.

**We would like to discuss these proposed requirements with the community on January 14 at 22:30 UTC. You can sign up [here](https://docs.google.com/forms/d/1ESj4pz3ZvaH9nHbxZOygKXZS8-Gf8hXkwseODef8Vsg/edit#responses) to participate in the call.**
