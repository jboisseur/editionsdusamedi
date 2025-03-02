---
tags: headernav
order: 5
title: blog
templateEngineOverride: njk,md
layout: layouts/base.njk
eleventyExcludeFromCollections: ["blog"]
---
{% set postslist = collections.blog | reverse %}
{% set index = postslist.length - 1 %}
  <article>
    <h1 class="center">{{ postslist[0].data.title }}</h1>
    <p class="center"><time>{{ postslist[0].date | blogDate }}</time></p>
    {{ postslist[0].content | safe }}
  </article>
  <nav aria-label="pagination">
    <a href="{{ postslist[1].url }}">&larr; Précédent</a>
  </nav>
{% include '_includes/layouts/post_archives.njk' %}