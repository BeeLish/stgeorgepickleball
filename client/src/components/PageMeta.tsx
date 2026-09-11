import { useEffect } from "react";
import type { PickleballEvent } from "@/data/events";
import type { Venue } from "@/data/venues";

const SITE_URL = "https://www.stgeorgepickleball.com";

function upsertMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    element.dataset.siteMeta = "true";
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([key, value]) => element!.setAttribute(key, value));
}

function buildVenueSchema(venue: Venue) {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "SportsActivityLocation"],
    name: venue.name,
    description: venue.description,
    url: `${SITE_URL}/venues/${venue.slug}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: venue.address.split(",")[0],
      addressLocality: "St. George",
      addressRegion: "UT",
      postalCode: venue.address.match(/\b\d{5}\b/)?.[0] ?? "",
      addressCountry: "US",
    },
    telephone: venue.phone,
    priceRange: venue.fee,
    publicAccess: venue.accessKind === "free" || venue.accessKind === "paid",
    amenityFeature: venue.amenities?.map((name) => ({ "@type": "LocationFeatureSpecification", name, value: true })),
    sameAs: venue.website ? [venue.website] : undefined,
  };
}

function buildEventSchema(event: PickleballEvent) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.name,
    startDate: event.startDate,
    endDate: event.endDate,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    description: event.schemaDescription,
    url: `${SITE_URL}/events/${event.slug}`,
    location: {
      "@type": "Place",
      name: event.locationName,
      address: {
        "@type": "PostalAddress",
        streetAddress: event.locationAddress.split(",")[0],
        addressLocality: "St. George",
        addressRegion: "UT",
        postalCode: event.locationAddress.match(/\b\d{5}\b/)?.[0] ?? "",
        addressCountry: "US",
      },
    },
    organizer: {
      "@type": "Organization",
      name: event.organizer,
      url: event.officialUrl,
    },
  };
}

type PageMetaProps = {
  title: string;
  description: string;
  path: string;
  venue?: Venue;
  event?: PickleballEvent;
  noIndex?: boolean;
};

export default function PageMeta({ title, description, path, venue, event, noIndex = false }: PageMetaProps) {
  useEffect(() => {
    const canonicalUrl = `${SITE_URL}${path}`;
    document.title = title;
    upsertMeta('meta[name="description"]', { name: "description", content: description });
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: title });
    upsertMeta('meta[property="og:description"]', { property: "og:description", content: description });
    upsertMeta('meta[property="og:type"]', { property: "og:type", content: venue ? "place" : event ? "article" : "website" });
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: canonicalUrl });
    upsertMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    upsertMeta('meta[name="robots"]', { name: "robots", content: noIndex ? "noindex, nofollow" : "index, follow" });

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    const oldSchema = document.head.querySelector('script[data-site-schema="true"]');
    oldSchema?.remove();
    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.dataset.siteSchema = "true";
    schema.textContent = JSON.stringify(
      event
        ? buildEventSchema(event)
        : venue
        ? buildVenueSchema(venue)
        : {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "St. George Pickleball",
            url: SITE_URL,
            description,
          },
    );
    document.head.appendChild(schema);
  }, [title, description, path, venue, event, noIndex]);

  return null;
}
