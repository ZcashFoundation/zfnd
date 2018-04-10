---
layout: post
title: "Conclusion of the Powers of Tau Ceremony"
excerpt: "The world's largest multi-party computation ceremony comes to a successful end."
categories: blog
tags: []
image:
  feature: 
date: 2018-04-13
author: ebfull-jasondavies
---

In November of last year, we [announced](https://z.cash.foundation//blog/powers-of-tau/) the beginning of what has become the largest [multi-party computation](https://en.wikipedia.org/wiki/Secure_multi-party_computation) (MPC) ceremony ever performed. In the **Powers of Tau** ceremony, we aimed to produce partial public parameters that can be used by *all* projects that wish to use [zk-SNARKs](https://z.cash/technology/zksnarks.html) — small and flexible zero-knowledge proofs which require a parameter setup.

We're happy to announce the completion of the ceremony, after many months and many dozens of participants. Today, we're publishing the final parameters, the protocol's transcript, a tool for verifying the transcript and the parameters, and a report of what took place.

## Ceremony Results

* We [announced](https://lists.z.cash.foundation/pipermail/zapps-wg/2018/000362.html) the completion of the ceremony on the mailing list, along with signatures of the ceremony artifacts.
* The final parameters are available [over BitTorrent](https://s3-us-west-2.amazonaws.com/powersoftau-transcript/powersoftau.torrent).
* The transcript of the ceremony is also available [over BitTorrent](https://s3-us-west-2.amazonaws.com/powersoftau-transcript/powersoftau-transcript.torrent). It has also been placed on the [Internet Archive](https://archive.org/details/transcript_201804). The transcript and the parameters can be verified using a [tool](https://github.com/ebfull/powersoftau/blob/master/src/bin/verify.rs) we have written.
* The attestations of all participants are being collected [here](https://github.com/ZcashFoundation/powersoftau-attestations).

### Ceremony Overview

The ceremony used an MPC protocol described in a [paper](https://eprint.iacr.org/2017/1050) written by Ariel Gabizon, Ian Miers and Sean Bowe, who are scientists and engineers at the Zcash Company. This ceremony produced a partial common reference string (CRS) for Jens Groth's [pairing-based zk-SNARK scheme](https://eprint.iacr.org/2016/260) — the current state-of-the-art in performance. This CRS supports arithmetic circuits with up to 2^21 multiplication gates.

The correctness of the proofs which use these parameters require that at least *one* participant of the Powers of Tau ceremony destroyed some randomness they sampled during their part of the ceremony. The protocol guarantees zero-knowledge of the resulting proofs, even if all participants were compromised.

### Verification of the Protocol

The integrity of the resulting parameters can only be determined through public review of the process and artifacts of the ceremony.

* The ceremony was originally described in a [blog post](https://z.cash.foundation//blog/powers-of-tau/) here, and was coordinated by Sean Bowe (an employee of the Zcash Company) and later by Jason Davies (a member of the Zcash community). People were encouraged to post to a [mailing list](https://lists.z.cash.foundation/pipermail/zapps-wg/) if they wanted to participate, or to contact the coordinator privately to arrange a time to participate.
* All of the participants were encouraged to write an attestation of what took place and publish it afterwards, ideally to the [mailing list](https://lists.z.cash.foundation/pipermail/zapps-wg/). We are hosting these attestations [here](https://github.com/ZcashFoundation/powersoftau-attestations). In total, there were 87 contributions to the ceremony, including participation from cryptographers and members of the crypto and cryptocurrency communities.
* We have published a [transcript](https://s3-us-west-2.amazonaws.com/powersoftau-transcript/powersoftau-transcript.torrent) of the protocol which can be used to verify the protocol was correctly executed and can also be used to reproduce the [final parameters](https://s3-us-west-2.amazonaws.com/powersoftau-transcript/powersoftau.torrent).
* We have pre-printed a [paper](https://eprint.iacr.org/2017/1050) describing the MPC protocol.
* The ceremony depends on a [pairing-friendly](https://en.wikipedia.org/wiki/Pairing-based_cryptography) elliptic curve construction designed specifically for high-performance and high-security zk-SNARKs. Our choice of this curve and its parameters is explained in [our paper](https://eprint.iacr.org/2017/1050).
* We published [tools](https://github.com/ebfull/powersoftau), written in Rust, which many participants used during their part of the ceremony. These tools also allow the public to evaluate the correctness of the transcript and the final parameters.
* Several participants used an [independent implementation](https://github.com/FiloSottile/powersoftau) of the software written by Filippo Valsorda. A [trusted build-chain](https://github.com/devrandom/powersoftau/wiki/Trusted-build-instructions-via-mrustc) was also developed by Devrandom.

Assuming the cryptography is sound, the only way for the final parameters to be compromised is if every participant colluded or were all compromised. By involving a large set of diverse and reputable participants, it becomes unrealistic for all of them to be compromised. By encouraging participants to take their own initiative and making the process as flexible as possible, we reduced the risk that all participants could be compromised by the same attack vectors.

We'd like to thank all of the participants and community members who played a part in the process, from the participants, to witnesses on the mailing list and reviewers and verifiers of the ceremony artifacts.

## Future Work

Anybody can use the Powers of Tau parameters to perform their own MPC for zk-SNARK parameters, using the [phase2](https://github.com/ebfull/phase2) library. As an example, the Zcash Company will be doing a multi-party computation for the Sapling zk-SNARK parameters.

The Zcash Foundation intends to promote future ceremonies, as well as extensions of Powers of Tau that may adopt larger circuit bounds or alternative elliptic curves. If you're interested, please join our [mailing list](https://lists.z.cash.foundation/pipermail/zapps-wg/)!
