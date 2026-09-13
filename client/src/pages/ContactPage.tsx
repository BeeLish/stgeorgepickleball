import { useState, type FormEvent } from "react";
import { ArrowLeft, ArrowUpRight, Check, Send } from "lucide-react";
import { Link } from "wouter";
import PageMeta from "@/components/PageMeta";
import SiteLayout from "@/components/SiteLayout";

const CONTACT_ENDPOINT = "https://formspree.io/f/xoeqoqbp";
const COURT_TIPS_ENDPOINT = "https://formspree.io/f/mvkojoyn";

type FormStatus = "idle" | "submitting" | "success" | "error";

function useFormspree(endpoint: string) {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    const form = event.currentTarget;

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) throw new Error("Submission failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return { status, submit, reset: () => setStatus("idle") };
}

function SuccessMessage({ children, onReset }: { children: string; onReset: () => void }) {
  return (
    <div className="form-success" role="status">
      <Check aria-hidden="true" />
      <div>
        <strong>Sent to Brian for review.</strong>
        <p>{children}</p>
        <button type="button" onClick={onReset}>Send another</button>
      </div>
    </div>
  );
}

export default function ContactPage() {
  const contact = useFormspree(CONTACT_ENDPOINT);
  const courtTip = useFormspree(COURT_TIPS_ENDPOINT);

  return (
    <SiteLayout>
      <PageMeta
        title="Contact St. George Pickleball | Questions, Media & Court Tips"
        description="Contact St. George Pickleball about sponsorship, advertising, press, general questions, or a Washington County court that may be missing from the directory."
        path="/contact"
      />

      <main className="contact-page">
        <section className="contact-masthead">
          <div className="container">
            <Link href="/" className="back-link"><ArrowLeft aria-hidden="true" /> Home</Link>
            <div className="contact-masthead__grid">
              <div>
                <p className="eyebrow">CONTACT THE LOCAL GUIDE</p>
                <h1>Questions, ideas, and court tips.</h1>
              </div>
              <p>Choose the form that fits. Messages go privately to Brian for review; nothing submitted here is published automatically.</p>
            </div>
          </div>
        </section>

        <section className="contact-section" aria-labelledby="general-contact-heading">
          <div className="container contact-grid">
            <div className="contact-intro">
              <p className="section-number" aria-hidden="true">01</p>
              <p className="eyebrow">GENERAL CONTACT</p>
              <h2 id="general-contact-heading">Start a conversation.</h2>
              <p>Ask a general question, reach out about press, or discuss advertising with St. George’s pickleball community.</p>
            </div>

            {contact.status === "success" ? (
              <SuccessMessage onReset={contact.reset}>Your message is in the private contact queue.</SuccessMessage>
            ) : (
              <form className="editorial-form" onSubmit={contact.submit} action={CONTACT_ENDPOINT} method="POST">
                <input type="hidden" name="submission_type" value="General contact" />
                <input type="hidden" name="_subject" value="St. George Pickleball — Contact form" />
                <input type="text" name="_gotcha" className="honeypot" tabIndex={-1} autoComplete="off" aria-hidden="true" />
                <div className="form-field form-field--full">
                  <label htmlFor="inquiry-type">Inquiry type</label>
                  <select id="inquiry-type" name="inquiry_type" required defaultValue="">
                    <option value="" disabled>Choose one</option>
                    <option value="Sponsorship/advertising">Sponsorship/advertising</option>
                    <option value="General question">General question</option>
                    <option value="Press/media">Press/media</option>
                    <option value="Something else">Something else</option>
                  </select>
                </div>
                <div className="form-field">
                  <label htmlFor="contact-name">Name</label>
                  <input id="contact-name" name="name" type="text" autoComplete="name" required />
                </div>
                <div className="form-field">
                  <label htmlFor="contact-email">Email</label>
                  <input id="contact-email" name="email" type="email" autoComplete="email" required />
                </div>
                <div className="form-field form-field--full">
                  <label htmlFor="contact-message">Message</label>
                  <textarea id="contact-message" name="message" rows={7} required />
                </div>
                {contact.status === "error" && <p className="form-error" role="alert">The message did not send. Please check the required fields and try again.</p>}
                <button className="form-submit" type="submit" disabled={contact.status === "submitting"}>
                  {contact.status === "submitting" ? "Sending…" : "Send message"} <Send aria-hidden="true" />
                </button>
              </form>
            )}
          </div>
        </section>

        <section className="contact-section contact-section--tip" aria-labelledby="court-tip-heading">
          <div className="container contact-grid">
            <div className="contact-intro">
              <p className="section-number" aria-hidden="true">02</p>
              <p className="eyebrow">KNOW A COURT WE’RE MISSING?</p>
              <h2 id="court-tip-heading">Send a tip—not a listing.</h2>
              <p>Share what you know. Brian will verify the venue before any information is added to the directory.</p>
              <Link href="/#court-directory" className="text-link">Review the current directory <ArrowUpRight aria-hidden="true" /></Link>
            </div>

            {courtTip.status === "success" ? (
              <SuccessMessage onReset={courtTip.reset}>The court tip is private and will be checked before any site update.</SuccessMessage>
            ) : (
              <form className="editorial-form" onSubmit={courtTip.submit} action={COURT_TIPS_ENDPOINT} method="POST">
                <input type="hidden" name="submission_type" value="Missing court tip" />
                <input type="hidden" name="_subject" value="St. George Pickleball — Court tip" />
                <input type="text" name="_gotcha" className="honeypot" tabIndex={-1} autoComplete="off" aria-hidden="true" />
                <div className="form-field form-field--full">
                  <label htmlFor="court-name">Court name</label>
                  <input id="court-name" name="court_name" type="text" required />
                </div>
                <div className="form-field form-field--full">
                  <label htmlFor="rough-location">Rough location</label>
                  <input id="rough-location" name="rough_location" type="text" placeholder="Neighborhood, cross streets, or nearby landmark" required />
                </div>
                <div className="form-field form-field--full">
                  <label htmlFor="court-details">Anything else known <span>Optional</span></label>
                  <textarea id="court-details" name="anything_else_known" rows={7} placeholder="Court count, access, hours, surface, or where you heard about it" />
                </div>
                <p className="form-privacy-note">Submissions go to Brian for private verification. They are never published automatically.</p>
                {courtTip.status === "error" && <p className="form-error" role="alert">The tip did not send. Please check the required fields and try again.</p>}
                <button className="form-submit" type="submit" disabled={courtTip.status === "submitting"}>
                  {courtTip.status === "submitting" ? "Sending…" : "Send court tip"} <Send aria-hidden="true" />
                </button>
              </form>
            )}
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}
