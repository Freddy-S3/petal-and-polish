// AdSense configuration.
//
// This is the single place the AdSense publisher ID is defined. BaseLayout.astro
// and any ad-slot components import ADSENSE_PUBLISHER_ID from here rather than
// hardcoding it, so there is exactly one place to update once the site has a
// real AdSense account.
//
// TODO: replace with your real AdSense publisher ID from https://www.google.com/adsense
// NOTE (assumed, not asked for): this monetization scaffolding — ads, the
// analytics slot, and the newsletter stub below — was carried over from a
// different portfolio project's conventions. This blog is for Faruk's
// girlfriend, not for Faruk's own portfolio, so it's worth revisiting
// whether ads belong here at all. Logged in claude-harness/status/TRACKER.md.
export const ADSENSE_PUBLISHER_ID = "ca-pub-XXXXXXXXXXXXXXXX";
