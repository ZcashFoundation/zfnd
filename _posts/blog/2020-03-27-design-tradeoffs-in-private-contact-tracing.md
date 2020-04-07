---
layout: post
title: "Design Tradeoffs in Privacy-Preserving Contact Tracing"
excerpt: "Discussion of some design tradeoffs for privacy-preserving contact tracing protocols."
categories: blog
tags: [cryptography, development]
date: 2020-03-27
author: hdevalence
---

In our [previous post][post], we talked about how the problem of building
decentralized, privacy-preserving contact tracing systems is an opportunity to
meaningfully apply cryptography to a pressing public health problem.  That post
described one effort, [TraceTogether], but there are several other efforts in
development.  In this post, we'll describe a cryptographic perspective on the
contact tracing problem, identifying different design tradeoffs in the problem
space, as well as how different efforts compare on those tradeoffs.  Finally,
we'll describe an abstract set of functionality that seems useful for contact
tracing and some other applications.

Before going further, it's important to describe the limited scope and
perspective of this post.  First, [contact tracing][tracing-wiki] is not a
silver-bullet solution, but one tool among many, such as widespread testing and
face masks (both of which have yet to be deployed in the US).  Second, it's
most useful in the earliest stage of an epidemic, while many regions are
unfortunately well past that stage.  However, even in the optimistic case where
suppression mechanisms such as shelter-in-place orders are effective and the
prevalence of COVID-19 drops, we will continue to be in the earliest stages of
an epidemic until a vaccine is widely available.  And as noted in our [previous
post][post], it's an area where cryptography can play a useful role.

Cryptography builds systems that mediate and rearrange trust.  Because trust is
hard to scale, this often takes the form of reducing the need for trust, or for
leveraging trust in a smaller context to apply to a wider one.  For instance,
transport encryption like TLS eliminates the need to trust network
intermediaries, and digital signatures allow converting trust in the integrity
of a single signing key into trust in the integrity of arbitrary messages.

So when considering how cryptography could be used for contact tracing systems,
we should first try to classify the categories of trust involved in the problem:

1.  **Trust in access to and use of location data**.  Location data is highly
    sensitive.  Who is allowed access to it, under what circumstances?  Can
those parties be trusted to have that access?  As a matter of perception, are
they?  Is that data centralized in one place?  Is it subject to legal risks,
like subpoenas?

2.  **Trust in functional capacity of health authorities**.  In an ideal world,
    health authorities would have unlimited resources and perfect effectiveness
in deploying them.  But in the real world, health authorities have limited
resources, are strained under the burden of dealing with the epidemic, or may
fail to respond adequately or effectively.  All of these factors can cause
health authorities to be unable to carry out their function, and there have
been examples of all of them so far.  Is the system reliant on that function,
or is it resilient in case of failure?  While no technological system can
properly compensate for institutional failure, a system that is resilient to
failure can potentially absorb slack and give people agency to help themselves.  

3.  **Trust in report integrity and availability**.  What measures does the
    system use, if any, to determine the integrity of a report of infection?
Are those reports authenticated in some way, and if so, by whom?  On the other
side, what measures does the system use, if any, to ensure that users can make
reports of infection available?  There is a tension between integrity and
availability, especially when health authorities are under stress and access to
testing is limited.

These categories let us compare and contrast different approaches to the
problem.  

The furthest-developed seems to be [TraceTogether], produced by the Government
of Singapore.  It uses [Bluetooth Low Energy (BLE)][ble] to broadcast ephemeral
encryptions of user identifiers, and logs all observed broadcasts.  If a user
becomes infected, they can be tested by the Singapore Ministry of Health (MoH),
who can request (with legal authority) and decrypt that user's log entries.
The MoH promises not to use the data for other purposes.  This system is much
better than location tracking, since rather than exact location, only
contacts are recorded, and because data is held locally and is only obtained
by the MoH on infection, but still requires trust that the data will not be
misused or mishandled.  However, it relies critically on the functional
capacity of the MoH to perform testing and contact notification, and this may
not be easily replicable outside of Singapore.

Another approach is [PrivateKit/SafePaths][pk_sp], produced by researchers from
the MIT Media Lab and others.  It performs geolocation tracking to produce a
complete log of users' movements.  Users who become infected can upload their
complete location history to a health authority.  Then, a health official
decides what information is personally identifiable and uses a custom web app
to “redact” and “blur” the history before publishing it.  Other users can then
download the trail and compare it with their history.  This system does not
provide location privacy, since a complete track is given to a health official,
who has to decide what location data is sensitive.  (In fact, [all location
data is sensitive][sensitive]).  And not only is it reliant on the
participation of a health authority, it also adds a burdensome redaction
process to their workload.

A third approach is Enigma's [SafeTrace], which aims to build a contact tracing
system using [Intel SGX][sgx], processing user data inside of a secure enclave
and relying on Intel hardware attestations to verify that the version of the
code running in the enclave is one that does not compromise user privacy.  This
protects location data, as long as SGX is completely reliable.  However, it's
unclear how justified this trust is, as SGX security has been [repeatedly
broken][sgx], with the most [recent attack][0551] about two weeks ago.

Finally, [Covid-Watch] and [Community Epidemiology (CoEpi)][CoEpi] are two
efforts collaborating on a common protocol for Bluetooth-based contact tracing.
This protocol is under development, but unlike TraceTogether, matching occurs
on the client, so it does not require a centralized party to match contacts.
This means it has even lower trust requirements for the first trust category.
The prospect of a shared protocol is also very exciting, because any protocol
for contact tracing will have very powerful network effects.  While these
efforts are collaborating on a common protocol, they make different choices in
the second trust category: Covid-Watch trusts health authorities to report
infections, while CoEpi aims to allow self-reporting.  This choice has
implications for the third category, since trusting health authorities may make
report integrity easier, while allowing self-reporting helps availability – for
instance if there is a testing shortage.

At a general level, if we don't assume the presence of a centralized party that
can be trusted to verify reports of infection, what we're left with is not
really a contact tracing protocol but a particular kind of messaging
protocol, where users create tracks through space and time, and can perform
**anonymous retrospective broadcasts** to users whose tracks were spatially
nearby to theirs in a particular time range.  What follows is a sketch of 
some potential ideal functionality for this kind of system.

This messaging system should be privacy-preserving, in the following sense:

- **Server Privacy**: An honest-but-curious server should not learn information about any user's space-time tracks;
- **Locality Integrity**: A user should not be able to broadcast messages to users who were not nearby to them;
- **User Privacy**: 
  - A passive adversary cannot not learn any information about a user's space-time track outside of the segments they have broadcast messages to. This means that users who do not broadcast reveal no information about their movements.
  - Users who broadcast messages to segments of their space-time track reveal only the existence and content of a message to users whose tracks were not adjacent to theirs.  This means that the messages themselves are public; what's private is the addressing/matching.
  - Users who receive messages learn only the fact that their track was nearby to the user's track at some time. This means that passive adversaries must cover space and time or else recruit users to collude to reconstruct the track of a user who broadcasts a message.
  - Users who receive messages reveal no information to the users who broadcast them.

For efficiency reasons, it would be ideal to create a protocol whose
interactions could fit into the following model:

- **Registration Phase**: users register with the server and perform some setup.
- **Gossip Phase**: users broadcast 26-byte data packets over BLE (but do not interact).
- **Broadcast Phase**: a user uploads a packet of data to the server to broadcast a message to a particular segment of their track.
- **Scan Phase**: users monitor data published by the server to learn whether a message has been broadcast to them.
- **Fetch Phase**: users who learn of a message addressed to them can download it.

This system can be used to implement decentralized contact tracing, by allowing
users who test positive to anonymously broadcast a message to inform their past
contacts of their test.  Users who receive a message can make an informed
judgement based on its contents.  Separating the messaging problem from the
contact tracing problem and allowing users (or user-agents) to make decisions
of their own is significantly more flexible.  For instance, a user could
publish a photo of a test result with their name redacted, or reveal their
identity by linking to a social media post, or post a link to some
institutional verification mechanism, if one existed.

This system has other potential applications beyond contact tracing, such as
building a system like Craigslist's Missed Connections with notifications.
Also, this system's communication flow is compatible with a moderation / karma
system that can be used to ban accounts that post spam or abusive messages.
This would work by reporting bad messages to the server, which would prevent
them from being downloaded by other users, and/or ban the user that uploaded
them.

[post]: https://www.zfnd.org/blog/decentralized-contact-tracing/
[TraceTogether]: https://www.tracetogether.gov.sg/
[tracing-wiki]: https://en.wikipedia.org/wiki/Contact_tracing
[ble]: https://en.wikipedia.org/wiki/Bluetooth_Low_Energy
[pk_sp]: http://safepaths.mit.edu/
[sgx]: https://en.wikipedia.org/wiki/Software_Guard_Extensions#Attacks
[sensitive]: https://techcrunch.com/2019/07/24/researchers-spotlight-the-lie-of-anonymous-data/
[SafeTrace]: https://blog.enigma.co/safetrace-privacy-preserving-contact-tracing-for-covid-19-c5ae8e1afa93
[0551]: https://nvd.nist.gov/vuln/detail/CVE-2020-0551
[Covid-Watch]: https://www.covid-watch.org/
[CoEpi]: https://www.coepi.org/
