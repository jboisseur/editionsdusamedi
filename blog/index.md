---
tags: headernav
order: 5
layout: layouts/base.njk
title: blog
---
<ul>
  {% for post in collections.blog %}
  <li><a href="{{post.url}}">{{post.data.title}}</a></li>
  {% endfor %}
</ul>