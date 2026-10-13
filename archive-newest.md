---
layout: page
title: All posts (newest first)
permalink: /archive-newest/
hide_from_pages: true
sitemap: false
---

<ul>
  {% assign all_posts = site.posts | sort: 'date' | reverse %}
  {% for post in all_posts %}
  <li><a href="{{ site.baseurl }}{{ post.url }}">{{ post.date | date: "%b %Y" }} - {{ post.title }}</a></li>
  {% endfor %}
</ul>
