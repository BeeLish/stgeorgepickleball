# St. George Pickleball

The local court directory for **St. George, Utah**. The current release includes the homepage directory, 22 individual venue pages, tournament guides, maps, crawlable page metadata, structured data, `robots.txt`, and an XML sitemap.

## Local development

```bash
pnpm install
pnpm dev
```

## Production check

```bash
pnpm check
pnpm build
```

The production build pre-renders the homepage and all venue routes into `dist/public` so each URL has its own title, description, canonical URL, visible fallback content, and structured data before JavaScript runs.

## Permanent venue-map rule

Every venue inherits a tight satellite map from `client/src/lib/venueMap.ts`. If satellite imagery is too poor, outdated, or mismatched to use, the venue record must explicitly set `mapType: "roadmap"` and provide a written `mapFallbackReason`. The shared page template displays that reason and always keeps the **Open in Google Maps** link. This rule applies to future venue pages, including Black Desert Resort.

## Content source

Venue information comes from the project’s `StGeorgePickleball_Venue_Data_FirstPass.md`. Unconfirmed facts are not invented; the public copy tells visitors when access, hours, or setting should be confirmed.

## Not included in this release

Black Desert Resort, email capture, and contact or sponsor forms remain outside this release.
