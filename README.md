# St. George Pickleball

The local court directory for **St. George, Utah**. The current release covers Priority 1.A and the code portion of Priority 1.C: a homepage directory, individual venue pages, maps, crawlable page metadata, structured data, `robots.txt`, and an XML sitemap.

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

## Content source

Venue information comes from the project’s `StGeorgePickleball_Venue_Data_FirstPass.md`. Unconfirmed facts are not invented; the public copy tells visitors when access, hours, or setting should be confirmed.

## Not included in this release

Tournament or event pages, Black Desert Resort, email capture, and contact or sponsor forms are intentionally outside this release.
