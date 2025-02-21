---
tags: headernav
order: 2
layout: layouts/page.njk
title: catalogue
---
(Vous êtes libraire ? Nous n'avons pas (encore) de distributeur, si vous souhaitez passer commande envoyez-nous un email !)

## collection traversées
<ul class="catalogue">
  {%- for post in collections.book -%}
    {%- if post.data.book.collection == "traversées" -%}
      <li>
          <div class="catalogue_left">
            <a href="{{ post.url }}" target="_blank"><img src="{{ post.data.book.cover }}" alt="Couverture de {{ post.data.title }}" class="catalogue_cover"></a>
            <p class="catalogue_date">{{ post.data.book.date | blogDate }}</p>
            <p class="center small"><a href="{{ post.data.book.p_buy_url }}" target="_blank"><i class="fa-solid fa-cart-shopping"><span class="sr-only">Acheter</span></i></a> ({{ post.data.book.p_price }} €)</p>
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
<ul class="catalogue">
  {%- for post in collections.book -%}
    {%- if post.data.book.collection == "vagabondages" -%}
      <li>
          <div class="catalogue_left">
            <a href="{{ post.url }}" target="_blank"><img src="{{ post.data.book.cover }}" alt="Couverture de {{ post.data.title }}" class="catalogue_cover"></a>
            <p class="catalogue_date">{{ post.data.book.date | blogDate }}</p>
            <p class="center small"><a href="{{ post.data.book.p_buy_url }}" target="_blank"><i class="fa-solid fa-cart-shopping"><span class="sr-only">Acheter</span></i></a> ({{ post.data.book.p_price }} €)</p>
          </div>
          <div class="catalogue_right">
            <h3><a href="{{ post.url }}" target="_blank">{{post.data.title}}</a> <span class="catalogue_author">par <strong>{{ post.data.book.author }}</span></strong></h3>   
           {{- post.content | safe -}}
          </div>
      </li>
    {%- endif -%}
  {%- endfor -%}
</ul>