---
layout: default
title: Projects
permalink: /projects
---

<h1>Projects</h1>

<h2>Electrical Engineering</h2>
<div class="grid">
  {% for item in site.engineering reversed %}
    {% include card.html item=item %}
  {% endfor %}
</div>

<h2 class="section-title">Bouldering Analyses</h2>
<div class="grid">
  {% for item in site.bouldering reversed %}
    {% include card.html item=item %}
  {% endfor %}
</div>

<h2 class="section-title">Mountaineering & Hiking</h2>
<div class="grid">
  {% for item in site.mountaineering reversed %}
    {% include card.html item=item %}
  {% endfor %}
</div>