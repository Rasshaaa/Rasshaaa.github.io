# Rasshaaa Portfolio

A lightweight portfolio and Markdown blog for **GitHub Pages**, continuing the original Rasshaaa site. The design keeps the original white canvas, crimson accent, sans-serif font, centered sections, sticky dark navigation, Rellax parallax, and AOS animations.

No React, npm install, JavaScript Markdown renderer, or server is required. GitHub Pages builds the Jekyll posts into HTML and highlights code with Rouge.

## What to edit

| File | Purpose |
| --- | --- |
| `_data/profile.yml` | Name, headline, introduction, background, location, contacts |
| `_data/skills.yml` | Technical interests and skills |
| `_data/projects.yml` | Projects, descriptions, tags, links |
| `_data/achievements.yml` | Verified awards, competition results, certificates |
| `_posts/*.md` | Blog posts and CTF writeups |
| `assets/images/blog/` | Screenshots included in posts |
| `style.css` | All page styling, plain readable CSS |
| `script.js` | Responsive navigation, client-side blog search, AOS/Rellax initialization |

All information marked `[REDACTED]` is placeholder content, **not a confirmed fact**. Replace it before sharing your site.

## Add a writeup

1. Add a new Markdown file under `_posts/`. **The filename must start with `YYYY-MM-DD-`**.
2. Copy the front matter below and fill in your own details.
3. Use fenced code blocks with a lowercase language name: `python`, `bash`, `javascript`, `powershell`, `c`, `cpp`, etc.
4. Add screenshot files to `assets/images/blog/` and reference them with `relative_url`.
5. Push your changes. Jekyll automatically adds the post to the blog index and the latest-posts section on the homepage.

Example file: `_posts/2026-10-20-my-ctf-writeup.md`:

````markdown
---
layout: post
title: "My CTF Writeup"
date: 2026-10-20 10:00:00 +0700
category: CTF / Web
description: A short description of what the article covers.
tags: [CTF, Web, Python]
---

## Overview

Explain the challenge and relevant constraints.

## Exploit

```python
print("Hello from a highlighted code block")
```

![Screenshot]({{ '/assets/images/blog/my-screenshot.png' | relative_url }})

## Takeaways

Explain the root cause and mitigation.
````

**Important:** Markdown is processed by Jekyll during publication. The `{{ ... | relative_url }}` syntax is expected. The sample post included in this repository is a template, not a claim about a real solved challenge.

To link a project, populate its `url` in `_data/projects.yml`. Until you do, it shows an informational placeholder instead of a dead link. Replace the email and LinkedIn placeholders in `_data/profile.yml`. Only the public GitHub link is pre-filled.

## Deploy to GitHub Pages

The repository must be named `Rasshaaa.github.io` under the `Rasshaaa` account.

1. Commit all files into the repository root on `main`.
2. Navigate to **Settings → Pages**.
3. Select **Deploy from a branch**, branch **main**, folder **/(root)**.
4. Make sure there is **no `.nojekyll` file**, as Jekyll is needed to render Markdown.
5. Visit <https://rasshaaa.github.io/> and <https://rasshaaa.github.io/blog/> after the Pages deployment succeeds.

GitHub Pages natively supports Jekyll and Rouge. No custom GitHub Actions workflow or hosting provider is required for this setup.

## Test locally (optional)

To render blog pages locally, install Jekyll and Bundler on your development machine (Ruby is required), then run:

```bash
bundle install
bundle exec jekyll serve
```

Open <http://127.0.0.1:4000/>. Opening `index.html` directly or running `python -m http.server` **will not** process Jekyll/Liquid tags or Markdown posts. A successful production deploy should be verified in GitHub Pages Actions and in the deployed site.

The remote AOS and Rellax scripts require internet access. If a CDN is unreachable, navigation and content still work without those animations.

## Design notes

The original site had a scroll lock on page load, an undefined `rootElement` variable, missing Contact destination, and incomplete mobile navigation. These have been replaced with ordinary anchor navigation and a keyboard-accessible mobile menu. Animations are disabled for reduced-motion preference and Rellax is desktop-only.

For CSS styling, `style.css` retains Arial/Helvetica/sans-serif as in the original site's global sans-serif setting. Monospace is used only for small technical labels and code blocks.

## File structure

```text
.
├── _config.yml
├── _data/
│   ├── achievements.yml
│   ├── profile.yml
│   ├── projects.yml
│   └── skills.yml
├── _includes/
│   └── nav.html
├── _layouts/
│   ├── default.html
│   └── post.html
├── _posts/
│   └── 2026-10-15-markdown-writeup-example.md
├── assets/
│   ├── favicon.svg
│   └── images/blog/screenshot-placeholder.svg
├── blog/
│   └── index.html
├── index.html
├── script.js
├── style.css
├── Gemfile
└── README.md
```
