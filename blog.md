---
tags: headernav
layout: layouts/base.njk
order: 5
title: blog
---
<ul>
  {% for post in collections.blog %}
  <li><a href="{{post.url}}">{{post.data.title}}</a></li>
  {% endfor %}
</ul>