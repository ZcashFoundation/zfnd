---
layout: post
title: "Assessing Mixnet Production-Readiness"
excerpt: "A discussion of mixnets and requirements for distributed anonymity networks in practice."
categories: blog
tags: []
date: 2020-04-06
author: chelseakomlo
---

All too often, the [law of the hammer][law-hammer] holds true:  if the only tool you have is a hammer, then everything looks like a nail. This law holds for non-physical tools as well. Any technologist is at risk of succumbing to the everything-is-a-nail mentality; it is all too easy to overprescribe technical solutions without understanding the nuances and tradeoffs for a specific setting beforehand.

One question I have heard come up when discussing user privacy across a wide range of contexts is the question “why not use a mixnet”? The question is so simple, and the motivations understandable. Mixnet designs protect against global adversaries that can perform end-to-end timing correlation attacks; adversaries that low-latency networks such as Tor do not protect against. Consequently, mixnets have been prescribed for use across a range of settings, typically for applications such as messaging or email which can tolerate the higher latency that mixnets require when forwarding traffic. However, in this post, we’ll dive into why determining if applications today should use mixnets to relay user traffic is not such a simple calculation, and explore some overlooked details that are needed in order to have mixnets be a viable option in the future.

## What is a Mixnet? How are they different to other network anonymity tools?

Mixnets – or “mix networks” – are a decentralized, distributed privacy-enhancing technology that provides anonymized traffic routing for higher-level applications. Mixnets are comprised of a set of independently-run servers all cooperating to route user traffic. Because servers participating in the mixnet are independently operated, it is possible that some nodes might be controlled by an adversary that can behave arbitrarily, such as recording or dropping traffic. However, so long as the mix network is of a sufficient size and diversity, user traffic has a high chance of remaining protected, even if some traffic is directed through a malicious node.

By routing traffic through a set of independently operated nodes, mixnets protect users against disclosing their identity to end receivers (and depending on the design, vice versa). By encrypting this traffic using some form of ‘layered encryption’ such as [onion encryption][onion-encryption], mixnets protect against malicious nodes on a user’s path that otherwise would eavesdrop on user traffic.

Critically, what differentiates mixnets from other anonymity network designs is the concept of adding arbitrary latency. When nodes route user traffic, before forwarding packets, nodes will hold traffic for some amount of time (therefore adding latency) before forwarding them on. In doing so, mixnets protect against an adversary that can observe the entire network and perform end-to-end timing correlation attacks.

Note that application traffic sent over a mixnet is assumed to itself be end to end encrypted, otherwise, the entry and exit nodes in a user’s path could view the traffic in the clear.

## Why might someone recommend using a mixnet over other network anonymity tools?

Mixnets are often compared to the [Tor network][tor-network], one of the largest and best-known anonymity networks today. While mixnet designs can vary, one key difference between mixnets and the Tor network is the injection of arbitrary latency at each hop in a user’s path through a mixnet, as discussed above. Tor is a low latency network, meaning that once a node receives user traffic, it forwards that traffic as soon as possible. This means that an adversary watching traffic in networks such as the Tor network could perform an end-to-end correlation attack by watching packets entering and leaving the network, and performing timing correlation to link these packets. However, Tor assumes that such an adversary is infeasible in practice, as nodes are distributed across a range of ASes and geographic locations. A mixnet, on the other hand, assumes such an adversary is in scope, and protects against such an adversary by adding latency to user traffic as it passes through each hop in its path through the network.

## What is needed to safely use a mixnet in practice?

While the design of mixnets prevents many forms of end-to-end timing correlation attacks (such as by a global adversary), many other more nuanced security requirements must be met for a mixnet to provide sufficient protections to users in practice. Let’s enumerate a couple.

- A sufficient number of nodes in the network such that an adversary operating their own nodes cannot gain sufficient probability of targeting specific users or having their nodes be selected for the same path.
- A trustworthy way of distributing information about the network, so that an adversary cannot trivially change this information in order to trick users or nodes or gain an unfair advantage within the network. Information about the network includes the list of currently-active nodes, which must be updated as nodes join/leave the network or perform updates.
- A way to monitor the health of the network and ensure its resiliency, such as by identifying and kicking out misbehaving nodes. For example, nodes who are performing DDOS attacks against the network and consequently preventing client use.
- A sufficiently active community and set of contributors to perform software maintenance and general updates and coordination.
- Application support- the ability for applications to interact with the network, forward and receive traffic sent through the network, and keep locally-held information about the network up to date.

These are just a few examples; this list is not exhaustive.

## What needs to be in place in order for applications to “just start sending their traffic over a mixnet”? Where are we today with usable tools?

Most importantly, it is important to acknowledge that no mixnet currently exists that is of sufficient size to support a large number of users and high amounts of network traffic. However, there are exciting developments such that one could exist in the future (one that I personally am rooting for is [Nym][nym]; their team has well-respected senior researchers in the field of network privacy). However, practically, a lot of growth and maturity is needed before such networks can be used at scale.

Another important consideration to keep in mind is the size of anonymity sets for any anonymity network. Even though mixnets inject latency, the size of the mixnet’s user base still impacts the possible protections for users of that mixnet. So even if such a mixnet did exist, the amount of traffic and number of users directly correspond to the size of the anonymity set protecting each user. In the case of anonymity networks, fewer options is truly better.

## What are the main takeaways I should come away with regarding mixnets and their production-readiness?

First, mixnet designs provide increased security against a global adversary seeking to perform end-to-end timing correlation attacks, whereas low-latency networks like Tor do not consider such an adversary in its threat model.

Second, such a network currently does not exist that can be used at scale, or with as large of an anonymity set as the Tor network.

Third, mixnets do not unilaterally provide better security against *all other kinds of adversaries* than non-mixnet anonymity networks. Other hard security problems still exist, such as securely distributing network information using a sufficient root of trust mechanism, and stable community involvement to perform ongoing tasks like software maintenance.

Finally, network anonymity is only one small part within a larger setting that defines how users are protected in their day-to-day interactions online. So when designing for the safety and privacy of users online, let’s take a step back and truly consider every factor, and strive to use every tool at our disposal to design and build systems that ensure the respect and privacy of our users.



[law-hammer]: https://en.wikipedia.org/wiki/Law_of_the_instrument
[onion-encryption]: https://en.wikipedia.org/wiki/Onion_routing
[tor-network]: https://www.torproject.org/
[nym]: https://nymtech.net/



