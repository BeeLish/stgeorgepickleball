import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import type { PickleballEvent } from "@/data/events";
import EventPhotoPlaceholder from "./EventPhotoPlaceholder";

type EventCardProps = {
  event: PickleballEvent;
  index: number;
};

export default function EventCard({ event, index }: EventCardProps) {
  return (
    <article className="event-card">
      <Link href={`/events/${event.slug}`} className="event-card__media" aria-label={`Read the ${event.name} guide`}>
        <EventPhotoPlaceholder eventName={event.shortName} variant="card" />
      </Link>
      <div className="event-card__body">
        <div className="event-card__index">{String(index + 1).padStart(2, "0")}</div>
        <div>
          <p className="eyebrow">{event.cardDate}</p>
          <h3><Link href={`/events/${event.slug}`}>{event.name}</Link></h3>
          <p>{event.summary}</p>
          <Link href={`/events/${event.slug}`} className="text-link">
            Plan your visit <ArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
