import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import EventCard from "@/components/EventCard";
import PageMeta from "@/components/PageMeta";
import SiteLayout from "@/components/SiteLayout";
import { events } from "@/data/events";

export default function EventsHub() {
  return (
    <SiteLayout>
      <PageMeta
        title="Pickleball Tournaments & Events in St. George, Utah"
        description="Plan for St. George’s biggest 2026 pickleball events: Huntsman World Senior Games pickleball and the City of St. George Fall Brawl."
        path="/events"
      />
      <main className="events-page">
        <section className="events-masthead">
          <div className="container">
            <Link href="/" className="back-link"><ArrowLeft aria-hidden="true" /> Home</Link>
            <div className="events-masthead__grid">
              <div>
                <p className="eyebrow">TOURNAMENTS & EVENTS · 2026</p>
                <h1>Two defining weeks on St. George courts.</h1>
              </div>
              <p>Dates, venues, official links, and practical guidance for the two pickleball events that shape October in St. George.</p>
            </div>
          </div>
        </section>

        <section className="events-index" aria-labelledby="event-guides-title">
          <div className="container">
            <div className="events-index__heading">
              <p className="eyebrow">THE 2026 EVENT FIELD GUIDE</p>
              <h2 id="event-guides-title">Choose an event</h2>
              <p>Each guide separates confirmed details from preliminary or unpublished information. Always use the official schedule for final travel decisions.</p>
            </div>
            <div className="event-card-grid">
              {events.map((event, index) => <EventCard key={event.slug} event={event} index={index} />)}
            </div>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}
