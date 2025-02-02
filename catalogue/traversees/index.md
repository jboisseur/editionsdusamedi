---
tags: collection
layout: layouts/page.njk
title: Collection traversées
---

<ul>
  {% for post in collections.catalogue_traversees %}
  <li><a href="{{post.url}}">{{post.data.title}}</a></li>
  {% endfor %}
</ul>