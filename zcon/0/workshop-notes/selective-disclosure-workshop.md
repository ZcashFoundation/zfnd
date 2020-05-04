---
layout: page
title: "Selective Disclosure"
description: "Crowdsourced notes from the Zcon0 Workshops"
---

Regulators requires that information is available to them to protect the economy, but tokens users want as much privacy as possible. Selective disclosure is a good compromise, where the user can selectively choose who has access to the user’s information. There is also no possibility for the user to lie with the information.

Right now, you are able to have a viewing key for z adresses, but it is an all of nothing proposal. There is an encrypted memo field in tx, selective disclosure needs to be able to not reveal the purpose of the transactions.

There is some interesting use cases, like an accredited investors proof, or supply chain proof, where downstream supplier reveal nothing from their supplier.

Initially, you couldn’t prove you have sent a tx if from a z adresse to another z adresse. Now, the clients saves enough information to prove afterwards that a transaction has been done. It’s a bit like a receipt. To use it now you need to reveil the time, the amount and the recipient. It can be extremely useful to exchanges and mining pool in case of dispute, they are using t adresses right now for this purpose.

If selective disclosures becomes good enough, t adresses could be entierely removed, and achieve the same thing by using z addresse and optionally attaching the disclosure part to the tx. The goal to be always private, but allow selective disclosure to enable layer 2 protocols. The exact implementation of this is still under discusion, becasue the zcash fundation wants to be sure that user are not going to negatively impact their privacy by accident.

You can make a scheme with zSNARK where you can prove to a single person your funds, but no one else can trust it. The receiver would generate a hash of a random number and send the hash to the prover. The prover then makes a proof of his funds are there OR that the random number was provided. Since only the receiver knows the random number and only they know if they have disclose to anyone else, they are the only ones who can beleive the zero knowledge proof. If they release the number, nobody can believe the proof. The scheme requires that there is a preimage to the hash, otherwise the receiver could build a proof that there is no known preimage, and then everybody can trust the proof.
