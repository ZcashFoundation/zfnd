---
layout: page
title: "Home"
ignore_title: true
excerpt: "The Zcash Foundation is a 501(c)(3) public charity focused on financial privacy. Our mission is to build and support the technology infrastructure that will enable people to control their own financial data."
search_omit: true
---

<p class="site-description" itemprop="description">The Zcash Foundation is a <a href="/about/incorporation-docs" target="_blank">501(c)(3) public charity</a> that builds financial privacy infrastructure for the public good, primarily serving the users of the Zcash protocol and blockchain.
<br /><br />
We serve the users of the <a href="https://z.cash/" target="_blank">Zcash</a> protocol and blockchain. The Foundation also supports other applications of <a href="https://zkp.science/" target="_blank">zero-knowledge cryptography</a>, as well as other approaches to private cryptocurrency.</p>

{% include email-cta.html %}

<h2 class="center">Announcements and Updates</h2>
<ul class="post-list">
{% for post in site.posts limit:10 %}
  <li><article><a href="{{ site.url }}{{ post.url }}"><div class="post-entry-title">{{ post.title }}</div> <span class="entry-date"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time></span>{% if post.excerpt %} <span class="excerpt">{{ post.excerpt | remove: '\[ ... \]' | remove: '\( ... \)' | markdownify | strip_html | strip_newlines | escape_once }}</span>{% endif %}</a></article></li>
{% endfor %}
</ul>

