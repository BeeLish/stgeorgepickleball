import type { CSSProperties } from "react";

type VenuePhotoPlaceholderProps = {
  venueName: string;
  variant?: "hero" | "detail" | "signage";
  className?: string;
};

export default function VenuePhotoPlaceholder({ venueName, variant = "hero", className = "" }: VenuePhotoPlaceholderProps) {
  const isHero = variant === "hero";
  const label = variant === "detail" ? "FIELD NOTE · 02" : variant === "signage" ? "FIELD NOTE · 03" : "ST. GEORGE COURT GUIDE";
  const style = { "--court-opacity": isHero ? 0.32 : 0.2 } as CSSProperties;

  return (
    <div className={`venue-placeholder venue-placeholder--${variant} ${className}`} style={style} role="img" aria-label={`${venueName} photography placeholder`}>
      <div className="court-mark" aria-hidden="true">
        <span className="court-mark__net" />
        <span className="court-mark__left" />
        <span className="court-mark__right" />
      </div>
      <div className="venue-placeholder__copy">
        <span>{label}</span>
        <strong>{venueName}</strong>
      </div>
    </div>
  );
}
