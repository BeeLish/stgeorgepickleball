import { ArrowLeft, ArrowUpRight, Clock3, ExternalLink, MapPin, Phone } from "lucide-react";
import { Link, Redirect, useParams } from "wouter";
import PageMeta from "@/components/PageMeta";
import SiteLayout from "@/components/SiteLayout";
import VenuePhotoPlaceholder from "@/components/VenuePhotoPlaceholder";
import { venueBySlug, venues } from "@/data/venues";
import { buildVenueGoogleMapsUrl, buildVenueMapEmbedUrl, getVenueMapPresentation } from "@/lib/venueMap";

export default function VenuePage() {
  const { slug } = useParams<{ slug: string }>();
  const venue = venueBySlug[slug];

  if (!venue) return <Redirect to="/404" />;

  const mapUrl = buildVenueMapEmbedUrl(venue);
  const directionsUrl = buildVenueGoogleMapsUrl(venue);
  const mapPresentation = getVenueMapPresentation(venue);
  const index = venues.findIndex((item) => item.slug === venue.slug) + 1;
  const locality = venue.locality ?? "St. George";
  const courtCountDescription = venue.courts === null ? "court count not confirmed" : `${venue.courts} court${venue.courts === 1 ? "" : "s"}`;
  const pageTitle = /Pickleball(?: Courts)?$/.test(venue.name)
    ? `${venue.name}${venue.name.endsWith(" Courts") ? "" : " Courts"} | ${locality}, Utah`
    : `${venue.name} Pickleball Courts | ${locality}, Utah`;

  return (
    <SiteLayout>
      <PageMeta
        title={pageTitle}
        description={`${venue.name}: ${courtCountDescription}, ${venue.setting.toLowerCase()}, ${venue.access.toLowerCase()}. View the address, hours guidance, amenities, and map.`}
        path={`/venues/${venue.slug}`}
        venue={venue}
      />

      <main className="venue-page">
        <section className="venue-masthead">
          <div className="container">
            <Link href="/#court-directory" className="back-link"><ArrowLeft aria-hidden="true" /> All Washington County courts</Link>
            <div className="venue-masthead__title">
              <p className="eyebrow">VENUE {String(index).padStart(2, "0")} · {locality.toUpperCase()}, UTAH</p>
              <h1>{venue.name}</h1>
              <p>{venue.description}</p>
            </div>
            <VenuePhotoPlaceholder venueName={venue.name} variant="hero" />
          </div>
        </section>

        <section className="venue-details" aria-labelledby="details-heading">
          <div className="container venue-details__grid">
            <div className="venue-details__main">
              <p className="eyebrow">THE ESSENTIALS</p>
              <h2 id="details-heading">Plan your visit</h2>
              <div className="address-block">
                <MapPin aria-hidden="true" />
                <div>
                  <small>ADDRESS</small>
                  <address>{venue.address}</address>
                  <a href={directionsUrl} target="_blank" rel="noreferrer">Open directions <ArrowUpRight aria-hidden="true" /></a>
                </div>
              </div>
              <div className="hours-block">
                <Clock3 aria-hidden="true" />
                <div>
                  <small>HOURS</small>
                  <p>{venue.hours}</p>
                </div>
              </div>
              {venue.notable && <p className="notable">{venue.notable}</p>}
            </div>

            <aside className="facts-panel" aria-label="Venue facts">
              <div className="fact"><span>Court count</span><strong>{venue.courts ?? "Not confirmed"}</strong></div>
              <div className="fact"><span>Indoor / outdoor</span><strong>{venue.setting}</strong></div>
              <div className="fact"><span>Fee / membership</span><strong>{venue.fee}</strong></div>
              <div className="fact"><span>Access</span><strong>{venue.access}</strong></div>
              {venue.surface && <div className="fact"><span>Surface & setup</span><strong>{venue.surface}</strong></div>}
              {venue.facts?.map((fact) => <div className="fact" key={fact.label}><span>{fact.label}</span><strong>{fact.value}</strong></div>)}
              {venue.phone && (
                <a className="contact-link" href={`tel:${venue.phone.replace(/[^\d+]/g, "")}`}><Phone aria-hidden="true" /> {venue.phone}</a>
              )}
              {venue.website && (
                <a className="contact-link" href={venue.website} target="_blank" rel="noreferrer"><ExternalLink aria-hidden="true" /> {venue.websiteLabel ?? "Official website"}</a>
              )}
            </aside>
          </div>
        </section>

        {venue.profile && (
          <section className="venue-profile-section" aria-labelledby="venue-profile-heading">
            <div className="container venue-profile-grid">
              <div>
                <p className="eyebrow">{venue.profile.eyebrow}</p>
                <h2 id="venue-profile-heading">{venue.profile.heading}</h2>
              </div>
              <div className="venue-profile-copy">
                {venue.profile.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {venue.profile.disclosure && <p className="editorial-disclosure">{venue.profile.disclosure}</p>}
              </div>
            </div>
          </section>
        )}

        {venue.amenities && venue.amenities.length > 0 && (
          <section className="amenities-section">
            <div className="container amenities-grid">
              <div>
                <p className="eyebrow">ON SITE</p>
                <h2>Amenities</h2>
              </div>
              <ul>
                {venue.amenities.map((amenity) => <li key={amenity}>{amenity}</li>)}
              </ul>
            </div>
          </section>
        )}

        <section className="map-section" aria-labelledby="map-heading">
          <div className="container">
            <div className="map-heading">
              <div>
                <p className="eyebrow">WAYFINDING</p>
                <h2 id="map-heading">Find {venue.name}</h2>
              </div>
              <div className="map-heading__actions">
                <span className={`map-mode map-mode--${mapPresentation.type}`}>{mapPresentation.label}</span>
                <a href={directionsUrl} target="_blank" rel="noreferrer">Open in Google Maps <ArrowUpRight aria-hidden="true" /></a>
              </div>
            </div>
            {mapPresentation.fallbackReason && <p className="map-fallback-note">{mapPresentation.fallbackReason}</p>}
            <div className="map-frame">
              <iframe
                title={`${mapPresentation.label} of ${venue.name}`}
                src={mapUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section className="photo-plan-section" aria-labelledby="photo-plan-heading">
          <div className="container">
            <div className="photo-plan-heading">
              <p className="eyebrow">THE VENUE, UP CLOSE</p>
              <h2 id="photo-plan-heading">A court guide built to show the real place.</h2>
            </div>
            <div className="photo-grid">
              <VenuePhotoPlaceholder venueName={venue.name} variant="detail" />
              <VenuePhotoPlaceholder venueName={venue.name} variant="signage" />
            </div>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}
