---
layout: post
title: "Opinion: It’s time to zero knowledge all the things!"
excerpt: "In this opinion piece, Zcash Foundation board member Peter van Valkenburgh advocates for adding user-defined assets to the Zcash protocol."
categories: blog
tags: [opinion]
date: 2021-06-07
author: petervv
---

*[Zcon2 Lite](https://www.zfnd.org/zcon/2/), a virtual edition of our annual conference, takes place this week (Tuesday 8th and Wednesday 9th June). One of the panel discussions will focus on  topic of [adding User-Defined Assets (UDAs) functionality to the Zcash protocol](https://www.zfnd.org/zcon/2/schedule/#uda-panel). In this opinion piece, Zcash Foundation board member Peter van Valkenburgh shares his views on why we should add UDAs to Zcash. Join us on Tuesday at 14:40 UTC for the live panel discussion.* 


#### It’s time to zero knowledge all the things! 

Welcome to 2021; the past year has been a difficult one. As well as a global pandemic, the United States has experienced a rocky political transition, and we have longstanding prejudice and inequality issues. I’m not here to tell you that a cryptocurrency can solve these problems; it can’t. But it can do something related; a cryptocurrency blockchain can solve foundational infrastructure issues that exacerbate these problems. Why? Because a cryptocurrency blockchain can rebuild the tools and avenues through which we interact with each other in a way that respects human agency and human dignity rather than destroys it.  

Zcash turned 4 years old last October.  Zcash was born out of the idea that digital payments should be as private as in-person cash payments. This distinguishes Zcash from the traditional financial system where banks track your transactions as well as from Bitcoin and other cryptocurrencies with transparent blockchains where truly anyone can track your transactions with blockchain analysis. 

Zcash stands for one thing above all, that a blockchain where all your payments are public to everyone—marketing companies, business rivals, scorned lovers, or tyrannical nation states—is a very bad idea. We’ve made great strides in privacy, but Zcash, just like most cryptocurrencies today, is not gaining traction as a tool for general purpose payments. Instead, we’ve seen stablecoins like Tether, USDC, and Dai begin to take on that role. At the same time, we’ve seen totally new uses of cryptocurrency show up in terms of decentralized finance and identity. These new applications need privacy too. In fact, the need is far more immediate than privacy for the few real world payments made in cryptocurrency today.

So how can Zcash address these concerns? How can we encourage people to actually use cryptocurrencies for payments rather than mere speculation? How can we ensure those payments are private and add privacy protections to new blockchain use cases like decentralized finance and identity?

Privacy for stablecoins, defi, and other advances starts with a simple but critical first step: the Zcash protocol should support private transactions in user-defined assets (UDAs). Zcash is already designed to provide strong privacy for on-chain transactions using the native ZEC token. User Defined Assets let anyone get the same privacy when transfering or showing ownership of anything they can register on the Zcash blockchain. UDAs provide the same privacy guarantees for any token, from bank-issued stablecoins, to wrapped versions of Bitcoin, Ethereum, or Dai, to gaming or collectable non-fungible tokens invented by our vibrant community, to tokenized decentralized identity credentials, to anything we can imagine. Here’s a formative glimpse at how we can do that and why we must. 

This post will focus primarily on the need for this innovation, and it will aim to explain that need to non-technical folks not already in the Zcash or larger cryptocurrency camps, folks who will one day need to embrace these tools if we are ever to make meaningful progress toward addressing larger problems in society. For now I’ll simply say that the technology and the capability to do this already exists, and has been prototyped as a straightforward tweak to our existing zero-knowledge proofs. The economic mechanisms have been validated by various stablecoins and smart contract platforms like Ethereum, although some details remain to be decided over how to ensure that ZEC remains a critical part of the protocol as it begins to support more assets. Details aside, why do UDAs matter?

#### What future do you want to live in?

Today, we are stuck in our homes. We do as much of our shopping, speaking, meeting, and planning as possible online through our computers. Even once this pandemic is over, we’ll still do the majority of these things using networked computers. Cash transactions where you buy a book, some cheese, or a television with pieces of paper from your pocket will continue to be the exception rather than the rule. The world around us will increasingly be connected, from so-called “smart” locks on our doors to internet-enabled vehicles on our roads and medical devices in our bodies. To use and control these “smart things” we’ll increasingly rely on digital identities and authentication. In short, we do and will continue to do our most important things in life over wires and WiFi. 

That unavoidable fact means that the infrastructure underpinning these digital payments transactions and digital identity transactions is important. If it’s insecure there will be hacks. If it depends on third party intermediaries, then they, whether corporations or governments, will become the future arbiters of our freedom and privacy. Credit card companies, social media companies, and smart device manufacturers are the linchpins of our digital infrastructure today. If you’d rather not be beholden to them for your privacy and mobility, then you need a free and open alternative. You need to use a shared ledger of transactions, a blockchain. And for privacy on that ledger, you need zero knowledge proofs, as in Zcash.

#### UDAs for Payments 

A zero knowledge proof allows you to receive a payment from a stranger. It allows you to verify the payment without sharing your payment details with a third party like a bank, and without revealing to you or to anyone else any superfluous details about the person who is paying you. They deserve privacy as well. You both do.

We can do this today with Zcash as the medium of exchange, but people often want to pay with dollars, euros, yen, or community currencies that embody their own unique values. UDAs on Zcash put an end to the unfortunate choice that faces many potential new Zcash users today: you can pay with privacy but not if you want to pay in the local currency with which you are familiar, not if you want to pay with a less volatile asset. If we are serious about cryptocurrencies aiding the underbanked or internationally disenfranchised, we shouldn’t force them to invest in a risky and alien asset like Zcash simply to gain the benefits of private transactions on the Zcash blockchain.   

#### UDAs as a Stepping Stone to Privacy and Identity

User defined assets can be more than private currencies or investments: they can allow you to prove that someone gave you something, anything that can be tokenized, without revealing who you are.  A user-defined asset need not be related to money, it can be a token of identity for people, machines, or goods and services. 

We can, for example, use UDAs to keep membership lists in forums or clubs: show you have one and you can get in but keep your privacy (and keep trolls out). We could include UDA certificates of authenticity when purchasing goods that are easily counterfeitable. You would know the goods were genuine, but maintain the ability to sell the verifiably genuine good, alongside the certificate, without leaving a record of who owned it in the past. This could be important for all manner of use cases from games and entertainment, such as trading card games like magic the gathering or pokemon, to matters of greater global concern, such as tradable carbon credits. 

And that’s just with simple UDAs. A few years from now, UDAs could have associated data.  Entities could issue a UDA that references encrypted identity information: using a tokenized ID, you could prove to a website you were over 21 while maintaining privacy.  You could log into websites or internet connected devices with a tokenized credential. You could buy a drink without giving the creepy bartender your name and address. This would be a form of [decentralized anonymous credential](https://eprint.iacr.org/2013/622.pdf). In time, we could imagine a sequence of UDAs used to authenticate photographs based on the author, or show that edits to a [photo for publication were legitimate](https://www.cs.tau.ac.il/~tromer/papers/photoproof-oakland16.pdf). Fake news may ultimately be a somewhat intractable problem, but that doesn’t mean we can’t take steps today to enable better tools for verification and identification.

There are important caveats to any blockchain-based identity tool. First, no personal information should ever be “put into” the blockchain itself. The only data in the blockchain would be a verifiable but otherwise unintelligible reference to some form of personal data that is carefully secured off-chain. Second, the veracity of any digital credential will only ever be as reliable as the trust we are willing to place in the entity who issues that credential. Blockchains don’t directly address that matter of trust—much as they don’t address counterparty risk in dollar-backed stablecoins—but they can help address many of the other trust issues that can plague identity systems, such as counterfeiting, poor data security, and poor interoperability. 

Caveats aside, these are the tools we will ultimately need in order to live in a digital world with truth and privacy.

#### Sounds good. Did you build that?

We’re halfway there. Zcash today allows for a decentralized timestamped record of payment transactions that can’t be traced to each other, except by the person who is making those payments. But it only works if you are paying someone with Zcash’s native token, ZEC; and it only works for payment transactions, not for other digital transactions like those involving identity or authenticity tokens. 

What we need is a privacy-preserving decentralized timestamped record of transactions for any asset and any transaction. No institution, not the Zcash Foundation, not the Electric Coin Company, not any centralized provider, should be the one deciding which assets and credentials you can transact with on the Zcash blockchain; you should decide; users should decide. 

UDAs would enable users to transact any asset they wish on a zero knowledge blockchain. This enables the deployment of stablecoins that can be transferred peer-to-peer with robust privacy guarantees, something that does not exist with stablecoins built on Ethereum. In the longer term, they would allow users to retain control over their online persona, selectively disclosing their day-to-day activities to the persons they want to receive those disclosures: all our digital activities from the mundane—switched on a smart light bulb—to the sensitive—adjusted a pacemaker—to the the life-changing—purchased a home—to the world-chaining—announced their candidacy for political office. It’s time for all of these transactions to be private; it's time for user-defined assets on Zcash.          

#### This is great. What’s the status of UDAs on Zcash?

The good news is that str4d, an engineer at ECC, developed a prototype of the UDA technology that is mostly ready to be added to Zcash. The prototype design was taken by others, productionized into this [code](https://github.com/metastatedev/librustzcash/pull/3), [audited](https://leastauthority.com/blog/audit-of-metastate-ags-multi-asset-shielded-pool-for-tezos-foundation/), and proposed for deployment in other blockchains such as Tezos.  

Deploying UDAs in Zcash still requires some issues to be addressed. For example: Zcash requires a protocol for creating (or “minting”) new currencies, and it requires some consensus changes that would allow these new tokens to transact transparently as desired. Moreover, there are questions about the economics of UDA transaction fees familiar to anyone who has followed Ethereum: will UDAs undermine the value of rewards paid to miners and threaten security of the chain? The Zcash ecosystem will have to decide its answer to this, much like Ethereum or Tezos. Finally, tokens will also need mechanisms to travel to and from different blockchains, such as Bitcoin and Ethereum. Fortunately, several projects in this area are already deployed (including [Wrapped](https://www.wrapped.com/) and [Ren](https://bridge.renproject.io/)) and more are on the way.

There’s still complex work to be done, but developing new solutions that facilitate new privacy applications is precisely why we got into this adventure in the first place. The Zcash community, with its broad array of contributors, is uniquely situated to tackle these problems. And the reward for this work is exciting: an enormous new set of uses for the Zcash technology, some of which we cannot even envision today.

#### So what should we do next?

Right now, the most important thing is for the community to decide to act. Tell ECC and Zcash Foundation that you want to prioritize this technology and get it onto Zcash’s technical roadmap. Discuss your ideas on how to solve the open problems.

With your help we can build a digital future in which we’d actually want to live: a place in cyberspace with freedom to transact whenever and wherever you desire, in whatever asset you desire, and always as publicly or privately as you demand. 
