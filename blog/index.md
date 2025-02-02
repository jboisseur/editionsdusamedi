---
tags: headernav
layout: layouts/base.njk
title: blog
order: 5
---
<ul>
  {% for post in collections.blog %}
  <li><a href="{{post.url}}">{{post.data.title}}</a></li>
  {% endfor %}
</ul>