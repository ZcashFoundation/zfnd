---
layout: post
title: "Announcing ZF Grants"
excerpt: "The Zcash Foundation debuts a new platform for grants and community funding."
categories: blog
tags: [grants]
image:
  feature: 
date: 2019-03-15
author: sonya
---

The Zcash Foundation’s new platform for grants and community funding, [ZF Grants](https://grants.zfnd.org/), is in open beta on the Zcash testnet! The full launch will come in April. The Foundation plans to dispense the Zcash equivalent of $500,000 through ZF Grants in 2019.

[Grant.io](https://grant.io/) created the web app, which was inspired by the [Monero Forum Funding System](https://www.getmonero.org/forum-funding-system/). ZF Grants replaces our previous [grants workflow](https://www.zfnd.org/tags/#grants) _and_ adds new features.

Check out the [example proposal](https://grants.zfnd.org/proposals/717701609) that Executive Director Josh Cincinnati created. Grant.io is offering a bug bounty for ZF Grants: "Critical bug disclosures that follow our Responsible Disclosure Policy will be eligible for a $500 reward (paid out in USD, not testnet coins)." Learn more [on the website](https://grants.zfnd.org/requests/1141377514-help-us-find-bugs-and-get-paid).

## How It Works

ZF Grants is similar to Kickstarter. But instead of using fiat money, users can pledge $ZEC to projects that grow or strengthen the Zcash ecosystem. On top of that, imagine if Kickstarter itself gave funds to the best campaigns on the website. That’s our plan!

The Foundation will evaluate proposed projects on a rolling basis and choose which ones to sponsor. We are able to match funds or attach a bounty payment to a given campaign. But you can also fund a project solely through the contributions of… anyone!

ZF Grants differs from standard crowdfunding platforms in a couple more ways. For starters, a campaign can incorporate milestones that serve as payout thresholds. At least one is required. Here’s how it looks when you create a proposal:

![Set up milestones for deliverables](https://www.zfnd.org/images/E659D518-1A4F-4F0E-953B-1454238E5B47.png)

![Example milestones](https://www.zfnd.org/images/B665D80F-F28D-4DAD-B4AF-3E37501B681C.png)

You are able to run a campaign that receives a single lump sum, or you can split your project into chunks, thereby adding progress checkpoints. Milestones are ideal for substantial, longer-term efforts.

Submitting a proposal requires a small $ZEC stake (the exact amount may change) to prevent spam and abuse:

![Confirm submission](https://www.zfnd.org/images/BA715B69-1FD4-43EC-9924-D1FA485EC6BF.png)

After a proposal is submitted, Zcash Foundation staff will approve or reject it. We plan to be broadly permissive, and keep an eye out for projects to funds-match or augment with a bounty.

Importantly, the Zcash Foundation is able to appoint an "arbiter" to any campaign. That's our term for the person who decides when successive payout thresholds have been met. The arbiter can be a Foundation employee, or anyone else who seems like they'd do a good job, such as a trustworthy community member. Obviously, the arbiter cannot be the person or team behind the proposal, although they are welcome to suggest names.

Arbiters are crucial. If the person or team behind a given campaign doesn't meet their obligations, the contributors have someone representing their interests. Remaining funds will be withheld until the arbiter's concerns are satisfied. (In the event of a rogue arbiter, the Zcash Foundation would choose a replacement.)

## Privacy on ZF Grants

Please review the [privacy policy](https://grants.zfnd.org/privacy) to understand our commitments with respect to data collected by the platform. The Zcash Foundation intentionally chose a stricter privacy policy than most internet services.

Unfortunately, because we didn’t want to delay launch, ZF Grants can only support contributions through transparent transactions — for the time being. (Campaign payouts *must* be made to shielded Sapling addresses.) Zcash transparent addresses and transactions, like Bitcoin addresses and transactions, are pseudonymous but not private.

Shielded transactions will be added as soon as possible! We'd love to support them right from the get-go, but blockchain-level visibility is important. After all, transparency is first on our list of [institutional values](https://www.zfnd.org/about/#values).

Today, when people contribute funds to a proposal, the proposal is assigned a Zcash t-address. Users can send $ZEC from a z-address, ensuring that the origin of the funds is private, but such transactions are not quite as private as shielded-to-shielded transactions.

In the future, [when Zcash includes viewing keys](https://z.cash/blog/viewing-keys-selective-disclosure/), ZF Grants will be able to support completely private z-to-z contributions. Viewing keys will enable the Zcash Foundation to publicly demonstrate the exact amounts deposited into a proposal's z-address — without the ZF Grants servers requiring access to private keys.

We could have built a platform that interacts with private keys, but it would be an unacceptable security risk. Instead, ZF Grants relies on a secure custody solution without direct access to private keys. In other words, proposal funds are not held in hot wallets. Since the private keys aren't available, and currently neither are viewing keys, we would be unable to determine the balance of a campaign z-address.

Once Sapling is ready for integration, ZF grants will be able to support users who want to make a fully private contribution, while still enabling the Foundation to provide transparency around grant funding.

We _do_ allow non-attributed contributions, which can be made by users with accounts who select that option, logged-out users, or people who don’t have accounts at all. Such contributions are not tied to a ZF Grants account, either publicly or in the database.

However, refunds aren't available to non-attributed contributors. In the event that funds unattached to a ZF Grants account are not paid out as intended, the $ZEC goes back to the Zcash Foundation as a donation. (By contrast, regular logged-in users would receive a refund if a campaign didn't reach its goal or milestones.)

## Conclusion

We are beyond excited to see how the Zcash community will use ZF Grants! Thank you, [Grant.io](https://grant.io/), for being wonderful collaborators in realizing our vision. The Foundation is equally grateful for the community’s patience… and eager to fund proposals that will improve the Zcash ecosystem.
