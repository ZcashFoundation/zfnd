---
layout: page
title: "Developer Libraries"
description: "Crowdsourced notes from the Zcon0 Workshops"
---

2018.06.26 13:00-14:00 Jack (Str4d) Grigg


The workshop was mainly a discussion on what kind of libraries and tools are needed in the Zcash ecosystem


The state of Zcash Libraries now:
- Zcash libraries are mostly ported from Bitcoin ones
  - Libraries with t-address support
    - Bitcore
    - python-bitcoinlib
    - z-nomp

- Shielded Addresses
    - Nothing!

- Most of the codes are in Rust
  - Librustzcash
  - Libwallet-zcash
    - What functionalities do we want it to do?
  - Also used in Zcash Fullnode



- Discussion on what do we need?
  - In-browser Signing / Creation of transactions
  - cross-language tools
  - Need for  a curated list of dev tools
  - APIs for humans and machines



- Back to where dev tools are required:
-- Low friction - Convenience:
--- Browser
--- Docker
--- Packages with every language (npm, pip)


- Operations required for such libraries to do:
-- Address creation
--- ZIP32
-- Address (key) Management
-- Signing
--- Multi-signature Architecture
-- Proving
-- Payment detection
-- UTXO Management
-- Serialization
