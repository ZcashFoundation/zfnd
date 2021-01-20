---
layout: post
title: "Can Zcash Scale to a Million Users?"
excerpt: "Preparing Zcash for user adoption: what we can learn from Signal's rapid growth"
categories: blog
tags: user adoption
date: 2021-01-20
author: teor
---

Over the last few weeks, the Signal private messaging app has [experienced massive user growth, gaining tens of millions of new users](https://www.businessinsider.in/tech/news/signal-appears-to-be-down-for-some-users-after-the-messaging-app-saw-a-record-spike-in-downloads-recently/articleshow/80291051.cms), which [resulted in a partial outage](https://twitter.com/signalapp/status/1350118809860886528) for [24 hours](https://www.theverge.com/2021/1/17/22235707/signal-back-app-privacy-encrypted-outage). It is exciting to see privacy tools adopted at scale. But the Zcash ecosystem can also learn from Signal’s growing pains by understanding our current limits, and planning infrastructure improvements that can guarantee an uninterrupted and secure user experience.

As part of the foundation's goal to [grow user adoption](https://www.zfnd.org/blog/The-Zcash-Foundation-would-like-to-grow-user-adoption/), we want to understand the challenges to scaling Zcash. Once we know the limits of the current Zcash ecosystem, we plan to make the protocol and deployment changes needed to meet future user demand. These changes will help us maintain the Zcash network infrastructure in times of rapid growth.

As [Signal has experienced](https://twitter.com/signalapp/status/1350165610936766464), user growth can happen rapidly, driven by unexpected external events:
> We have been adding new servers and extra capacity at a record pace every single day this week nonstop, but today exceeded even our most optimistic projections. Millions upon millions of new users are sending a message that privacy matters. ...

Usage spikes are a common pattern for established privacy protocols. The Tor internet privacy network has also experienced [significant usage spikes](https://metrics.torproject.org/bandwidth.html?start=2010-01-01&end=2021-01-20) in response to external events. Tor is a mature, robust, distributed network, which has never gone down in response to usage spikes.

## Scalability Goals

The Foundation wants to build a Zcash network that can scale to handle extra load. Here are some of our scalability goals for the network:
* Users can keep on making Zcash payments within a reasonable time
* There are enough nodes and light wallet servers to support the extra load and scale appropriately
* Light wallet, node, mining, and exchange software doesn't crash or hang under load
* Outages are identified quickly, and users are kept informed until the outage is resolved
* The Zcash ecosystem has a scalability plan, and a network incident response plan

## Scalability Engineering Questions

Over the next few years, the Foundation wants to work towards solutions for the following Zcash scalability engineering questions:

#### How can we build a Zcash network that will scale to a million users?

* Can the community build the necessary infrastructure over the next 5 years?
* What protocol changes do we need to make to support user growth?
* What are the privacy benefits of additional Zcash usage?

#### How can Zcash handle unexpected usage spikes?

* What are the practical limits of the Zcash protocol today?
* Which limits can we address by adding more nodes, such as query responsiveness and transaction dissemination latency?
* Do we also need to scale out lightwallet servers, or other ecosystem infrastructure?
* How can we resolve the current wallet and transaction limits encountered by mining pools, exchanges, and funding stream recipients?
* Are node operators well-positioned to scale up more nodes rapidly in response to demand?

#### How has the Zcash network responded to previous usage spikes?

* How can we monitor the behavior of the Zcash network under load, while preserving user privacy?
* What can we learn from [Tor's privacy-preserving metrics collection](https://metrics.torproject.org/about.html#philosophy), which operates over a network of independently-operated nodes?

The Foundation wants to research these scalability questions, make the necessary protocol changes, and make plans to handle rapid user growth.

We are looking forward to collaborating with the ECC, the ZOMG, and the community in making private digital currency a reality for millions of regular users.
