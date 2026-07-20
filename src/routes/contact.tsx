import { createFileRoute } from "@tanstack/react-router";
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
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you — we'll be in touch shortly.");
            }}
            className="rounded-sm border border-hairline bg-white p-8 lg:p-10"
          >
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
              className="mt-8 inline-flex items-center rounded-sm bg-navy px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-turquoise"
            >
              Discuss Your Search
            </button>
          </form>

          {/* Side */}
          <aside className="flex flex-col gap-6">
            <div className="rounded-sm border border-hairline bg-surface p-8">
              <p className="eyebrow">Schedule a call</p>
              <h3 className="mt-3 text-xl">Book a 30-min consultation</h3>
              <p className="mt-3 text-sm text-ink-muted">
                Calendly placeholder — connect your scheduling link to enable bookings.
              </p>
              <a
                href="https://calendly.com/e-baumann-sync-tech/30min"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-sm bg-navy px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-turquoise"
              >
                <Calendar className="h-4 w-4" /> Open Calendly
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
