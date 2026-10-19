---
layout: default
permalink: /publications/
title: publications
description: Rana Shahout's publications on LLM serving, multi-agent systems, efficient inference, and earlier work on algorithms and data systems.
nav: true
nav_order: 2
---

<link rel="stylesheet" href="{{ '/assets/css/research-site.css' | relative_url }}">

<div class="research-site">
  <header class="research-page-header">
    <p class="eyebrow">Publications</p>
    <h1>The research record.</h1>
    <p class="page-lead">My current work focuses on the systems behind AI: serving language models, coordinating agents, and using predictions to make better execution decisions.</p>
    <div class="research-actions">
      <a class="research-button" href="#ai-publications">AI systems &amp; learning <span aria-hidden="true">↓</span></a>
      <a class="text-link" href="#earlier-publications">Earlier work <span aria-hidden="true">↓</span></a>
      <a class="text-link" href="https://scholar.google.com/citations?user={{ site.data.socials.scholar_userid }}&amp;sortby=pubdate">Google Scholar <span aria-hidden="true">→</span></a>
    </div>
  </header>

  <section class="publication-section" id="ai-publications" aria-labelledby="ai-title">
    <p class="eyebrow">Current research</p>
    <h2 id="ai-title">AI systems &amp; learning</h2>
    <p class="publication-note">Conference, journal, workshop, and preprint records. Workshop versions and later preprints are labeled separately.</p>
    {% assign ai_papers = site.data.publications | where: "category", "ai" %}
    {% assign ai_years = ai_papers | group_by: "year" %}
    {% for year in ai_years %}
    <h3 class="publication-year">{{ year.name }}</h3>
    <ol class="paper-list" aria-label="AI systems publications from {{ year.name }}">
      {% for paper in year.items %}
      <li class="publication-record">
        <span class="paper-venue">{{ paper.venue_label | escape }}</span>
        <h4><a href="{{ paper.url | escape }}">{{ paper.title | escape }}</a></h4>
        <p class="paper-authors">{% for author in paper.authors %}{% if author == "Rana Shahout" %}<strong>{{ author }}</strong>{% else %}{{ author | escape }}{% endif %}{% unless forloop.last %}, {% endunless %}{% endfor %}</p>
        {% if paper.summary %}<p class="paper-summary">{{ paper.summary | escape }}</p>{% endif %}
        <div class="paper-links"><a href="{{ paper.url | escape }}">Paper <span class="sr-only">— {{ paper.title | escape }}</span><span aria-hidden="true">→</span></a>{% if paper.project_url %}<a href="{{ paper.project_url | escape }}">Project <span class="sr-only">— {{ paper.title | escape }}</span><span aria-hidden="true">→</span></a>{% endif %}<a href="{{ paper.source_url | escape }}">Scholar record <span class="sr-only">— {{ paper.title | escape }}</span><span aria-hidden="true">→</span></a></div>
      </li>
      {% endfor %}
    </ol>
    {% endfor %}
  </section>

  <section class="publication-section" id="earlier-publications" aria-labelledby="earlier-title">
    <p class="eyebrow">Publication history</p>
    <h2 id="earlier-title">Earlier work: algorithms &amp; data systems</h2>
    <p class="publication-note">Earlier research on sketches, streaming algorithms, storage, and data systems. This work is part of my publication history; it is not my current research focus.</p>
    {% assign earlier_papers = site.data.publications | where: "category", "earlier" %}
    {% assign earlier_years = earlier_papers | group_by: "year" %}
    {% for year in earlier_years %}
    <h3 class="publication-year">{{ year.name }}</h3>
    <ol class="paper-list" aria-label="Earlier research publications from {{ year.name }}">
      {% for paper in year.items %}
      <li class="publication-record">
        <span class="paper-venue">{{ paper.venue_label | escape }}</span>
        <h4><a href="{{ paper.url | escape }}">{{ paper.title | escape }}</a></h4>
        <p class="paper-authors">{% for author in paper.authors %}{% if author == "Rana Shahout" %}<strong>{{ author }}</strong>{% else %}{{ author | escape }}{% endif %}{% unless forloop.last %}, {% endunless %}{% endfor %}</p>
        <div class="paper-links"><a href="{{ paper.url | escape }}">Paper <span class="sr-only">— {{ paper.title | escape }}</span><span aria-hidden="true">→</span></a><a href="{{ paper.source_url | escape }}">Scholar record <span class="sr-only">— {{ paper.title | escape }}</span><span aria-hidden="true">→</span></a></div>
      </li>
      {% endfor %}
    </ol>
    {% endfor %}
  </section>
  <p class="publication-provenance">Verified against Google Scholar on October 18, 2026. Year groups follow Scholar's publication dates; venue labels retain the conference year where it differs. <a href="https://scholar.google.com/citations?user={{ site.data.socials.scholar_userid }}">View the source profile</a>.</p>
</div>
