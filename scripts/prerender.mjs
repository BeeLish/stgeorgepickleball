import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "dist", "public");
const baseHtml = fs.readFileSync(path.join(outDir, "index.html"), "utf8");
const siteUrl = "https://www.stgeorgepickleball.com";

const venues = [
  ["little-valley-pickleball-complex", "Little Valley Pickleball Complex", "2149 E Horseman Park Drive, St. George, UT 84790", 33, "Outdoor", "Free and open to the public", "Free"],
  ["black-desert-resort-pickleball", "Black Desert Resort Pickleball", "1500 E Black Desert Drive, Ivins, UT 84738", 21, "Setting not confirmed", "Confirmed members and registered resort guests only; no public day-visitor access", "Members or registered resort guests only", "Ivins", "84738"],
  ["the-picklr-st-george", "The Picklr — St. George", "615 UT-34, St. George, UT 84770", 8, "Indoor", "Membership required; ask about guest or day-pass options", "Membership required"],
  ["sunriver-pickleball-complex", "SunRiver Pickleball Complex", "4275 S Country Club Drive, St. George, UT 84790", 14, "Setting not confirmed", "Community membership; public access has not been confirmed", "Membership or resident access"],
  ["vernon-worthen-park", "Vernon Worthen Park", "300 S 400 E, St. George, UT 84770", 6, "Setting not confirmed", "Free and open to the public", "Free"],
  ["bloomington-park", "Bloomington Park", "650 Man of War Road, St. George, UT 84790", 7, "Setting not confirmed", "Free and open to the public", "Free"],
  ["entrada", "Entrada", "2552 W Sinagua Trail, St. George, UT 84770", 12, "Outdoor", "Membership required; ask about guest or reciprocal play", "Membership required"],
  ["green-valley-spa-resort", "Green Valley Spa & Resort", "1871 W Canyon View Drive, St. George, UT 84770", 6, "4 indoor and 2 outdoor", "Pay-to-play access", "One-time fee; confirm the current amount"],
  ["crystal-lakes-townhomes-association", "Crystal Lakes Townhomes Association", "145 S Crystal Lakes Drive, St. George, UT 84770", 3, "Outdoor", "Private community; members only", "Members only"],
  ["st-george-senior-center", "St. George Senior Center", "245 N 200 W, St. George, UT 84770", 1, "Indoor", "Membership or program access; confirm eligibility", "Membership or program access"],
  ["green-spring-park", "Green Spring Park", "1743 W Green Valley Lane, St. George, UT 84770", 2, "Setting not confirmed", "Free and open to the public", "Free"],
  ["larkspur-park", "Larkspur Park", "812 Fort Pierce Drive N, St. George, UT 84790", 2, "Setting not confirmed", "Free and open to the public", "Free"],
  ["vintage-home-owners-association", "Vintage Home Owners Association", "875 W Rio Virgin Drive, St. George, UT 84790", 2, "Setting not confirmed", "Private community; members only", "Members only"],
  ["sullivan-virgin-river-park", "Sullivan Virgin River Park", "965 S Washington Fields Road, Washington, UT 84780", 6, "Outdoor", "Free and open to the public", "Free", "Washington", "84780"],
  ["shooting-star-park", "Shooting Star Park", "1320 E Black Brush Drive, Washington, UT 84780", 2, "Setting not confirmed", "Free and open to the public", "Free", "Washington", "84780"],
  ["boiler-park", "Boiler Park", "301 Buena Vista Boulevard, Washington, UT 84780", 4, "Setting not confirmed", "Free and open to the public", "Free", "Washington", "84780"],
  ["archie-h-gubler-park", "Archie H. Gubler Park", "2365 N Rachel Drive, Santa Clara, UT 84765", 6, "Setting not confirmed", "Free and open to the public", "Free", "Santa Clara", "84765"],
  ["canyon-view-park", "Canyon View Park", "Santa Clara, UT — exact street address not confirmed", 4, "Setting not confirmed", "Public access and eligibility not confirmed", "Not confirmed", "Santa Clara", undefined, true],
  ["the-palisades", "The Palisades", "768 E Palisades Circle, Ivins, UT 84738", 2, "Setting not confirmed", "Membership required; guest access has not been confirmed", "Membership required", "Ivins", "84738"],
  ["kayenta-pickleball", "Kayenta Pickleball", "Kwavasa Court, Ivins, UT 84738", null, "Setting not confirmed", "Membership required; guest access has not been confirmed", "Membership required", "Ivins", "84738"],
  ["dixie-springs-park", "Dixie Springs Park", "Address not confirmed — public sources list two different locations", 2, "Setting not confirmed", "Free and open to the public", "Free", "Hurricane", "84737", true],
  ["hurricane-pickleball-courts", "Hurricane Pickleball Courts", "37 S 200 W, Hurricane, UT 84737", 6, "Setting not confirmed", "Public access and eligibility not confirmed", "Not confirmed", "Hurricane", "84737"],
  ["town-of-springdale-community-park", "Town of Springdale Community Park", "126 Lion Boulevard, Springdale, UT 84767", 4, "Setting not confirmed", "Free and open to the public", "Free", "Springdale", "84767"],
];

const events = [
  {
    slug: "huntsman-world-senior-games-pickleball-2026",
    name: "Huntsman World Senior Games — Pickleball",
    shortName: "Huntsman Games Pickleball",
    dateLabel: "Games: October 5–17, 2026 · Pickleball: October 12–17 (preliminary)",
    cardDate: "OCT 5–17 · PICKLEBALL OCT 12–17",
    locationName: "Little Valley Pickleball Complex",
    locationAddress: "2149 E Horseman Park Drive, St. George, UT 84790",
    organizer: "Huntsman World Senior Games",
    startDate: "2026-10-12",
    endDate: "2026-10-17",
    summary: "A marquee week inside St. George’s 43-sport international celebration of athletes age 50 and over.",
    description: "Plan for 2026 Huntsman World Senior Games pickleball in St. George: verified competition dates, daily divisions, venues, spectator guidance, and official schedule links.",
    schemaDescription: "The 2026 pickleball competition at the Huntsman World Senior Games, an international 43-sport event for athletes age 50 and over in St. George, Utah.",
    officialUrl: "https://seniorgames.net/sports/pickleball",
    scheduleUrl: "https://pickleballtournaments.com/tournaments/a5227449-351e-4d13-9287-4323d60b3ef3",
    verifiedOn: "October 7, 2026",
    statusNote: "Competition runs Monday, October 12 through Saturday, October 17, with play beginning at 8:00 a.m. daily and athlete check-in at 7:00 a.m. The official page still labels the schedule preliminary and subject to change, and there are no make-up days. One contradiction remains on that page: its day-by-day schedule and the official tournament listing both put open practice on Sunday, October 11, while a separate section further down the same page still says October 12.",
    schedule: [
      ["OCT 5–17", "Huntsman World Senior Games", "The full 2026 multi-sport event window in St. George.", false],
      ["SUN · OCT 11", "Open practice day", "The official day-by-day schedule and the official tournament listing both put open practice all day at Little Valley on Sunday, October 11, with SunRiver opening to Huntsman participants after 10:00 a.m. A separate section of the same official page still says October 12.", true],
      ["MON · OCT 12", "Skill-level doubles", "Men 4.0, 4.5, and 5.0, and women 3.5, 4.0, 4.5, and 5.0. Competition begins at 8:00 a.m.; athlete check-in at 7:00 a.m.", false],
      ["TUE · OCT 13", "Men’s age doubles · women’s 3.0 skill doubles", "Age doubles runs in five-year brackets from 50+ upward; the women’s 3.0 skill division plays the same day.", false],
      ["WED · OCT 14", "Women’s age doubles · men’s 3.0 and 3.5 skill doubles", "Women’s age doubles plays alongside the lower men’s skill divisions.", false],
      ["THU · OCT 15", "Mixed doubles · ages 50, 55, 60", "Mixed doubles opens with the younger age groups.", false],
      ["FRI · OCT 16", "Mixed doubles · ages 65, 70, 75, 80+", "Mixed doubles closes with the older age groups.", false],
      ["SAT · OCT 17", "Men’s and women’s singles", "The competition week ends with age-group singles.", false],
    ],
    bodyHtml: 'The <a class="inline-source-link" href="https://seniorgames.net/sports/pickleball" target="_blank" rel="noreferrer">Huntsman World Senior Games official site</a> describes two weeks of competition for athletes age 50 and over across 43 sports. Pickleball is a signature draw, with age singles, age doubles, mixed doubles, and skill-level doubles listed at <a class="inline-source-link" href="/venues/little-valley-pickleball-complex">Little Valley Pickleball Complex</a> and SunRiver. Competition runs October 12–17 with play beginning at 8:00 a.m. daily, and the official page still labels the schedule preliminary and subject to change.',
  },
  {
    slug: "fall-brawl-pickleball-2026",
    name: "City of St. George Fall Brawl",
    shortName: "Fall Brawl",
    dateLabel: "October 6–10, 2026",
    cardDate: "OCT 6–10 · LITTLE VALLEY",
    locationName: "Little Valley Pickleball Complex",
    locationAddress: "2149 E Horseman Park Drive, St. George, UT 84790",
    organizer: "City of St. George",
    startDate: "2026-10-06",
    endDate: "2026-10-10",
    summary: "The Original Fall Brawl brings a nationally significant amateur field to Little Valley’s 33 courts.",
    description: "Plan for the 2026 St. George Fall Brawl pickleball tournament at Little Valley: verified dates, the day-by-day division schedule, the correct venue address, and official links.",
    schemaDescription: "The City of St. George Fall Brawl pickleball tournament at Little Valley Pickleball Complex, a major amateur event drawing more than 1,200 participants.",
    officialUrl: "https://sgcityutah.gov/activity/recreation/pickleball/adult_pickleball/pickleball_tournaments.php",
    scheduleUrl: "https://pickleballtournaments.com/tournaments/fall-brawl-2026",
    verifiedOn: "October 7, 2026",
    statusNote: "The City of St. George confirms October 6–10, and the live registration listing now publishes a day-by-day division schedule. Registration is closed with 1,233 players entered, and the refund window has passed. Daily start times and court assignments are released through the registration platform rather than published in advance. A separate spectator admission policy or parking plan has not been published.",
    schedule: [
      ["TUE · OCT 6", "Senior women’s doubles", "Age groups 50+, 60+, 70+, and 80+.", false],
      ["WED · OCT 7", "Senior men’s doubles", "Age groups 50+, 60+, 70+, and 80+.", false],
      ["THU · OCT 8", "Senior mixed doubles", "Age groups 50+, 60+, 70+, and 80+.", false],
      ["FRI · OCT 9", "Men’s and women’s doubles", "Open and 35+ divisions.", false],
      ["SAT · OCT 10", "Mixed doubles", "Open and 35+ divisions.", false],
      ["CHECK OFFICIAL", "Start times and court assignments", "Daily start times and court assignments are released through the registration platform rather than published in advance.", true],
    ],
    bodyHtml: 'The <a class="inline-source-link" href="https://sgcityutah.gov/activity/recreation/pickleball/adult_pickleball/pickleball_tournaments.php" target="_blank" rel="noreferrer">City tournament page</a> schedules Fall Brawl (The Original) for October 6–10 at <a class="inline-source-link" href="/venues/little-valley-pickleball-complex">Little Valley Pickleball Complex</a>. The <a class="inline-source-link" href="https://pickleballtournaments.com/tournaments/fall-brawl-2026" target="_blank" rel="noreferrer">official registration listing</a> now publishes a day-by-day division schedule and shows registration closed with 1,233 players entered. Results are submitted to DUPR, and the tournament is not USA Pickleball sanctioned.',
  },
];

function escapeHtml(value) {
  return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}

function setHead(html, { title, description, canonical, schema, robots = "index, follow", ogType = "website" }) {
  return html
    .replace(/<title>.*?<\/title>/s, `<title>${escapeHtml(title)}</title>`)
    .replace(/<meta name="description" content=".*?" \/>/s, `<meta name="description" content="${escapeHtml(description)}" />`)
    .replace(/<meta property="og:title" content=".*?" \/>/s, `<meta property="og:title" content="${escapeHtml(title)}" />`)
    .replace(/<meta property="og:description" content=".*?" \/>/s, `<meta property="og:description" content="${escapeHtml(description)}" />`)
    .replace(/<meta property="og:type" content=".*?" \/>/s, `<meta property="og:type" content="${ogType}" />`)
    .replace(/<meta property="og:url" content=".*?" \/>/s, `<meta property="og:url" content="${canonical}" />`)
    .replace(/<meta name="robots" content=".*?" \/>/s, `<meta name="robots" content="${robots}" />`)
    .replace(/<link rel="canonical" href=".*?" \/>/s, `<link rel="canonical" href="${canonical}" />`)
    .replace("</head>", `    <script type="application/ld+json" data-site-schema="true">${JSON.stringify(schema).replaceAll("<", "\\u003c")}</script>\n  </head>`);
}

function shell(main) {
  return `<div class="site-shell"><header class="site-header"><div class="container site-header__inner"><a class="brand" href="/"><span class="brand__mark">SG</span><span class="brand__type">St. George <em>Pickleball</em></span></a><nav aria-label="Primary navigation"><a href="/#court-directory">Court directory</a><a href="/events">Tournaments &amp; Events</a></nav></div></header>${main}<footer class="site-footer"><div class="container site-footer__grid"><div><p class="eyebrow">A LOCAL COURT GUIDE</p><h2>Play well. Know before you go.</h2></div><div class="site-footer__aside"><p>Venue and event details can change. Confirm current hours, access, and schedules with the official organizer.</p><a href="/events">Tournaments &amp; Events</a><a href="/contact">Contact &amp; court tips</a><a href="/sitemap.xml">Sitemap</a></div></div></footer></div>`;
}

function writeCleanRoute(route, html) {
  const dir = path.join(outDir, ...route.split("/").filter(Boolean));
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), html);
  const pieces = route.split("/").filter(Boolean);
  const filename = `${pieces.pop()}.html`;
  fs.writeFileSync(path.join(outDir, ...pieces, filename), html);
}

function placeholder(name) {
  return `<div class="venue-placeholder venue-placeholder--hero event-placeholder event-placeholder--hero" role="img" aria-label="${escapeHtml(name)} editorial photography placeholder"><div class="venue-placeholder__copy"><span>2026 ST. GEORGE EVENT GUIDE</span><strong>${escapeHtml(name)}</strong></div></div>`;
}

function venueMapZoom(courts) {
  return courts !== null && courts >= 10 ? 19 : 20;
}

function venueMapQuery(name, address, locality, noStreetAddress) {
  return noStreetAddress ? `${name}, ${locality}, Utah` : `${name}, ${address}`;
}

const venueMapFallbacks = {
  "black-desert-resort-pickleball": "Street map shown because Google’s current satellite result is mismatched to the resort court complex and does not show identifiable courts.",
  "dixie-springs-park": "Street map shown because current satellite imagery does not reveal identifiable courts and the exact park address is still unresolved.",
  "entrada": "Street map shown because current satellite imagery at the published address does not reveal the listed outdoor courts.",
  "sullivan-virgin-river-park": "Street map shown because current satellite imagery resolves the soccer park but does not reveal the listed pickleball courts.",
  "sunriver-pickleball-complex": "Street map shown because Google’s current satellite result is mismatched to the published St. George venue location.",
  "vernon-worthen-park": "Street map shown because current satellite imagery resolves the park but does not reveal an identifiable pickleball-court layout.",
  "vintage-home-owners-association": "Street map shown because current satellite imagery is low-detail and does not reveal the private community courts.",
};

/**
 * Venue-specific editorial blocks that only apply to one entry.
 * Little Valley was re-verified October 7, 2026 — see OCTOBER_ACCURACY_PASS_NOTES.md.
 */
const venueExtras = {
  "little-valley-pickleball-complex": {
    factsHtml:
      '<div class="fact"><span>Courts located</span><strong>West side of The Fields at Little Valley, closest to Horseman Park Drive</strong></div><div class="fact"><span>Court reservations</span><strong>City Parks · (435) 627-4530</strong></div><div class="fact"><span>Other park address</span><strong>2995 S 2350 East — the east side of the same park</strong></div><div class="fact"><span>Championship court</span><strong>Permanent bleacher seating</strong></div>',
    hoursText:
      "The City does not publish official court hours. Free public play is available whenever City leagues, clinics, and tournaments are not using the courts; check in with the attendant during City programs, or call City Parks before a special trip.",
    amenities: [
      "Court lighting",
      "Restrooms",
      "Drinking fountains",
      "Free on-site parking",
      "Covered pavilions",
      "Picnic tables",
      "Playground and splash pad",
    ],
    profileHtml:
      '<section class="venue-profile-section"><div class="container venue-profile-grid"><div><p class="eyebrow">INDEPENDENT FACILITY PROFILE</p><h2>33 courts on the west side—and an address worth double-checking.</h2></div><div class="venue-profile-copy"><p>Little Valley is the City of St. George’s flagship pickleball facility: 33 outdoor courts, including a championship court with permanent bleacher seating, occupying the west side of The Fields at Little Valley. The courts are free and open to the public whenever City leagues, clinics, and tournaments are not using them.</p><p>The address is the detail most guides get wrong. The City’s official pickleball page lists Little Valley at 2149 Horseman Park Drive, and both the City’s Fall Brawl registration listing and the Huntsman World Senior Games pickleball page use that same address. The 2330 Horseman Park Drive address—still repeated by several directories, and by the City’s own January 2024 press release—is Little Valley Elementary School next door. Enter it into a navigation app and you will be directed to a school parking lot, not the courts.</p><p>For wayfinding: the courts sit on the park’s west side, closest to Horseman Park Drive. The soccer fields, playgrounds, and splash pad are on the eastern portion of the same complex, which the City lists under the park address 2995 South 2350 East. Parking is free on site, and tournament weeks bring event signage and staff direction.</p><p class="editorial-disclosure">Court count, address, court location, and amenities re-checked October 7, 2026 against the City of St. George’s official pickleball and parks pages. This is independent, unpaid editorial coverage.</p></div></div></section>',
    verifiedOn: "October 7, 2026",
    verificationNote:
      "Address, court count, and court location re-checked against the City of St. George’s official pickleball page, the City’s parks page for The Fields at Little Valley, and the official Fall Brawl 2026 registration listing.",
  },
};

function eventCard(event, index) {
  return `<article class="event-card"><a class="event-card__media" href="/events/${event.slug}"><div class="venue-placeholder venue-placeholder--signage event-placeholder event-placeholder--card"><div class="venue-placeholder__copy"><span>2026 ST. GEORGE EVENT GUIDE</span><strong>${escapeHtml(event.shortName)}</strong></div></div></a><div class="event-card__body"><div class="event-card__index">${String(index + 1).padStart(2, "0")}</div><div><p class="eyebrow">${escapeHtml(event.cardDate)}</p><h3><a href="/events/${event.slug}">${escapeHtml(event.name)}</a></h3><p>${escapeHtml(event.summary)}</p><a class="text-link" href="/events/${event.slug}">Plan your visit →</a></div></div></article>`;
}

const homeDescription = "Find public courts, indoor clubs, paid facilities, private venues, and major pickleball events across greater St. George and Washington County, Utah.";
const homeSchema = { "@context": "https://schema.org", "@type": "WebSite", name: "St. George Pickleball", url: siteUrl, description: homeDescription };
const homeEvents = events.map(eventCard).join("");
const homeList = venues.map(([slug, name, address, courts, setting, access], index) => `<a class="venue-row" href="/venues/${slug}"><span class="venue-row__number">${String(index + 1).padStart(2, "0")}</span><span class="venue-row__main"><strong>${escapeHtml(name)}</strong><span>${escapeHtml(address)}</span></span><span class="venue-row__fact"><small>Courts</small><strong>${courts ?? "Not confirmed"}</strong></span><span class="venue-row__fact venue-row__fact--setting"><small>Setting</small><strong>${escapeHtml(setting)}</strong></span><span class="venue-row__access">${escapeHtml(access)}</span></a>`).join("");
const comingSoon = `<aside class="coming-soon-listing" aria-labelledby="coming-soon-title"><div><p class="eyebrow">COMING SOON · NOT YET OPEN</p><h3 id="coming-soon-title">The Pickle Pad</h3></div><div><strong>Opening soon — not yet open</strong><p>An indoor pickleball, bar, and restaurant concept with Crave Social Eatery planned on site. No address, hours, pricing, or court count will be listed until opening details are confirmed.</p><a href="https://thepicklepad.com" target="_blank" rel="noreferrer">Check current status →</a></div></aside>`;

const homeMain = `<main><section class="intro-section"><div class="container"><p class="eyebrow">THE LOCAL COURT FIELD GUIDE</p><h1 style="font-family:Fraunces,serif;font-size:clamp(3rem,8vw,7rem);line-height:.95;max-width:1000px">Where to Play Pickleball in St. George</h1><p class="intro-copy">Public parks, indoor clubs, resort courts, and community facilities across Washington County—organized in one clear local guide.</p></div></section><section class="home-events"><div class="container"><div class="home-events__heading"><div><p class="eyebrow">TOURNAMENT SEASON · OCTOBER 2026</p><h2>The biggest pickleball weeks of the year.</h2></div></div><div class="event-card-grid">${homeEvents}</div></div></section><section class="directory-section" id="court-directory"><div class="container"><div class="directory-heading"><div><p class="eyebrow">${venues.length} CURRENT VENUES · 1 COMING SOON · WASHINGTON COUNTY</p><h2>Where to Play Across Greater St. George</h2></div></div><div class="venue-index">${homeList}</div>${comingSoon}</div></section></main>`;
fs.writeFileSync(path.join(outDir, "index.html"), setHead(baseHtml.replace('<div id="root"></div>', `<div id="root">${shell(homeMain)}</div>`), { title: "Where to Play Pickleball in St. George, Utah", description: homeDescription, canonical: `${siteUrl}/`, schema: homeSchema }));

for (const [slug, name, address, courts, setting, access, fee, locality = "St. George", postalCode, noStreetAddress = false] of venues) {
  const courtLabel = courts === null ? "court count not confirmed" : `${courts} court${courts === 1 ? "" : "s"}`;
  const title = /Pickleball(?: Courts)?$/.test(String(name))
    ? `${name}${String(name).endsWith(" Courts") ? "" : " Courts"} | ${locality}, Utah`
    : `${name} Pickleball Courts | ${locality}, Utah`;
  const isBlackDesert = slug === "black-desert-resort-pickleball";
  const extras = venueExtras[slug] ?? {};
  const description = isBlackDesert
    ? "Black Desert Resort Pickleball: 21 courts now, 29 planned at full build-out, a 1,000–1,500-seat Championship Court, and members-or-guests-only access."
    : `${name}: ${courtLabel}, ${String(setting).toLowerCase()}, ${String(access).toLowerCase()}. View the address, hours guidance, and map.`;
  const canonical = `${siteUrl}/venues/${slug}`;
  const mapQuery = venueMapQuery(name, address, locality, noStreetAddress);
  const mapFallbackReason = venueMapFallbacks[slug];
  const mapType = mapFallbackReason ? "roadmap" : "satellite";
  const mapTileMode = mapType === "satellite" ? "k" : "m";
  const mapLabel = mapType === "satellite" ? "Satellite · tight court view" : "Street-map fallback";
  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed&t=${mapTileMode}&z=${venueMapZoom(courts)}&hl=en`;
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`;
  const additionalFactsHtml = isBlackDesert
    ? '<div class="fact"><span>Full build-out</span><strong>29 courts</strong></div><div class="fact"><span>Championship Court</span><strong>1,000–1,500 seats</strong></div>'
    : extras.factsHtml ?? "";
  const websiteHtml = isBlackDesert ? '<a class="contact-link" href="https://www.blackdesertresort.com/stay" target="_blank" rel="noreferrer">Explore stays at Black Desert Resort →</a>' : "";
  const profileHtml = isBlackDesert ? '<section class="venue-profile-section"><div class="container venue-profile-grid"><div><p class="eyebrow">INDEPENDENT FACILITY PROFILE</p><h2>Tournament scale—with a clear access boundary.</h2></div><div class="venue-profile-copy"><p>Black Desert Resort currently operates 21 pickleball courts and plans 29 at full build-out. Its Championship Court is designed for 1,000–1,500 spectators, giving the complex the capacity to host major competition.</p><p>The resort partnered with the PPA Tour and Greater Zion to host the Greater Zion Cup in March 2026. It was one of five Cup events held worldwide on the Carvana PPA Tour that year.</p><p>Access is restricted to confirmed resort members and registered guests. Black Desert does not offer public day-visitor court access as of this writing. Anyone considering a stay should confirm current court access directly with the resort before booking.</p><p class="editorial-disclosure">This is independent, unpaid editorial coverage—not a resort promotion or partnership.</p></div></div></section>' : extras.profileHtml ?? "";
  const hoursText = isBlackDesert ? "Confirm current court access and hours directly with Black Desert Resort" : extras.hoursText ?? "Confirm current hours before visiting";
  const amenitiesHtml = extras.amenities
    ? `<section class="amenities-section"><div class="container amenities-grid"><div><p class="eyebrow">ON SITE</p><h2>Amenities</h2></div><ul>${extras.amenities.map((amenity) => `<li>${escapeHtml(amenity)}</li>`).join("")}</ul></div></section>`
    : "";
  const verifiedHtml = extras.verifiedOn
    ? `<div class="verified-note"><strong>Verified ${escapeHtml(extras.verifiedOn)}</strong><p>${escapeHtml(extras.verificationNote)}</p><p>Venue details can change. Confirm current hours, access, and tournament closures with the City or the venue before a special trip.</p></div>`
    : "";
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "SportsActivityLocation"],
    name,
    description,
    url: canonical,
    address: { "@type": "PostalAddress", streetAddress: noStreetAddress ? undefined : String(address).split(",")[0], addressLocality: locality, addressRegion: "UT", postalCode: postalCode ?? String(address).match(/\b\d{5}\b/)?.[0], addressCountry: "US" },
    priceRange: fee,
  };
  const main = `<main class="venue-page"><section class="venue-masthead"><div class="container"><a class="back-link" href="/#court-directory">← All Washington County courts</a><div class="venue-masthead__title"><p class="eyebrow">${escapeHtml(locality).toUpperCase()}, UTAH</p><h1>${escapeHtml(name)}</h1><p>${escapeHtml(description)}</p></div><div class="venue-placeholder venue-placeholder--hero" role="img" aria-label="${escapeHtml(name)} photography placeholder"><div class="venue-placeholder__copy"><span>ST. GEORGE COURT GUIDE</span><strong>${escapeHtml(name)}</strong></div></div></div></section><section class="venue-details"><div class="container venue-details__grid"><div class="venue-details__main"><p class="eyebrow">THE ESSENTIALS</p><h2>Plan your visit</h2><div class="address-block"><div><small>ADDRESS</small><address>${escapeHtml(address)}</address></div></div><div class="hours-block"><div><small>HOURS</small><p>${escapeHtml(hoursText)}</p></div></div>${verifiedHtml}</div><aside class="facts-panel"><div class="fact"><span>Court count</span><strong>${courts ?? "Not confirmed"}</strong></div><div class="fact"><span>Indoor / outdoor</span><strong>${escapeHtml(setting)}</strong></div><div class="fact"><span>Fee / membership</span><strong>${escapeHtml(fee)}</strong></div><div class="fact"><span>Access</span><strong>${escapeHtml(access)}</strong></div>${additionalFactsHtml}${websiteHtml}</aside></div></section>${profileHtml}${amenitiesHtml}<section class="map-section" aria-labelledby="map-heading-${escapeHtml(slug)}"><div class="container"><div class="map-heading"><div><p class="eyebrow">WAYFINDING</p><h2 id="map-heading-${escapeHtml(slug)}">Find ${escapeHtml(name)}</h2></div><div class="map-heading__actions"><span class="map-mode map-mode--${mapType}">${mapLabel}</span><a href="${escapeHtml(googleMapsUrl)}" target="_blank" rel="noreferrer">Open in Google Maps →</a></div></div>${mapFallbackReason ? `<p class="map-fallback-note">${escapeHtml(mapFallbackReason)}</p>` : ""}<div class="map-frame"><iframe title="${escapeHtml(mapLabel)} of ${escapeHtml(name)}" src="${escapeHtml(mapUrl)}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe></div></div></section></main>`;
  const venueHtml = setHead(baseHtml.replace('<div id="root"></div>', `<div id="root">${shell(main)}</div>`), { title, description, canonical, schema, ogType: "place" });
  writeCleanRoute(`/venues/${slug}`, venueHtml);
}

const hubTitle = "Pickleball Tournaments & Events in St. George, Utah";
const hubDescription = "Plan for St. George’s biggest 2026 pickleball events: Huntsman World Senior Games pickleball and the City of St. George Fall Brawl.";
const hubMain = `<main class="events-page"><section class="events-masthead"><div class="container"><a class="back-link" href="/">← Home</a><div class="events-masthead__grid"><div><p class="eyebrow">TOURNAMENTS &amp; EVENTS · 2026</p><h1>Two defining weeks on St. George courts.</h1></div><p>Dates, venues, official links, and practical guidance for the two pickleball events that shape October in St. George.</p></div></div></section><section class="events-index"><div class="container"><div class="events-index__heading"><p class="eyebrow">THE 2026 EVENT FIELD GUIDE</p><h2>Choose an event</h2><p>Each guide separates confirmed details from preliminary or unpublished information. Always use the official schedule for final travel decisions.</p></div><div class="event-card-grid">${homeEvents}</div></div></section></main>`;
const hubHtml = setHead(baseHtml.replace('<div id="root"></div>', `<div id="root">${shell(hubMain)}</div>`), { title: hubTitle, description: hubDescription, canonical: `${siteUrl}/events`, schema: homeSchema });
writeCleanRoute("/events", hubHtml);

for (const event of events) {
  const canonical = `${siteUrl}/events/${event.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.name,
    startDate: event.startDate,
    endDate: event.endDate,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    description: event.schemaDescription,
    url: canonical,
    location: {
      "@type": "Place",
      name: event.locationName,
      address: { "@type": "PostalAddress", streetAddress: event.locationAddress.split(",")[0], addressLocality: "St. George", addressRegion: "UT", postalCode: event.locationAddress.match(/\b\d{5}\b/)?.[0], addressCountry: "US" },
    },
    organizer: { "@type": "Organization", name: event.organizer, url: event.officialUrl },
  };
  const scheduleRowsHtml = event.schedule
    .map(([date, title, detail, needsCheck]) => `<div class="schedule-row${needsCheck ? " schedule-row--check" : ""}"><span>${escapeHtml(date)}</span><strong>${escapeHtml(title)}</strong><p>${escapeHtml(detail)}</p></div>`)
    .join("");
  const statusHtml = `<div class="status-note"><strong>Schedule status</strong><p>${escapeHtml(event.statusNote)}</p><p class="verified-stamp">Verified ${escapeHtml(event.verifiedOn)}</p><a href="${escapeHtml(event.scheduleUrl)}" target="_blank" rel="noreferrer">Check official schedule →</a></div>`;
  const main = `<main class="event-page"><section class="event-masthead"><div class="container"><a class="back-link" href="/events">← All tournaments &amp; events</a><div class="event-masthead__title"><p class="eyebrow">ST. GEORGE, UTAH · 2026</p><h1>${escapeHtml(event.name)}</h1><p>${escapeHtml(event.dateLabel)}</p></div>${placeholder(event.shortName)}</div></section><section class="event-overview"><div class="container event-overview__grid"><div class="event-story"><p class="eyebrow">THE EVENT</p><h2>What it is—and why it matters.</h2><p>${event.bodyHtml}</p></div><aside class="event-facts"><div class="event-fact"><div><span>DATES</span><strong>${escapeHtml(event.dateLabel)}</strong></div></div><div class="event-fact"><div><span>PRIMARY VENUE</span><a href="/venues/little-valley-pickleball-complex">${escapeHtml(event.locationName)}</a><small>${escapeHtml(event.locationAddress)}</small></div></div><a class="primary-link" href="${event.officialUrl}">Official event page →</a></aside></div></section><section class="schedule-section"><div class="container"><div class="schedule-heading"><div><p class="eyebrow">SCHEDULE AT A GLANCE</p><h2>Build a plan, then check it.</h2></div>${statusHtml}</div><div class="schedule-list">${scheduleRowsHtml}</div></div></section></main>`;
  const eventHtml = setHead(baseHtml.replace('<div id="root"></div>', `<div id="root">${shell(main)}</div>`), { title: `${event.name} 2026 | St. George, Utah`, description: event.description, canonical, schema, ogType: "article" });
  writeCleanRoute(`/events/${event.slug}`, eventHtml);
}

const contactTitle = "Contact St. George Pickleball | Questions, Media & Court Tips";
const contactDescription = "Contact St. George Pickleball about sponsorship, advertising, press, general questions, or a Washington County court that may be missing from the directory.";
const contactSchema = { "@context": "https://schema.org", "@type": "ContactPage", name: contactTitle, url: `${siteUrl}/contact`, description: contactDescription };
const contactMain = `<main class="contact-page"><section class="contact-masthead"><div class="container"><a class="back-link" href="/">← Home</a><div class="contact-masthead__grid"><div><p class="eyebrow">CONTACT THE LOCAL GUIDE</p><h1>Questions, ideas, and court tips.</h1></div><p>Choose the form that fits. Messages go privately to Brian for review; nothing submitted here is published automatically.</p></div></div></section><section class="contact-section"><div class="container contact-grid"><div class="contact-intro"><p class="section-number">01</p><p class="eyebrow">GENERAL CONTACT</p><h2>Start a conversation.</h2><p>Ask a general question, reach out about press, or discuss advertising with St. George’s pickleball community.</p></div><form class="editorial-form" action="https://formspree.io/f/xoeqoqbp" method="POST"><input type="hidden" name="submission_type" value="General contact"><input type="hidden" name="_subject" value="St. George Pickleball — Contact form"><div class="form-field form-field--full"><label for="inquiry-type-static">Inquiry type</label><select id="inquiry-type-static" name="inquiry_type" required><option value="" disabled selected>Choose one</option><option>Sponsorship/advertising</option><option>General question</option><option>Press/media</option><option>Something else</option></select></div><div class="form-field"><label for="contact-name-static">Name</label><input id="contact-name-static" name="name" required></div><div class="form-field"><label for="contact-email-static">Email</label><input id="contact-email-static" name="email" type="email" required></div><div class="form-field form-field--full"><label for="contact-message-static">Message</label><textarea id="contact-message-static" name="message" rows="7" required></textarea></div><button class="form-submit" type="submit">Send message →</button></form></div></section><section class="contact-section contact-section--tip"><div class="container contact-grid"><div class="contact-intro"><p class="section-number">02</p><p class="eyebrow">KNOW A COURT WE’RE MISSING?</p><h2>Send a tip—not a listing.</h2><p>Share what you know. Brian will verify the venue before any information is added to the directory.</p></div><form class="editorial-form" action="https://formspree.io/f/mvkojoyn" method="POST"><input type="hidden" name="submission_type" value="Missing court tip"><input type="hidden" name="_subject" value="St. George Pickleball — Court tip"><div class="form-field form-field--full"><label for="court-name-static">Court name</label><input id="court-name-static" name="court_name" required></div><div class="form-field form-field--full"><label for="rough-location-static">Rough location</label><input id="rough-location-static" name="rough_location" required></div><div class="form-field form-field--full"><label for="court-details-static">Anything else known</label><textarea id="court-details-static" name="anything_else_known" rows="7"></textarea></div><p class="form-privacy-note">Submissions go to Brian for private verification. They are never published automatically.</p><button class="form-submit" type="submit">Send court tip →</button></form></div></section></main>`;
const contactHtml = setHead(baseHtml.replace('<div id="root"></div>', `<div id="root">${shell(contactMain)}</div>`), { title: contactTitle, description: contactDescription, canonical: `${siteUrl}/contact`, schema: contactSchema });
writeCleanRoute("/contact", contactHtml);

const notFound = setHead(baseHtml, { title: "Page Not Found | St. George Pickleball", description: "The requested page could not be found.", canonical: `${siteUrl}/404`, schema: homeSchema, robots: "noindex, nofollow" });
fs.writeFileSync(path.join(outDir, "404.html"), notFound);
console.log(`Pre-rendered homepage, events hub, ${events.length} event pages, and ${venues.length} venue pages.`);