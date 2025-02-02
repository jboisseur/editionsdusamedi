---
tags: headernav
order: 4
layout: layouts/page.njk
title: contact
---
<form name="contact" method="POST" data-netlify="true" action="/contact-success">
  <label for="name">Votre nom</label>
  <input type="text" name="name" id="name" autocomplete="name" placeholder="Votre nom" title="Veuillez entrer votre nom" required>
  <label for="email">Votre adresse email</label>
  <input type="email" name="email" id="email" autocomplete="email" placeholder="Votre adresse email" title="La partie après le @ est incorrecte." pattern="^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$" required>
  <label for="message">Contenu de votre message</label>
  <textarea name="message" id="message" placeholder="Ecrivez votre message ici" rows="7" required></textarea>
  <button type="submit">Envoyer le message</button>
</form>