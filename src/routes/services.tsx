import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { CTABand } from "@/components/site/CTA";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Executive Search — Reimagined for Industrial Leaders | Sync Talent" },
      {
        name: "description",
        content:
          "Executive Search is our commercial application. Decision intelligence is our methodology. How Sync Talent structures industrial searches through the Atlas Method™.",
      },
      { property: "og:title", content: "Executive Search — Sync Talent" },
      {
        property: "og:description",
        content:
          "Executive Search structured around methodology — Discovery Experience™, Search Blueprint™, Talent Lens™ and Hiring Confidence Index™.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const BOOKING_URL = "https://calendar.app.google/KoYen9KgR1fkMTPP7";

const searchAreas = [
  {
    name: "Leadership",
    searches: [
      "Country Management",
      "Operations Leadership",
      "Plant Management",
      "Heads of Function",
      "Service Leadership",
    ],
    d: "Leadership roles with meaningful responsibility for teams, operations, growth or organizational development.",
  },
  {
    name: "Commercial",
    searches: [
      "Sales Leadership",
      "Business Development",
      "Key Account Management",
      "Commercial Management",
      "Regional Sales Roles",
    ],
    d: "Commercial roles where industrial understanding, customer credibility and market development matter alongside sales performance.",
  },
  {
    name: "Technical",
    searches: [
      "Engineering",
      "Automation",
      "Technical Service",
      "Applications",
      "Specialized Industrial Roles",
    ],
    d: "Specialized positions where technical depth must be combined with the ability to operate effectively with customers, teams or international stakeholders.",
  },
];

const contextAreas = [
  {
    name: "Industrial Context",
    d: "We focus on environments where products, operations, customers and technical requirements shape what success in a role actually looks like.",
  },
  {
    name: "Mexico & North America",
    d: "Our search work is centered on Mexico and North America, supporting organizations building or strengthening teams across the region.",
  },
  {
    name: "Cross-Border Perspective",
    d: "We work comfortably across international stakeholders, local candidate markets and different organizational expectations.",
  },
];

const phases = [
  {
    n: "01",
    name: "Define",
    d: "Understand the business context, role and hiring decision before entering the market.",
  },
  {
    n: "02",
    name: "Search",
    d: "Map the relevant market, identify potential candidates and engage the people most relevant to the mandate.",
  },
  {
    n: "03",
    name: "Evaluate",
    d: "Assess candidate evidence against the requirements and context defined at the beginning of the search.",
  },
  {
    n: "04",
    name: "Decide",
    d: "Support the client with structured evidence, references and explicit visibility into strengths, risks and remaining uncertainty.",
  },
  {
    n: "05",
    name: "Follow Through",
    d: "Support the transition through offer, placement and post-hire follow-up.",
  },
];

function ServicesPage() {
  return (
    <SiteLayout>
      {/* 01 — HERO */}
      <section className="border-b border-hairline bg-white">
        <div className="container-x pt-20 pb-16 lg:pt-28 lg:pb-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-end">
            <div>
              <p className="eyebrow">Executive Search</p>
              <h1 className="mt-4 text-4xl leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
                Critical hires deserve more than candidate introductions.
              </h1>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-ink-muted lg:text-lg">
                Sync Talent helps international industrial companies identify, evaluate and hire
                leadership, commercial and specialized technical talent across Mexico and North
                America.
              </p>
            </div>
            <div className="space-y-6">
              <p className="max-w-xl text-base leading-relaxed text-ink-muted lg:text-lg">
                Our work combines hands-on search execution with structured market and candidate
                evidence, helping clients make better-informed hiring decisions from the beginning
                of the search through placement.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-[10px] bg-turquoise px-7 py-4 text-sm font-medium text-navy transition-colors hover:bg-navy hover:text-white"
                >
                  Schedule a Discovery Experience
                </a>
                <Link
                  to="/atlas-method"
                  className="inline-flex items-center rounded-[10px] border border-hairline px-7 py-4 text-sm font-medium text-navy transition-colors hover:border-navy"
                >
                  Explore the Atlas Method
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 — THE SEARCHES WE TAKE ON */}
      <section className="py-28 lg:py-36">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="eyebrow">The Searches We Take On</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-4xl lg:text-[44px]">
              Search where the hire matters.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink-muted lg:text-lg">
              We focus on positions where experience, judgement and context matter enough that
              finding candidates is only part of the challenge.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden border border-hairline bg-hairline md:grid-cols-3">
            {searchAreas.map((a) => (
              <div key={a.name} className="flex flex-col bg-white p-8 lg:p-10">
                <h3 className="font-display text-xl text-navy">{a.name}</h3>
                <p className="mt-4 text-[13px] font-medium tracking-wide text-ink-muted">
                  Typical searches may include:
                </p>
                <ul className="mt-2 space-y-1.5">
                  {a.searches.map((s) => (
                    <li key={s} className="text-sm leading-relaxed text-navy">
                      {s}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm leading-relaxed text-ink-muted">{a.d}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm text-ink-muted">
            These are representative search categories, not an exhaustive list.
          </p>
        </div>
      </section>

      {/* 03 — BUILT FOR INTERNATIONAL INDUSTRIAL COMPANIES */}
      <section className="bg-surface py-28 lg:py-36">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="eyebrow">Built for International Industrial Companies</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-4xl lg:text-[44px]">
              International companies. Local hiring decisions.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink-muted lg:text-lg">
              Sync Talent works with industrial organizations operating across borders, where
              hiring often requires understanding both local talent markets and international
              business expectations.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden border border-hairline bg-hairline md:grid-cols-3">
            {contextAreas.map((a) => (
              <div key={a.name} className="flex flex-col bg-white p-8 lg:p-10">
                <h3 className="font-display text-xl text-navy">{a.name}</h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-muted">{a.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-4 border-t border-hairline pt-8 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-ink-muted">
              Search conversations can be conducted in English, Spanish and German.
            </p>
            <Link
              to="/industries"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-navy link-underline"
            >
              Explore the industries we work with <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 04 — HOW AN ENGAGEMENT WORKS */}
      <section className="py-28 lg:py-36">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="eyebrow">How an Engagement Works</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-4xl lg:text-[44px]">
              A structured search, without unnecessary complexity.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink-muted lg:text-lg">
              Every engagement is different, but the commercial search process can be understood in
              five straightforward phases.
            </p>
          </div>

          <ol className="mt-14 grid gap-10 md:grid-cols-5 md:gap-6">
            {phases.map((p) => (
              <li key={p.n} className="border-t border-hairline pt-6">
                <p className="font-display text-sm text-turquoise">{p.n}</p>
                <h3 className="mt-2 font-display text-lg text-navy">{p.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{p.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 05 — POWERED BY THE ATLAS METHOD */}
      <section className="bg-navy py-28 text-white lg:py-36">
        <div className="container-x grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow text-turquoise">Powered by the Atlas Method</p>
            <h2 className="mt-4 text-3xl leading-tight text-white md:text-4xl lg:text-[44px]">
              Executive Search, powered by Atlas.
            </h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-white/70 lg:text-lg">
            <p>
              Behind each search is the Atlas Method—Sync Talent's structured approach to defining
              the hiring decision, gathering market and candidate evidence and making uncertainty
              visible before the final decision.
            </p>
            <p className="text-white">
              Atlas does not replace the search. It gives the search structure—from the initial
              Discovery Experience and Search Blueprint through candidate evaluation and Hiring
              Confidence.
            </p>
            <Link
              to="/atlas-method"
              className="inline-flex items-center gap-2 text-sm font-medium text-turquoise link-underline"
            >
              Explore the Atlas Method <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 06 — FINAL CTA */}
      <CTABand
        eyebrow="The Discovery Experience"
        title="Planning an important hire? Start with the decision."
        text="The Discovery Experience is a focused conversation about the role, business context and market before deciding how the search should begin."
        textNote="45–60 minutes · No fee · No commitment"
        buttonText="Schedule a Discovery Experience"
        externalHref={BOOKING_URL}
        secondaryText="Contact us"
        secondaryTo="/contact"
      />
    </SiteLayout>
  );
}
