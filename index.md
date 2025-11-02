---
layout: default
title: Arash Ghobadi — Portfolio
---

<section class="hero">
  <div>
    <h1>Hi! I'm Arash Ghobadi</h1>
    <p>Electrical Engineering @ UBC · Bouldering & Mountaineering Enthusiast. This is where I document my engineering builds, climb analyses, and mountain projects.</p>
    <div class="badges">
      <span class="badge">Circuits & Embedded</span>
      <span class="badge">Signal Processing</span>
      <span class="badge">Bouldering V4–V7</span>
      <span class="badge">Coastal Mountains</span>
    </div>
  </div>
</section>

<h2 class="section-title">Latest entries</h2>
<div class="grid">
  {% assign all = site.engineering | concat: site.bouldering | concat: site.mountaineering %}
  {% assign recent = all | sort: "date" | reverse | slice: 0, 9 %}
  {% for item in recent %}
    {% include card.html item=item %}
  {% endfor %}
</div>