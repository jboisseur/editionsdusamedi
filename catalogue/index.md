---
tags: headernav
order: 2
layout: layouts/page.njk
title: catalogue
---
(Vous êtes libraire ? Nous n'avons pas (encore) de distributeur, si vous souhaitez passer commande envoyez-nous un email !)

## collection traversées
<ul>
  {% for post in collections.book %}
    {% if book.collection != "traversées" %}
      <li><a href="{{post.url}}">{{post.data.title}}</a></li>
    {% endif %}
  {% endfor %}
</ul>

## collection vagabondages
<ul>
  {% for post in collections.book %}
    {% if book.collection != "vagabondages" %}
      <li><a href="{{post.url}}">{{post.data.title}}</a></li>
    {% endif %}
  {% endfor %}
</ul>