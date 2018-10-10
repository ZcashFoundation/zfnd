---
layout: page
title: "Home"
excerpt: "  The Zcash Foundation is a financial privacy nonprofit. Our mission is to build and support the technology infrastructure that will enable people to control their own financial data. The protocol Zcash, with its landmark use of zero-knowledge cryptography, is the most promising long-term approach."
search_omit: true
---

<h2 class="site-description animated fadeIn" itemprop="description">
  {{ page.excerpt }}
</h2>

## Newsletter

Subscribe to receive announcements and program updates from the Zcash Foundation.

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
  <li><article><a href="{{ site.url }}{{ post.url }}">{{ post.title }} <span class="entry-date"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time></span>{% if post.excerpt %} <span class="excerpt">{{ post.excerpt | remove: '\[ ... \]' | remove: '\( ... \)' | markdownify | strip_html | strip_newlines | escape_once }}</span>{% endif %}</a></article></li>
{% endfor %}
</ul>
