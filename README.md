# Petal & Polish

A nail art, nail care, and nail health blog. Built with [Astro](https://astro.build) + TypeScript.

This is a real (not templated) blog: seed content, a tailored beauty/lifestyle design, SEO
fundamentals, and monetization scaffolding are all wired up. Several pieces are intentionally
placeholders — see [Manual/placeholder items](#manualplaceholder-items-for-faruk) below.

## Stack, and why

- **Astro** — ships close to zero client-side JS by default, which is ideal for a
  content-first blog (fast loads matter a lot for a lifestyle/beauty audience that
  will often be on mobile). Content collections give type-checked frontmatter for posts.
- **TypeScript** for config and API routes.
- **Fontsource** (`@fontsource/playfair-display`, `@fontsource/dm-sans`) for self-hosted
  webfonts — no third-party font CDN request, keeps privacy/perf clean.
- No UI framework (React/Vue/etc.) — the site doesn't need client-side interactivity beyond
  a plain HTML form, so it isn't included.

## Running locally

Node 20.11 or newer (below 23) is required; see `engines` in `package.json` and `.nvmrc`.

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
npm run preview   # serve the production build locally
```

## Publishing a new post

Add a new Markdown file to `src/content/posts/`. Frontmatter shape:

```md
---
title: "Post title"
description: "One or two sentences — used for the card excerpt, meta description, and RSS."
pubDate: 2026-04-01
category: "nail-art" # or "nail-health" or "general"
tags: ["some", "tags"]
draft: false # set true to keep it out of the site until ready
---

Post body in Markdown.
```

The homepage, RSS feed, sitemap, and `/api/posts.json` all pick up new posts automatically
at build time — no other file needs to change.

## Manual/placeholder items (for Faruk)

These are real gaps by design — they need a human decision, not code:

| Item | Where | What to do |
|---|---|---|
| **Byline / brand name** | `src/config/site.ts` → `AUTHOR_NAME` (currently `"[Your Name Here]"`) | Replace with her actual preferred name or brand, once known. Shows up in the footer and the welcome post. |
| **Production domain** | `src/config/site.ts` → `SITE_URL`, and `astro.config.mjs` | Currently `https://example.com`. Set to the real domain once one exists; this drives canonical URLs, OG tags, and the sitemap. |
| **AdSense publisher ID** | `src/config/ads.ts` → `ADSENSE_PUBLISHER_ID` | Placeholder (`ca-pub-XXXXXXXXXXXXXXXX`). Ad slots render but won't serve real ads until this is a real ID from an AdSense account. **See the note below — this may not even be wanted for this project.** |
| **Analytics site ID** | `src/config/site.ts` → `ANALYTICS_SITE_ID` | Empty by default (analytics script doesn't load at all until this is set). Defaults to a Plausible-style script tag; swap `ANALYTICS_SCRIPT_SRC` for Umami/GA4 if preferred. |
| **Newsletter provider** | `src/config/site.ts` → `NEWSLETTER_FORM_ACTION_URL`, and field names in `src/components/NewsletterSignup.astro` | Empty by default — the signup form is visibly present but disabled (says so in the fine print) until a real provider (Buttondown, ConvertKit, Mailchimp, etc.) is wired up. |
| **robots.txt sitemap URL** | `public/robots.txt` | Still points at `example.com` — update once the real domain is live. |

### A note on the ad/analytics/newsletter scaffolding

This monetization posture (AdSense placeholders, an analytics slot, a newsletter stub) was
carried over from a different project's conventions as a reasonable default, not something
explicitly requested for this blog specifically. Since this site is for your girlfriend
rather than your own portfolio, it's worth deciding whether ads belong here at all, or
whether a lighter-touch version (just analytics + newsletter, no ads) fits better. Everything
is inert until the config values above are filled in, so nothing changes until you decide.
This is logged in `claude-harness/status/TRACKER.md` as well.

## What's already wired up

- **SEO**: per-page meta description, canonical URL, OpenGraph + Twitter card tags,
  `sitemap.xml`, `robots.txt`, an RSS feed at `/rss.xml`, semantic heading structure.
- **Categories**: posts are tagged `nail-art`, `nail-health`, or `general`, with a
  category page at `/category/<name>/` and nav links in the header.
- **Design**: warm blush/cream palette with a plum accent, Playfair Display headings
  and DM Sans body text — built for a beauty/lifestyle audience, not a tech one.
