---
layout: page
title: Blog Archive
---

<h3>All posts (newest first)</h3>
<ul>
  {% assign all_posts = site.posts | sort: 'date' | reverse %}
  {% for post in all_posts %}
  <li><a href="{{ site.baseurl }}{{ post.url }}">{{ post.date | date: "%b %Y" }} - {{ post.title }}</a></li>
  {% endfor %}
</ul>

{% for tag in site.tags %}
  {% assign tag_name = tag[0] %}
  {% if tag_name == "other" %}
    {% assign tag_name = "Science & Philosophy" %}
  {% endif %}
  <h3>{{- tag_name -}}</h3>
  <ul>
    {%- assign posts_sorted = tag[1] | sort: 'date' | reverse %}
    {%- for post in posts_sorted %}
    <li><a href="{{ site.baseurl }}{{ post.url }}">{{ post.date | date: "%b %Y" }} - {{ post.title }}</a></li>
    {%- endfor %}
  </ul>
{%- endfor %}

<h3>Personal Essays</h3>
<ul>
  {%- assign personal_sorted = site.personal | sort: 'date' | reverse %}
  {%- for post in personal_sorted %}
  <li><a href="{{ site.baseurl }}{{ post.url }}">{{ post.date | date: "%b %Y" }} - {{ post.title }}</a></li>
  {%- endfor %}
</ul>
