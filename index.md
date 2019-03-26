---
layout: page
title: "Home"
ignore_title: true
excerpt: "The Zcash Foundation is a financial privacy nonprofit. Our mission is to build and support the technology infrastructure that will enable people to control their own financial data."
search_omit: true
---

<p class="site-description" itemprop="description">The Zcash Foundation is a <a href="/about/incorporation-docs" target="_blank">501(c)3 nonprofit</a> that focuses on financial privacy. <a href="/about/#mission" target="_blank">Our mission</a> is to build internet payment and privacy infrastructure for the public good.
<br /><br />
We serve the users of the <a href="/resources/Zcash%20onepager%20color.pdf" target="_blank">Zcash</a> protocol and blockchain. The Foundation also supports other applications of <a href="https://zkp.science/" target="_blank">zero-knowledge cryptography</a>, as well as other approaches to private cryptocurrency.</p>

{% include email-cta.html %}

<h2 class="center">Grants</h2>

<p>The Zcash Foundation awards <a href="https://www.zfnd.org/tags/#grants" target="_blank">grants</a> through a platform called <a href="https://grants.zfnd.org/" target="_blank">ZF Grants</a>, which also includes crowdfunding features. Learn how it works in our <a href="https://www.zfnd.org/blog/zf-grants-open-beta/">launch blog post</a>.</p>

<p>Interested in making a proposal? Check out the <a href="https://www.zfnd.org/grants/">list of ideas</a>!</p>

<h2 class="center">Partnerships</h2>

<img class="center" src="https://www.zfnd.org/images/zecwallet-logo.png">
<div>
<ul>
  <li><a href="https://docs.zecwallet.co/">ZecWallet</a> is a cross-platform, <a href="https://github.com/ZcashFoundation/zecwallet/">open-source</a>, GUI wallet that incorporates a full Zcash node and prioritizes shielded transactions.</li>
  <li>Justin Smith of X Wallet will create an <a href="https://www.zfnd.org/blog/wallet-agreements/">iOS reference wallet</a> for the Zcash Foundation.</li>
  <li>Parity Technologies is writing a <a href="https://www.zfnd.org/blog/parity-partnership/">consensus-compatible Zcash node</a> in the Rust programming language.</li>
  <li>KZen Networks will bring <a href="https://www.zfnd.org/blog/kzen-multisig/">private n-of-n multisig</a> to Zcash.</li>
  <li>The Human Rights Foundation launched a <a href="https://www.zfnd.org/blog/human-rights-foundation-privacy-research/">cryptocurrency research series</a> focused on privacy and usability.</li>
  <li>The ZKProof Standards project holds <a href="https://www.zfnd.org/blog/zkproof-standards-workshop/">workshops</a>, among other efforts to improve zero-knowledge proofs and their usage.</li>
</ul></div>

<h2 class="center">Announcements and Updates</h2>
<ul class="post-list">
{% for post in site.posts limit:10 %}
  <li><article><a href="{{ site.url }}{{ post.url }}"><div class="post-entry-title">{{ post.title }}</div> <span class="entry-date"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time></span>{% if post.excerpt %} <span class="excerpt">{{ post.excerpt | remove: '\[ ... \]' | remove: '\( ... \)' | markdownify | strip_html | strip_newlines | escape_once }}</span>{% endif %}</a></article></li>
{% endfor %}
</ul>
