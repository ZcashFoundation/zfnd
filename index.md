---
layout: page
title: "Home"
ignore_title: true
excerpt: "  The Zcash Foundation is a financial privacy nonprofit. Our mission is to build and support the technology infrastructure that will enable people to control their own financial data. The protocol Zcash, with its landmark use of zero-knowledge cryptography, is the most promising long-term approach."
search_omit: true
---

<p class="site-description" itemprop="description">The Zcash Foundation is a <a href="/about/incorporation-docs" target="_blank">501(c)3 nonprofit</a> that focuses on financial privacy. <a href="/about/#mission" target="_blank">Our mission</a> is to build internet payment and privacy infrastructure for the public good.
<br /><br />
We serve the users of the <a href="/resources/Zcash%20onepager%20color.pdf" target="_blank">Zcash</a> protocol and blockchain. The Foundation also supports other applications of <a href="https://zkp.science/" target="_blank">zero-knowledge cryptography</a>, as well as alternate approaches to private cryptocurrency.</p>

<blockquote class="roadmap"><a href="/about/2018-vision">"Successful execution of this strategy will lead to a more resilient Zcash protocol, a better informed community, and more grassroots support for privacy in payments." <br /><span class="left-pad"></span>— 2018 roadmap</a></blockquote>


<form
  action="https://buttondown.email/api/emails/embed-subscribe/zcashfoundation"
  method="post"
  target="popupwindow"
  onsubmit="window.open('https://buttondown.email/zcashfoundation', 'popupwindow')"
  class="embeddable-buttondown-form"
>
  <label for="bd-email">Enter your email:</label>
  <input type="email" name="email" id="bd-email">
  <input type="hidden" value="1" name="embed"/>
  <input type="submit" value="Subscribe now!" />
</form>

<!-- promotion of our current focus (e.g. an upcoming conference),
TODO What is our current focus?
-->


### Commonly Used Resources

<!-- pointers to the most commonly used resources. -->
TODO

### Zcash Foundation Blog
<ul class="post-list">
{% for post in site.posts limit:10 %}
  <li><article><a href="{{ site.url }}{{ post.url }}"><div class="post-entry-title">{{ post.title }}</div> <span class="entry-date"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time></span>{% if post.excerpt %} <span class="excerpt">{{ post.excerpt | remove: '\[ ... \]' | remove: '\( ... \)' | markdownify | strip_html | strip_newlines | escape_once }}</span>{% endif %}</a></article></li>
{% endfor %}
</ul>
