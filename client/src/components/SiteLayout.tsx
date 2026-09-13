import type { ReactNode } from "react";
import { Link } from "wouter";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container site-header__inner">
          <Link href="/" className="brand" aria-label="St. George Pickleball home">
            <img
              className="brand__logo"
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663043834901/QealZUTZzBUVqsqQ.webp"
              width="960"
              height="408"
              alt=""
              decoding="async"
              fetchPriority="high"
            />
          </Link>
          <nav aria-label="Primary navigation">
            <a href="/#court-directory"><span className="nav-label--desktop">Court directory</span><span className="nav-label--mobile">Courts</span></a>
            <Link href="/events"><span className="nav-label--desktop">Tournaments & Events</span><span className="nav-label--mobile">Events</span></Link>
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
            <p>Venue and event details can change. For special trips, confirm current hours, access, and schedules with the official organizer.</p>
            <Link href="/events">Tournaments & Events</Link>
            <Link href="/contact">Contact & court tips</Link>
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
