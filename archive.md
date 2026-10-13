---
layout: page
title: Blog Archive
---

{% for tag in site.tags %}
  {% assign tag_name = tag[0] %}
  {% if tag_name == "other" %}
    {% assign tag_name = "Science and Philosophy" %}
  {% endif %}
  <h3>{{- tag_name -}}</h3>
  <ul>
    {%- for post in tag[1] %}
    <li><a href="{{ site.baseurl }}{{ post.url }}">{{ post.date | date: "%b %Y" }} - {{ post.title }}</a></li>
    {%- endfor %}
  </ul>
{%- endfor %}
<h3>Personal Essays</h3>
<ul>
  {%- for post in site.personal %}
  <li><a href="{{ site.baseurl }}{{ post.url }}">{{ post.date | date: "%b %Y" }} - {{ post.title }}</a></li>
  {%- endfor %}
</ul>
