---
tags: pages

title: blog

layout: layouts/base.njk
---
<ul>
  {% for post in collections.blog %}
  <li><a href="{{post.url}}">{{post.data.title}}</a></li>
  {% endfor %}
</ul>