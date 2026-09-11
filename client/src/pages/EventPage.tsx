import { ArrowLeft, ArrowUpRight, CalendarDays, MapPin } from "lucide-react";
import { Link, Redirect, useParams } from "wouter";
import EventPhotoPlaceholder from "@/components/EventPhotoPlaceholder";
import PageMeta from "@/components/PageMeta";
import SiteLayout from "@/components/SiteLayout";
import { eventBySlug } from "@/data/events";

export default function EventPage() {
  const { slug } = useParams<{ slug: string }>();
  const event = eventBySlug[slug];

  if (!event) return <Redirect to="/404" />;

  return (
    <SiteLayout>
      <PageMeta
        title={`${event.name} 2026 | St. George, Utah`}
        description={event.metaDescription}
        path={`/events/${event.slug}`}
        event={event}
      />
      <main className="event-page">
        <section className="event-masthead">
          <div className="container">
            <Link href="/events" className="back-link"><ArrowLeft aria-hidden="true" /> All tournaments & events</Link>
            <div className="event-masthead__title">
              <p className="eyebrow">ST. GEORGE, UTAH · 2026</p>
              <h1>{event.name}</h1>
              <p>{event.dateLabel}</p>
            </div>
            <EventPhotoPlaceholder eventName={event.shortName} />
          </div>
        </section>

        <section className="event-overview">
          <div className="container event-overview__grid">
            <div className="event-story">
              <p className="eyebrow">THE EVENT</p>
              <h2>What it is—and why it matters.</h2>
              {event.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <h3>Why this week matters</h3>
              {event.whyItMatters.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <aside className="event-facts" aria-label="Event essentials">
              <div className="event-fact">
                <CalendarDays aria-hidden="true" />
                <div><span>DATES</span><strong>{event.dateLabel}</strong></div>
              </div>
              <div className="event-fact">
                <MapPin aria-hidden="true" />
                <div>
                  <span>PRIMARY VENUE</span>
                  {event.venueLink ? <Link href={event.venueLink}>{event.locationName}</Link> : <strong>{event.locationName}</strong>}
                  <small>{event.locationAddress}</small>
                  {event.secondaryVenue && <small>Also listed: {event.secondaryVenue}</small>}
                </div>
              </div>
              <div className="event-fact event-fact--plain">
                <div><span>ORGANIZER</span><strong>{event.organizer}</strong></div>
              </div>
              <a className="primary-link" href={event.officialUrl} target="_blank" rel="noreferrer">
                Official event page <ArrowUpRight aria-hidden="true" />
              </a>
            </aside>
          </div>
        </section>

        <section className="schedule-section" aria-labelledby="schedule-title">
          <div className="container">
            <div className="schedule-heading">
              <div>
                <p className="eyebrow">SCHEDULE AT A GLANCE</p>
                <h2 id="schedule-title">Build a plan, then check it.</h2>
              </div>
              <div className="status-note">
                <strong>Schedule status</strong>
                <p>{event.statusNote}</p>
                <a href={event.scheduleUrl} target="_blank" rel="noreferrer">Check official schedule <ArrowUpRight aria-hidden="true" /></a>
              </div>
            </div>
            <div className="schedule-list">
              {event.schedule.map((item) => (
                <div className={item.needsOfficialCheck ? "schedule-row schedule-row--check" : "schedule-row"} key={`${item.date}-${item.title}`}>
                  <span>{item.date}</span>
                  <strong>{item.title}</strong>
                  <p>{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="planning-section" aria-labelledby="planning-title">
          <div className="container">
            <div className="planning-heading">
              <p className="eyebrow">BEFORE YOU GO</p>
              <h2 id="planning-title">What a newcomer should know</h2>
            </div>
            <div className="planning-list">
              {event.planning.map((item) => (
                <article className="planning-row" key={item.number}>
                  <span className="planning-row__number">{item.number}</span>
                  <p className="eyebrow">{item.label}</p>
                  <div>
                    <h3>{item.title}</h3>
                    {item.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="official-links-section">
          <div className="container official-links-grid">
            <div>
              <p className="eyebrow">OFFICIAL SOURCES</p>
              <h2>Use the live source when details matter.</h2>
              <p>Checked September 11, 2026. Registration availability, match assignments, and event-day logistics can change after publication.</p>
            </div>
            <div className="official-link-list">
              <a href={event.registrationUrl} target="_blank" rel="noreferrer"><span>Registration</span><ArrowUpRight aria-hidden="true" /></a>
              {event.sources.map((source) => (
                source.url.startsWith("/")
                  ? <Link href={source.url} key={source.url}><span>{source.label}</span><ArrowUpRight aria-hidden="true" /></Link>
                  : <a href={source.url} target="_blank" rel="noreferrer" key={source.url}><span>{source.label}</span><ArrowUpRight aria-hidden="true" /></a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}
