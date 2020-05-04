---
layout: page
title: "Network Privacy in Blockchains"
description: "Crowdsourced notes from the Zcon0 Workshops"
---

2018.06.27 13:00-14:00 - Isis Agora Lovecruft - Part 1
---

This workshop about the privacy in propagation protocol within blockchain networks and
de-anonymization of transactions.

List of papers on blockchain network privacy: [https://github.com/isislovecruft/library--/tree/master/anonymity%20&%20circumvention/bitcoin](https://github.com/isislovecruft/library--/tree/master/anonymity%20&%20circumvention/bitcoin)

(Go up the path in the repo for more exciting papers)


Separate groups discussion on the network anonymization protocols (Some are fictional at this point):

- Dandelion
    - MimbleWimble / [Grin](https://github.com/mimblewimble/grin)
- Whisper Protocol ([Ethereum](https://github.com/ethereum/wiki/wiki/Whisper))
- Tumblers
- Noise networks
- Use Tor / Use Signal
- Use [Wireguard](https://www.wireguard.com/)
- Broadcasted Encryption
- Randomized Transaction Handling
- [Kovri](https://github.com/monero-project/kovri) - used in Monero. Onion routing style like tor but different approach (DHT Node discovery, Uni-directional routing (closer to free route mixnets), designed for low latency networks, probably works well for P2P but may not work well for client-server architecture).
- Mixnets

Each group posted their proposals on the window and the rest put star stickers on their preferred proposals:
![Proposals Scored by stars with a view of Montreal under construction](/img/network-privacy-in-blockchains.JPG)

Top Rated:
- Kovri
- Dandelion


Research Ideas:
- Node Random Path selection

---

2018.06.27 14:10-15:10 - Isis Agora Lovecruft - Part 2


... [missed the beginning of the discussion]

Discussion:
- Discussion regarding how Dandelion Protocol works, One example: [Grin Spec](https://github.com/mimblewimble/grin/blob/master/doc/dandelion/dandelion.md)
- Timing attacks by an entity that runs multiple (many) nodes in the network
- Issue with being always online on the protocols like Signal
- Mix networks High latency privacy network, pool up transactions to achieve anonymity
  - Chose a route in advance by the client
  - None of the nodes have access to where the transaction comes from and leaves to
  - Not good when nodes are not consistently online, need more stable networks
  - Cascade mixing
    - At least requires one honest node on a path for everyone to use this one path
  - Traffic Analysis Resistant Messaging: [katzenpost](https://github.com/katzenpost)
  - Originally designed for e-voting and e-mail
  - If used in Blockchain networks, it can't be used for miner nodes, as the high latency might lead to network forks and higher rate for orphaned blocks.
- Some discussion on possible attacks such as [eclipse attack](https://www.usenix.org/node/190891), [sybil attack](https://en.wikipedia.org/wiki/Sybil_attack), 51% attack.
