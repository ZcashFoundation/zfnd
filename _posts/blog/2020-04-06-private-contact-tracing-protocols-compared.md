---
layout: post
title: "Private Contact Tracing Protocols Compared: DP-3T and CEN"
excerpt: "A comparison of the DP-3T and CEN protocols for private contact tracing."
categories: blog
tags: []
date: 2020-04-06
author: hdevalence
---

Two weeks ago, we [published a call-to-action][call_post] urging the
cryptography and privacy community to come together to work on the problem of
privacy-preserving contact tracing.  As noted in that post, it's critically
important to prevent the creation of new surveillance infrastructure that
gives more power to the very institutions whose failures contributed to the
crisis.  But contact tracing will be a critical part of COVID-19 recovery,
particularly in the period after the surge of cases, but before widespread
immunity prevents transmission.  

So it's been incredibly exciting to see how many people have been working on
this problem in a spirit of radical collaboration.  Some of these projects are
mentioned in our previous post on [design tradeoffs in contact tracing
systems][tradeoffs_post].  At the Zcash Foundation, we've been collaborating on
the [CEN Protocol][cen_protocol], originally started as a joint effort between
two projects, [CoEpi] and [Covid-Watch].  And earlier this week, a group of
European academics announced a new effort called [DP-3T].  These protocols are
very similar, and it would be great if they could both evolve towards a common
standard.  To support that goal, this post will compare and contrast the
current designs of the DP-3T and CEN protocols.




[call_post]: https://www.zfnd.org/blog/decentralized-contact-tracing/
[tradeoffs_post]: https://www.zfnd.org/blog/design-tradeoffs-in-private-contact-tracing/
[Covid-Watch]: https://www.covid-watch.org/
[CoEpi]: https://www.coepi.org/
[DP-3T]: https://github.com/DP-3T/documents/blob/6ac18840fce3dd1c5e8f101dda7f036cffcbccee/DP3T%20White%20Paper.pdf
