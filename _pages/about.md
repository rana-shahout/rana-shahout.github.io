---
layout: default
title: Home
permalink: /
description: Rana Shahout is a postdoctoral fellow at MIT CSAIL working on AI systems, LLM serving, and multi-agent infrastructure.
---

<link rel="stylesheet" href="{{ '/assets/css/site.css' | relative_url | bust_file_cache }}">
<link rel="stylesheet" href="{{ '/assets/css/home.css' | relative_url | bust_file_cache }}">

<div class="home-page">
  <aside class="home-profile" aria-labelledby="home-title">
    <div class="home-photo">
      <img src="{{ '/assets/img/Rana_Shahout_013.JPG' | relative_url }}" alt="Rana Shahout" width="1280" height="1920" fetchpriority="high">
    </div>
    <div class="home-profile-info">
      <h1 id="home-title">Rana Shahout</h1>
      <p class="home-affiliation">Postdoctoral Fellow · MIT CSAIL</p>
      <nav class="home-links" aria-label="Contact and profiles">
        <a href="https://scholar.google.com/citations?user={{ site.data.socials.scholar_userid }}" aria-label="Google Scholar" title="Google Scholar"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="currentColor"><path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/></svg></a>
        {% if site.data.socials.linkedin_url %}
        <a href="{{ site.data.socials.linkedin_url }}" aria-label="LinkedIn" title="LinkedIn"><svg viewBox="0 0 16 16" aria-hidden="true" focusable="false" fill="currentColor">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
</svg></a>
        {% endif %}
        <details class="home-email">
          <summary role="button" aria-label="Email" title="Email" aria-controls="home-email-panel"><svg viewBox="0 0 16 16" aria-hidden="true" focusable="false" fill="currentColor">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
</svg></summary>
          <div class="email-panel" id="home-email-panel">
            <a class="email-address" href="mailto:{{ site.data.socials.email }}">{{ site.data.socials.email }}</a>
            <button class="copy-email" type="button" hidden>Copy address</button>
            <span class="email-status" role="status" aria-live="polite"></span>
          </div>
        </details>
      </nav>
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

<script src="{{ '/assets/js/contact.js' | relative_url | bust_file_cache }}" defer></script>
