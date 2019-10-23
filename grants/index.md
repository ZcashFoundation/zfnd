---
layout: page
title: Grants
excerpt: "How the Zcash Foundation funds the Zcash ecosystem."
---

The Zcash Foundation funds Zcash development, research, and other ecosystem projects through a platform called [ZF Grants](https://grants.zfnd.org/). We explained how the platform works in the [testnet launch blog post](https://www.zfnd.org/blog/zf-grants-open-beta/), and shortly the Foundation will publish a rubric for evaluating grant proposals. **Open requests-for-proposal are [listed on the ZF Grants website](https://grants.zfnd.org/requests).**

![Screenshot of the ZF Grants homepage.](https://www.zfnd.org/images/zf_grants_front_page.png)

To make sure you receive future announcements about grants and funding opportunities, subscribe to our newsletter:

<div class="email-form">
<form
  action="https://buttondown.email/api/emails/embed-subscribe/zcashfoundation"
  method="post"
  target="popupwindow"
  onsubmit="window.open('https://buttondown.email/zcashfoundation', 'popupwindow')"
  class="embeddable-buttondown-form"
>
  <!-- <label for="bd-email">Enter your email:</label> -->
  <input type="email" name="email" id="bd-email" placeholder="you@example.com">
  <input type="hidden" value="1" name="embed"/>
  <input type="submit" value="Subscribe 🎉" />
</form>
</div>

Occasionally, the Foundation establishes separate agreements or partnerships, as with [Parity Technologies](https://www.zfnd.org/blog/parity-partnership/) and [ZecWallet](https://www.zfnd.org/blog/zec-wallet-progress/).

<a name="ideas"></a>

## Grant Ideas

Please keep in mind that this list of grant ideas is speculative. Use it as a starting point. If you are seriously considering a project from this list, please get in touch [via email](mailto:contact@zfnd.org), or make a thread on the [Zcash Community Forum](https://forum.zcashcommunity.com/), or say hello on the [Zcash Community Chat](https://chat.zcashcommunity.com/). Public discussion is encouraged!

After those conversations happen, qualified individuals or teams are welcome to flesh out their favorite prospects and [submit them to ZF Grants](https://grants.zfnd.org/create) as full proposals!

### Wallets

- Zcash hardware wallet support
- Key-management tools
- Physical storage (paper wallets or lightweight hardware) for z-addresses
	- Spending from such storage would be by importing the key to a full wallet, or by [payment offloading](https://github.com/zcash/zcash/issues/1113)

### Core and Security

- Continued support for alternative implementations (such as [Parity Zcash](https://github.com/paritytech/parity-zcash))
- Security auditing for the code and protocols
- Network monitoring and anomaly detection
	- [Public chain-fork detector](https://github.com/zcash/zcash/issues/2536)
	- [Block observatory](https://github.com/zcash/zcash/issues/1922)
	- [Timestamp observatory](https://github.com/zcash/zcash/issues/1924)
	- [Cross-branch double-spend detector](https://github.com/zcash/zcash/issues/2275)
	- [Internal chain-fork detector](https://github.com/zcash/zcash/issues/1925)
	- [Concept for a distributed monitoring service](https://github.com/paulogr/dstatuspage)
- Formal verification
	- Identify parts of the Zcash codebase that are security-critical and conducive to formal methods for proving correctness of code
	- Use start-of-the-art formal verification tools to construct computer-checkable proofs of their correctness, with respect to suitable security specifications
	- Ideas for such components: Sapling circuits (or parts thereof), Bellman cryptographic code (or parts thereof), consensus rules

### Mining

- Integrate the best CPU miner from the [Zcash Open Source Miner Challenge](https://zcashminers.org/) into `zcashd`, designed to run continuously in the background, solo-mining as a contribution to the decentralized network instead of as a business
- Adapt [Matt Corallo's BetterHash proposal](https://github.com/TheBlueMatt/bips/blob/betterhash/bip-XXXX.mediawiki) for Zcash to decentralize mining participation
- Build an alternative PoW puzzle and upgrade proposal (for ASIC-resistance or optimized ASIC production)

### Layer-2

- BOLT development
- Lightning Network integration for Zcash

### Ongoing Services

- A "service status dashboard" site that monitors the status of the dozens of Zcash-related online services (e.g., those listed in this section, the network monitoring and anomaly detection suggestions listed above, as well as exchanges, software download sites, etc.), so that systemic problems can be identified at a glance
	- The monitoring website can check that the services are responding to web requests, as well as heuristically check that they are synchronized (e.g., blockchain height is correct and underlying `zcashd` is a recent version) and sensible (e.g., transaction volume and spot price are not zero)
- Network monitoring and anomaly detection (as discussed above)
- Continuous monitoring of third-party Zcash block explorers to identify discrepancies (indicative of failures or attacks)
- Foundation-supported blockchain explorer
- Proving key distribution
- Light client servers / infrastructure

### Education and Outreach

- Translation to new languages
- [Zcash meetups](https://www.zfnd.org/meetups/)
- Zcash presentations, hackathons, or workshops
- Scholarships for exceptional zero-knowledge researchers (Ph.Ds or postdocs)

-----

Other places where promising ideas may be collected:

- [Zcash project issue tracker](https://github.com/zcash/zcash/issues)
- [Zcash Foundation issue tracker](https://github.com/ZcashFoundation/zfnd/issues)
- [Zcash Community Forum](https://forum.zcashcommunity.com/)
- [Zcash Community Chat](https://chat.zcashcommunity.com/)

If you'd like to suggest a grant proposal idea, email contact@zfnd.org or [make a pull request](https://github.com/ZcashFoundation/zfnd/blob/master/grants/index.md).
