# Continue the homepage revision

The website source changes are preserved on `codex/homepage-revision`.
The live site's main branch has not been changed.

## User's current direction

Work on the homepage first, then research and blog separately.
Match https://www.sh-reya.com/ in font family, font size, styling, spacing,
and picture placement. This exact match is still pending: the old running chat
received proxy-policy HTTP 403 responses even after settings were published in
another environment editor. Do not claim the current provisional font matches.

Keep the paragraph beginning “I build systems that make AI faster, more efficient,
and easier to run” and the short MIT/Harvard/Technion/Mellanox bio. Remove the
“Better systems. More capable AI.” slogan and promotional research sections.
Navigation should be Home, Research, Blog. Do not show a publications tab;
link to Rana's Google Scholar profile instead. Sketches are not active research.

## Current implementation

- `_pages/about.md`: compact introduction, bio, links, and news.
- `assets/css/home.css`: provisional serif typography and rectangular photo.
- `_data/news.yml`: editable dated activity updates, newest first.
- `_pages/blog.md`: navigation destination only; full blog is a later task.
- `_pages/projects.md`: retained research page, with links redirected to Scholar.
- `_config.yml`: hides the publications page and template examples.
- `docs/design-preview/homepage.png` and `mobile.png`: current provisional previews.

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
in the previous workspace. Exact reference typography remains unverified.

## Delivering previews

This chat interface did not display local image links or inline screenshot outputs.
The user authorized uploading screenshots to a separate GitHub review branch.
`codex/website-design-preview` contains preview images and a README rendered by
GitHub; update that branch with new screenshots for review. Keep main and the live
website unchanged until the user approves deployment.
