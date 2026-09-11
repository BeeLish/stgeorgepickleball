import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import PageMeta from "@/components/PageMeta";
import SiteLayout from "@/components/SiteLayout";

export default function NotFound() {
  return (
    <SiteLayout>
      <PageMeta title="Page Not Found | St. George Pickleball" description="The requested page could not be found." path="/404" noIndex />
      <main className="not-found container">
        <p className="eyebrow">404 · OUT OF BOUNDS</p>
        <h1>That court isn’t on this page.</h1>
        <p>The link may be old, or the address may have changed.</p>
        <Link href="/#court-directory" className="back-link"><ArrowLeft aria-hidden="true" /> Return to the court directory</Link>
      </main>
    </SiteLayout>
  );
}
