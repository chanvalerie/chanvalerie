---
layout: page
title: Blog Archive
---

<p><a class="button" href="{{ site.baseurl }}/archive-newest/">Sort by new</a></p>

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
