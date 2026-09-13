import type { Venue } from "@/data/venues";

export type VenueMapPresentation = {
  type: "satellite" | "roadmap";
  zoom: number;
  label: string;
  fallbackReason?: string;
};

function defaultZoom(courts: number | null) {
  if (courts !== null && courts >= 20) return 19;
  if (courts !== null && courts >= 10) return 19;
  return 20;
}

export function getVenueMapPresentation(venue: Venue): VenueMapPresentation {
  const type = venue.mapType ?? "satellite";
  const zoom = venue.mapZoom ?? defaultZoom(venue.courts);

  if (type === "roadmap") {
    return {
      type,
      zoom,
      label: "Street-map fallback",
      fallbackReason: venue.mapFallbackReason ?? "Satellite imagery is not clear enough to use for this location.",
    };
  }

  return {
    type,
    zoom,
    label: "Satellite · tight court view",
  };
}

export function buildVenueMapEmbedUrl(venue: Venue) {
  const map = getVenueMapPresentation(venue);
  const tileMode = map.type === "satellite" ? "k" : "m";
  return `https://www.google.com/maps?q=${encodeURIComponent(venue.mapQuery)}&output=embed&t=${tileMode}&z=${map.zoom}&hl=en`;
}

export function buildVenueGoogleMapsUrl(venue: Venue) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venue.mapQuery)}`;
}
