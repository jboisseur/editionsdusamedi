---
tags: headernav
order: 2
layout: layouts/page.njk
title: catalogue
templateEngineOverride: njk,md
---
(Vous êtes libraire ? Nous n'avons pas (encore) de distributeur, si vous souhaitez passer commande envoyez-nous un email !)

## collection traversées
*Des romans courts et stylés autour du thème du voyage*

<ul class="catalogue">
  {%- for post in collections.book | reverse -%}
    {%- if post.data.book.collection == "traversées" -%}
      <li>
          <div class="catalogue_left">
            <a href="{{ post.url }}" target="_blank"><img src="{{ post.data.book.cover }}" alt="Couverture de {{ post.data.title }}" class="catalogue_cover"></a>
            <p class="catalogue_date">{{ post.data.book.date | blogDate }}</p>
            <p class="center small"><a href="{{ post.data.book.p.url }}" target="_blank" title="Acheter le livre physique"><i class="fa-solid fa-cart-shopping"><span class="sr-only">Acheter</span></i></a> ({{ post.data.book.p.price }} €)</p>
          </div>
          <div class="catalogue_right">
            <h3><a href="{{ post.url }}" target="_blank">{{post.data.title}}</a> <span class="catalogue_author">par <strong>{{ post.data.book.author }}</span></strong></h3>   
           {{- post.content | safe -}}
          </div>
      </li>
    {%- endif -%}
  {%- endfor -%}
</ul>

## collection vagabondages
*Des projets littéraires qui sortent de l'ordinaire*

<ul class="catalogue">
  {%- for post in collections.book | reverse -%}
    {%- if post.data.book.collection == "vagabondages" -%}
      <li>
          <div class="catalogue_left">
            <a href="{{ post.url }}" target="_blank"><img src="{{ post.data.book.cover }}" alt="Couverture de {{ post.data.title }}" class="catalogue_cover"></a>
            <p class="catalogue_date">{{ post.data.book.date | blogDate }}</p>
            <p class="center small"><a href="{{ post.data.book.p.url }}" target="_blank" title="Acheter le livre physique"><i class="fa-solid fa-cart-shopping"><span class="sr-only">Acheter</span></i></a> ({{ post.data.book.p.price }} €)</p>
          </div>
          <div class="catalogue_right">
            <h3><a href="{{ post.url }}" target="_blank">{{post.data.title}}</a> <span class="catalogue_author">par <strong>{{ post.data.book.author }}</span></strong></h3>   
           {{- post.content | safe -}}
          </div>
      </li>
    {%- endif -%}
  {%- endfor -%}
</ul>