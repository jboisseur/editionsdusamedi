---
tags: collection

title: Collection traversées

layout: layouts/page.njk
---

<ul>
  {% for post in collections.catalogue_traversees %}
  <li><a href="{{post.url}}">{{post.data.title}}</a></li>
  {% endfor %}
</ul>