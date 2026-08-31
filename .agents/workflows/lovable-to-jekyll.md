---
name: lovable-to-jekyll
description: Convert lovable-design into the current Jekyll repository.
---

# Lovable → Jekyll

Use the `lovable-to-jekyll` agent.

## Source

../aipnurhayadi.github.io.lovable-design

## Target

Current workspace.

---

## Phase 1 — Inspect Source

Inspect the complete source repository.

Determine:

- framework
- build tool
- package manager
- routing
- pages
- components
- assets
- fonts
- icons
- CSS
- JavaScript
- external dependencies

Do not modify the source.

---

## Phase 2 — Inspect Target

Inspect the current repository.

Determine:

- whether Jekyll already exists
- current layouts
- includes
- data
- assets
- configuration
- existing pages
- existing content

Do not unnecessarily destroy existing target content.

---

## Phase 3 — Create Migration Map

Create an internal mapping:

React component
→ Jekyll include

React layout
→ Jekyll layout

React page
→ Jekyll page

Static data
→ `_data`

CSS
→ Jekyll assets

Images
→ Jekyll assets

React Router
→ Jekyll routes

---

## Phase 4 — Implement

Implement the design in the target repository.

Prefer reusable:

- layouts
- includes
- data files

Avoid duplicated HTML.

---

## Phase 5 — GitHub Pages

Ensure:

- `_config.yml` is valid
- `baseurl` is handled
- asset URLs work
- internal links work
- Jekyll plugins are GitHub Pages compatible

Use `relative_url` where appropriate.

---

## Phase 6 — Verify

Build:

`bundle exec jekyll build`

Fix all errors.

Run locally.

Inspect the result.

Verify:

- desktop
- mobile
- navigation
- images
- fonts
- interactions

---

## Completion

Do not finish until the site is functional and visually faithful
to the Lovable source.
