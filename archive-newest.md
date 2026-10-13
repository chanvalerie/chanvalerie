---
layout: page
title: Blog Archive
permalink: /archive-newest/
hide_from_pages: true
sitemap: false
hidden: true
exclude_from_nav: true
---

<p><a class="button" href="{{ site.baseurl }}/archive.html">Sort by category</a></p>

<ul>
  {% assign all_posts = site.posts | concat: site.personal | sort: 'date' | reverse %}
  {% for post in all_posts %}
  <li><a href="{{ site.baseurl }}{{ post.url }}">{{ post.date | date: "%b %Y" }} - {{ post.title }}</a></li>
  {% endfor %}
</ul>
