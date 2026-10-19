---
layout: default
title: Research
permalink: /research/
description: Co-designing AI applications and systems, and allocating resources for faster, more efficient AI serving and reasoning.
nav: true
nav_order: 1
---

<link rel="stylesheet" href="{{ '/assets/css/research.css' | relative_url }}">

<div class="research-page">
  <aside class="research-index" aria-label="Research overview">
    <h1>Research</h1>
    <nav aria-label="Research directions">
      <a href="#co-design">Co-designing AI applications and systems</a>
      <a href="#serving">Serving AI faster and more efficiently</a>
    </nav>
    <a class="scholar-link" href="https://scholar.google.com/citations?user={{ site.data.socials.scholar_userid }}">Google Scholar</a>
  </aside>

  <div class="research-content">
    <section class="research-direction" id="co-design" aria-labelledby="co-design-title">
      <h2 id="co-design-title">Co-designing AI applications and systems</h2>
      <p class="research-question">How can application structure and goals inform the design of the systems that execute them?</p>
      <p>I study how to design the AI stack as a whole, bringing together application logic, models, serving systems, storage, and databases. Treating an LLM as an API call hides opportunities to optimize across these layers. By co-designing them, we can make decisions about data access, computation, and execution together.</p>

      <figure class="stack-illustration">
        <svg viewBox="0 0 640 294" role="img" aria-labelledby="stack-title stack-description">
          <title id="stack-title">Co-design across the AI stack</title>
          <desc id="stack-description">Application logic and goals, model serving, and storage and databases are connected in both directions. Moving dots show information passing between the layers.</desc>
          <defs>
            <marker id="stack-arrow" viewBox="0 0 8 8" refX="6" refY="4" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 1 1 L 6 4 L 1 7" fill="none" stroke="currentColor" stroke-width="1.2" />
            </marker>
          </defs>
          <g class="stack-connections" fill="none" marker-end="url(#stack-arrow)">
            <path d="M 306 72 V 116" />
            <path d="M 334 120 V 76" />
            <path d="M 306 176 V 220" />
            <path d="M 334 224 V 180" />
          </g>
          <g class="stack-layer">
            <rect x="1" y="16" width="638" height="56" rx="6" />
            <rect x="1" y="120" width="638" height="56" rx="6" />
            <rect x="1" y="224" width="638" height="56" rx="6" />
          </g>
          <g class="stack-labels">
            <text x="22" y="49">Application</text>
            <text x="22" y="153">Serving</text>
            <text x="22" y="257">Data</text>
          </g>
          <g class="stack-details">
            <text x="210" y="49">Workflow · goals · quality</text>
            <text x="210" y="153">Models · scheduling · memory</text>
            <text x="210" y="257">Storage · databases</text>
          </g>
          <g class="stack-flow" aria-hidden="true">
            <circle class="flow-down" cx="306" cy="78" r="3" />
            <circle class="flow-up" cx="334" cy="218" r="3" />
          </g>
        </svg>
        <figcaption>
          <span>Design decisions span the application, serving, and data layers.</span>
          <button class="animation-toggle" type="button" aria-pressed="false" hidden>Pause animation</button>
        </figcaption>
      </figure>

      <div class="research-projects">
        <h3>Projects</h3>
        <ul class="project-list">
          {% for project in site.data.research.applications %}
          {% assign paper = site.data.publications | where: "id", project.paper_id | first %}
          <li>
            <h4><a href="{{ project.project_url | escape }}">{{ project.title | escape }}</a></h4>
            <p>{{ project.description | escape }}</p>
            <a class="paper-link" href="{{ paper.url | escape }}">Paper<span class="sr-only">: {{ paper.title | escape }}</span></a>
          </li>
          {% endfor %}
        </ul>
      </div>
    </section>

    <section class="research-direction" id="serving" aria-labelledby="serving-title">
      <h2 id="serving-title">Serving AI faster and more efficiently</h2>
      <p class="research-question">Which request should run next, where should it run, and what resources should it receive?</p>
      <p>I study how to allocate compute, memory, and power across AI workloads. This includes scheduling requests, balancing work across models and experts, and deciding how much reasoning effort to spend on a question. I develop methods that use predictions and feedback to adapt these decisions as execution unfolds.</p>

      <div class="research-method">
        <p class="research-question">Can signals from inside a model help the system make better decisions?</p>
        <p>A recurring approach in my work is <strong>model-informed systems</strong>. I use internal model signals to predict remaining work, guide expert routing, and decide when a reasoning branch can produce an answer. These signals connect the model’s progress to the system’s execution decisions.</p>
      </div>

      <div class="research-projects">
        <h3>Projects</h3>
        <div class="project-groups">
          {% for group in site.data.research.serving %}
          <section class="project-group" aria-labelledby="group-{{ forloop.index }}">
            <h4 id="group-{{ forloop.index }}">{{ group.title | escape }}</h4>
            <ul class="project-list">
              {% for project in group.projects %}
              {% assign paper = site.data.publications | where: "id", project.paper_id | first %}
              <li>
                <p><a class="project-name" href="{{ paper.url | escape }}" aria-label="{{ project.title | escape }}: {{ paper.title | escape }}">{{ project.title | escape }}</a> — {{ project.description | escape }}</p>
              </li>
              {% endfor %}
            </ul>
          </section>
          {% endfor %}
        </div>
      </div>

      <p class="research-foundations">Related work on prediction costs, queueing, and robustness:
        {% for project in site.data.research.foundations %}
        {% assign paper = site.data.publications | where: "id", project.paper_id | first %}
        <a href="{{ paper.url | escape }}">{{ project.title | escape }}</a>{% unless forloop.last %}; {% endunless %}{% endfor %}.
      </p>
    </section>

    <p class="research-publications">For the full publication list, see <a href="https://scholar.google.com/citations?user={{ site.data.socials.scholar_userid }}">Google Scholar</a>.</p>

  </div>
</div>

<script src="{{ '/assets/js/research.js' | relative_url }}" defer></script>
