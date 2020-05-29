---
layout: post
title: "So You Want to Build an End-to-End Encrypted Web App", aka, Musings on Long-term Identity
excerpt: "The software security model of the web does not lend itself to long term identities."
categories: blog
tags: [cryptography, web development, software security]
date: 2020-04-13
author: dconnolly
---


Long term identity really just bootstraps to trust SSOs/IDPs anyway. Rekey on auth?

Otherwise, per-meeting ID management, that gets thrown away at the end. TOFU on the channel that delivers the meeting information. Every participant is issued an unguessable, unforgeable participantID, that is used to moderate and authorize them for that meeting alone. Then everything is E2EE, bootstrapping from those per-meeting IDs. 


