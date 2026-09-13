import type { CSSProperties } from "react";

type EventPhotoPlaceholderProps = {
  eventName: string;
  variant?: "hero" | "card";
  className?: string;
};

export default function EventPhotoPlaceholder({ eventName, variant = "hero", className = "" }: EventPhotoPlaceholderProps) {
  if (eventName === "Huntsman Games Pickleball") {
    return (
      <div className={`event-photo event-photo--${variant} ${className}`}>
        <img
          src={variant === "card" ? "/images/huntsman-games-pickleball-card.jpg" : "/images/huntsman-games-pickleball.jpg"}
          alt="Two senior pickleball players on a desert court beneath the Huntsman World Senior Games logo"
        />
      </div>
    );
  }

  const style = { "--court-opacity": variant === "hero" ? 0.32 : 0.24 } as CSSProperties;

  return (
    <div
      className={`venue-placeholder venue-placeholder--${variant === "hero" ? "hero" : "signage"} event-placeholder event-placeholder--${variant} ${className}`}
      style={style}
      role="img"
      aria-label={`${eventName} editorial photography placeholder`}
    >
      <div className="court-mark" aria-hidden="true">
        <span className="court-mark__net" />
        <span className="court-mark__left" />
        <span className="court-mark__right" />
      </div>
      <div className="venue-placeholder__copy">
        <span>2026 ST. GEORGE EVENT GUIDE</span>
        <strong>{eventName}</strong>
      </div>
    </div>
  );
}
