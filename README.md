# em-site

The application landing page for the "room in our villa" invitation — a single,
self-contained page that collects applications and routes everyone to email.

**Live site:** _(add your Netlify URL once connected)_
**Custom domain:** _(add once linked)_

---

## How this is set up

- `index.html` — the entire site. All CSS and JS are inline; no build step, no
  dependencies. Open it in any browser to preview locally.
- `assets/` — for future images (the page needs none to work; the design is drawn in CSS).
- `netlify.toml` — tells Netlify to publish this folder as-is.

Hosting is **Netlify**, connected to this GitHub repo. Every time a change is
committed here, Netlify rebuilds and the live site updates automatically in ~30 seconds.

## How to make edits (the easy part)

**Small text tweaks, right here on GitHub:**
1. Click `index.html` above → click the pencil ✏️ (Edit) button.
2. Make your change → "Commit changes."
3. Netlify redeploys on its own. Refresh the live site in ~30 seconds.

**Bigger changes:** ask Claude — it edits the file and commits, and the site updates itself.

## Two tokens to personalize in `index.html`

- `@yourhandle` — replace with the real Instagram handle (appears in the footer).
- The form target — pick one:
  - **Formspree** (fast test): replace `YOUR_FORM_ID` in `<form action="...">`.
  - **Kit / ConvertKit** (recommended): paste your Kit embed into the clearly marked
    `KIT EMBED SLOT` comment block and remove the styled fallback form.

## The 9 application fields

Name · Email · Location · Why this calls to you · Dutch level · Availability ·
Instagram · Their story · Anything else. Field-to-Kit mapping lives in the funnel
kit (`04-form-fields.md`).
