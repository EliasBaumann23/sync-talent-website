import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CTABand } from "@/components/site/CTA";
import { AtlasLine, AtlasDivider } from "@/components/site/AtlasLine";
import heroImg from "@/assets/hero-industrial.jpg";
import indPackaging from "@/assets/ind-packaging.jpg";
import indAutomation from "@/assets/ind-automation.jpg";
import indManufacturing from "@/assets/ind-manufacturing.jpg";
import indMachinery from "@/assets/ind-machinery.jpg";
import indSoftware from "@/assets/ind-software.jpg";
import indFood from "@/assets/ind-food.jpg";
import indMaterial from "@/assets/ind-material.jpg";
import indLogistics from "@/assets/ind-logistics.jpg";
import {
  ArrowRight,
  Compass,
  Layers,
  Scan,
  GaugeCircle,
  BookMarked,
  FileText,
  BookOpen,
  BarChart3,
} from "lucide-react";

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

const trustStrip = [
  "Strategic Talent Advisory",
  "Market Intelligence",
  "Executive Search",
  "Decision Frameworks",
  "Mexico · USA · Canada",
];

const hubCategories = [
  {
    icon: BookMarked,
    title: "Atlas Notes",
    text: "Short institutional perspectives on hiring decisions, methodology and industrial leadership.",
    to: "/knowledge-hub",
  },
  {
    icon: BarChart3,
    title: "Salary Intelligence",
    text: "Compensation evidence for technical, commercial and leadership roles across North America.",
    to: "/salary-guides",
  },
  {
    icon: BookOpen,
    title: "Hiring Guides",
    text: "Structured playbooks for international leaders hiring in Mexico and adjacent markets.",
    to: "/hiring-guides",
  },
  {
    icon: FileText,
    title: "Market Reports",
    text: "Quarterly evidence on demand, availability, notice periods and leadership expectations.",
    to: "/knowledge-hub",
  },
];

const atlasStages = [
  { t: "Understand", d: "Clarify the business objective behind the hiring decision." },
  { t: "Structure", d: "Translate objectives into a defensible Search Blueprint™." },
  { t: "Evaluate", d: "Apply the Talent Lens™ to gather evidence, not impressions." },
  { t: "Decide", d: "Frame the decision with the Hiring Confidence Index™." },
  { t: "Learn", d: "Feed every engagement back into institutional intelligence." },
];

const traditional = [
  "Collect requirements",
  "Search",
  "Interviews",
  "Recommendation",
];

const synctalent = [
  "Discovery Experience™",
  "Market Intelligence",
  "Search Blueprint™",
  "Talent Lens™",
  "Hiring Confidence Index™",
  "Decision",
];

const frameworks = [
  {
    icon: Compass,
    name: "Atlas Method™",
    line: "The reasoning process behind every Sync Talent engagement.",
    to: "/atlas-method",
  },
  {
    icon: Layers,
    name: "Discovery Experience™",
    line: "A structured conversation that defines the hiring decision.",
    to: "/discovery-experience",
  },
  {
    icon: FileText,
    name: "Search Blueprint™",
    line: "A written articulation of the market, the role and the decision criteria.",
    to: "/services",
  },
  {
    icon: Scan,
    name: "Talent Lens™",
    line: "Evidence-based evaluation replacing impression-based screening.",
    to: "/services",
  },
  {
    icon: GaugeCircle,
    name: "Hiring Confidence Index™",
    line: "A shared measure of how well the decision is understood, not just made.",
    to: "/services",
  },
];

const industries = [
  { name: "Industrial Automation", img: indAutomation },
  { name: "Packaging Machinery", img: indPackaging },
  { name: "Industrial Software", img: indSoftware },
  { name: "OEM & Manufacturing", img: indManufacturing },
  { name: "Food Processing", img: indFood },
  { name: "Industrial Equipment", img: indMachinery },
  { name: "Material Handling", img: indMaterial },
  { name: "Logistics Automation", img: indLogistics },
];

const articles = [
  {
    tag: "Atlas Note",
    read: "6 min read",
    title: "Why Executive Search deserves a better methodology.",
  },
  {
    tag: "Industrial Hiring Thesis",
    read: "12 min read",
    title: "The industrial hiring decision, reconsidered.",
  },
  {
    tag: "Salary Intelligence",
    read: "7 min read",
    title: "Compensation evidence for Sales Engineers in Mexico.",
  },
  {
    tag: "Market Report",
    read: "9 min read",
    title: "Q4 industrial talent evidence: demand, availability, notice periods.",
  },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* SECTION 1 — HERO */}
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
              Sync Talent helps international industrial companies make confident hiring decisions
              in North America through strategic advisory, market intelligence and Executive Search.
            </p>

            <AtlasLine nodes={5} active={2} className="mt-10 max-w-sm text-white/60" />

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                to="/discovery-experience"
                className="inline-flex items-center gap-2 rounded-[10px] bg-turquoise px-6 py-3.5 text-sm font-medium text-navy transition-colors hover:bg-white"
              >
                Experience the Discovery Experience™ <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/atlas-method"
                className="inline-flex items-center gap-2 rounded-[10px] border border-white/30 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:border-white hover:bg-white/5"
              >
                Explore the Atlas Method™
              </Link>
            </div>
          </div>
        </div>

        {/* Trust strip */}
        <div className="border-t border-white/10 bg-navy/60 backdrop-blur">
          <div className="container-x flex flex-wrap items-center justify-center gap-x-10 gap-y-3 py-5 text-[12px] uppercase tracking-[0.16em] text-white/55">
            {trustStrip.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 — THE PROBLEM */}
      <section className="py-32 lg:py-40">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div>
            <p className="eyebrow">The Problem</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-4xl lg:text-[44px]">
              Traditional Executive Search starts with the search. We believe it should start with
              understanding.
            </h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-ink-muted lg:text-lg">
            <p>
              Most hiring engagements do not fail because of sourcing. They fail because the hiring
              decision itself was never fully defined.
            </p>
            <ul className="grid gap-px border border-hairline bg-hairline sm:grid-cols-2">
              {[
                "Unclear business objectives",
                "Unrealistic expectations",
                "Misunderstood market realities",
                "Success criteria never defined",
              ].map((t) => (
                <li key={t} className="bg-white p-5 text-sm font-medium text-navy">
                  {t}
                </li>
              ))}
            </ul>
            <p className="text-navy">
              Recruitment rarely fails because of sourcing. It fails because the hiring decision was
              never fully understood.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — THE ATLAS METHOD */}
      <section className="bg-navy py-32 text-white lg:py-40">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow text-turquoise">The Atlas Method™</p>
            <h2 className="mt-4 text-3xl leading-tight text-white md:text-4xl lg:text-[44px]">
              A structured methodology for better hiring decisions.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/70 lg:text-lg">
              Every Executive Search engagement follows the same reasoning process — designed to
              turn a request for a candidate into a defensible business decision.
            </p>
          </div>

          <AtlasDivider className="mx-auto mt-14 text-white" />

          <ol className="mt-12 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
            {atlasStages.map((s, i) => (
              <li key={s.t} className="flex flex-col gap-4 bg-navy p-7">
                <p className="font-display text-sm text-turquoise">
                  Stage {String(i + 1).padStart(2, "0")}
                </p>
                <p className="font-display text-xl text-white">{s.t}</p>
                <p className="text-sm leading-relaxed text-white/65">{s.d}</p>
              </li>
            ))}
          </ol>

          <div className="mt-12 text-center">
            <Link
              to="/atlas-method"
              className="inline-flex items-center gap-2 text-sm font-medium text-turquoise link-underline"
            >
              Explore the Atlas Method™ <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4 — EXECUTIVE SEARCH REIMAGINED */}
      <section className="py-32 lg:py-40">
        <div className="container-x">
          <div className="max-w-3xl">
            <p className="eyebrow">Executive Search Reimagined</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-4xl lg:text-[44px]">
              Methodology creates better decisions.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-muted lg:text-lg">
              Executive Search is our commercial application. Decision intelligence is our
              purpose. The difference is visible in how an engagement is structured.
            </p>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden border border-hairline bg-hairline lg:grid-cols-2">
            <div className="bg-white p-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-muted">
                Traditional Executive Search
              </p>
              <ol className="mt-8 space-y-5">
                {traditional.map((t, i) => (
                  <li key={t} className="flex items-center gap-4">
                    <span className="grid h-8 w-8 place-items-center rounded-full border border-hairline font-display text-sm text-ink-muted">
                      {i + 1}
                    </span>
                    <span className="text-base text-ink-muted">{t}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="bg-white p-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-turquoise">
                Sync Talent
              </p>
              <ol className="mt-8 space-y-5">
                {synctalent.map((t, i) => (
                  <li key={t} className="flex items-center gap-4">
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-navy font-display text-sm text-white">
                      {i + 1}
                    </span>
                    <span className="text-base font-medium text-navy">{t}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — MARKET INTELLIGENCE */}
      <section className="bg-surface py-32 lg:py-40">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div>
            <p className="eyebrow">Market Intelligence</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-4xl lg:text-[44px]">
              Every interview creates intelligence.
            </h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-ink-muted lg:text-lg">
            <p>Every conversation produces two outputs.</p>
            <div className="grid gap-px border border-hairline bg-hairline sm:grid-cols-2">
              <div className="bg-white p-7">
                <p className="font-display text-sm text-ink-muted">01</p>
                <p className="mt-4 font-display text-lg text-navy">Candidate understanding</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  Evidence about the individual, their trajectory and their fit for a specific
                  decision.
                </p>
              </div>
              <div className="bg-white p-7">
                <p className="font-display text-sm text-ink-muted">02</p>
                <p className="mt-4 font-display text-lg text-navy">Market intelligence</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  Evidence about industries, salaries, leadership expectations and market realities.
                </p>
              </div>
            </div>
            <p className="text-navy">
              Every conversation improves our institutional understanding. That knowledge benefits
              every future client.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6 — FRAMEWORKS */}
      <section className="py-32 lg:py-40">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="eyebrow">Our Decision Frameworks</p>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-[44px]">
              Frameworks that make hiring decisions defensible.
            </h2>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-5">
            {frameworks.map((f) => (
              <Link
                key={f.name}
                to={f.to}
                className="group flex flex-col gap-5 bg-white p-7 transition-colors hover:bg-surface"
              >
                <f.icon className="h-6 w-6 text-navy" />
                <div>
                  <h3 className="font-display text-base text-navy">{f.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">{f.line}</p>
                </div>
                <span className="mt-auto inline-flex items-center gap-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-navy transition-colors group-hover:text-turquoise">
                  Explore <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — INDUSTRIAL EXPERTISE */}
      <section className="bg-surface py-32 lg:py-40">
        <div className="container-x">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow">Industrial Expertise</p>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-[44px]">
                Helping international companies hire in unfamiliar industrial markets.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-muted">
                Focused on Automation, Packaging, Industrial Software, OEM, Food Processing,
                Manufacturing and Industrial Equipment across Mexico, the US and Canada.
              </p>
            </div>
            <Link to="/industries" className="text-sm font-medium text-navy link-underline">
              All industries
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
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/70">
                      Industry
                    </p>
                    <p className="mt-1 font-display text-lg font-semibold text-white">{i.name}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 — KNOWLEDGE HUB */}
      <section className="py-32 lg:py-40">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-end">
            <div>
              <p className="eyebrow">Industrial Hiring Intelligence</p>
              <h2 className="mt-4 text-3xl leading-tight md:text-4xl lg:text-[44px]">
                A knowledge institution for industrial hiring in North America.
              </h2>
            </div>
            <p className="text-base leading-relaxed text-ink-muted lg:text-lg">
              Atlas Notes, Hiring Guides, Salary Intelligence, Market Reports, the Industrial
              Hiring Thesis and decision intelligence articles — written for international
              industrial leaders.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
            {hubCategories.map((c) => (
              <Link
                key={c.title}
                to={c.to}
                className="group flex flex-col gap-5 bg-white p-8 transition-colors hover:bg-surface"
              >
                <c.icon className="h-6 w-6 text-navy" />
                <div>
                  <h3 className="text-lg">{c.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">{c.text}</p>
                </div>
                <span className="mt-auto inline-flex items-center gap-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-navy transition-colors group-hover:text-turquoise">
                  Read <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {articles.map((a) => (
              <Link
                key={a.title}
                to="/knowledge-hub"
                className="group flex flex-col gap-5 rounded-[10px] border border-hairline bg-white p-7 transition-colors hover:border-navy"
              >
                <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.16em]">
                  <span className="text-navy">{a.tag}</span>
                  <span className="text-ink-muted">{a.read}</span>
                </div>
                <h3 className="text-base leading-snug">{a.title}</h3>
                <span className="mt-auto inline-flex items-center gap-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-navy transition-colors group-hover:text-turquoise">
                  Read <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9 — DISCOVERY EXPERIENCE */}
      <CTABand
        eyebrow="Discovery Experience™"
        title="Every interaction should leave you better prepared to make the right decision."
        text="Whether or not we work together afterwards, our objective is that every conversation leaves you with a clearer understanding of your hiring decision."
        buttonText="Experience the Discovery Experience™"
        secondaryText="Explore the Atlas Method™"
        to="/discovery-experience"
        secondaryTo="/atlas-method"
      />

    </SiteLayout>
  );
}
