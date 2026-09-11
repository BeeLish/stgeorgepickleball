# St. George Pickleball — Build Notes

## Scope delivered in code

The live foundation contains the Priority 1.A court directory and the code-based parts of Priority 1.C. It includes the homepage directory, 12 individual venue pages, embedded maps, titles and descriptions, canonical URLs, `LocalBusiness` and `SportsActivityLocation` structured data, `robots.txt`, and `sitemap.xml`.

Priority 1.B adds a tournaments and events hub, dedicated 2026 Huntsman World Senior Games pickleball and Fall Brawl pages, site-wide navigation, a prominent homepage event section, and `Event` structured data on both event pages.

Black Desert Resort, email capture, lead magnets, and contact or sponsor forms remain intentionally excluded.

## Data gaps retained from the supplied source

No missing fact was invented. The public pages use direct “confirm before visiting” language where the source did not provide a reliable answer.

| Venue | Gap or conflict from source | Build treatment |
|---|---|---|
| Little Valley Pickleball Complex | Address conflict; court-count conflict; hours missing | Used the City-published 2330 Horseman Park Drive and 33 courts; hours direct visitors to confirm |
| The Picklr — St. George | Membership price, day pass, and guest play not supplied; hours not supplied | States membership required and directs visitors to ask about guest/day access and check official hours |
| SunRiver Pickleball Complex | Indoor/outdoor setting, public access, and hours not supplied | Setting says not confirmed; access described as community membership with public access not confirmed |
| Vernon Worthen Park | Address conflict; indoor/outdoor setting and hours not supplied | Used 300 S 400 E for the displayed address and venue name for the map search; setting says not confirmed; hours direct visitors to confirm |
| Bloomington Park | Court count community-reported; open-play schedule unconfirmed; indoor/outdoor setting and park hours missing | Publishes seven courts with cautious description; omits the unconfirmed schedule; setting and hours remain unconfirmed |
| Entrada | Guest/reciprocal policy and hours not supplied; supplied phone number may be non-local | States membership required and asks visitors to confirm guest/reciprocal play and hours; phone is retained from source |
| Green Valley Spa & Resort | Current fee amount and hours not supplied | States pay-to-play and asks visitors to confirm the current amount and hours |
| Crystal Lakes Townhomes Association | Public access and hours not confirmed | Treats it as members-only/private and directs visitors to confirm with the association |
| St. George Senior Center | Public eligibility, membership details, and schedule unconfirmed | Omits the unconfirmed schedule and directs visitors to confirm eligibility and current times |
| Green Spring Park | Indoor/outdoor setting and hours not supplied | Setting says not confirmed; hours direct visitors to confirm |
| Larkspur Park | Indoor/outdoor setting and hours not supplied | Setting says not confirmed; hours direct visitors to confirm |
| Vintage Home Owners Association | Indoor/outdoor setting and hours not supplied | Treats it as private; setting says not confirmed; hours direct visitors to the association |

## Photography

The homepage uses one genuine, licensed Unsplash landscape photograph by Ivy Tang as a non-venue-specific atmosphere image. Every venue page includes three deliberate title-card image slots matching the required wide, detail, and signage formats. The new event pages and cards use the same intentional geometric court-title treatment until confirmed event photography is available. No named venue or event image is AI-generated and no placeholder says “coming soon.”

## Priority 1.B source and schedule gaps

The official Huntsman Games site confirms the overall October 5–17, 2026 dates and currently lists pickleball competition for October 12–17 at Little Valley and SunRiver. That schedule is marked preliminary. The official pickleball page also contradicts itself on open practice, listing October 11 in the daily schedule and October 12 later on the same page. The live page calls out the conflict and sends visitors to the official schedule rather than choosing a date.

The City of St. George confirms Fall Brawl for October 6–10 and links to the live registration platform. The City page does not publish a complete day-by-day division schedule, separate spectator policy, or Fall Brawl parking plan. The event page does not invent those details.

Neither official source published a dependable pickleball-specific spectator parking plan when checked September 11, 2026. Both event pages use “check official schedule” guidance for unpublished or changeable logistics.

## Measurement and indexing setup

The GA4 property **St. George Pickleball** was created under account **BeLeish's Websites!** with property ID `553881285`. Its web stream is **St. George Pickleball Website**, stream ID `15762683558`, and Measurement ID `G-WK2H2059DE`. The site tag includes route-aware page tracking for the homepage, venue pages, event hub, and event pages.

The Search Console Domain property is verified. The sitemap is live at `https://www.stgeorgepickleball.com/sitemap.xml`; sitemap submission remains an owner-controlled Search Console step because connected browser access is disabled.
