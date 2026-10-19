---
layout: default
title: Home
permalink: /
description: Rana Shahout is a postdoctoral fellow at MIT CSAIL working on AI systems, LLM serving, and multi-agent infrastructure.
---

<link rel="stylesheet" href="{{ '/assets/css/home.css' | relative_url }}">

<div class="home-page">
  <aside class="home-profile" aria-labelledby="home-title">
    <img class="home-photo" src="{{ '/assets/img/rana.jpg' | relative_url }}" alt="Rana Shahout" width="396" height="594" fetchpriority="high">
    <div class="home-profile-info">
      <h1 id="home-title">Rana Shahout</h1>
      <p class="home-affiliation">Postdoctoral Fellow · MIT CSAIL</p>
      <p class="home-links">
        <a href="mailto:{{ site.data.socials.email }}">Email</a>
        <span aria-hidden="true">/</span>
        <a href="https://scholar.google.com/citations?user={{ site.data.socials.scholar_userid }}">Google Scholar</a>
        <span aria-hidden="true">/</span>
        <a href="https://github.com/{{ site.data.socials.github_username }}">GitHub</a>
      </p>
    </div>
  </aside>
  <div class="home-content">
    <section class="home-introduction" aria-label="Introduction and biography">
      <p>I build systems that make AI faster, more efficient, and easier to run. My research brings together LLM serving, multi-agent infrastructure, and algorithms that learn from the models they support.</p>
      <p>I am a postdoctoral fellow at MIT CSAIL. Previously, I was a postdoctoral fellow at Harvard University. I received my Ph.D. in Computer Science from the Technion, where I also completed my B.Sc. and M.Sc. Before academia, I worked as a senior software engineer at Mellanox, now part of NVIDIA.</p>
    </section>
    <section class="home-news" aria-labelledby="news-title">
      <h2 id="news-title">News</h2>
      {% assign news_items = site.data.news | sort: "date" | reverse %}
      <ul class="news-list">
        {% for item in news_items %}
        <li>
          {% assign display_date = item.date %}
          {% assign date_length = item.date | size %}
          {% if date_length == 7 %}{% assign display_date = item.date | append: "-01" %}{% endif %}
          <time datetime="{{ item.date }}">{{ display_date | date: "%b %Y" }}</time>
          <div>{{ item.text | markdownify }}</div>
        </li>
        {% endfor %}
      </ul>
    </section>
  </div>
</div>
