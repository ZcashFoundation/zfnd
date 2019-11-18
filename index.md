---
layout: page
title: "Home"
ignore_title: true
excerpt: "The Zcash Foundation is a financial privacy nonprofit. Our mission is to build and support the technology infrastructure that will enable people to control their own financial data."
search_omit: true
---

<p class="site-description" itemprop="description">The Zcash Foundation is a <a href="/about/incorporation-docs" target="_blank">501(c)(3) nonprofit</a> that focuses on financial privacy. <a href="/about/#mission" target="_blank">Our mission</a> is to build internet payment and privacy infrastructure for the public good.
<br /><br />
We serve the users of the <a href="https://z.cash/" target="_blank">Zcash</a> protocol and blockchain. The Foundation also supports other applications of <a href="https://zkp.science/" target="_blank">zero-knowledge cryptography</a>, as well as other approaches to private cryptocurrency.</p>

{% include email-cta.html %}

<h2 class="center">Grants</h2>

<p>The Zcash Foundation awards <a href="https://www.zfnd.org/tags/#grants" target="_blank">grants</a> through a platform called <a href="https://grants.zfnd.org/" target="_blank">ZF Grants</a>, which also includes crowdfunding features. Learn how it works in our <a href="https://www.zfnd.org/blog/zf-grants-open-beta/">launch blog post</a>.</p>

<p>Interested in making a proposal? Check out our <a href="https://www.zfnd.org/grants/">curated list of ideas</a>!</p>

<h2 class="center">Projects and Partnerships</h2>

<p class="center"><img src="https://www.zfnd.org/images/zecwallet-logo.png"></p>

- [ZecWallet](https://docs.zecwallet.co/) is a cross-platform, [open-source](https://github.com/ZcashFoundation/zecwallet/), GUI wallet that incorporates a full Zcash node and prioritizes shielded transactions.
- [Zepio](https://zepiowallet.com/) is another cross-platform, [open-source](https://github.com/ZcashFoundation/zepio), GUI wallet that focuses on #z2z usage.
- [Zebra](https://github.com/ZcashFoundation/zebra) is the Foundation's consensus-compatible Zcash node, written in the Rust programming language.
- The Human Rights Foundation launched a [cryptocurrency research series](https://www.zfnd.org/blog/human-rights-foundation-privacy-research/) focused on privacy and usability.
- The ZKProof Standards project holds [workshops](https://www.zfnd.org/blog/zkproof-standards-workshop/), among other efforts to improve the usability and safety of zero-knowledge proofs.

<h2 class="center">Announcements and Updates</h2>
<ul class="post-list">
{% for post in site.posts limit:10 %}
  <li><article><a href="{{ site.url }}{{ post.url }}"><div class="post-entry-title">{{ post.title }}</div> <span class="entry-date"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time></span>{% if post.excerpt %} <span class="excerpt">{{ post.excerpt | remove: '\[ ... \]' | remove: '\( ... \)' | markdownify | strip_html | strip_newlines | escape_once }}</span>{% endif %}</a></article></li>
{% endfor %}
</ul>

