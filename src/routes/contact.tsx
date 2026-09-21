import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { Calendar, Linkedin, Mail } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Discuss Your Search | Sync Talent" },
      {
        name: "description",
        content:
          "Discuss your industrial hiring plans in Mexico with Sync Talent. Schedule a consultation or send a brief.",
      },
      { property: "og:title", content: "Contact Sync Talent" },
      { property: "og:description", content: "Schedule a consultation or send a brief." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
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
      country: String(data.get("country") ?? ""),
      role: String(data.get("role") ?? ""),
      industry: String(data.get("industry") ?? ""),
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
        title="Discuss your search."
        description="Tell us about the role, timeline and target market. We respond within one business day with a search plan and an honest market view."
      />

      <section className="py-20 lg:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          {/* Form */}
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
            <p className="eyebrow">Send a brief</p>
            <h2 className="mt-3 text-2xl">Tell us about the role</h2>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <Field label="Full name" name="name" />
              <Field label="Company" name="company" />
              <Field label="Work email" name="email" type="email" />
              <Field label="Country" name="country" />
              <Field label="Role" name="role" />
              <Field label="Industry" name="industry" />
            </div>
            <div className="mt-5">
              <label className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-muted">
                Brief
              </label>
              <textarea
                rows={5}
                name="message"
                className="mt-2 w-full rounded-sm border border-hairline bg-white px-4 py-3 text-sm text-navy focus:border-turquoise focus:outline-none"
                placeholder="Scope, location, timeline, language requirements…"
              />
            </div>
            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-8 inline-flex items-center rounded-sm bg-navy px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-turquoise"
            >
              Discuss Your Search
            </button>
            {status === "success" && (
              <p className="mt-4 text-sm text-navy">Thank you — we'll be in touch shortly.</p>
            )}
            {status === "error" && (
              <p className="mt-4 text-sm text-navy">
                Something went wrong while sending your message. Please try again or contact us
                directly.
              </p>
            )}
          </form>

          {/* Side */}
          <aside className="flex flex-col gap-6">
            <div className="rounded-sm border border-hairline bg-surface p-8">
              <p className="eyebrow">Schedule a call</p>
              <h3 className="mt-3 text-xl">Book a 30-min consultation</h3>
              <p className="mt-3 text-sm text-ink-muted">
                Choose a time that suits you. A structured conversation about your hiring decision.
              </p>
              <a
                href="https://calendar.app.google/KoYen9KgR1fkMTPP7"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-sm bg-navy px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-turquoise"
              >
                <Calendar className="h-4 w-4" /> Schedule a Discovery Experience
              </a>
            </div>

            <div className="rounded-sm border border-hairline bg-white p-8">
              <p className="eyebrow">Direct</p>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-turquoise" />
                  <a href="mailto:e.baumann@sync-tech.io" className="text-navy link-underline">
                    e.baumann@sync-tech.io
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
              <div className="mt-6 border-t border-hairline pt-5 text-sm text-ink-muted">
                <p>Mexico City, Mexico</p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-muted">
        {label}
      </label>
      <input
        name={name}
        type={type}
        className="mt-2 w-full rounded-sm border border-hairline bg-white px-4 py-3 text-sm text-navy focus:border-turquoise focus:outline-none"
      />
    </div>
  );
}
