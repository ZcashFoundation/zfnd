---
layout: post
title: "Foundation DNS Seeders Are Live"
excerpt: "The Foundation has developed a new DNS seeder to decentralize the network's on-ramp."
categories: blog
tags: [network, development]
date: 2020-06-15
author: gtank
---

The Zcash Foundation has launched its own DNS seeders for the Zcash network, as promised in our [roadmap](https://www.zfnd.org/blog/eng-roadmap-2020/). This removes one of the network’s last sole dependencies on ECC while laying the groundwork for future improvements to Zcash network introductions. The code is freely licensed and [available on GitHub](https://github.com/zcashfoundation/dnsseeder) along with [instructions for running your own](https://github.com/zcashfoundation/coredns-zcash).

With the rest of the post I’ll talk a little bit about what a DNS seeder is and why these are different from what we had before.

## What’s a DNS seeder?

The Zcash network is a decentralized peer-to-peer gossip network. This means that Zcash nodes talk to each other without hierarchy and pass along what they’ve heard from others. The classic problem with peer-to-peer networks is discoverability: if you’re just getting started, how do you know who the other peers are? Every popular distributed protocol has found some way of dealing with this. BitTorrent uses [trackers](https://en.wikipedia.org/wiki/BitTorrent_tracker) or a shared [DHT](https://en.wikipedia.org/wiki/Mainline_DHT), while Tor uses centralized [directory authorities](https://blog.torproject.org/introducing-bastet-our-new-directory-authority) who are trusted to provide an accurate view of the network. However, since Zcash (like Bitcoin) is a decentralized network, there’s no system in particular that’s expected to know about the entire network at once. Bitcoin’s solution, later used by Zcash as well, was to create one.

As luck would have it, there is already a widely deployed system for discovering the address of a machine that provides some service. It’s called [DNS](https://en.wikipedia.org/wiki/Domain_Name_System) and you use it every day to turn the names of websites into the IP addresses of servers. In the context of Zcash, the [original Bitcoin client](https://en.bitcoin.it/wiki/Satoshi_Client_Node_Discovery#DNS_Addresses) introduced the concept of a “DNS seed” that is still with us today. DNS seeds are well-known stable domain names that, when resolved, return the addresses of peers that are currently participating in the network.

## How does Zcash do it?

Previously Zcash had only two DNS seeders, one of which is operated by ECC directly and another which is run personally by [@str4d](https://twitter.com/str4d), a long-time Zcash core developer and ECC employee. Both of them are running code inherited from upstream Bitcoin. 

While the Foundation considered simply running our own instances of this code, we also viewed this as an opportunity to improve on the reference seeder.  At minimum, our goals were: 

- Memory safety
- More configurability than the existing seeder
- Easy deployment in container-focused cloud environments
- Easy maintenance and ability to augment with Zcash-specific features in the future

Ideally, we’d also offload the burden of *writing a DNS server* to someone else. Again as luck (and prior experience) would have it, other people already solved these problems for us in a project called [CoreDNS](https://coredns.io).

CoreDNS is a flexible, plugin-oriented DNS server written in Go. Being Go it’s memory safe, and being a [CNCF project](https://www.cncf.io/projects/) it’s extremely cloud-friendly. CoreDNS is reliable and scalable enough that it’s used by [public](https://docs.microsoft.com/en-us/azure/aks/coredns-custom) [cloud](https://www.digitalocean.com/community/tutorials/an-introduction-to-the-kubernetes-dns-service) [providers](https://docs.aws.amazon.com/eks/latest/userguide/coredns.html) as part of their Kubernetes offerings.

In short, by basing our new seeder on CoreDNS we immediately achieved all of our goals and got a ton of flexibility for free! Because of the plugin architecture we can manipulate everything from logging behavior to binary size without changing the main body of the code; all we have to do is write a [plugin](https://github.com/ZcashFoundation/dnsseeder) that knows how to crawl the Zcash network.

## Decentralizing the seeders

With our fancy new seeder code ready, the last thing we need to do is deploy them and get the domain names into Zcash client codebases. The Foundation’s deployments use the tools in the repo [coredns-zcash](https://github.com/ZcashFoundation/coredns-zcash), which has build instructions for binaries and containers along with example configuration files for various environments.

The new mainnet seeders live at `mainnet.seeder.zfnd.org` (operated by the Foundation directly) and `mainnet.is.yolo.money` (operated by me personally), with testnet seeders being `testnet.seeder.zfnd.org` and `testnet.is.yolo.money`. We’ve already added them to zebra and they’re [on their way](https://github.com/zcash/zcash/pull/4566) to being included in zcashd. When that PR merges, every full Zcash node will be able to join the network even if ECC is attacked or decides to stop running their seeders. Hooray, decentralization!

If you’d like to run your own seeder, you can follow the instructions in [coredns-zcash](https://github.com/ZcashFoundation/coredns-zcash) and feel free to ask for help in [the Foundation’s Discord server](https://discord.com/invite/na6QZNd). Inclusion in the main client implementations is a higher bar, requiring that you satisfy a few [policy requirements](https://zcash.readthedocs.io/en/latest/rtd_pages/dnsseed_policy.html). They aren’t too onerous, and the example configurations we provide already fulfill some of them.

That’s all for now. In the future we’d like to improve the seeder code to handle network upgrades and provide public insight (through metrics) into the state of the Zcash network, but we won’t have time to do more for a while. If either of those sound fun to you, get in touch on [GitHub](https://github.com/ZcashFoundation/dnsseeder/issues)!