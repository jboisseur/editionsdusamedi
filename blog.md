---
tags: headernav
layout: layouts/base.njk
order: 5
title: blog
templateEngineOverride: njk,md
---

{% set showYear = true %}
{% set postslist = collections.blog %}

<ul reversed>
{% set currentYear = "" %}
{% for post in postslist  | reverse %}
{% if showYear %}
      {% set postYear = post.date.getFullYear() %}
      {% if currentYear != postYear %}
      {% set currentYear = postYear %}
      <h3>{{ postYear }}</h3>
      {% endif %}
{% endif %}
  <li><a href="{{ post.url | url }}">{% if post.data.title %}{{ post.data.title }}{% else %}<code>{{ post.url }}</code> {% endif %}</a> ({{ post.date | withoutYear }})
  </li>
{% endfor %}
</ul>