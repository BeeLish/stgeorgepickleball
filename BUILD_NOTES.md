# St. George Pickleball — Build Notes

## Scope delivered in code

This build contains the Priority 1.A court directory and the code-based parts of Priority 1.C only. It includes the homepage directory, 12 individual venue pages, embedded maps, titles and descriptions, canonical URLs, `LocalBusiness` and `SportsActivityLocation` structured data, `robots.txt`, and `sitemap.xml`.

Black Desert Resort, tournament and event pages, email capture, and contact or sponsor forms are intentionally excluded.

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

The homepage uses one genuine, licensed Unsplash landscape photograph by Ivy Tang as a non-venue-specific atmosphere image. Every venue page includes three deliberate title-card image slots matching the required wide, detail, and signage formats. No venue image is AI-generated and no placeholder says “coming soon.”

## Measurement and indexing setup

GA4 code has not been added because the owner asked to confirm whether a property already exists before implementation. Search Console ownership and sitemap submission also require confirmation of the existing Domain property. The sitemap is available at `https://stgeorgepickleball.com/sitemap.xml` once deployed.
