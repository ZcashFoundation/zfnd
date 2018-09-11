---
layout: page
title: "Home"
excerpt: "A 501(c)3 non-profit, dedicated to building Internet payment and privacy infrastructure for the public good, primarily serving the users of the Zcash protocol and blockchain."
search_omit: true
---


<!--
TODO does this qualigy as "A snippet of "here's who we are and what we do,"
-->
<h2 class="site-description animated fadeIn" itemprop="description">
  {{ page.excerpt }}
</h2>

<!-- TODO Should this be an embedded form? -->
[Sign up for our newsletter!](https://buttondown.email/zcashfoundation)


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
