---
layout: default
title: Research
permalink: /research/
description: Efficient and adaptive systems for AI and agentic workloads — the research focus of Rana Shahout at MIT.
nav: true
nav_order: 1
---

<link rel="stylesheet" href="{{ '/assets/css/research-site.css' | relative_url }}">

<div class="research-site">
  <header class="research-page-header">
    <p class="eyebrow">Research</p>
    <h1>Building the systems<br>behind AI.</h1>
    <p class="page-lead">I work at the intersection of systems, machine learning, and algorithms. My goal is to turn signals from AI models into better decisions about scheduling, execution, and resources.</p>
  </header>

  <section class="research-topic" aria-labelledby="efficient-title">
    <span class="direction-number" aria-hidden="true">01 /</span>
    <div><h2 id="efficient-title">Prediction-guided LLM serving</h2><p class="topic-question">How can AI do more with the resources it has?</p></div>
    <p>TRAIL uses a model’s internal embeddings to predict remaining output length and schedule requests. MARS extends prediction-guided, memory-aware scheduling to LLMs that call external APIs. My recent work also studies how adversarial inputs can manipulate scheduling predictions, and how to make those systems more robust.</p>
  </section>
  <section class="research-topic" aria-labelledby="adaptive-title">
    <span class="direction-number" aria-hidden="true">02 /</span>
    <div><h2 id="adaptive-title">Multi-agent systems and reasoning</h2><p class="topic-question">How should agents share resources and reasoning effort?</p></div>
    <p>Orla separates workflow policy from execution, helping coordinate model calls, tools, and backends. DUCHESS uses predictions to decide which reasoning branches to continue, stop, or duplicate. SVR-MAD studies how agents can exchange more useful evidence without the cost of unrestricted debate.</p>
  </section>
  <section class="research-topic" aria-labelledby="agents-title">
    <span class="direction-number" aria-hidden="true">03 /</span>
    <div><h2 id="agents-title">Power-aware and balanced inference</h2><p class="topic-question">How can serving systems use hardware more effectively?</p></div>
    <p>PALS jointly controls GPU power limits and software settings to improve serving efficiency. LASER balances load across Mixture-of-Experts models using their routing scores, without retraining. Both bring model and hardware information into the serving system’s decisions.</p>
  </section>

  <section class="featured-research" aria-labelledby="recent-title">
    <div class="section-heading-row"><h2 id="recent-title">Recent papers behind these ideas</h2><a class="text-link" href="https://scholar.google.com/citations?user={{ site.data.socials.scholar_userid }}">Google Scholar <span aria-hidden="true">→</span></a></div>
    {% assign ai_papers = site.data.publications | where: "category", "ai" %}
    {% for paper in ai_papers limit: 7 %}
    <article class="research-paper-link"><span class="paper-venue">{{ paper.venue_label | escape }}</span><h3><a href="{{ paper.url | escape }}">{{ paper.title | escape }}</a></h3>{% if paper.summary %}<p>{{ paper.summary | escape }}</p>{% endif %}</article>
    {% endfor %}
  </section>

  <section class="research-contact" aria-labelledby="read-title">
    <div><p class="eyebrow">Explore the work</p><h2 id="read-title">From questions to research.</h2><p>Find the publication record or get in touch to talk about AI systems.</p></div>
    <div class="contact-links"><a class="text-link" href="https://scholar.google.com/citations?user={{ site.data.socials.scholar_userid }}">Google Scholar <span aria-hidden="true">→</span></a><a class="text-link" href="mailto:{{ site.data.socials.email }}">Get in touch <span aria-hidden="true">→</span></a></div>
  </section>
</div>
