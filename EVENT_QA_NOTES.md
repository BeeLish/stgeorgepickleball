# Priority 1.B Event Pages — QA Notes

## Visual review

Full-page screenshots were checked at 1440 × 1000 and 390 × 844 for the homepage, events hub, Huntsman World Senior Games page, and Fall Brawl page.

The new pages preserve the established Fraunces/Inter typography, warm sand and terracotta palette, restrained sage accent, generous editorial spacing, and deliberate court-title placeholders. The homepage event section is prominent and appears before the court directory. The main navigation remains visible and usable on desktop and mobile. Event schedules, status warnings, venue links, official sources, and newcomer guidance remain readable at both sizes.

One presentation issue was found: the two footer links run together because adjacent inline links have no visual separation. They will be changed to stacked links before final validation.

## Structured-data review

The production build emits a static HTML page for each event route. Each page includes one `schema.org/Event` JSON-LD block with `name`, `startDate`, `endDate`, `location` with a full postal address, and `description`, plus `eventStatus`, `eventAttendanceMode`, `url`, and `organizer`.

## Content verification boundaries

The Huntsman pickleball schedule is explicitly labeled preliminary. Its official source currently contradicts itself on the open-practice date, so the page tells visitors to check the official schedule. Neither event had a dependable published spectator parking plan in the official public sources checked September 11, 2026; the pages do not invent one.
