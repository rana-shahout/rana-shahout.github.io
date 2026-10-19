# Continue the homepage revision

The website source changes are preserved on `codex/homepage-revision`.
The live site's main branch has not been changed.

## User's current direction

Work on the homepage first, then research and blog separately.
Match https://www.sh-reya.com/ in font family, font size, styling, spacing,
and picture placement. The reference HTML and both stylesheets were accessible in the continuation
environment. The homepage now uses its Inter/Lora font families, 15px body text,
cream/brown palette, 240px sidebar, 64px gap, and 220px left-side photo.
Fonts are bundled locally under `assets/fonts/home` with their licenses.

Keep the paragraph beginning “I build systems that make AI faster, more efficient,
and easier to run” and the short MIT/Harvard/Technion/Mellanox bio. Remove the
“Better systems. More capable AI.” slogan and promotional research sections.
Navigation should be Home, Research, Blog. Do not show a publications tab;
link to Rana's Google Scholar profile instead. Sketches are not active research.

## Current implementation

- `_pages/about.md`: compact introduction, bio, links, and news.
- `assets/css/home.css`: reference typography, palette, responsive sidebar, and photo placement.
- `_data/news.yml`: editable dated activity updates, newest first.
- `_pages/blog.md`: navigation destination only; full blog is a later task.
- `_pages/projects.md`: retained research page, with links redirected to Scholar.
- `_config.yml`: hides the publications page and template examples.
- `docs/design-preview/homepage.png` and `mobile.png`: updated desktop and mobile previews.

The first research-page redesign and 35 verified Scholar records are also retained
in source, but the user did not approve that initial design. Do not treat it as the
new visual target. The homepage currently links to Scholar instead.

## Environment and checks

Read AGENTS.md and the cloud runtime skill. Inspect the actual network policy;
verify that `www.sh-reya.com` and `sh-reya.com` are accessible before inspecting
reference HTML/CSS. Do not bypass the network proxy. No new credentials are needed.

Use the existing checkout; do not create a Git worktree unless explicitly asked.
If Ruby/gems are missing, run `bash docs/cloud-setup/install.sh` from the checkout.
This is the tested setup script, copied from the old workspace; it uses
`/workspace/.cloud-setup` and `/workspace/rana-shahout.github.io`.
Then run:

```bash
source /workspace/.cloud-setup/activate.sh
bundle exec jekyll build
bundle exec jekyll serve --host 0.0.0.0 --port 4000
npm run lint:prettier
npm run lint:style-contract
```

The baseurl is empty. No local development override is needed.
Builds, formatting, news rendering, desktop/mobile layout, and navigation passed
in the previous workspace. The continuation verified both font files load, 15px body text, all five news
entries, left-side desktop photo, centered mobile photo, and no horizontal overflow
at 1440px, 820px, and 390px in Chromium.

## Delivering previews

This chat interface did not display local image links or inline screenshot outputs.
The user authorized uploading screenshots to a separate GitHub review branch.
`codex/website-design-preview` contains preview images and a README rendered by
GitHub; update that branch with new screenshots for review. Keep main and the live
website unchanged until the user approves deployment.

## Research continuation — October 19, 2026

The user approved and requested implementation of two research directions:
co-designing AI applications and systems; and serving AI faster and more efficiently.
Reasoning is part of resource allocation in the second direction. Model-informed
systems is a method, not a third research direction. The approved questions and
paragraphs are preserved in `_pages/projects.md`. Project descriptions and groupings
are in `_data/research.yml`, with paper links resolved from `publications.json`.

The page uses `assets/css/research.css` to match the homepage. The old shared
`research-site.css` is retained for the hidden publications page. One small HTML/CSS diagram
illustrates application, data-processing, model-execution, storage, and runtime-state
decisions, with CSS motion, a pause button,
and reduced-motion support. Its controls are in `assets/js/research.js`.

The new uploaded `assets/img/Rana_Shahout_013.JPG` is used on the homepage with a
CSS crop. The original image is preserved. Blog and news content are unchanged.
Updated review screenshots and an animation GIF are in `docs/design-preview/`.
Main and the live website still await deployment approval.

### Latest review revisions

Google Scholar, LinkedIn (`https://www.linkedin.com/in/rana-sh`), email, and GitHub
are accessible inline SVG icon links on the homepage. Research no longer has
Scholar/profile links. Source icon attribution is under `assets/icons/`.
MARS appears in the first direction as well as scheduling/memory in the second.
The first direction retains the approved opening and adds concrete explanation of
cross-layer dependencies. Project descriptions now explain what is co-designed in
Orla, Palimpzest, and MARS. The diagram is HTML/CSS so its text remains readable on
mobile; it replaces the original generic three-layer SVG.
