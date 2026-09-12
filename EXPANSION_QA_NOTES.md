# Washington County Expansion — QA Notes

## Route scroll behavior

The scroll reset was tested in the isolated sandbox browser against the local site preview. All three internal route changes started from a deliberately nonzero scroll position and landed at `window.scrollY = 0`:

| Internal transition | Starting scroll | Landing scroll |
|---|---:|---:|
| Events hub → Huntsman event page | 900 px | 0 px |
| Huntsman event page → Little Valley venue page | 1,800 px | 0 px |
| Little Valley venue page → homepage | 1,600 px | 0 px |

The fix disables smooth scrolling during the route reset, uses manual browser scroll restoration, and repeats the reset across two animation frames to prevent late restoration from moving the new page.

## Deterministic build checks

The production build emits 22 venue pages. All ten expansion venue slugs have clean static HTML, venue schema, homepage links, and sitemap entries. The sitemap contains 26 URLs total: the homepage, three event URLs, and 22 venue URLs.

The homepage contains The Pickle Pad only as a distinct “Opening soon — not yet open” status listing with a link to `thepicklepad.com`. It has no venue page or sitemap URL. The earlier Hurricane conflict is represented by one confirmed **Hurricane Pickleball Courts** page; no duplicate Hurricane Indoor Courts route or listing exists.

## Visual review

Full-page screenshots were checked at 1440 × 1000 and 390 × 844 for the expanded homepage and representative venues covering the main data conditions: Sullivan Virgin River Park (confirmed court count and amenities), Kayenta Pickleball (unconfirmed court count), Dixie Springs Park (conflicting address), and Town of Springdale Community Park (long venue name and county-edge locality).

The expanded 22-row directory remains legible on desktop and mobile. The Pickle Pad panel reads as a separate editorial status notice rather than a clickable open-venue row. Long names wrap cleanly, “Not confirmed” values remain readable, the Dixie Springs address warning is visible without overwhelming the page, and all new pages retain the required three photography placeholders and established desert editorial system.

The ten expansion venue map embed endpoints returned HTTP 200. `https://thepicklepad.com` also returned HTTP 200.

## Final two-page extension

Desktop and mobile full-page screenshots were reviewed for the 22-row homepage directory, Canyon View Park, and Hurricane Pickleball Courts. Both pages preserve the required template, three venue-specific photography placeholders, county locality label, readable fact panel, map slot, and responsive layout.

Canyon View Park visibly distinguishes the confirmed four-court count from its unresolved exact street address, access, setting, cost, and hours. Hurricane Pickleball Courts displays the confirmed `37 S 200 W` address and six-court count while keeping setting, access, cost, surface, and hours unconfirmed. The homepage contains one Hurricane listing and no duplicate Hurricane Indoor Courts entry. Both Google Maps query endpoints returned HTTP 200.

## Final scroll verification

The unchanged route-scroll fix was retested after adding the final two pages:

| Internal transition | Starting scroll | Landing scroll |
|---|---:|---:|
| Homepage → Canyon View Park | 4,200 px | 0 px |
| Canyon View Park → homepage | 1,500 px | 0 px |
| Homepage → Hurricane Pickleball Courts | 4,700 px | 0 px |
