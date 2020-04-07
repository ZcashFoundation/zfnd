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

## Protocol structure

Both protocols provide decentralized contact tracing using Bluetooth
broadcasts from users' mobile devices.  In short, users generate and 
broadcast short-lived pseudorandom values over Bluetooth.  These values
are recorded by nearby devices, but because they are pseudorandom, they
reveal no information about a user's identity or location history.

Later, users who develop symptoms or test positive can send a report to
any potential contacts by uploading a packet of data to a server.  Other
users can monitor data published by the server to learn whether they
have received any reports.

In other words, both protocols have three main phases:

- **Broadcast**: users generate and broadcast pseudorandom values over
  Bluetooth to nearby devices.
- **Report**: a user uploads a packet of data to a server to send a report to
  all users they may have encountered in some time interval.
- **Scan**: users monitor data published by the server to learn whether they
  have received any reports.

## Desirable properties

To analyze these protocols, it's useful to have a named list of
desirable properties.  These names are adapted from the description of
the CEN protocol:

- **Server Privacy**: An honest-but-curious server should not learn information
  about any user's location or contacts.
- **Source Integrity**: Users cannot send reports to users they did not come
  in contact with or on behalf of other users.
- **Broadcast Integrity**: Users cannot broadcast CENs they did not generate.
- **No Passive Tracking**: A passive adversary monitoring Bluetooth connections
  should not be able to learn any information about the location of users who
  do not send reports.
- **Receiver Privacy**: Users who receive reports do not reveal information to
  anyone.
- **Reporter Privacy**: Users who send reports do not reveal information
  to users they did not come in contact with, and reveal only the time of
  contact to users they did come in contact with.  Note that in practice, the
  timing alone may still be sufficient for their contact to learn their
  identity (e.g., if their contact was only around one other person at the
  time).

## DP-3T

The current iteration of DP-3T works as follows.  Each user uses a hash
function `H` to generate a sequence of secret *day keys*
```
SK_i ← H(SK_{i-1})
```
starting from an initial, random secret.  Each *day key* expands to `n`
*ephemeral IDs*.  These are the 16-byte pseudorandom values broadcast by
the application.  The ephemeral IDs for each day are generated all at
once as 16-byte chunks of the output of a stream cipher keyed by (a PRF
of) `SK_i`.

This procedure is illustrated in the following diagram:
```
┌───────┐    ┌───────┐    ┌───────┐           ┌───────┐
│ SK_1  │───▶│ SK_2  │───▶│ SK_3  │───▶...───▶│ SK_n  │───▶...
└───────┘    └───────┘    └───────┘           └───────┘
    │            │            │                   │
    ▼            ▼            ▼                   ▼
┌───────┐    ┌───────┐    ┌───────┐           ┌───────┐
│EphID_1│    │EphID_1│    │EphID_1│           │EphID_1│
├───────┤    ├───────┤    ├───────┤           ├───────┤
│EphID_2│    │EphID_2│    │EphID_2│           │EphID_2│
├───────┤    ├───────┤    ├───────┤           ├───────┤
│EphID_3│    │EphID_3│    │EphID_3│           │EphID_3│
├───────┤    ├───────┤    ├───────┤           ├───────┤
│  ...  │    │  ...  │    │  ...  │           │  ...  │
├───────┤    ├───────┤    ├───────┤           ├───────┤
│EphID_n│    │EphID_n│    │EphID_n│           │EphID_n│
└───────┘    └───────┘    └───────┘           └───────┘
```

In the **broadcast phase**, users broadcast each day's ephemeral IDs in a
randomized order, while observing other users' broadcasts.  Devices are
intended to only record coarse timestamps, although this is not enforced
by the protocol.

In the **report phase**, users send to a health authority the first `SK_i`
for the period they wish to report.  For instance, to report the
previous 14 day period, a user would submit the `SK_i` from 14 days ago.
The health authority acts as a trusted party to authenticate reports.
After reporting, a user chooses a new day key to break the link with the
reported period.

In the **scan phase**, users download collections of revealed day keys, use
them to rederive ephemeral IDs, and compare them to the stored ephemeral
IDs.

## The CEN Protocol

The current version of the CEN Protocol works as follows.  Rather than
*ephemeral IDs*, the pseudorandom values are called *contact event
numbers* (CENs).  Contact notifications will be scoped to *reports*;
each report notifies a collection of collection of CENs, and users can
submit multiple reports.

The rotation interval for reports is set by the application developer
(for instance, one day).  Users create a *report authorization key*
`rak` and the *report verification key* `rvk` as the signing and
verification keys of a signature scheme.  The report authorization key
represents the capability to submit a report relating to the CENs
derived from it.

They can then compute a sequence of *contact event keys* (CEKs)
using the *CEK ratchet*:
```
cek_i ← H_cek(rvk || cek_{i-1}),
```
where `H_cek` is a domain-separated hash function.
The initial CEK is derived from the report authorization key as
```
cek_0 ← H_cek(rak).
```
Contact event numbers are derived from contact event keys as
```
cen_i ← H_cen(le_u16(i) || cek_i),
```
where `H_cen` is a domain-separated hash function.  

This procedure is illustrated in the following diagram:
```
             ┌───┐
  ┌─────────▶│rvk│────────┬──────────┬──────────┬──────┬──────────┐
  │          └───┘        │          │          │      │          │
  │                       │          │          │      │          │
┌───┐             ┌─────┐ │  ┌─────┐ │  ┌─────┐ │      │  ┌─────┐ │
│rak│────────────▶│cek_0│─┴─▶│cek_1│─┴─▶│cek_2│─┴─▶...─┴─▶│cek_n│─┴─▶...
└───┘             └─────┘    └─────┘    └─────┘           └─────┘
                     │          │          │                 │
                     ▼          ▼          ▼                 ▼
                  ┌─────┐    ┌─────┐    ┌─────┐           ┌─────┐
                  │cen_0│    │cen_1│    │cen_2│           │cen_n│
                  └─────┘    └─────┘    └─────┘           └─────┘
```

In the **broadcast phase**, users broadcast contact event numbers, using
the CEK ratchet to generate new CENs.  The ratchet mechanism is
decoupled from time-based rotation so it can be aligned with the
rotation of the Bluetooth MAC address.  This alignment is crucial to
prevent linkability attacks where a user broadcasts two values with the
same MAC.

In the **report phase**, users wishing to notify contacts they
encountered over the period with CEN indices `j1` to `j2` prepare a
report as
```
report ← rvk || cek_{j1-1} || le_u16(j1) || le_u16(j2) || memo,
```
then use `rak` to produce `sig`, a signature over `report`, and upload
the signed report `report || sig`.

The memo field provides a compact space for freeform messages.  This
ensures that the protocol is application-agnostic and extensible. For
instance, the memo field could contain a bitflag describing
self-reported symptoms, or a signature by a health authority verifying
test results.

In the **scan phase**, users download signed reports from the server,
then verify the signature using the included `rvk`.  They can then use
`cek_{j1-1}` to recompute all subsequent CEKs and CENs.  Because all the
recomputed CEKs are bound to `rvk`, and the signature `sig` serves as a
proof-of-knowledge of the corresponding `rak`, the receiver of the
report is convinced that it was submitted by the user who generated the
CENs.

## Comparison

|  Property   |   DP-3T   | CEN |
|-------------|-----------|-----|
| **Server Privacy** |     |     |
| **Source Integrity** |      |     |
| **Broadcast Integrity**|       |      |
| **No Passive Tracking**|       |      |
| **Receiver Privacy**|       |      |
| **Reporter Privacy**|       |      |


[call_post]: https://www.zfnd.org/blog/decentralized-contact-tracing/
[tradeoffs_post]: https://www.zfnd.org/blog/design-tradeoffs-in-private-contact-tracing/
[Covid-Watch]: https://www.covid-watch.org/
[CoEpi]: https://www.coepi.org/
[DP-3T]: https://github.com/DP-3T/documents/blob/6ac18840fce3dd1c5e8f101dda7f036cffcbccee/DP3T%20White%20Paper.pdf
