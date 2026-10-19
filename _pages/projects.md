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
  </aside>

  <div class="research-content">
    <section class="research-direction" id="co-design" aria-labelledby="co-design-title">
      <h2 id="co-design-title">Co-designing AI applications and systems</h2>
      <p class="research-question">How can application structure and goals inform the design of the systems that execute them?</p>
      <p>I study how to design the AI stack as a whole, bringing together application logic, models, serving systems, storage, and databases. Treating an LLM as an API call hides opportunities to optimize across these layers. By co-designing them, we can make decisions about data access, computation, and execution together.</p>
      <p class="stack-explanation">These layers make coupled decisions. A database or query engine determines which data reaches a model. A workflow determines which calls can run in parallel and which share context. The serving system determines how long that context occupies GPU memory. Optimizing each layer independently can save work in one place while creating data movement, recomputation, or waiting elsewhere.</p>
      <p class="stack-explanation">I work on abstractions and execution policies that make these dependencies visible across layers. This lets us consider operator order, model choice, data access, context reuse, and scheduling together, with application quality, latency, and cost as shared constraints.</p>

      <figure class="stack-illustration">
        <div class="stack-diagram" role="img" aria-labelledby="stack-title stack-description">
          <span class="sr-only" id="stack-title">Decisions across the AI stack</span>
          <span class="sr-only" id="stack-description">Application dependencies and quality, latency, and cost constraints guide both data processing and model execution. Data processing determines which records and context reach model calls. Storage access and reuse support data processing; context retention, offloading, and recomputation support model execution. These decisions must be coordinated.</span>
          <div class="stack-node stack-application" aria-hidden="true">
            <strong>Application and query</strong>
            <span>Dependencies · quality · latency · cost</span>
          </div>
          <div class="stack-branches" aria-hidden="true">
            <span class="stack-branch"><span class="flow-down"></span></span>
            <span class="stack-branch"><span class="flow-up"></span></span>
          </div>
          <div class="stack-row stack-execution" aria-hidden="true">
            <div class="stack-node">
              <strong>Data processing</strong>
              <span>Filter and retrieve data<br>Order operators</span>
            </div>
            <span class="stack-crosslink"></span>
            <div class="stack-node">
              <strong>Model execution</strong>
              <span>Select models<br>Schedule and batch calls</span>
            </div>
          </div>
          <div class="stack-branches stack-lower-branches" aria-hidden="true">
            <span class="stack-branch"></span>
            <span class="stack-branch"></span>
          </div>
          <div class="stack-row" aria-hidden="true">
            <div class="stack-node">
              <strong>Storage and databases</strong>
              <span>Access and place data<br>Reuse intermediate results</span>
            </div>
            <span></span>
            <div class="stack-node">
              <strong>Runtime state</strong>
              <span>Retain, offload, or<br>recompute context</span>
            </div>
          </div>
        </div>
        <figcaption>
          <span>Operator order changes model calls; tool waits change memory decisions.</span>
          <button class="animation-toggle" type="button" aria-pressed="false" hidden>Pause animation</button>
        </figcaption>
      </figure>

      <div class="research-projects">
        <h3>Projects</h3>
        <ul class="project-list">
          {% for project in site.data.research.applications %}
          {% assign paper = site.data.publications | where: "id", project.paper_id | first %}
          <li>
            {% assign project_link = project.project_url | default: paper.url %}
            <h4><a href="{{ project_link | escape }}">{{ project.title | escape }}</a></h4>
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

  </div>
</div>

<script src="{{ '/assets/js/research.js' | relative_url }}" defer></script>
