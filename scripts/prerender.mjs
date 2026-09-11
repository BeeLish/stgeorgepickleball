import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "dist", "public");
const baseHtml = fs.readFileSync(path.join(outDir, "index.html"), "utf8");
const siteUrl = "https://stgeorgepickleball.com";

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
];

function escapeHtml(value) {
  return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}

function setHead(html, { title, description, canonical, schema, robots = "index, follow" }) {
  return html
    .replace(/<title>.*?<\/title>/s, `<title>${escapeHtml(title)}</title>`)
    .replace(/<meta name="description" content=".*?" \/>/s, `<meta name="description" content="${escapeHtml(description)}" />`)
    .replace(/<meta property="og:title" content=".*?" \/>/s, `<meta property="og:title" content="${escapeHtml(title)}" />`)
    .replace(/<meta property="og:description" content=".*?" \/>/s, `<meta property="og:description" content="${escapeHtml(description)}" />`)
    .replace(/<meta property="og:url" content=".*?" \/>/s, `<meta property="og:url" content="${canonical}" />`)
    .replace(/<meta name="robots" content=".*?" \/>/s, `<meta name="robots" content="${robots}" />`)
    .replace(/<link rel="canonical" href=".*?" \/>/s, `<link rel="canonical" href="${canonical}" />`)
    .replace("</head>", `    <script type="application/ld+json" data-site-schema="true">${JSON.stringify(schema).replaceAll("<", "\\u003c")}</script>\n  </head>`);
}

function shell(main) {
  return `<div class="site-shell"><header class="site-header"><div class="container site-header__inner"><a class="brand" href="/"><span class="brand__mark">SG</span><span class="brand__type">St. George <em>Pickleball</em></span></a></div></header>${main}</div>`;
}

const homeDescription = "Find public courts, indoor clubs, paid facilities, and private pickleball venues in St. George, Utah, with addresses, access details, court counts, and maps.";
const homeSchema = { "@context": "https://schema.org", "@type": "WebSite", name: "St. George Pickleball", url: siteUrl, description: homeDescription };
const homeList = venues.map(([slug, name, address, courts, setting, access], index) => `<a class="venue-row" href="/venues/${slug}"><span class="venue-row__number">${String(index + 1).padStart(2, "0")}</span><span class="venue-row__main"><strong>${escapeHtml(name)}</strong><span>${escapeHtml(address)}</span></span><span class="venue-row__fact"><small>Courts</small><strong>${courts}</strong></span><span class="venue-row__fact venue-row__fact--setting"><small>Setting</small><strong>${escapeHtml(setting)}</strong></span><span class="venue-row__access">${escapeHtml(access)}</span></a>`).join("");
const homeMain = `<main><section class="intro-section"><div class="container"><p class="eyebrow">THE LOCAL COURT FIELD GUIDE</p><h1 style="font-family:Fraunces,serif;font-size:clamp(3rem,8vw,7rem);line-height:.95;max-width:1000px">Where to Play Pickleball in St. George</h1><p class="intro-copy">Public parks, indoor clubs, resort courts, and community facilities—organized in one clear local guide.</p></div></section><section class="directory-section" id="court-directory"><div class="container"><div class="directory-heading"><div><p class="eyebrow">12 KNOWN VENUES · ST. GEORGE, UTAH</p><h2>Where to Play Pickleball in St. George</h2></div></div><div class="venue-index">${homeList}</div></div></section></main>`;
fs.writeFileSync(path.join(outDir, "index.html"), setHead(baseHtml.replace('<div id="root"></div>', `<div id="root">${shell(homeMain)}</div>`), { title: "Where to Play Pickleball in St. George, Utah", description: homeDescription, canonical: `${siteUrl}/`, schema: homeSchema }));

for (const [slug, name, address, courts, setting, access, fee] of venues) {
  const title = `${name} Pickleball Courts | St. George, Utah`;
  const description = `${name}: ${courts} court${courts === 1 ? "" : "s"}, ${String(setting).toLowerCase()}, ${String(access).toLowerCase()}. View the address, hours guidance, and map.`;
  const canonical = `${siteUrl}/venues/${slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "SportsActivityLocation"],
    name,
    description,
    url: canonical,
    address: { "@type": "PostalAddress", streetAddress: String(address).split(",")[0], addressLocality: "St. George", addressRegion: "UT", postalCode: String(address).match(/\b\d{5}\b/)?.[0], addressCountry: "US" },
    priceRange: fee,
  };
  const main = `<main class="venue-page"><section class="venue-masthead"><div class="container"><a class="back-link" href="/#court-directory">← All St. George courts</a><div class="venue-masthead__title"><p class="eyebrow">ST. GEORGE, UTAH</p><h1>${escapeHtml(name)}</h1><p>${escapeHtml(description)}</p></div><div class="venue-placeholder venue-placeholder--hero" role="img" aria-label="${escapeHtml(name)} photography placeholder"><div class="venue-placeholder__copy"><span>ST. GEORGE COURT GUIDE</span><strong>${escapeHtml(name)}</strong></div></div></div></section><section class="venue-details"><div class="container venue-details__grid"><div class="venue-details__main"><p class="eyebrow">THE ESSENTIALS</p><h2>Plan your visit</h2><div class="address-block"><div><small>ADDRESS</small><address>${escapeHtml(address)}</address></div></div><div class="hours-block"><div><small>HOURS</small><p>Confirm current hours before visiting</p></div></div></div><aside class="facts-panel"><div class="fact"><span>Court count</span><strong>${courts}</strong></div><div class="fact"><span>Indoor / outdoor</span><strong>${escapeHtml(setting)}</strong></div><div class="fact"><span>Fee / membership</span><strong>${escapeHtml(fee)}</strong></div><div class="fact"><span>Access</span><strong>${escapeHtml(access)}</strong></div></aside></div></section></main>`;
  const dir = path.join(outDir, "venues", String(slug));
  fs.mkdirSync(dir, { recursive: true });
  const venueHtml = setHead(baseHtml.replace('<div id="root"></div>', `<div id="root">${shell(main)}</div>`), { title, description, canonical, schema });
  fs.writeFileSync(path.join(dir, "index.html"), venueHtml);
  fs.writeFileSync(path.join(outDir, "venues", `${slug}.html`), venueHtml);
}

const notFound = setHead(baseHtml, { title: "Page Not Found | St. George Pickleball", description: "The requested page could not be found.", canonical: `${siteUrl}/404`, schema: homeSchema, robots: "noindex, nofollow" });
fs.writeFileSync(path.join(outDir, "404.html"), notFound);
console.log(`Pre-rendered homepage and ${venues.length} venue pages.`);
