import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CTABand } from "@/components/site/CTA";
import { publishedPublications } from "@/lib/publications";
import heroImg from "@/assets/hero-industrial.jpg";
import indManufacturing from "@/assets/ind-manufacturing.jpg";
import indMachinery from "@/assets/ind-machinery.jpg";
import indSoftware from "@/assets/ind-software.jpg";
import indLogistics from "@/assets/ind-logistics.jpg";
import logoOmp from "@/assets/OMP.png";
import logoHennecke from "@/assets/Hennecke-2.png";
import logoZimmer from "@/assets/ZIMMER.png";
import logoNita from "@/assets/NITA.png";
import logoSomic from "@/assets/SOMIC.png";
import logoTpg from "@/assets/TPG.png";
import logoTavil from "@/assets/TAVIL.png";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sync Talent — Better Hiring Decisions for Industrial Companies" },
      {
        name: "description",
        content:
          "Sync Talent helps international industrial companies make confident hiring decisions in North America through strategic advisory, market intelligence and Executive Search.",
      },
      { property: "og:title", content: "Sync Talent — Industrial Hiring Intelligence" },
      {
        property: "og:description",
        content:
          "Strategic Talent Advisory, Market Intelligence and Executive Search for industrial companies expanding across Mexico, the US and Canada.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const BOOKING_URL = "https://calendar.app.google/KoYen9KgR1fkMTPP7";

const trustStrip = [
  "Executive Search",
  "Market Intelligence",
  "The Atlas Method",
  "Mexico · USA · Canada",
];

const decisionGaps = [
  "What the business actually needs",
  "What success should look like",
  "Which evidence matters",
  "How candidates will be evaluated",
  "How the final decision will be made",
];

const searchAreas = [
  {
    t: "Leadership",
    items: ["Country Management", "Operations Leadership", "Plant Management", "Heads of Function"],
  },
  {
    t: "Commercial",
    items: [
      "Sales Leadership",
      "Business Development",
      "Key Account Management",
      "Commercial Management",
    ],
  },
  {
    t: "Technical",
    items: ["Engineering", "Automation", "Service", "Specialized Industrial Roles"],
  },
];

const atlasJourney: { n: string; t: string; to?: string }[] = [
  { n: "01", t: "Discovery Experience", to: "/discovery-experience" },
  { n: "02", t: "Search Blueprint", to: "/atlas-library/search-blueprint" },
  { n: "03", t: "Search & Market Intelligence" },
  { n: "04", t: "Talent Lens", to: "/atlas-library/talent-lens" },
  { n: "05", t: "Hiring Confidence", to: "/atlas-library/hiring-confidence-index" },
  { n: "06", t: "Hiring Decision & Placement" },
  { n: "07", t: "Institutional Learning" },
];

const industries = [
  { name: "Industrial Machinery & Automation", img: indMachinery },
  { name: "Manufacturing", img: indManufacturing },
  { name: "Industrial Technology & Software", img: indSoftware },
  { name: "Transportation & Logistics", img: indLogistics },
];

const clientLogos = [
  { name: "OMP", src: logoOmp, className: "max-h-9" },
  { name: "Hennecke", src: logoHennecke, className: "max-h-[72px]" },
  { name: "Zimmer Group", src: logoZimmer, className: "max-h-9" },
  { name: "NITA", src: logoNita, className: "max-h-5" },
  { name: "SOMIC", src: logoSomic, className: "max-h-9" },
  { name: "TPG", src: logoTpg, className: "max-h-11" },
  { name: "TAVIL", src: logoTavil, className: "max-h-6" },
];

function HomePage() {
  const featuredPublications = publishedPublications.slice(0, 3);

  return (
    <SiteLayout>
      {/* 01 — HERO */}
      <section className="relative isolate overflow-hidden bg-navy text-white">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImg}
            alt="Industrial leadership walking a production facility in Mexico"
            width={1920}
            height={1280}
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/50" />
        </div>

        <div className="container-x pt-28 pb-28 lg:pt-40 lg:pb-40">
          <div className="max-w-3xl">
            <p className="eyebrow text-turquoise">Industrial Hiring Intelligence</p>
            <h1 className="mt-6 text-4xl leading-[1.04] tracking-[-0.035em] text-white md:text-5xl lg:text-6xl xl:text-[68px]">
              Every important hire is a strategic business decision.
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
              Sync Talent helps international industrial companies make better hiring decisions
              through Executive Search built around structure, evidence and market intelligence.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-[10px] bg-turquoise px-6 py-3.5 text-sm font-medium text-navy transition-colors hover:bg-white"
              >
                Schedule a Discovery Experience <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-[10px] border border-white/30 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:border-white hover:bg-white/5"
              >
                Explore Executive Search
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 bg-navy/60 backdrop-blur">
          <div className="container-x flex flex-wrap items-center justify-center gap-x-10 gap-y-3 py-5 text-[12px] uppercase tracking-[0.16em] text-white/55">
            {trustStrip.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* 02 — THE HIRING DECISION */}
      <section className="py-28 lg:py-36">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div>
            <p className="eyebrow">The Hiring Decision</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-4xl lg:text-[44px]">
              Most hires are not lost in the search. They are lost in the decision.
            </h2>
          </div>
          <div className="space-y-7 text-base leading-relaxed text-ink-muted lg:text-lg">
            <p>
              Companies often begin searching before they have fully defined what the hire is meant
              to achieve — and the search inherits that ambiguity.
            </p>
            <ul className="grid gap-px border border-hairline bg-hairline sm:grid-cols-2">
              {decisionGaps.map((t) => (
                <li key={t} className="bg-white p-5 text-sm font-medium text-navy">
                  {t}
                </li>
              ))}
            </ul>
            <p className="text-navy">
              Sync Talent brings structure to that decision before and throughout the search.
            </p>
          </div>
        </div>
      </section>

      {/* 03 — EXECUTIVE SEARCH */}
      <section className="bg-surface py-28 lg:py-36">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="eyebrow">Executive Search</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-4xl lg:text-[44px]">
              Executive Search for industrial companies.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink-muted lg:text-lg">
              Sync Talent works with international industrial organizations hiring leadership,
              commercial and specialized technical talent across Mexico and North America.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden border border-hairline bg-hairline lg:grid-cols-3">
            {searchAreas.map((a) => (
              <div key={a.t} className="bg-white p-8">
                <p className="font-display text-xl text-navy">{a.t}</p>
                <ul className="mt-5 space-y-2.5 text-sm text-ink-muted">
                  {a.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link to="/services" className="text-sm font-medium text-navy link-underline">
              Explore Executive Search →
            </Link>
          </div>
        </div>
      </section>

      {/* 04 — THE ATLAS METHOD */}
      <section className="bg-navy py-28 text-white lg:py-36">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="eyebrow text-turquoise">The Atlas Method</p>
            <h2 className="mt-4 text-3xl leading-tight text-white md:text-4xl lg:text-[44px]">
              A structured path from hiring question to hiring decision.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/70 lg:text-lg">
              Atlas brings structure, evidence and market intelligence to the decisions behind
              Executive Search.
            </p>
          </div>

          {/* Desktop / tablet — continuous horizontal journey */}
          <ol className="mt-20 hidden flex-wrap md:flex">
            {atlasJourney.map((s) => {
              const body = (
                <>
                  <p className="font-display text-[13px] tracking-wide text-turquoise">{s.n}</p>
                  <span className="relative mt-5 block pt-5">
                    <span className="absolute -top-[4.5px] left-0 h-2 w-2 rounded-full border border-turquoise/60 bg-navy transition-colors group-hover:bg-turquoise" />
                    <span
                      className={`font-display text-xs leading-snug xl:text-[13px] ${
                        s.to
                          ? "text-white transition-colors group-hover:text-turquoise"
                          : "text-white/80"
                      }`}
                    >
                      {s.t}
                      {s.to && (
                        <ArrowRight className="ml-1.5 inline h-3 w-3 text-turquoise opacity-0 transition-opacity group-hover:opacity-100" />
                      )}
                    </span>
                  </span>
                </>
              );
              return (
                <li
                  key={s.n}
                  className="relative shrink-0 border-t border-white/15 pr-6 pb-6 last:pr-0 xl:pr-9"
                >
                  {s.to ? (
                    <Link to={s.to} className="group block">
                      {body}
                    </Link>
                  ) : (
                    <div className="group">{body}</div>
                  )}
                </li>
              );
            })}
          </ol>

          {/* Mobile — vertical timeline */}
          <ol className="mt-14 md:hidden">
            {atlasJourney.map((s) => {
              const body = (
                <>
                  <p className="font-display text-[13px] tracking-wide text-turquoise">{s.n}</p>
                  <p
                    className={`mt-1.5 font-display text-base leading-snug ${
                      s.to
                        ? "text-white transition-colors group-hover:text-turquoise"
                        : "text-white/80"
                    }`}
                  >
                    {s.t}
                    {s.to && (
                      <ArrowRight className="ml-1.5 inline h-3.5 w-3.5 text-turquoise opacity-0 transition-opacity group-hover:opacity-100" />
                    )}
                  </p>
                </>
              );
              return (
                <li
                  key={s.n}
                  className="relative border-l border-white/15 pb-7 pl-6 last:pb-0"
                >
                  <span className="absolute -left-[4.5px] top-1 h-2 w-2 rounded-full border border-turquoise/60 bg-navy transition-colors group-hover:bg-turquoise" />
                  {s.to ? (
                    <Link to={s.to} className="group block">
                      {body}
                    </Link>
                  ) : (
                    <div className="group">{body}</div>
                  )}
                </li>
              );
            })}
          </ol>

          <div className="mt-14">
            <Link
              to="/atlas-method"
              className="inline-flex items-center gap-2 text-sm font-medium text-turquoise link-underline"
            >
              Explore the Atlas Method →
            </Link>
          </div>
        </div>
      </section>

      {/* 05 — SELECTED CLIENTS */}
      <section className="py-28 lg:py-36">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Selected Clients</p>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-[44px]">
              Trusted by international industrial companies.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-muted lg:text-lg">
              Supporting international industrial organizations with consequential hiring decisions
              in Mexico and North America.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden border border-hairline bg-hairline sm:grid-cols-3 lg:grid-cols-7">
            {clientLogos.map((logo) => (
              <div key={logo.name} className="flex h-24 items-center justify-center bg-white px-6">
                <img
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  loading="lazy"
                  className={`w-auto max-w-full object-contain ${logo.className}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06 — INDUSTRIES */}
      <section className="bg-surface py-28 lg:py-36">
        <div className="container-x">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow">Industries</p>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-[44px]">
                Industrial markets where hiring decisions shape performance.
              </h2>
            </div>
            <Link to="/industries" className="text-sm font-medium text-navy link-underline">
              Explore Industries →
            </Link>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((i) => (
              <Link
                key={i.name}
                to="/industries"
                className="group relative overflow-hidden rounded-[10px] border border-hairline bg-white"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-surface">
                  <img
                    src={i.img}
                    alt={i.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="mt-1 font-display text-lg font-semibold leading-snug text-white">
                      {i.name}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 07 — KNOWLEDGE & INTELLIGENCE */}
      <section className="py-28 lg:py-36">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-end">
            <div>
              <p className="eyebrow">Knowledge & Intelligence</p>
              <h2 className="mt-4 text-3xl leading-tight md:text-4xl lg:text-[44px]">
                What we learn from the market should not disappear after the search.
              </h2>
            </div>
            <p className="text-base leading-relaxed text-ink-muted lg:text-lg">
              Sync Talent publishes research, market observations and practical hiring intelligence
              through the Knowledge Hub — written for leaders making hiring decisions in Mexico and
              North America.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredPublications.map((p) => (
              <Link
                key={p.slug}
                to="/knowledge-hub/$slug"
                params={{ slug: p.slug }}
                className="group flex flex-col gap-4 rounded-[10px] border border-hairline bg-white p-7 transition-colors hover:border-navy"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-turquoise">
                  {p.category}
                </p>
                <h3 className="text-base leading-snug text-navy">{p.title}</h3>
                {p.excerpt && (
                  <p className="text-sm leading-relaxed text-ink-muted">{p.excerpt}</p>
                )}
                <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-[12px] font-medium uppercase tracking-[0.14em] text-navy transition-colors group-hover:text-turquoise">
                  Read <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-12">
            <Link to="/knowledge-hub" className="text-sm font-medium text-navy link-underline">
              Explore the Knowledge Hub →
            </Link>
          </div>
        </div>
      </section>

      {/* 08 — FINAL CTA */}
      <CTABand
        eyebrow="The Discovery Experience"
        title="A better search starts before the search."
        text="The Discovery Experience is a focused conversation about the hiring decision, business context and market before a search begins."
        buttonText="Schedule a Discovery Experience"
        externalHref={BOOKING_URL}
        secondaryText="Contact us"
        secondaryTo="/contact"
      />
    </SiteLayout>
  );
}
