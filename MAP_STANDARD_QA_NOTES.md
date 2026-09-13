# Permanent Venue Map Standard — QA Notes

## Result

The shared venue template now defaults every current and future venue page to a tightly zoomed Google satellite map. Facilities with ten or more known courts use zoom 19; smaller or unconfirmed facilities use zoom 20. Every venue page retains a separate **Open in Google Maps** link.

A street-map exception must be declared explicitly in the venue data with both `mapType: "roadmap"` and a written `mapFallbackReason`. TypeScript enforces that a fallback cannot be added without its reason. The page shows the fallback label and reason immediately above the map.

## Visual satellite review

Each of the 23 current venue locations was reviewed at court or building scale. Outdoor venues were accepted as satellite when identifiable court footprints or lines were visible. Indoor venues were accepted when the correct labeled building was clearly resolved, because the courts are expected to sit under the roof. A blank iframe caused by temporary Google tile loading was retried and was not itself treated as a reason to use a fallback.

| Treatment | Venues |
|---|---|
| Satellite | Archie H. Gubler Park; Bloomington Park; Boiler Park; Canyon View Park; Crystal Lakes Townhomes Association; Green Spring Park; Green Valley Spa & Resort; Hurricane Pickleball Courts; Kayenta Pickleball; Larkspur Park; Little Valley Pickleball Complex; Shooting Star Park; St. George Senior Center; The Palisades; The Picklr — St. George; Town of Springdale Community Park |
| Street-map fallback | Black Desert Resort Pickleball; Dixie Springs Park; Entrada; Sullivan Virgin River Park; SunRiver Pickleball Complex; Vernon Worthen Park; Vintage Home Owners Association |

## Documented fallbacks

| Venue | Reason |
|---|---|
| Black Desert Resort Pickleball | Google’s current satellite result is mismatched to the resort court complex and does not show identifiable courts. |
| Dixie Springs Park | Current satellite imagery does not reveal identifiable courts, and the exact park address remains unresolved. |
| Entrada | Current satellite imagery at the published address does not reveal the listed outdoor courts. |
| Sullivan Virgin River Park | Satellite imagery resolves the soccer park but does not reveal the listed pickleball courts. |
| SunRiver Pickleball Complex | Google’s current satellite result is mismatched to the published St. George venue location. |
| Vernon Worthen Park | Satellite imagery resolves the park but does not reveal an identifiable pickleball-court layout. |
| Vintage Home Owners Association | Satellite imagery is low-detail and does not reveal the private community courts. |

## Technical checks

The production build generated 23 venue pages: **16 satellite embeds and 7 documented street-map fallbacks**. All 23 iframe endpoints returned HTTP 200. All 23 separate **Open in Google Maps** URLs returned HTTP 200. Every pre-rendered venue page contains its map treatment, tight zoom, and outbound Google Maps link before JavaScript runs.

Representative satellite and fallback pages were visually reviewed on desktop and mobile. The map labels, fallback explanations, and Google Maps links remain legible and preserve the established editorial design system.
