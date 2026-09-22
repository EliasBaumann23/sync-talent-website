import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CTABand } from "@/components/site/CTA";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/atlas-library/search-blueprint")({
  head: () => ({
    meta: [
      {
        title: "Search Blueprint™ | Sync Talent",
      },
      {
        name: "description",
        content:
          "The Search Blueprint™ transforms a hiring request into a structured decision document that aligns every stakeholder before the Executive Search begins.",
      },
      {
        property: "og:title",
        content: "Search Blueprint™ | Sync Talent",
      },
      {
        property: "og:description",
        content:
          "Every successful Executive Search begins with a written hiring strategy.",
      },
      { property: "og:url", content: "/atlas-library/search-blueprint" },
    ],
    links: [{ rel: "canonical", href: "/atlas-library/search-blueprint" }],
  }),
  component: SearchBlueprintPage,
});

const defines = [
  {
    n: "01",
    title: "Business Context",
    body: "Why the hire exists, what is happening in the organization and why the role matters now.",
  },
  {
    n: "02",
    title: "Role Mandate",
    body: "What the person is expected to own, influence or change.",
  },
  {
    n: "03",
    title: "Success Outcomes",
    body: "What meaningful success should look like during the first 6–12 months.",
  },
  {
    n: "04",
    title: "Candidate Requirements",
    body: "The experience, capabilities and contextual characteristics that genuinely matter for the role.",
  },
  {
    n: "05",
    title: "Search Market",
    body: "Where relevant talent is likely to be found across companies, industries, geographies and adjacent backgrounds.",
  },
  {
    n: "06",
    title: "Search Constraints",
    body: "Practical realities such as compensation, location, language, mobility, availability and other factors that may shape the search.",
  },
];

const CALENDAR_URL = "https://calendar.app.google/KoYen9KgR1fkMTPP7";

function SearchBlueprintPage() {
  return (
    <SiteLayout>
      {/* 01 — HERO */}
      <section className="border-b border-hairline bg-white">
        <div className="container-x pt-20 pb-16 lg:pt-28 lg:pb-24">
          <p className="eyebrow">Search Blueprint™</p>
          <h1 className="mt-5 max-w-4xl text-4xl leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
            Define success before searching for it.
          </h1>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end">
            <p className="max-w-2xl text-base leading-relaxed text-ink-muted lg:text-lg">
              The Search Blueprint translates the business context behind a hire
              into an explicit definition of success, candidate requirements and
              search strategy.
            </p>
            <p className="max-w-xl text-base leading-relaxed text-ink-muted lg:text-lg">
              It creates a shared reference point for the search—so that
              candidate evaluation begins from agreed evidence and priorities
              rather than shifting expectations.
            </p>
          </div>
          <div className="mt-10">
            <Link
              to="/atlas-method"
              className="group inline-flex items-center gap-1.5 text-sm text-ink-muted transition-colors hover:text-navy"
            >
              Stage 02 of the Atlas Method
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 02 — WHAT THE SEARCH BLUEPRINT DEFINES */}
      <section className="py-24 lg:py-32">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="eyebrow">What the Search Blueprint defines</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-4xl">
              From hiring need to search strategy.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-muted lg:text-lg">
              The Blueprint structures the information that should be clear
              before the market is approached.
            </p>
          </div>
          <div className="mt-14 divide-y divide-hairline border-y border-hairline">
            {defines.map((item) => (
              <div
                key={item.n}
                className="grid gap-3 py-7 md:grid-cols-[64px_280px_1fr] md:items-baseline lg:py-8"
              >
                <p className="font-display text-sm text-turquoise">{item.n}</p>
                <h3 className="font-display text-lg leading-snug text-navy md:text-xl">
                  {item.title}
                </h3>
                <p className="max-w-2xl text-base leading-relaxed text-ink-muted">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 — INSIDE A SEARCH BLUEPRINT */}
      <section className="border-y border-hairline bg-surface py-24 lg:py-32">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="eyebrow">Inside a Search Blueprint</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-4xl">
              What this looks like in practice.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-muted lg:text-lg">
              A Search Blueprint turns an open hiring question into explicit
              criteria that can guide both the search and later candidate
              evaluation.
            </p>
          </div>

          <div className="mx-auto mt-14 max-w-5xl">
            <div className="overflow-hidden rounded-[10px] border border-hairline bg-white shadow-[0_30px_80px_-40px_rgba(16,36,58,0.35)]">
              {/* Document header */}
              <div className="border-b border-hairline px-6 py-5 lg:px-8">
                <div>
                  <p className="font-display text-xs uppercase tracking-[0.18em] text-turquoise">
                    Illustrative Example
                  </p>
                  <p className="mt-1 font-display text-base text-navy lg:text-lg">
                    Search Blueprint™ · Head of Service — Mexico
                  </p>
                </div>
              </div>

              {/* Document body */}
              <div className="grid gap-px bg-hairline md:grid-cols-2">
                {[
                  {
                    h: "Role",
                    wide: false,
                    lines: ["Head of Service — Mexico"],
                  },
                  {
                    h: "Company Context",
                    wide: false,
                    lines: [
                      "International industrial machinery company expanding its installed base and after-sales organization in Mexico.",
                    ],
                  },
                  {
                    h: "Hiring Question",
                    wide: true,
                    lines: [
                      "How do we build a service organization that can support continued growth while improving customer responsiveness and operational discipline?",
                    ],
                  },
                  {
                    h: "Role Mandate",
                    wide: true,
                    lines: [
                      "Lead and develop the Mexican service organization, strengthen field execution and create greater structure around customer support, service planning and team performance.",
                    ],
                  },
                ].map((sec) => (
                  <div
                    key={sec.h}
                    className={`bg-white p-6 lg:p-8 ${
                      sec.wide ? "md:col-span-2" : ""
                    }`}
                  >
                    <p className="font-display text-[11px] uppercase tracking-[0.18em] text-turquoise">
                      {sec.h}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-ink">
                      {sec.lines[0]}
                    </p>
                  </div>
                ))}

                <div className="bg-white p-6 md:col-span-2 lg:p-8">
                  <p className="font-display text-[11px] uppercase tracking-[0.18em] text-turquoise">
                    12-Month Success Outcomes
                  </p>
                  <ul className="mt-3 grid gap-2 text-sm leading-relaxed text-ink md:grid-cols-2">
                    {[
                      "Establish clear operating routines and accountability across the service organization.",
                      "Improve visibility and coordination of field-service activities.",
                      "Strengthen customer communication and escalation management.",
                      "Develop the service team and identify capability gaps required for future growth.",
                    ].map((l) => (
                      <li key={l} className="flex gap-2.5">
                        <span className="mt-2 h-px w-3 shrink-0 bg-turquoise" />
                        {l}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white p-6 md:col-span-2 lg:p-8">
                  <p className="font-display text-[11px] uppercase tracking-[0.18em] text-turquoise">
                    Critical Candidate Evidence
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    Look for demonstrated evidence of:
                  </p>
                  <ul className="mt-3 grid gap-2 text-sm leading-relaxed text-ink md:grid-cols-2">
                    {[
                      "leading technical or field-service teams",
                      "customer-facing responsibility in an industrial environment",
                      "coordinating service operations across multiple locations or customer sites",
                      "improving processes rather than only maintaining existing operations",
                      "working effectively within an international organization",
                    ].map((l) => (
                      <li key={l} className="flex gap-2.5">
                        <span className="mt-2 h-px w-3 shrink-0 bg-turquoise" />
                        {l}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white p-6 lg:p-8">
                  <p className="font-display text-[11px] uppercase tracking-[0.18em] text-turquoise">
                    Search Direction
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink">
                    Prioritize leaders from industrial machinery, automation,
                    equipment, manufacturing technology and adjacent
                    technical-service environments in Mexico.
                  </p>
                </div>

                <div className="bg-white p-6 lg:p-8">
                  <p className="font-display text-[11px] uppercase tracking-[0.18em] text-turquoise">
                    Key Constraints
                  </p>
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink">
                    {[
                      "Mexico-based leadership experience",
                      "Strong English for international collaboration",
                      "Willingness to travel to customer sites",
                      "Compensation alignment with the defined search range",
                    ].map((l) => (
                      <li key={l} className="flex gap-2.5">
                        <span className="mt-2 h-px w-3 shrink-0 bg-turquoise" />
                        {l}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Document footer */}
              <div className="border-t border-hairline px-6 py-5 text-xs text-ink-muted lg:px-8">
                Candidate and company details are fictionalized for
                demonstration purposes.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 — FROM BLUEPRINT TO MARKET */}
      <section className="py-24 lg:py-32">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="eyebrow">From blueprint to market</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-4xl">
              Once the search is defined, the market becomes evidence.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-muted lg:text-lg">
              The Search Blueprint becomes the reference point for market
              mapping, candidate identification and later evaluation. As the
              search progresses, market evidence can also challenge assumptions
              made at the beginning.
            </p>
          </div>

          <ol className="mt-14 flex flex-col items-start gap-3 lg:flex-row lg:items-center lg:gap-6">
            {[
              { label: "Discovery Experience", to: "/discovery-experience" },
              { label: "Search Blueprint", current: true },
              { label: "Search & Market Intelligence" },
              { label: "Talent Lens™", to: "/atlas-library/talent-lens" },
            ].map((step, i) => (
              <li key={step.label} className="flex flex-col items-start gap-3 lg:flex-row lg:items-center lg:gap-6">
                {step.current ? (
                  <p className="font-display text-xl text-navy md:text-2xl">
                    {step.label}
                    <span className="ml-3 align-middle font-display text-xs uppercase tracking-[0.18em] text-turquoise">
                      This page
                    </span>
                  </p>
                ) : step.to ? (
                  <Link
                    to={step.to}
                    className="font-display text-xl text-ink-muted transition-colors hover:text-navy md:text-2xl"
                  >
                    {step.label}
                  </Link>
                ) : (
                  <p className="font-display text-xl text-ink-muted md:text-2xl">
                    {step.label}
                  </p>
                )}
                {i < 3 && (
                  <>
                    <span className="text-lg text-turquoise lg:hidden">↓</span>
                    <span className="hidden text-lg text-turquoise lg:inline">
                      →
                    </span>
                  </>
                )}
              </li>
            ))}
          </ol>

          <p className="mt-10 max-w-2xl text-base leading-relaxed text-ink-muted lg:text-lg">
            The Search Blueprint defines what evidence matters; the Talent Lens™
            later structures the evidence gathered about an individual
            candidate.
          </p>

          <div className="mt-8 flex flex-col items-start gap-3">
            <Link
              to="/discovery-experience"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-navy transition-colors hover:text-turquoise"
            >
              Explore the Discovery Experience
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/atlas-library/talent-lens"
              className="group inline-flex items-center gap-1.5 text-sm text-ink-muted transition-colors hover:text-navy"
            >
              Explore the Talent Lens
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 05 — CTA */}
      <CTABand
        eyebrow="Search Blueprint™"
        title="A better search starts with a clearer definition of success."
        text="If you are preparing for an important hire, the Discovery Experience is where we begin defining the decision behind the search."
        buttonText="Schedule a Discovery Experience"
        secondaryText="Explore the Atlas Method"
        externalHref={CALENDAR_URL}
        secondaryTo="/atlas-method"
      />
    </SiteLayout>
  );
}
