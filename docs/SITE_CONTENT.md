# Rana Shahout's site content

The homepage and research page position Rana's current work around LLM serving,
multi-agent infrastructure, reasoning orchestration, and resource-aware inference.
Sketches and streaming algorithms appear only in publication history.

Publication metadata was checked against [Google Scholar](https://scholar.google.com/citations?user=M0EIKRoAAAAJ&sortby=pubdate)
and its individual citation pages on October 18, 2026. The site contains 35
publication records after removing one duplicate listing of the 2018 arXiv paper
“Heavy hitters over interval queries.” Workshop versions and subsequent preprints
remain separate, labeled records; the count is not a count of distinct projects.

- `_data/publications.json` drives the publication page and featured work.
- `_bibliography/papers.bib` contains the corresponding metadata for BibTeX use.
- `category: ai` places work in the AI systems and learning section.
- `category: earlier` places work in publication history, including sketches.
- `featured: true`, `short_title`, and `summary` control homepage selections.
- `source_url` links to each Scholar citation record. `url` links to the paper.

Year groups follow Scholar's publication dates. Conference-year labels were
cross-checked against the old site's research and publications pages where the
proceedings publication date differs (for example, NeurIPS 2025 papers indexed
with a 2026 publication date). This is why a venue label may differ from the
year heading. Preprints are explicitly labeled and not presented as accepted papers.

The short bio and `ranas@mit.edu` contact address were verified from
[Rana's old homepage](https://sites.google.com/view/ranash).
The summaries are plain-language descriptions of the papers' abstracts, rather
than quoted abstracts or claims about performance outside the reported studies.

Template examples remain in source but are excluded through `_config.yml`.
Use `bundle exec jekyll build` directly; the original onboarding development
override is unnecessary for this personalized site.

## Homepage news

Edit `_data/news.yml` to add activity updates. Each item has a quoted ISO date
(`YYYY-MM-DD`, or `YYYY-MM` when only the month is known) and a `text` field
that accepts Markdown links. Entries are displayed newest first. For example:

```yaml
- date: "2026-10-19"
  text: "A short update about a talk, paper, or project, with an optional [link](https://example.org)."
```

The example above is an editing guide, not an actual activity update. The current
news items come from Rana's old homepage and verified Scholar records. The home
page uses `assets/css/home.css`; the research page is revised separately.
The publication tab is no longer shown; the homepage links directly to Scholar.
