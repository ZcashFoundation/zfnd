---
layout: page
title: Grants
excerpt: "How the Zcash Foundation funds the Zcash ecosystem."
---

The Zcash Foundation funds Zcash development, research, and other ecosystem projects through a platform called [ZF Grants](https://grants.zfnd.org/). **Open requests-for-proposal are [listed on the ZF Grants website](https://grants.zfnd.org/requests).** We explained how the platform works in the [testnet launch blog post](https://www.zfnd.org/blog/zf-grants-open-beta/), and shortly the Foundation will publish a rubric for evaluating grant proposals.

![Screenshot of the ZF Grants homepage.](https://www.zfnd.org/images/zf_grants_front_page.png)

Occasionally, the Foundation establishes separate agreements or partnerships, as with [Parity Technologies](https://www.zfnd.org/blog/parity-partnership/) and [ZecWallet](https://www.zfnd.org/blog/zec-wallet-progress/).

**Beyond the RFPs, we wrote a list of potential ideas for grants.** Qualified individuals or teams are welcome to flesh out their favorite prospects and [submit full proposals to ZF Grants](https://grants.zfnd.org/create)!

## Grant Ideas

If you'd like to submit a new grant proposal idea, email contact@zfnd.org or make a pull request.

Other places where such ideas may be collected:
- [Zcash project issue tracker](https://github.com/zcash/zcash/issues)
- [Zcash Foundation issue tracker](https://github.com/ZcashFoundation/zfnd/issues)
- [Zcash Community Forum](https://forum.zcashcommunity.com/)
- [Zcash Community Chat](https://chat.zcashcommunity.com/)
- [Encouraged Community Work from Electric Coin Company](https://github.com/zcash/zcash/projects/27)

Wallets Development
-----------
- Zcash hardware wallet support
- Key-management tools:
    - Physical storage (e.g., paper wallets or lightweight hardware) for z-addresses.
      (Spending from such storage would be by importing the key to a full wallet, or via https://github.com/zcash/zcash/issues/1113)

Core/Security
-----------
- Continued support for alternative implementations (Parity-Zcash)
- Security auditing for the code and protocols
- Network monitoring and anomaly detection:
    - public chain-fork detector (https://github.com/zcash/zcash/issues/2536)
    - block observatory (https://github.com/zcash/zcash/issues/1922)
    - timestamp observatory (https://github.com/zcash/zcash/issues/1924)
    - cross-branch double-spend detector (https://github.com/zcash/zcash/issues/2275)
    - internal chain fork detector (https://github.com/zcash/zcash/issues/1925)
    - Concept for a distributed monitoring service (https://github.com/paulogr/dstatuspage)
- Formal verification: identify parts of the Zcash codebase that are security-critical and conducive to formal methods for proving correctness of code. Use start-of-the-art formal verification tools to construct computer-checkable proofs of their correctness, with respect to suitable security specifications. Ideas for such components: the Sapling circuits (or parts thereof), the Bellman cryptographic code (or parts thereof), consensus rules.

Mining
----------------
- Integrate the best CPU miner from https://zcashminers.org/ into zcashd, designed to run continuously in the background solo-mining as a contribution to the decentralized network instead of as a business
- Adapt Matt Corallo’s BetterHash proposal for Zcash (https://github.com/TheBlueMatt/bips/blob/betterhash/bip-XXXX.mediawiki) to decentralize mining participation
- Build an alternative PoW puzzle and upgrade proposal (e.g., for ASIC-resistance or optimized ASIC production)

Layer Two
-----------
- BOLT development
- Lightning network integration for Zcash


Ongoing services
----------------
- A "service status dashboard" site that monitors the status of the dozens of Zcash-related online services (e.g., those listed in this section, the "Network monitoring and anomaly detection" listed above, as well as exchanges, software download sites, etc.), so that systemic problems can be identified at a glance. The monitoring website can check that the services are responding to web requests, as well as heuristically check that they are synchronized (e.g., blockchain height is correct and underlying zcashd is a recent version) and sensible (e.g., transaction volume and spot price are not zero).
- Network monitoring and anomaly detection (see [above](#coresecurity))
- Continuous monitoring of third-party Zcash block explorers to identify discrepancies (indicative of failures or attacks)
- Foundation-supported blockchain explorer
- Proving key distribution
- Light client servers / infrastructure

Education and outreach
----------------
- Translation to new languages
- Zcash social meetups
- Zcash hackathons and/or workshops
- Scholarships for exceptional zero-knowledge researchers (Ph.Ds or postdocs)
