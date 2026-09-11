import { useEffect } from "react";
import { useLocation } from "wouter";

const MEASUREMENT_ID = "G-WK2H2059DE";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export default function GoogleAnalytics() {
  const [location] = useLocation();

  useEffect(() => {
    const timer = window.setTimeout(() => {
      window.gtag?.("config", MEASUREMENT_ID, {
        page_path: location,
        page_location: window.location.href,
      });
    }, 0);

    return () => window.clearTimeout(timer);
  }, [location]);

  return null;
}
