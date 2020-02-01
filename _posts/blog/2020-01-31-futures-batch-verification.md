---
layout: post
title: "Composable Futures-based Batch Verification"
excerpt: "This post describes a new implementation strategy for batch verification in Zebra."
categories: blog
tags: []
date: 2020-01-31
author: hdevalence
---

In a [previous post][network-stack], we shared details on the new, fully
asynchronous network stack we designed for [Zebra], the Zcash Foundation's
forthcoming node implementation.  In this post, I want to share an idea we're
hoping will help us achieve high performance and high code quality in a
different area: cryptographic verification of data on the Zcash blockchain.

The Zcash protocol has undergone several stages of technical development, and
now contains many different kinds of cryptographic signatures and
zero-knowledge proofs: ECDSA signatures on secp256k1 from Bitcoin, Ed25519
signatures and Sprout-on-BCTV14 proofs from the original Zcash deployment, and
RedJubjub signatures, Sprout-on-Groth16 proofs, and Sapling-on-Groth16 proofs
from the Sapling upgrade.  As a result, verifying Zcash transactions requires
verification of heterogeneous data, depending on the transaction version and
the contents of the transaction itself.

As an aside, when talking about transaction (or block) verification, it's
useful to distinguish three telescoping levels of verification:

1. *Structural Validity*, or whether the format and structure of the
   transaction are valid.  For instance, Sprout-on-BCTV14 proofs are not
   allowed after activation of the Sapling upgrade, and depending on the
   transaction version, different components must or must not be present.

2. *Semantic Validity*, or whether all of the signatures and proofs contained
   in a well-formed transaction verify correctly.  In other words, is this
   transaction valid, when considering it independently of any chain state?

3. *Contextual Validity*, or whether a semantically valid transaction is valid
   in the context of a particular chain state.  For instance, a transaction
   that spends a particular note may be semantically valid on its own, but
   invalid in the context of some chain state where that note has been spent.

We address structural validity in the type system, using [algebraic data
types][adts] to construct a [representation of a `Transaction`][tx_docs] that
makes structurally invalid transactions impossible to represent internally.
The details will be in a future post, but in the meantime, [_Parse, don't
validate_][pdv] has a great explanation of this approach.  And contextual
validity is mostly a problem of state management and reconciliation rather than
cryptography.  Checking semantic validity, however, is the most computationally
expensive, because it requires verifying all signatures and zero-knowledge
proofs.  It's this step which will be the focus of this post.

## Batch verification and its discontents

A common optimization for cryptographic primitives is *batch verification*,
which asks whether all items in a set are valid in a single all-or-nothing
check, rather than performing individual checks for each item.  Batch
verification can be significantly faster than singleton verification, because
computation can be amortized across all elements of the batch rather than
performed for each item.

However, conventional batch verification APIs can be cumbersome and difficult
to use, especially when verifying heterogeneous data.  The core problem is that
while batch verification provides all-or-nothing answers about a set of items,
the desired information is a per-item answer, and using batch verification
requires *entangling the validation states* of all of the items in the batch.

This problem is especially apparent when attempting to verify heterogeneous
data, as in a Zcash transaction.  Using conventional batch verification APIs,
this would require writing a second set of “transposed” verification logic,
scanning through all transactions in a batch, and assembling a set of items for
each different data type (Ed25519 signatures, RedJubjub signatures,
Sprout-on-Groth16 proofs, Sapling-on-Groth16 proofs, etc) before executing the
batch.  

This presents the immediate problem of having two implementations of
verification logic, which is bad enough, but there’s a second problem, which is
that it’s relatively inflexible with respect to the batch size.  This matters
because different levels of batching are appropriate in different contexts:
batching within a transaction is appropriate on receipt of a gossiped
transaction, batching within a block is appropriate for block verification, and
batching across blocks is appropriate when syncing the chain.

## Futures-based batch verification

To address this problem, we move from a synchronous model for validation to an
asynchronous model.  Rather than immediately returning a verification result,
verification returns a future which will eventually resolve to a verification
result.  These verification futures can be composed using futures combinators
in a way that expresses logical semantics rather than forcing a particular
execution order.  This allows writing verification logic for each item
independently of the other items and even independently of whether the
verification is standalone or batched.

To provide a common interface for batch verification, we use [Tower], a generic
interface and collection of middleware for asynchronous request/response
protocols, described in more detail [in our previous post][tower-post].  The
core abstraction of Tower is the `Service` trait, and we model verification as
a `Service` whose `Request` is a signature or proof together with associated
data (e.g., for a signature, the public key and message), whose `Error` type is
a validation error, and whose `Response` is the empty type `()`.  Verification
consists of performing a `Service` call with the request data, and obtaining a
`Future` which resolves to a `Result<(), Error>`.

In addition to using futures combinators to express semantics of verification
results, using the `Service` trait allows us to use service combinators to
arrange more complex request-processing logic, as appropriate for the
situation.  For example, it's easy to add [tracing diagnostics][tracing-tower],
or to use a fallback combinator to automatically retry failed requests with a
singleton verifier to precisely identify which items failed.

## A first pass at implementing this strategy

[tower-post]: https://www.zfnd.org/blog/a-new-network-stack-for-zcash/#a-towering-interlude
[network-stack]: https://www.zfnd.org/blog/a-new-network-stack-for-zcash/
[Zebra]: https://github.com/ZcashFoundation/zebra
[adts]: https://en.wikipedia.org/wiki/Algebraic_data_type
[pdv]: https://lexi-lambda.github.io/blog/2019/11/05/parse-don-t-validate/
[tx_docs]: https://doc.zebra.zfnd.org/zebra_chain/transaction/enum.Transaction.html
[Tower]: https://docs.rs/tower
[tracing-tower]: https://github.com/tokio-rs/tracing/tree/master/tracing-tower
