# Black Desert Resort and Contact Forms — QA Notes

## Scope

This release adds one independent venue profile and one low-visibility contact page with two private Formspree submission routes. It does not add stay/play package messaging, partnership claims, email capture, lead magnets, a privacy-policy page, or automatic publication of court tips.

## Black Desert Resort profile

The venue page uses only the confirmed facts supplied for this ticket: 21 courts currently; 29 at full build-out; a Championship Court with capacity for 1,000–1,500 spectators; the March 2026 Greater Zion Cup as one of five Cup events worldwide on the Carvana PPA Tour; and access limited to confirmed members and registered resort guests with no public day-visitor access as of publication.

The page links to Black Desert Resort’s own stay page but contains no package language. It identifies itself as independent, unpaid editorial coverage rather than a promotion or partnership. All three venue-photo positions use the established geometric placeholder treatment. No Black Desert Resort or PPA press photography is included.

The initial zoom-19 satellite spot-check returned sharp but mismatched desert terrain with no identifiable court complex. Under the permanent map standard, the page therefore uses a documented street-map fallback and retains **Open in Google Maps**.

The page carries its own title, description, canonical URL, and `LocalBusiness` plus `SportsActivityLocation` structured data. It appears second in the homepage directory, immediately after Little Valley Pickleball Complex.

## Contact and court-tip forms

The `/contact` page contains two visually separate forms:

| Form | Endpoint | Fields | Publication behavior |
|---|---|---|---|
| General contact | `https://formspree.io/f/xoeqoqbp` | Inquiry type, name, email, message | Private delivery to Brian |
| Missing-court tip | `https://formspree.io/f/mvkojoyn` | Court name, rough location, anything else known | Private tip for verification; never auto-published |

The inquiry-type choices are Sponsorship/advertising, General question, Press/media, and Something else. Both forms have required-field validation, submitting, success, and error states. A low-visibility **Contact & court tips** link appears in the site footer; the page is not promoted as homepage feature content.

## Validation

TypeScript and the production build pass. The pre-rendered output contains 23 venue pages, the contact page, both Formspree endpoints, the Black Desert metadata/schema, and the two new sitemap entries. Desktop and mobile full-page screenshots were reviewed for the homepage directory, Black Desert profile, and contact page. Layout, field labels, link color, form controls, access restriction, map fallback note, and editorial disclosure remain legible at both sizes.

A clearly labeled test submission will be sent through each live form after the production deployment. Final delivery confirmation requires Brian to verify that both test messages reached the configured inbox.
