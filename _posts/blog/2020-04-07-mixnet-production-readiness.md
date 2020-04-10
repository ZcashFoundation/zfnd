---
layout: post
title: "Assessing Mixnet Production-Readiness"
excerpt: "A discussion of mixnets and requirements for distributed anonymity networks in practice."
categories: blog
tags: []
date: 2020-04-10
author: chelseakomlo
---

All too often, the [law of the hammer][law-hammer] holds true:  if the only tool you have is a hammer, then everything looks like a nail. This law holds for non-physical tools as well. Any technologist is at risk of succumbing to the everything-is-a-nail mentality; it is all too easy to overprescribe technical solutions without understanding the nuances and tradeoffs for a specific setting beforehand.

One question I have heard come up when discussing user privacy across a wide range of contexts is the question “why not use a mixnet”? The question is so simple, and the motivations understandable. Unlike low-latency networks such as Tor, mixnet designs protect against global adversaries that can perform end-to-end timing correlation attacks. Consequently, mixnets have been prescribed for a range of settings.  However, in this post, we’ll dive into why determining if applications today should use mixnets to relay user traffic is not such a simple calculation, and explore some overlooked details that are needed in order to have mixnets be a viable option in the future.

## What is a Mixnet? How are they different to other network anonymity tools?

Mixnets – or “mix networks” – are a decentralized, distributed privacy-enhancing technology that provides anonymized traffic routing for higher-level applications. Mixnets are comprised of a set of independently-run servers all cooperating to route user traffic. Because servers participating in the mixnet are independently operated, it is possible that some nodes might be controlled by an adversary that can behave arbitrarily, such as recording or dropping traffic. However, so long as the mix network is of a sufficient size and diversity, user traffic has a high chance of remaining protected, even if some traffic is directed through a malicious node.

By routing traffic through a set of independently operated nodes, mixnets protect users against disclosing their identity to end receivers (and depending on the design, vice versa). By encrypting this traffic using some form of ‘layered encryption’ such as [onion encryption][onion-encryption], mixnets protect against malicious nodes on a user’s path that otherwise would eavesdrop on user traffic.[^1]

**Critically, what differentiates mixnets from other anonymity network designs is the concept of batching messages and adding latency to network traffic as it passes through the network.** When nodes route user traffic, before forwarding packets, nodes will hold traffic for some amount of time (therefore adding latency) before forwarding them on. In doing so, mixnets protect against an adversary that can observe the entire network and perform end-to-end timing correlation attacks.

Because mixnets add extra latency to network traffic, mixnets are better-suited to applications that are not as sensitive to increased latency, such as messaging or email applications. Conversely, applications such as real-time collaboration tools or video streaming applications would have increased user experience cost when used in conjunction with a mixnet.


## Why might someone recommend using a mixnet over other network anonymity tools?

Mixnets are often compared to the [Tor network][tor-network], one of the largest and best-known anonymity networks today. While mixnet designs can vary, **one key difference between mixnets and the Tor network is the injection of latency at each hop in a user’s path through a mixnet**, as discussed above. Tor is a low latency network, meaning that once a node receives user traffic, it forwards that traffic as soon as possible. This means that an adversary watching traffic in networks such as the Tor network could perform an end-to-end correlation attack by watching packets entering and leaving the network, and performing timing correlation to link these packets. However, Tor assumes that such an adversary is infeasible in practice, as nodes are distributed across a range of network providers and geographic locations. A mixnet, on the other hand, assumes such an adversary is in scope, and protects against such an adversary by adding latency to user traffic as it passes through each hop in its path through the network.

## Beyond their design, what else is needed to safely use mixnets in practice?
latency?

While the design of mixnets prevents many forms of end-to-end timing correlation attacks (such as by a global adversary), many other more nuanced security requirements must be met for a mixnet *deployed in a real-world setting* to provide sufficient protections to users. Let’s enumerate a couple.

- **A High Cost for Targeted Attacks by Malicious Nodes.** Any anonymity network requires a sufficient number of *independently operated* nodes so that an adversary operating their own nodes cannot gain sufficient probability of targeting specific users or being selected for the same path.
- **A Large Anonymity Set for Users.** So that an adversary watching the network cannot correlate encrypted traffic to a specific user by fingerprinting unique behavior, an anonymity network requires a sufficient number of users that have similar-enough usage patterns sending traffic through the network, resulting in a high anonymity set for each user.
- **Safe Distribution of Network Information.** Because nodes in an anonymity network are independently operated (and anyone can run a node), distributing information about the network to every user and node must have a safe root of trust. If network information cannot be authenticated, an adversary could change this information to trick users or nodes or gain an unfair advantage within the network. Information about the network includes the list of currently-active nodes, which must be updated as nodes join/leave the network or perform updates.
- **Protecting against DDOS and Network-Wide Attacks.** Because anonymity networks are large-scale public distributed systems, they require a mechanism to monitor the health of the network and ensure its resiliency, such as by identifying and kicking out misbehaving nodes. For example, nodes who are performing DDOS attacks against the network and consequently preventing client use.
- **Rapid Response to Identified Vulnurabilities.** Similar to any large-scale software project, any anonymity network requires a sufficiently active community and set of contributors to perform software maintenance and general updates and coordination.
- **Ongoing Support for End-User Products.** Achieving a large anonymity set for users requires providing a good end-user product, such as exposing easy mechanisms for user-facing applications to send traffic over the network. As such, anonymity networks must provide application support- the ability for applications to forward and receive user traffic through the network, and keep locally-held information about the network up to date (while maintaining good usability for end users, by not consuming too much CPU, memory, etc).

These are just a few examples; this list is not exhaustive. The important takeaway from the above list is that a successful mixnet project (or any anonymity network project) is more than just its design; it must also be a trustworthy, deployed, established open-source software project *and* end-user product that is well-maintained *over the long term*. Achieving these objectives requires large-scale dedication on many levels as well as organizational infrastructure, research maturity, and a large set of other intangibles that cannot be achieved by simply publishing a novel research paper.

However, some metrics are more tangible than others; we can quickly see how Tor addresses a couple of the points above that are more easily quantifiable. For the first point, the current Tor network has approximately [7,000 servers][tor-servers] hosted across over [1,000 autonomous systems][tor-network-diversity]. Per the second point, Tor has over [two million users][tor-clients]. Per the third point, network information in Tor, termed the *consensus*, is authenticated by servers run by trusted community members termed the *directory authorities*. For the fourth point, Tor has a standard process for [reporting and handling malicious relays][bad-relays]. For the fifth point, Tor has received [thousands of commits][tor-contributions] from a large range of users, from 2004 to today. For the sixth point, end users can interface with Tor using a range of applications, including [Tor Browser][tor-browser] and [Secure Drop][secure-drop].

Note that even with a large number of users around the globe, individual users' pattern of behavior on *any anonymity network* will impact their privacy regardless of the size of the anonymity set on that network. [One recent example][harvard-student] is that of a Harvard student who was deanonymized simply because of the time of day which he accessed Tor via the Harvard network. This risk is outside the realm for which the Tor protocol (or mixnet protocols) can provide protection, but still is an important consideration when assessing the safety of users when using an anonymity network.

## What needs to be in place in order for applications to “just start sending their traffic over a mixnet”? Where are we today with usable tools?

Most importantly, it is important to acknowledge that no mixnet currently exists that is of sufficient size to support a large number of users and high amounts of network traffic. However, there are exciting developments such that one could exist in the future (one that I personally am rooting for is [Nym][nym]; their team has well-respected senior researchers in the field of network privacy). However, practically, a lot of growth and maturity is needed before such networks can be used at scale. As described in the prior section, factors to consider include growing the number of nodes participating in the network, ensuring sufficient organizational structure so that the underlying software is well-supported and kept up-to-date, and developing mechanisms to protect against bad actors in the system such as malicious nodes or entities performing denial of service attacks.

Further, as described in the prior section, a critical consideration to keep in mind even as mixnets mature is the size of its anonymity set. While mixnets inject latency (and possibly cover traffic) as packets move through the network, the size of the mixnet’s user base still directly impacts the resulting privacy of users of that mixnet. It doesn't matter how much latency or injected packets a mixnet adds if I'm the only user of that mixnet; an adversary can still deanonymize me.

Consequently (and perhaps not intuitively), in the case of anonymity networks, fewer options for users is truly better. This is because of the "strength in numbers" property; the privacy that an anonymity network can provide to any user is directly correlated with the number of users *actively* using the network.

## What are the main takeaways I should come away with regarding mixnets and their production-readiness?

First, mixnet designs provide increased security against a global adversary seeking to perform end-to-end timing correlation attacks, whereas low-latency networks like Tor do not consider such an adversary in their threat model.

Second, such a network currently does not exist that can be used at scale, or with as large of an anonymity set as the Tor network.

Third, mixnets do not *unilaterally* provide better security than non-mixnet anonymity networks. Other hard security problems still exist, such as securely distributing network information using a sufficient root of trust mechanism, and stable community involvement to perform ongoing tasks like software maintenance.

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
[tor-contributions]: https://github.com/torproject/tor/graphs/contributors
[tor-browser]: https://en.wikipedia.org/wiki/Tor_(anonymity_network)#Tor_Browser
[secure-drop]: https://en.wikipedia.org/wiki/SecureDrop
[harvard-student]: https://www.forbes.com/sites/runasandvik/2013/12/18/harvard-student-receives-f-for-tor-failure-while-sending-anonymous-bomb-threat/#21eea1e15457



