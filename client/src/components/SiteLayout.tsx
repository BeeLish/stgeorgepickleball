import type { ReactNode } from "react";
import { Link } from "wouter";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container site-header__inner">
          <Link href="/" className="brand" aria-label="St. George Pickleball home">
            <span className="brand__mark" aria-hidden="true">SG</span>
            <span className="brand__type">St. George <em>Pickleball</em></span>
          </Link>
          <nav aria-label="Primary navigation">
            <a href="/#court-directory">Court directory</a>
          </nav>
        </div>
      </header>
      {children}
      <footer className="site-footer">
        <div className="container site-footer__grid">
          <div>
            <p className="eyebrow">A LOCAL COURT GUIDE</p>
            <h2>Play well. Know before you go.</h2>
          </div>
          <div className="site-footer__aside">
            <p>Venue details can change. For special trips, confirm current hours and access directly with the venue.</p>
            <a href="/sitemap.xml">Sitemap</a>
          </div>
        </div>
        <div className="container site-footer__bottom">
          <span>© 2026 St. George Pickleball</span>
          <span>Built for players visiting and living in St. George, Utah.</span>
        </div>
      </footer>
    </div>
  );
}
