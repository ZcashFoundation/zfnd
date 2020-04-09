---
layout: post
title: "Assessing Mixnet Production-Readiness"
excerpt: "A discussion of mixnets and requirements for distributed anonymity networks in practice."
categories: blog
tags: []
date: 2020-04-09
author: chelseakomlo
---

All too often, the [law of the hammer][law-hammer] holds true:  if the only tool you have is a hammer, then everything looks like a nail. This law holds for non-physical tools as well. Any technologist is at risk of succumbing to the everything-is-a-nail mentality; it is all too easy to overprescribe technical solutions without understanding the nuances and tradeoffs for a specific setting beforehand.

One question I have heard come up when discussing user privacy across a wide range of contexts is the question “why not use a mixnet”? The question is so simple, and the motivations understandable. Unlike low-latency networks such as Tor, mixnet designs protect against global adversaries that can perform end-to-end timing correlation attacks. Consequently, mixnets have been prescribed for a range of settings.  However, in this post, we’ll dive into why determining if applications today should use mixnets to relay user traffic is not such a simple calculation, and explore some overlooked details that are needed in order to have mixnets be a viable option in the future.

## What is a Mixnet? How are they different to other network anonymity tools?

Mixnets – or “mix networks” – are a decentralized, distributed privacy-enhancing technology that provides anonymized traffic routing for higher-level applications. Mixnets are comprised of a set of independently-run servers all cooperating to route user traffic. Because servers participating in the mixnet are independently operated, it is possible that some nodes might be controlled by an adversary that can behave arbitrarily, such as recording or dropping traffic. However, so long as the mix network is of a sufficient size and diversity, user traffic has a high chance of remaining protected, even if some traffic is directed through a malicious node.

By routing traffic through a set of independently operated nodes, mixnets protect users against disclosing their identity to end receivers (and depending on the design, vice versa). By encrypting this traffic using some form of ‘layered encryption’ such as [onion encryption][onion-encryption], mixnets protect against malicious nodes on a user’s path that otherwise would eavesdrop on user traffic.[^1]

Critically, what differentiates mixnets from other anonymity network designs is the concept of batching messages and adding latency to network traffic as it passes through the network. When nodes route user traffic, before forwarding packets, nodes will hold traffic for some amount of time (therefore adding latency) before forwarding them on. In doing so, mixnets protect against an adversary that can observe the entire network and perform end-to-end timing correlation attacks.


## Why might someone recommend using a mixnet over other network anonymity tools?

Mixnets are often compared to the [Tor network][tor-network], one of the largest and best-known anonymity networks today. While mixnet designs can vary, one key difference between mixnets and the Tor network is the injection of arbitrary latency at each hop in a user’s path through a mixnet, as discussed above. Tor is a low latency network, meaning that once a node receives user traffic, it forwards that traffic as soon as possible. This means that an adversary watching traffic in networks such as the Tor network could perform an end-to-end correlation attack by watching packets entering and leaving the network, and performing timing correlation to link these packets. However, Tor assumes that such an adversary is infeasible in practice, as nodes are distributed across a range of network providers and geographic locations. A mixnet, on the other hand, assumes such an adversary is in scope, and protects against such an adversary by adding latency to user traffic as it passes through each hop in its path through the network.

Because mixnets add extra latency to network traffic, mixnets are better-suited to applications that are not as sensitive to increased latency, such as messaging or email applications. Conversely, applications such as real-time collaboration tools or video streaming applications would have increased user experience cost when used in conjunction with a mixnet.

## What is needed to safely use a mixnet in practice?

While the design of mixnets prevents many forms of end-to-end timing correlation attacks (such as by a global adversary), many other more nuanced security requirements must be met for a mixnet to provide sufficient protections to users in practice. Let’s enumerate a couple.

- A sufficient number of *independently operated* nodes in the network such that an adversary operating their own nodes cannot gain sufficient probability of targeting specific users or being selected for the same path.
- A sufficient number of users with similar-enough usage patters sending traffic through the network to have a high anonymity set for each user.
- A trustworthy way of distributing information about the network, so that an adversary cannot change this information in order to trick users or nodes or gain an unfair advantage within the network. Information about the network includes the list of currently-active nodes, which must be updated as nodes join/leave the network or perform updates.
- A way to monitor the health of the network and ensure its resiliency, such as by identifying and kicking out misbehaving nodes. For example, nodes who are performing DDOS attacks against the network and consequently preventing client use.
- A sufficiently active community and set of contributors to perform software maintenance and general updates and coordination.
- Application support- the ability for applications to interact with the network, forward and receive traffic sent through the network, and keep locally-held information about the network up to date.

These are just a few examples; this list is not exhaustive. The important takeaway from the above list is that a successful mixnet project (or any anonymity network project) is more than just its design; it must also be a trustworthy, deployed, established open-source software project *and* end-user product that is well-maintained *over the long term*. Achieving these objectives requires large-scale dedication on many levels as well as organizational infrastructure, research maturity, and a large set of other intangibles that cannot be achieved by simply publishing a novel research paper.

However, some metrics are more tangible than others; we can quickly see how Tor addresses a couple of the points above that are more easily quantifiable. For the first point, the current Tor network has approximately [7,000 servers][tor-servers] hosted across over [1,000 autonomous systems][tor-network-diversity]. Per the second point, Tor has just over [two million users][tor-clients]. Per the third point, network information in Tor, termed the *consensus*, is authenticated by servers run by trusted community members termed the *directory authorities*. For the fourth point, Tor has a standard process for [reporting and handling malicious relays][bad-relays].

Note that even with a large number of users around the globe, the usage pattern of individual users still can decrease their overall anonymity even while using anonymity networks such as Tor. [One recent example][harvard-student] is that of a Harvard student who was deanonymized simply because of the time of day which he accessed Tor via the Harvard network. This consideration is outside the Tor protocol but still is an important consideration when assessing the safety of users by an anonymity network.

## What needs to be in place in order for applications to “just start sending their traffic over a mixnet”? Where are we today with usable tools?

Most importantly, it is important to acknowledge that no mixnet currently exists that is of sufficient size to support a large number of users and high amounts of network traffic. However, there are exciting developments such that one could exist in the future (one that I personally am rooting for is [Nym][nym]; their team has well-respected senior researchers in the field of network privacy). However, practically, a lot of growth and maturity is needed before such networks can be used at scale.

Another important consideration to keep in mind is the size of anonymity sets for any anonymity network. Even though mixnets inject latency, the size of the mixnet’s user base still impacts the possible protections for users of that mixnet. So even if such a mixnet did exist, the amount of traffic and number of users directly correspond to the size of the anonymity set protecting each user. In the case of anonymity networks, fewer options is truly better.

## What are the main takeaways I should come away with regarding mixnets and their production-readiness?

First, mixnet designs provide increased security against a global adversary seeking to perform end-to-end timing correlation attacks, whereas low-latency networks like Tor do not consider such an adversary in its threat model.

Second, such a network currently does not exist that can be used at scale, or with as large of an anonymity set as the Tor network.

Third, mixnets do not unilaterally provide better security against *all other kinds of adversaries* than non-mixnet anonymity networks. Other hard security problems still exist, such as securely distributing network information using a sufficient root of trust mechanism, and stable community involvement to perform ongoing tasks like software maintenance.

Finally, network anonymity is only one small part within a larger setting that defines how users are protected in their day-to-day interactions online. So when designing for the safety and privacy of users online, let’s take a step back and truly consider every factor, and strive to use every tool at our disposal to design and build systems that ensure the respect and privacy of our users.

[^1]: Note that application traffic sent over a mixnet is assumed to itself be end to end encrypted, otherwise, the entry and exit nodes in a user’s path could view the traffic in the clear.

[law-hammer]: https://en.wikipedia.org/wiki/Law_of_the_instrument
[onion-encryption]: https://en.wikipedia.org/wiki/Onion_routing
[tor-network]: https://www.torproject.org/
[nym]: https://nymtech.net/
[tor-servers]: https://metrics.torproject.org/networksize.html
[tor-clients]: https://metrics.torproject.org/userstats-relay-country.html
[tor-network-diversity]: https://metrics.torproject.org/bubbles.html#as
[bad-relays]: https://blog.torproject.org/how-report-bad-relays
[harvard-student]: https://www.forbes.com/sites/runasandvik/2013/12/18/harvard-student-receives-f-for-tor-failure-while-sending-anonymous-bomb-threat/#21eea1e15457



