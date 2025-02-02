---
tags: headernav
date: 2015-03-05
layout: layouts/base.njk
title: blog
---
<ul>
  {% for post in collections.blog %}
  <li><a href="{{post.url}}">{{post.data.title}}</a></li>
  {% endfor %}
</ul>