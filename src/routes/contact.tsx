import { pageHead } from "@/lib/seo";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { Calendar, Linkedin, Mail } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead({
      path: "/contact",
      title: "Contact Sync Talent — Executive Search Mexico",
      description:
        "Contact Sync Talent about an important industrial hiring need or schedule a Discovery Experience to discuss the role, business context and market.",
    }),
  component: ContactPage,
});

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    // Field names must match the static detection form in public/__forms.html exactly.
    const body = new URLSearchParams({
      "form-name": "contact",
      "bot-field": String(data.get("bot-field") ?? ""),
      name: String(data.get("name") ?? ""),
      company: String(data.get("company") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      message: String(data.get("message") ?? ""),
    }).toString();
    setStatus("submitting");
    try {
      // POST to the static __forms.html path so Netlify's edge form handling
      // receives the submission instead of the server-rendered app route.
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
      if (!res.ok) throw new Error("Netlify form submission failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Contact"
        title="Tell us about the hiring decision."
        description="Whether you are planning an important search, exploring the talent market or simply want to understand whether Sync Talent could be the right partner, start with a conversation."
      />

      {/* 02 — Schedule a Discovery Experience (primary path) */}
      <section className="border-b border-hairline py-16 lg:py-20">
        <div className="container-x grid items-start gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <p className="eyebrow">Planning a search?</p>
            <h2 className="mt-3 text-3xl lg:text-4xl">Start with a Discovery Experience.</h2>
            <p className="mt-5 max-w-xl text-base text-ink-muted">
              A focused conversation about the role, business context and market before deciding
              how the search should begin.
            </p>
            <p className="mt-4 text-sm text-ink-muted">
              45–60 minutes · No fee · No commitment
            </p>
            <p className="mt-8 text-sm">
              Not ready to schedule? Send us a message below.
            </p>
          </div>
          <div className="flex flex-col items-start gap-6 lg:items-end lg:text-right">
            <a
              href="https://calendar.app.google/KoYen9KgR1fkMTPP7"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-sm bg-navy px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-turquoise"
            >
              <Calendar className="h-4 w-4" /> Schedule a Discovery Experience
            </a>
            <Link to="/discovery-experience" className="link-underline text-sm text-navy">
              Learn about the Discovery Experience →
            </Link>
          </div>
        </div>
      </section>

      {/* 03 — Send Us a Message */}
      <section className="py-16 lg:py-20">
        <div className="container-x grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="eyebrow">General contact</p>
            <h2 className="mt-3 text-3xl lg:text-4xl">Send us a message.</h2>
            <p className="mt-5 max-w-xl text-base text-ink-muted">
              Tell us briefly what you would like to discuss and we will get back to you directly.
            </p>
          </div>

          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="rounded-sm border border-hairline bg-white p-8 lg:p-10"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don't fill this out if you're human: <input name="bot-field" />
              </label>
            </p>

            <div className="grid gap-5">
              <Field label="Name" name="name" required />
              <Field label="Company" name="company" hint="Optional" />
              <Field label="Work email" name="email" type="email" required />
              <Field label="Phone" name="phone" type="tel" hint="Optional" />
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-muted">
                  What would you like to discuss? <span className="text-turquoise">*</span>
                </label>
                <textarea
                  rows={5}
                  name="message"
                  required
                  className="mt-2 w-full rounded-sm border border-hairline bg-white px-4 py-3 text-sm text-navy focus:border-turquoise focus:outline-none"
                  placeholder="Tell us about the role, hiring need or question you have."
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-8 inline-flex items-center rounded-sm bg-navy px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-turquoise disabled:opacity-60"
            >
              {status === "submitting" ? "Sending…" : "Send message"}
            </button>
            {status === "success" && (
              <p className="mt-4 text-sm text-navy">
                Thank you. Your message has been received. We will get back to you shortly.
              </p>
            )}
            {status === "error" && (
              <p className="mt-4 text-sm text-navy">
                Something went wrong while sending your message. Please try again or contact us
                directly.
              </p>
            )}
          </form>
        </div>
      </section>

      {/* 04 — Direct Contact */}
      <section className="border-t border-hairline py-12">
        <div className="container-x">
          <h2 className="text-xl">Prefer to reach us directly?</h2>
          <ul className="mt-6 flex flex-wrap items-center gap-x-10 gap-y-4 text-sm">
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-turquoise" />
              <a href="mailto:e.baumann@sync-talent.io" className="text-navy link-underline">
                e.baumann@sync-talent.io
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Linkedin className="h-4 w-4 text-turquoise" />
              <a
                href="https://www.linkedin.com/company/sync-talent-north-america"
                target="_blank"
                rel="noreferrer"
                className="text-navy link-underline"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  hint,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  hint?: string;
}) {
  return (
    <div>
      <label className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-muted">
        {label} {required && <span className="text-turquoise">*</span>}
        {hint && <span className="ml-2 normal-case tracking-normal text-ink-muted/70">({hint})</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-sm border border-hairline bg-white px-4 py-3 text-sm text-navy focus:border-turquoise focus:outline-none"
      />
    </div>
  );
}
