---
layout: page
title: "Selective Disclosure"
description: "Crowdsourced notes from the Zcon0 Workshops"
---


2018.06.26 14:10-15:10 - Jack (Dodger) Gavigan

Possible Disclosures:
- Payment Disclosure
  - For zAddress payments to prove the payment
  - proof for shielded payment (receipt)
  - should be saved before the software throws away the proof
  - Discloses everything (Recipient, amount, memo)

- Selective Disclosure (Not yet merged)
  - Only disclose a selective section (only amount, recipient or ...)
  - might make shielded transactions less efficient, requires changes in the protocol/cryptography
  - If this happen (Selective Disclosure tuple), it's possible to get rid of transparent transactions all together
--

... // Missing notes


- How to identify who leaked information in case there are multiple parties receiving the receipts.


- what is available in Zcash today?
  - Payment disclosure: Recipients, Amount, Memo
  - Some options to do read only keys in new SPV implementations -- Coming soon --

- One of the main issues with Selective disclosure is inadvertently disclose informations that they do not want disclosed
  - such as UI misuse
  - Device seizure
  - ...
