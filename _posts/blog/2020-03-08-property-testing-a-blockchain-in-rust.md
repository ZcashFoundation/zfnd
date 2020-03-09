---
layout: post
title: "Property-based Testing a Blockchain in Rust"
excerpt: ""
categories: blog
tags: []
date: 2020-03-08
author: dconnolly
---


## Proptesting is not just unit testing with a testcase generator

At first glance, the mechanics of property-based testing may sound
like fuzzing: generating random-ish data to push through a function or
constructor or some other piece of code. For fuzzing, we basically can
throw random data at our implementation and just check that it doesn't
panic; but that means we have to run our fuzzers essentially
forever. That's valuable, but you may have a more restricted or
structured range or input data and instead of checking for the
property of "my code doesn't crash", we can be more precise and not
need to run ~forever.

## [Categories for properties][choosing-properties]

> ... properties should be things that are true for any correct
> implementation.

This blogpost really helped me wrap my head around what property tests
_test_, as opposed to regular unit tests, or even fuzzing.

- “Different paths, same destination”
- “There and back again”
- “Some things never change”
- “The more things change, the more they stay the same”
- “Solve a smaller problem first”
- “Hard to prove, easy to verify”
- “The test oracle”

For our purposes (networking, parsing data structures out of possibly
attacker-controlled messages), the "there and back again" property is
a prime candidate: the correct serialization and deserialization of
our data structures, especially transactions, blocks, and messages.

## A real proptest

While [this test][transaction_roundtrip_proptest] may seem simple and
straighforward at the top, it's more like the top of an iceberg
floating above the waterline, with the majority of the work required
to make it function hidden below.

```rust
#[cfg(test)]
proptest! {

    #[test]
    fn transaction_roundtrip(tx in any::<Transaction>()) {

        let mut data = Vec::new();

        tx.zcash_serialize(&mut data).expect("tx should serialize");

        let tx2 = Transaction::zcash_deserialize(&data[..]).expect("randomized tx should deserialize");

        prop_assert_eq![tx, tx2];
    }
}
```

What this is doing is generating a random, valid instance of the
`Transaction` struct, within the parameters we have defined (we'll get
into more detail below), serializing it into raw bytes, then
deserializing those bytes into yet another `Transaction` instance, and
then checking that they match.

This may seem rather...dumb? Simple? Obvious? But [the code] to
implement serialization and deserialization is anything but dumb,
simple, or obvious, so having a check that this property (possible
summarized as, 'any valid `Transaction` struct must serialize and then
deserialize into a valid `Transaction`'. We are checking that our
implementations of serialize and deserialize are actually the inverses
of each other. Checking that our implemenation of (de)serialize
matches with others (like zcashd's) requires other types of tests,
using test vectors, or integrations tests, or a variant of the
"Different paths, same destination" property mentioned above.

So far we have serialization/deserialization roundtrip property tests
for nearly all the structs down to the bottom of the dependency tree
starting with our `Block`. To make this work, we need to specify _how_
these types can be 'randomly' generated, all the way to the bottom.

## `derive(Arbitrary)` vs `impl Arbitrary`

From the [`proptest` book][proptest-book]:

> The Strategy is the most fundamental concept in proptest. A strategy defines two things:

> - How to generate random values of a particular type from a random number generator.

> - How to “shrink” such values into “simpler” forms.

To proptest our `Block`s or `Transaction`s, we need to define a
`Strategy` for every sub type those top ones depend on. There are two
main ways to do this: deriving the `Arbitrary` trait (if that works
automatically), or else implementing it explicitly ourselves.

```rust

#[cfg_attr(test, derive(Arbitrary))]
pub struct EncryptedCiphertext {
    ...
}
```

vs

```rust
impl Arbitrary for EncryptedCiphertext {
    type Parameters = ();

    fn arbitrary_with(_args: Self::Parameters) -> Self::Strategy {
        (vec(any::<u8>(), 580))
            .prop_map(|v| {
                let mut bytes = [0; 580];
                bytes.copy_from_slice(v.as_slice());
                return Self(bytes);
            })
            .boxed()
    }

    type Strategy = BoxedStrategy<Self>;
}
```

For simple types, like wrappers around an array of bytes,
`derive(Arbitrary)` often just works out of the box, but there are
plenty of types that require the more detailed and/or precise explicit
implementation of `Arbitrary` like above. Notice that the return type
of `arbitrary_with()` is `Self::Strategy`, and that in this case is a
general `Strategy` variant that boxes large types. This is also what
`derive(Arbitrary)` is doing under the hood.

Then when we have those available for all our subtypes, we can
implement a strategy for `Transaction` itself:

```rust
#[cfg(test)]
impl Arbitrary for Transaction {
    type Parameters = ();

    fn arbitrary_with(_args: ()) -> Self::Strategy {
        prop_oneof![
            Self::v1_strategy(),
            Self::v2_strategy(),
            Self::v3_strategy(),
            Self::v4_strategy()
        ]
        .boxed()
    }

    type Strategy = BoxedStrategy<Self>;
}
```
The `prop_oneof!` is a macro provided by `proptest` that selects one of the
4 strategies we have handed to it, in an evenly distributed fashion. Each of those
strategies constructs a generated `Transaction` variant for each version we
support (transparent, sprout, overwinter, and sapling currently). There are other macros
that can weigh some strategies more than others, and some built-in `Strategy`s in the
`proptest` [framework][proptest].


## "If you are trying to generate 2MB of test data each iteration, you’re gonna have a bad time."

Pare down your test inputs.

### Proptest-regressions

> It allows to test that certain properties of your code hold for
> arbitrary inputs, and if a failure is found, automatically finds the
> minimal test case to reproduce the problem.

Examples:

```ascii
# Seeds for failure cases proptest has generated in the past. It is
# automatically read and these particular cases re-run before any
# novel cases are generated.
#
# It is recommended to check this file in to source control so that
# everyone who runs the test benefits from these saved cases.
...
cc 8736cf2922dd4b7b333e7394914d3f92a16de420c57968c799a28df450dd3d96 # shrinks to tx = V1 { inputs: [], outputs: [], lock_time: Time(2106-02-07T06:28:16Z) }
cc 83410513a3d4fec747eefc15856c3ede156a2aa9073a0570da3d95459b062541 # shrinks to tx = V2 { inputs: [], outputs: [], lock_time: Time(2106-02-07T06:28:16Z), joinsplit_data: None }
cc 6898e25ee7a733e689c4e4c5f2d2bb7074986699e478557a0d5fef065ead1b72 # shrinks to tx = V2 { inputs: [], outputs: [], lock_time: Time(2106-02-07T06:28:16Z), joinsplit_data: None }
```

[network-stack]: https://www.zfnd.org/blog/a-new-network-stack-for-zcash/
[Zebra]: https://github.com/ZcashFoundation/zebra
[transaction_roundtrip_proptest]: https://github.com/ZcashFoundation/zebra/blob/main/zebra-chain/src/transaction/tests.rs#L161
[proptest]: https://altsysrq.github.io/rustdoc/proptest/latest/proptest/
[proptest-book]: https://altsysrq.github.io/proptest-book/
[choosing-properties]: https://fsharpforfunandprofit.com/posts/property-based-testing-2/
