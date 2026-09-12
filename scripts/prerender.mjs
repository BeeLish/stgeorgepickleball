import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "dist", "public");
const baseHtml = fs.readFileSync(path.join(outDir, "index.html"), "utf8");
const siteUrl = "https://www.stgeorgepickleball.com";

const venues = [
  ["little-valley-pickleball-complex", "Little Valley Pickleball Complex", "2330 Horseman Park Drive, St. George, UT 84790", 33, "Outdoor", "Free and open to the public", "Free"],
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
    locationAddress: "2330 Horseman Park Drive, St. George, UT 84790",
    organizer: "Huntsman World Senior Games",
    startDate: "2026-10-12",
    endDate: "2026-10-17",
    summary: "A marquee week inside St. George’s 43-sport international celebration of athletes age 50 and over.",
    description: "Plan for 2026 Huntsman World Senior Games pickleball in St. George: preliminary dates, venues, spectator guidance, parking notes, and official schedule links.",
    schemaDescription: "The 2026 pickleball competition at the Huntsman World Senior Games, an international 43-sport event for athletes age 50 and over in St. George, Utah.",
    officialUrl: "https://seniorgames.net/sports/pickleball",
    bodyHtml: 'The <a class="inline-source-link" href="https://seniorgames.net/sports/pickleball" target="_blank" rel="noreferrer">Huntsman World Senior Games official site</a> describes two weeks of competition for athletes age 50 and over across 43 sports. Pickleball is a signature draw, with age singles, age doubles, mixed doubles, and skill-level doubles listed at <a class="inline-source-link" href="/venues/little-valley-pickleball-complex">Little Valley Pickleball Complex</a> and SunRiver. The official October 12–17 pickleball schedule is preliminary and subject to change.',
  },
  {
    slug: "fall-brawl-pickleball-2026",
    name: "City of St. George Fall Brawl",
    shortName: "Fall Brawl",
    dateLabel: "October 6–10, 2026",
    cardDate: "OCT 6–10 · LITTLE VALLEY",
    locationName: "Little Valley Pickleball Complex",
    locationAddress: "2330 Horseman Park Drive, St. George, UT 84790",
    organizer: "City of St. George",
    startDate: "2026-10-06",
    endDate: "2026-10-10",
    summary: "The Original Fall Brawl brings a nationally significant amateur field to Little Valley’s 33 courts.",
    description: "Plan for the 2026 St. George Fall Brawl pickleball tournament at Little Valley, with confirmed dates, registration links, venue guidance, and schedule notes.",
    schemaDescription: "The City of St. George Fall Brawl pickleball tournament at Little Valley Pickleball Complex, a major amateur event drawing more than 1,000 participants.",
    officialUrl: "https://sgcityutah.gov/activity/recreation/pickleball/adult_pickleball/pickleball_tournaments.php",
    bodyHtml: 'The <a class="inline-source-link" href="https://sgcityutah.gov/activity/recreation/pickleball/adult_pickleball/pickleball_tournaments.php" target="_blank" rel="noreferrer">City tournament page</a> schedules Fall Brawl (The Original) for October 6–10 at <a class="inline-source-link" href="/venues/little-valley-pickleball-complex">Little Valley Pickleball Complex</a>. City-reported figures cited in the local venue research describe a field of more than 1,000 participants and a place among the five largest amateur pickleball tournaments in the country. Check <a class="inline-source-link" href="https://pickleballtournaments.com/tournaments/fall-brawl-2026" target="_blank" rel="noreferrer">PickleballTournaments.com</a> for divisions, fees, and event-day details.',
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
  return `<div class="site-shell"><header class="site-header"><div class="container site-header__inner"><a class="brand" href="/"><span class="brand__mark">SG</span><span class="brand__type">St. George <em>Pickleball</em></span></a><nav aria-label="Primary navigation"><a href="/#court-directory">Court directory</a><a href="/events">Tournaments &amp; Events</a></nav></div></header>${main}</div>`;
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

function eventCard(event, index) {
  return `<article class="event-card"><a class="event-card__media" href="/events/${event.slug}"><div class="venue-placeholder venue-placeholder--signage event-placeholder event-placeholder--card"><div class="venue-placeholder__copy"><span>2026 ST. GEORGE EVENT GUIDE</span><strong>${escapeHtml(event.shortName)}</strong></div></div></a><div class="event-card__body"><div class="event-card__index">${String(index + 1).padStart(2, "0")}</div><div><p class="eyebrow">${escapeHtml(event.cardDate)}</p><h3><a href="/events/${event.slug}">${escapeHtml(event.name)}</a></h3><p>${escapeHtml(event.summary)}</p><a class="text-link" href="/events/${event.slug}">Plan your visit →</a></div></div></article>`;
}

const homeDescription = "Find public courts, indoor clubs, paid facilities, private venues, and major pickleball events across greater St. George and Washington County, Utah.";
const homeSchema = { "@context": "https://schema.org", "@type": "WebSite", name: "St. George Pickleball", url: siteUrl, description: homeDescription };
const homeEvents = events.map(eventCard).join("");
const homeList = venues.map(([slug, name, address, courts, setting, access], index) => `<a class="venue-row" href="/venues/${slug}"><span class="venue-row__number">${String(index + 1).padStart(2, "0")}</span><span class="venue-row__main"><strong>${escapeHtml(name)}</strong><span>${escapeHtml(address)}</span></span><span class="venue-row__fact"><small>Courts</small><strong>${courts ?? "Not confirmed"}</strong></span><span class="venue-row__fact venue-row__fact--setting"><small>Setting</small><strong>${escapeHtml(setting)}</strong></span><span class="venue-row__access">${escapeHtml(access)}</span></a>`).join("");
const comingSoon = `<aside class="coming-soon-listing" aria-labelledby="coming-soon-title"><div><p class="eyebrow">COMING SOON · NOT YET OPEN</p><h3 id="coming-soon-title">The Pickle Pad</h3></div><div><strong>Opening soon — not yet open</strong><p>An indoor pickleball, bar, and restaurant concept with Crave Social Eatery planned on site. No address, hours, pricing, or court count will be listed until opening details are confirmed.</p><a href="https://thepicklepad.com" target="_blank" rel="noreferrer">Check current status →</a></div></aside>`;
const homeMain = `<main><section class="intro-section"><div class="container"><p class="eyebrow">THE LOCAL COURT FIELD GUIDE</p><h1 style="font-family:Fraunces,serif;font-size:clamp(3rem,8vw,7rem);line-height:.95;max-width:1000px">Where to Play Pickleball in St. George</h1><p class="intro-copy">Public parks, indoor clubs, resort courts, and community facilities across Washington County—organized in one clear local guide.</p></div></section><section class="home-events"><div class="container"><div class="home-events__heading"><div><p class="eyebrow">TOURNAMENT SEASON · OCTOBER 2026</p><h2>The biggest pickleball weeks of the year.</h2></div></div><div class="event-card-grid">${homeEvents}</div></div></section><section class="directory-section" id="court-directory"><div class="container"><div class="directory-heading"><div><p class="eyebrow">22 CURRENT VENUES · 1 COMING SOON · WASHINGTON COUNTY</p><h2>Where to Play Across Greater St. George</h2></div></div><div class="venue-index">${homeList}</div>${comingSoon}</div></section></main>`;
fs.writeFileSync(path.join(outDir, "index.html"), setHead(baseHtml.replace('<div id="root"></div>', `<div id="root">${shell(homeMain)}</div>`), { title: "Where to Play Pickleball in St. George, Utah", description: homeDescription, canonical: `${siteUrl}/`, schema: homeSchema }));

for (const [slug, name, address, courts, setting, access, fee, locality = "St. George", postalCode, noStreetAddress = false] of venues) {
  const courtLabel = courts === null ? "court count not confirmed" : `${courts} court${courts === 1 ? "" : "s"}`;
  const title = /Pickleball(?: Courts)?$/.test(String(name))
    ? `${name}${String(name).endsWith(" Courts") ? "" : " Courts"} | ${locality}, Utah`
    : `${name} Pickleball Courts | ${locality}, Utah`;
  const description = `${name}: ${courtLabel}, ${String(setting).toLowerCase()}, ${String(access).toLowerCase()}. View the address, hours guidance, and map.`;
  const canonical = `${siteUrl}/venues/${slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "SportsActivityLocation"],
    name,
    description,
    url: canonical,
    address: { "@type": "PostalAddress", streetAddress: noStreetAddress ? undefined : String(address).split(",")[0], addressLocality: locality, addressRegion: "UT", postalCode: postalCode ?? String(address).match(/\b\d{5}\b/)?.[0], addressCountry: "US" },
    priceRange: fee,
  };
  const main = `<main class="venue-page"><section class="venue-masthead"><div class="container"><a class="back-link" href="/#court-directory">← All Washington County courts</a><div class="venue-masthead__title"><p class="eyebrow">${escapeHtml(locality).toUpperCase()}, UTAH</p><h1>${escapeHtml(name)}</h1><p>${escapeHtml(description)}</p></div><div class="venue-placeholder venue-placeholder--hero" role="img" aria-label="${escapeHtml(name)} photography placeholder"><div class="venue-placeholder__copy"><span>ST. GEORGE COURT GUIDE</span><strong>${escapeHtml(name)}</strong></div></div></div></section><section class="venue-details"><div class="container venue-details__grid"><div class="venue-details__main"><p class="eyebrow">THE ESSENTIALS</p><h2>Plan your visit</h2><div class="address-block"><div><small>ADDRESS</small><address>${escapeHtml(address)}</address></div></div><div class="hours-block"><div><small>HOURS</small><p>Confirm current hours before visiting</p></div></div></div><aside class="facts-panel"><div class="fact"><span>Court count</span><strong>${courts ?? "Not confirmed"}</strong></div><div class="fact"><span>Indoor / outdoor</span><strong>${escapeHtml(setting)}</strong></div><div class="fact"><span>Fee / membership</span><strong>${escapeHtml(fee)}</strong></div><div class="fact"><span>Access</span><strong>${escapeHtml(access)}</strong></div></aside></div></section></main>`;
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
  const main = `<main class="event-page"><section class="event-masthead"><div class="container"><a class="back-link" href="/events">← All tournaments &amp; events</a><div class="event-masthead__title"><p class="eyebrow">ST. GEORGE, UTAH · 2026</p><h1>${escapeHtml(event.name)}</h1><p>${escapeHtml(event.dateLabel)}</p></div>${placeholder(event.shortName)}</div></section><section class="event-overview"><div class="container event-overview__grid"><div class="event-story"><p class="eyebrow">THE EVENT</p><h2>What it is—and why it matters.</h2><p>${event.bodyHtml}</p></div><aside class="event-facts"><div class="event-fact"><div><span>DATES</span><strong>${escapeHtml(event.dateLabel)}</strong></div></div><div class="event-fact"><div><span>PRIMARY VENUE</span><a href="/venues/little-valley-pickleball-complex">${escapeHtml(event.locationName)}</a><small>${escapeHtml(event.locationAddress)}</small></div></div><a class="primary-link" href="${event.officialUrl}">Official event page →</a></aside></div></section><section class="schedule-section"><div class="container"><div class="schedule-heading"><div><p class="eyebrow">SCHEDULE AT A GLANCE</p><h2>Build a plan, then check it.</h2></div><div class="status-note"><strong>Check official schedule</strong><p>Registration availability, match assignments, and event-day logistics can change after publication.</p></div></div></div></section></main>`;
  const eventHtml = setHead(baseHtml.replace('<div id="root"></div>', `<div id="root">${shell(main)}</div>`), { title: `${event.name} 2026 | St. George, Utah`, description: event.description, canonical, schema, ogType: "article" });
  writeCleanRoute(`/events/${event.slug}`, eventHtml);
}

const notFound = setHead(baseHtml, { title: "Page Not Found | St. George Pickleball", description: "The requested page could not be found.", canonical: `${siteUrl}/404`, schema: homeSchema, robots: "noindex, nofollow" });
fs.writeFileSync(path.join(outDir, "404.html"), notFound);
console.log(`Pre-rendered homepage, events hub, ${events.length} event pages, and ${venues.length} venue pages.`);
