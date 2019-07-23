---
layout: post
title: "Early Results from an FPGA Acceleration Project"
excerpt: "Details about an ongoing FPGA acceleration project by the Zcash Foundation."
categories: blog
tags: [research]
image:
date: 2019-07-23
author: sonya
---

The Zcash Foundation is happy to announce the first results of an FPGA acceleration project, undertaken by FPGA engineer Ben Devlin. Work began in January 2019 and will continue until October, but we’re ready to show you some code! Check out the [GitHub repo](https://github.com/bsdevlin/zcash-fpga/) and the [detailed architecture document](https://github.com/bsdevlin/zcash-fpga/blob/master/zcash_fpga_design_doc_v1.1.x.pdf). In that document, Ben wrote a high-level summary of the project:

> The Zcash FPGA acceleration engine is a FPGA system used to accelerate the Zcash network. The **first phase** is focused on accelerating verification components of the blockchain, and the **second phase** is focused on zk-SNARK acceleration and elliptic curve operations required. All code developed is written in system Verilog and open-source under the GPL 3.0 license, intended to be modular and parameterizable for reuse[.]

The FPGA acceleration project continued the Zcash Foundation’s previous work to improve the Zcash network, the details of which you can find here: [1](https://www.zfnd.org/blog/statement-on-asics/), [2](https://www.zfnd.org/blog/asic-equihash-study/), [3](https://www.zfnd.org/blog/hardware-transparency/), [4](https://www.zfnd.org/blog/governance-results/). Proposed changes to Zcash are always contentious, especially those that could impact the economics of its ecosystem, but it is clear that everyone will benefit from more research.

The Foundation is thrilled to fund expert analysis and tooling that can (both metaphorically and literally) accelerate privacy-preserving technology, as with our recent support of [Coda’s SNARK Challenge](https://codaprotocol.com/blog/snark-challenge.html) and Ben’s trailblazing FPGA work.

Ben’s experience includes researching new architecture features for Ultrascale+ and Versal FPGAs at Xilinx, as well as designing FPGA projects for use in high-frequency trading systems. He has an academic background in cryptography and a personal interest in the use of zk-SNARKs on the Zcash network.

The hardware used for the project was a [BittWare XUP-VVH board](https://www.bittware.com/fpga/xup-vvh/) (VU37P FPGA w/ 8GB HBM, 16GB DDR4). The FPGA engine is also designed to be run on an Amazon AWS EC2 F1 FPGA instance (VU9P w/ 64GB DDR4).

BittWare VP Sam Bichara said, "It's excellent to see the advantages of FPGAs being recognized by the Zcash Foundation and their investment in the technology." He pointed to "ample logic area plus the new high-speed on-package HBM2 memory" as particular advantages of the the XUP-VVH board.

Ben Devlin explained the components of the FPGA acceleration project in more detail:

> **Equihash verification engine:**
> We developed an engine that accelerates verifying the Equihash solution for a given block. Internally it contains high-performance fully pipeline-unrolled blake2b core running at 177M hash/s (potentially can go up to 5G hash/s), a SHA256 core, a hash map for detecting index duplicates, and other control logic. The engine is fully parameterizable, so it can be adapted to work on different Equihash parameters. At n=200,k=9 we can achieve 207K op/s, a speedup of 207x when compared to 1K op/s performance for the same code in the Zcash client running on a 3GHz CPU.

> **Transparent Signature Verification Engine (secp256k1 ECDSA core):**
> We developed an engine that accelerates verifying the signature used in a transparent transaction, over the secp256k1 curve. The FPGA takes advantage of an efficient endomorphism on this curve as well as high-performance karabusta multiplier + modular reduction step, with multiple operations running in parallel. A single engine is capable of 20K op/s, a 1.5x when compared to 13.4K op/s performance for the same code in the Zcash client running on a 3GHz CPU.

Notably, this work may benefit other projects that use secp256k1, such as bitcoin.

> **BLS12-381 Coprocessor (zk-SNARK accelerator):**
> We are developing an engine that can be used to accelerate zk-SNARKs, by focusing on elliptical curve operations over the bls12-381 curve. This has been designed in the form of a coprocessor, so SW can write functions using our FPGA-accelerated custom instruction set. Currently we have implemented point multiplication over the Fp and Fp^2 fields, achieving 2.8K op/s and 2.3K op/s relatively for Fp and Fp^2 point multiplication compared to benchmarked Zcash rust code achieving 4.9K op/s and 1.5K op/s. In this case we only see a performance increase of 1.5x when moving into the Fp^2 field. This is mainly contributed to the multiplications with modular reduction with a prime that is not hardware friendly, which adds an extra 70% total cycles on the FPGA. We are currently implementing pairing operations on the FPGA for a v1.2 release and would expect to see larger performance gains do to the amount of parallelism we can exploit.

We're excited to see what other researchers and engineers in the space will do with Ben's work!
