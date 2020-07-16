---
layout: post
title: "Announcing a New Version of FROST"
excerpt: "We are pleased to announce that our new version of FROST, a flexible
round-optimized Schnorr threshold signature scheme, has been published."
categories: blog
tags: [development, research]
date: 2020-07-15
author: chelseakomlo
---

We are pleased to announce an updated version of [FROST][frost-eprint], a Flexible Round-Optimized Schnorr Threshold signature scheme. FROST is designed to reduce the interaction between participants who jointly own a private signing key and wish to use this private key to sign a message (in the case of Zcash, FROST will be used to sign transactions from joint owners of a signing key). FROST is a collaboration between the Zcash Foundation and the University of Waterloo, and is currently in the submission process for academic review.

We’ll now discuss at a high level the motivation for FROST, and next steps for this work.

## Motivation

The motivation to design FROST is simple. Because the mission of the Zcash Foundation is to build and deploy privacy-enhancing technologies for the public good, we work to ensure that using Zcash is as private and secure as possible. As part of this goal, Zcash transactions should be publicly indistinguishable- i.e, an adversary observing the blockchain should not be able to gain any information about who the payment is for, how much the payment is, or who authorized the payment.

While the above goals are achieved in Zcash in a single-party setting due to the use of ZK-SNARKS, Zcash previously did not have a good mechanism to achieve this goal in a multi-party setting, where a group of users want to jointly control funds and authorize transactions. Prior to FROST, the best protocols to perform this signing process required either undesirable implementation complexity, high network overheads to perform signing operations, the inability to support a threshold number of signers, or undesirable privacy leaks such as exposing the number of signers.

Consequently, our decision to design a new threshold scheme stemmed from the desire to improve the state of threshold signature research to match the needs of Zcash users today. Specifically, we needed to ensure that performing multi-party signing operations could be both performant, secure, and indistinguishable from transactions signed by only a single party.  Further, we wanted to ensure that users could perform threshold signing operations (such that out of N authorized signers, only T need to participate in the signing protocol to issue a valid signature, where T< N), as such designs allow for greater redundancy and failure recovery in the case that a share is lost or one participant cannot (or refuses to) participate in the signing operation.

Before starting the design and implementation of FROST, we first began by talking to stakeholders to understand their use cases and threat models for performing threshold signatures using Zcash shielded transactions. These use cases in turn motivated the tradeoff of robustness for optimized network round efficiency in FROST. In short, FROST is a good candidate for implementations who can terminate the protocol when misbehavior is detected, and we have learned that our users operate in exactly this way. This in turn allows the FROST protocol to use fewer network rounds than prior designs that preserve robustness.

## Next Steps

The next steps for FROST include completing a round of academic review, finishing a Rust reference implementation using [RedJubJub][redjubjub] as the underlying elliptic curve group, and writing a ZIP defining how FROST integrates with the Sapling protocol to perform shielded threshold transactions.

We look forward to working with community members interested in using FROST in the future, please [write to us](mailto:contact@zfnd.org) with any questions or comments.


[frost-eprint]: https://eprint.iacr.org/2020/852
[redjubjub]: https://zips.z.cash/protocol/protocol.pdf#concretereddsa



