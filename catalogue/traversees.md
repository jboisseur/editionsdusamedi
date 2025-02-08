---
tags: collection
layout: layouts/page.njk
title: Collection traversées
---

*Traversées* est une collection de romans courts qui ont globalement pour thème le voyage.

<ul>
  {% for post in collections.traversees %}
  <li><a href="{{post.url}}">{{post.data.title}}</a></li>
  {% endfor %}
</ul>