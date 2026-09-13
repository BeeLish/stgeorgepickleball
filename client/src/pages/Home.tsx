import { useMemo, useState } from "react";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { Link } from "wouter";
import EventCard from "@/components/EventCard";
import PageMeta from "@/components/PageMeta";
import SiteLayout from "@/components/SiteLayout";
import { events } from "@/data/events";
import { comingSoonVenue, venues, type AccessKind } from "@/data/venues";

const HERO_IMAGE = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663043834901/qENfWDNvhdacncwA.webp";

type Filter = "all" | AccessKind | "indoor";

const filters: { value: Filter; label: string }[] = [
  { value: "all", label: "All venues" },
  { value: "free", label: "Free & public" },
  { value: "indoor", label: "Indoor play" },
  { value: "membership", label: "Membership" },
  { value: "paid", label: "Pay to play" },
  { value: "private", label: "Private communities" },
];

function venueMatchesFilter(filter: Filter, setting: string, accessKind: AccessKind) {
  if (filter === "all") return true;
  if (filter === "indoor") return setting.toLowerCase().includes("indoor");
  return accessKind === filter;
}

export default function Home() {
  const [filter, setFilter] = useState<Filter>("all");
  const visibleVenues = useMemo(
    () => venues.filter((venue) => venueMatchesFilter(filter, venue.setting, venue.accessKind)),
    [filter],
  );

  return (
    <SiteLayout>
      <PageMeta
        title="Where to Play Pickleball in St. George, Utah"
        description="Find public courts, indoor clubs, paid facilities, and private pickleball venues across greater St. George and Washington County, Utah."
        path="/"
      />

      <main>
        <section className="home-hero" style={{ backgroundImage: `url(${HERO_IMAGE})` }}>
          <div className="home-hero__overlay" />
          <div className="container home-hero__content">
            <p className="eyebrow eyebrow--light">THE LOCAL COURT FIELD GUIDE</p>
            <h1>Where to Play Pickleball in St. George</h1>
            <p className="home-hero__lede">Public parks, indoor clubs, resort courts, and community facilities across Washington County—organized in one clear local guide.</p>
            <a className="hero-link" href="#court-directory">
              Explore all courts <ArrowDown aria-hidden="true" />
            </a>
          </div>
          <span className="photo-credit">Landscape photograph by Ivy Tang / Unsplash</span>
        </section>

        <section className="intro-section" aria-labelledby="intro-title">
          <div className="container intro-grid">
            <p className="section-number" aria-hidden="true">01</p>
            <div>
              <p className="eyebrow">A COURT GUIDE BUILT FOR THIS PLACE</p>
              <h2 id="intro-title">From first serve to final point, start with the right court.</h2>
            </div>
            <p className="intro-copy">Greater St. George and Washington County have one of Utah’s deepest mixes of pickleball facilities. This directory separates free public courts from memberships, paid play, and private community access so you can make a better plan before you leave.</p>
          </div>
        </section>

        <section className="home-events" aria-labelledby="home-events-title">
          <div className="container">
            <div className="home-events__heading">
              <div>
                <p className="eyebrow">TOURNAMENT SEASON · OCTOBER 2026</p>
                <h2 id="home-events-title">The biggest pickleball weeks of the year.</h2>
              </div>
              <div>
                <p>Start with confirmed dates, venue links, spectator notes, and a clear warning wherever the official schedule is still moving.</p>
                <Link href="/events" className="text-link">View all events <ArrowUpRight aria-hidden="true" /></Link>
              </div>
            </div>
            <div className="event-card-grid">
              {events.map((event, index) => <EventCard key={event.slug} event={event} index={index} />)}
            </div>
          </div>
        </section>

        <section className="directory-section" id="court-directory" aria-labelledby="directory-title">
          <div className="container">
            <div className="directory-heading">
              <div>
                <p className="eyebrow">{venues.length} CURRENT VENUES · 1 COMING SOON · WASHINGTON COUNTY</p>
                <h2 id="directory-title">Where to Play Across Greater St. George</h2>
              </div>
              <p>Choose a venue for court count, access, hours guidance, address, and a map.</p>
            </div>

            <div className="filters" role="group" aria-label="Filter venues">
              {filters.map((item) => (
                <button
                  key={item.value}
                  type="button"
                  className={filter === item.value ? "is-active" : ""}
                  aria-pressed={filter === item.value}
                  onClick={() => setFilter(item.value)}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="venue-index" aria-live="polite">
              {visibleVenues.map((venue) => {
                const originalIndex = venues.findIndex((item) => item.slug === venue.slug) + 1;
                return (
                  <Link key={venue.slug} href={`/venues/${venue.slug}`} className="venue-row">
                    <span className="venue-row__number">{String(originalIndex).padStart(2, "0")}</span>
                    <span className="venue-row__main">
                      <strong>{venue.name}</strong>
                      <span><MapPin aria-hidden="true" /> {venue.address}</span>
                    </span>
                    <span className="venue-row__fact">
                      <small>Courts</small>
                      <strong>{venue.courts ?? "Not confirmed"}</strong>
                    </span>
                    <span className="venue-row__fact venue-row__fact--setting">
                      <small>Setting</small>
                      <strong>{venue.setting}</strong>
                    </span>
                    <span className="venue-row__access">{venue.access}</span>
                    <ArrowUpRight className="venue-row__arrow" aria-hidden="true" />
                  </Link>
                );
              })}
              {visibleVenues.length === 0 && <p className="empty-state">No venues match that filter.</p>}
            </div>

            {filter === "all" && (
              <aside className="coming-soon-listing" aria-labelledby="coming-soon-title">
                <div>
                  <p className="eyebrow">COMING SOON · NOT YET OPEN</p>
                  <h3 id="coming-soon-title">{comingSoonVenue.name}</h3>
                </div>
                <div>
                  <strong>{comingSoonVenue.status}</strong>
                  <p>{comingSoonVenue.description}</p>
                  <a href={comingSoonVenue.website} target="_blank" rel="noreferrer">
                    Check current status <ArrowUpRight aria-hidden="true" />
                  </a>
                </div>
              </aside>
            )}
          </div>
        </section>

        <section className="field-note-section">
          <div className="container field-note-grid">
            <div className="field-note-art" aria-hidden="true">
              <span className="field-note-art__ball" />
              <span className="field-note-art__line" />
              <span className="field-note-art__line field-note-art__line--short" />
            </div>
            <div>
              <p className="eyebrow">FIELD NOTE</p>
              <h2>Public, paid, member, or private?</h2>
              <p>Those distinctions matter here. A beautiful court is not useful if you cannot get through the gate. Every venue page puts access and fees next to the court count—not buried in fine print.</p>
            </div>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}
