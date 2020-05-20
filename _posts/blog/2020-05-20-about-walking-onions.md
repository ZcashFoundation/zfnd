---
layout: post
title: "Scaling Tor with Walking Onions"
excerpt: "Why Walking Onions is an exciting project for scaling anonymity networks and user privacy in general."
categories: blog
tags: [research]
date: 2020-05-20
author: chelseakomlo
image: walking-onion.jpg
---

![This is what Google says is a Walking Onion. Image source: https://www.gardeningknowhow.com/ornamental/flowers/walking-onion/growing-walking-onions.htm](/images/walking-onion.jpg)

Recently, the Zcash Foundation [announced a grant to The Tor Project](https://grants.zfnd.org/proposals/1642205075-walking-onions-scaling-the-tor-network) to fund the specification of the [Walking Onions protocol](https://crysp.uwaterloo.ca/software/walkingonions/). In this post, we’ll talk about why Walking Onions is an exciting project for scaling anonymity networks and user privacy in general. We will also give more detail about the Zcash Foundation's decision to fund The Tor Project to write a detailed specification for how to integrate Walking Onions into the Tor protocol. As a short summary, Walking Onions will both improve the usability of Tor for existing users, and also improve the feasibility of seamless integration of Tor into bandwidth-sensitive applications such as cryptocurrency wallets. As such, we believe funding this work to be beneficial to both Zcash users and the larger Internet community.

## What is Walking Onions?

First, let's quickly discuss at a high level the core concepts of Walking Onions and how these concepts enable anonymity networks to efficiently scale. (for full disclosure, the author of this blog post is also an author on the Walking Onions paper.)

At a high level, Walking Onions is a set of protocols that help anonymity networks scale more efficiently as additional nodes and users join the network. What this means is that anonymity networks can add more nodes to the network in order to increase the amount of bandwidth offered to users (and consequently can support more users) *without* increasing the overhead for users! Which is great news, as we hope that more and more people in the future begin to use tools that route traffic through anonymity networks.

Walking Onions achieves improved efficiency for anonymity networks by two distinct features. First, the protocol specifies a new mechanism for encoding network directory information in such a way that each entry in the document — representing information about a single node — can be individually authenticated. In other words, the entire network directory document is not required in order to verify that specific information about individual nodes is authentic and timely.  Second, the Walking Onions protocol specifies an efficient mechanism so that clients can verifiably build paths through an anonymity network without downloading the entire network directory document beforehand.

While the above two features sound simple, ensuring that they can be integrated into an anonymity network without increasing the attack surface to adversaries is the tricky part. Importantly, the Walking Onions design maintains a similar threat model to the existing Tor network by protecting against fingerprinting and route-capture attacks. While we encourage you to read the paper for more details, at a high level, Walking Onions protects against these attacks by allowing clients to verify the integrity of their path *after* building them, and also ensuring that clients verifiably maintain a complete view of the network (and hence maintain a single anonymity set for all users).

## How will Walking Onions help Tor specifically scale?

Currently, the Tor protocol requires that *all* participants in the network download the network directory document---called the “consensus”---when bootstrapping to the network, and then to periodically fetch updates to this document. While such overhead may be tolerable for nodes, Tor clients are often less tolerant of high bandwidth overheads. For example, mobile clients, clients with low bandwidth connections, or even clients which infrequently require sending data over Tor (or “almost always off” clients) all face disproportionate bandwidth costs even in a network the size of Tor today. As more nodes are added to the Tor network, this bandwidth overhead for clients also proportionally grows (as the consensus increases in size with each new relay entry), further aggravating this issue.

Therefore, Walking Onions achieves two improvements to the Tor network. First, Tor clients today will have a lower overall bandwidth cost when bootstrapping and maintaining a connection to the network. Second, as Tor grows in the future, the overhead for clients will remain constant! So the benefit of Walking Onions only increases as the Tor network scales in the future.

## Why did the Zcash Foundation fund this work?

The mission of the Zcash Foundation is to build financial privacy infrastructure for the public good. While this mission can materialize in a number of ways, ensuring network privacy is one critical component to our mission.

As part of our [team's roadmap](https://www.zfnd.org/blog/eng-roadmap-2020/), we are researching mechanisms to seamlessly integrate network privacy to further protect the privacy of transactions made with Zcash. As part of this work, we are investigating Tor as an immediate option to integrate into Zcash wallets and full nodes, while also keeping an eye on possible future network privacy alternatives that today are too unstable to be considered. We will keep the Zcash community updated with our findings and plans as this work continues.

One attractive feature for Zcash that Walking Onions introduces is the ability to maintain "light Tor clients", or clients with little overhead even when sending data over the Tor network. As such, we see Walking Onions having direct improvements to the feasibility of seamless Tor integration into Zcash wallet software in the future.

However, improving critical network privacy infrastructure such as Tor is both a benefit to Zcash users and to the privacy and anonymity of everyone. We are proud to fund the work to develop a fine-grained Walking Onions specification for Tor. We also urge other organizations that are interested in these scalability improvements to Tor to contribute funding to the development of Walking Onions after this specification stage is complete.

