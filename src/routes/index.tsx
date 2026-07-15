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
  Clock,
  Users,
  Gauge,
  TrendingUp,
  Globe2,
  FileText,
  BookOpen,
  BarChart3,
  Lightbulb,
} from "lucide-react";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sync Talent — Industrial Executive Search in Mexico" },
      {
        name: "description",
        content:
          "Sync Talent helps European, US and Canadian industrial companies hire technical, commercial and leadership professionals across Mexico and North America.",
      },
      { property: "og:title", content: "Sync Talent — Industrial Executive Search in Mexico" },
      {
        property: "og:description",
        content:
          "Boutique recruiting and knowledge hub for industrial hiring in Mexico. Salaries, hiring guides and executive search for international companies.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const trustStrip = [
  "Industrial Recruitment",
  "Executive Search",
  "Market Intelligence",
  "Mexico Hiring Expertise",
  "Technical & Commercial Roles",
];

const hubCategories = [
  {
    icon: BarChart3,
    title: "Salary Guides",
    text: "Benchmark compensation for technical, commercial and leadership roles in Mexico.",
    to: "/salary-guides",
  },
  {
    icon: BookOpen,
    title: "Hiring Guides",
    text: "Practical playbooks on interviewing, evaluation and onboarding industrial talent.",
    to: "/hiring-guides",
  },
  {
    icon: FileText,
    title: "Market Reports",
    text: "Quarterly observations on candidate availability, demand and notice periods.",
    to: "/knowledge-hub",
  },
  {
    icon: Lightbulb,
    title: "Industry Insights",
    text: "Sector views on packaging, automation, machinery and industrial software.",
    to: "/knowledge-hub",
  },
];

const snapshot = [
  { icon: Clock, label: "Average hiring timeline", value: "6–8 weeks" },
  { icon: Users, label: "Typical notice period", value: "30–60 days" },
  { icon: TrendingUp, label: "Highest demand", value: "Automation & Field Service" },
  { icon: Gauge, label: "Hardest roles to fill", value: "Service Managers, Sales Engineers" },
  { icon: Globe2, label: "Candidate market", value: "Competitive for bilingual technical talent" },
];

const services = [
  "Executive Search",
  "Direct Hire Recruitment",
  "Technical Recruitment",
  "Commercial Recruitment",
  "Market Mapping",
  "Candidate Assessment",
  "Reference Checks",
  "Background Checks",
];

const industries = [
  { name: "Packaging Machinery", img: indPackaging },
  { name: "Industrial Automation", img: indAutomation },
  { name: "Manufacturing", img: indManufacturing },
  { name: "Industrial Machinery", img: indMachinery },
  { name: "Industrial Software", img: indSoftware },
  { name: "Food Processing Equipment", img: indFood },
  { name: "Material Handling", img: indMaterial },
  { name: "Logistics Automation", img: indLogistics },
];

const roles = [
  "Country Manager",
  "Regional Sales Manager",
  "Sales Engineer",
  "Service Manager",
  "Field Service Engineer",
  "Automation Engineer",
  "Application Engineer",
  "Mechanical Engineer",
  "Electrical Engineer",
  "Controls Engineer",
  "Project Manager",
  "Operations Manager",
  "Plant Manager",
];

const process = [
  "Discovery",
  "Market Mapping",
  "Candidate Search",
  "Structured Interviews",
  "Shortlist",
  "Client Interviews",
  "Offer Support",
  "Onboarding",
];

const cases = [
  {
    tag: "Packaging",
    title: "European Packaging OEM",
    challenge: "Needed a commercial leader with technical understanding and Mexico market experience.",
    solution: "Mapped direct and adjacent industrial competitors.",
    result: "Shortlist delivered with qualified bilingual candidates.",
  },
  {
    tag: "Industrial Software",
    title: "Canadian Industrial Software Company",
    challenge: "Needed consultants with manufacturing, ERP and international communication skills.",
    solution: "Identified profiles combining technical background and client-facing experience.",
    result: "Built a qualified candidate pipeline for North America projects.",
  },
  {
    tag: "Machinery",
    title: "German Machinery Manufacturer",
    challenge: "Needed senior service leadership in Mexico.",
    solution: "Focused on candidates with field service, team leadership and customer-facing experience.",
    result: "Delivered profiles with strong technical and leadership alignment.",
  },
];

const articles = [
  {
    tag: "Salary",
    read: "6 min read",
    title: "Sales Engineer Salary in Mexico: What International Companies Should Know",
  },
  {
    tag: "Hiring",
    read: "5 min read",
    title: "How Long Does it Take to Hire Engineers in Mexico?",
  },
  {
    tag: "Field Service",
    read: "7 min read",
    title: "Hiring Field Service Engineers in Mexico: Common Mistakes",
  },
  {
    tag: "Executive Search",
    read: "8 min read",
    title: "Executive Search in Mexico for German Industrial Companies",
  },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
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
            <p className="eyebrow text-turquoise">The Atlas Method™ · Industrial Hiring Intelligence</p>
            <h1 className="mt-6 text-4xl leading-[1.04] tracking-[-0.035em] text-white md:text-5xl lg:text-6xl xl:text-[68px]">
              We help industrial companies make better hiring decisions in Mexico.
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
              Sync Talent is a boutique executive search firm and knowledge institution serving
              European, US and Canadian industrial companies building teams in Mexico and North
              America.
            </p>

            <AtlasLine nodes={5} active={2} className="mt-10 max-w-sm text-white/60" />

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-[10px] bg-turquoise px-6 py-3.5 text-sm font-medium text-navy transition-colors hover:bg-white"
              >
                Experience the Discovery Experience™ <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-[10px] border border-white/30 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:border-white hover:bg-white/5"
              >
                Explore the Atlas Method™
              </Link>
            </div>

            <div className="mt-14 grid max-w-2xl gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
              <Link to="/knowledge-hub" className="group">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/50">
                  Featured
                </p>
                <p className="mt-2 text-sm text-white/90 transition-colors group-hover:text-turquoise">
                  The Industrial Hiring Thesis →
                </p>
              </Link>
              <Link to="/hiring-guides" className="group">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/50">
                  Guide
                </p>
                <p className="mt-2 text-sm text-white/90 transition-colors group-hover:text-turquoise">
                  Hiring in Mexico →
                </p>
              </Link>
              <Link to="/salary-guides" className="group">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/50">
                  Intelligence
                </p>
                <p className="mt-2 text-sm text-white/90 transition-colors group-hover:text-turquoise">
                  Salary Intelligence →
                </p>
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


      {/* KNOWLEDGE HUB PREVIEW */}
      <section className="py-24 lg:py-32">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-end">
            <div>
              <p className="eyebrow">Knowledge Hub</p>
              <h2 className="mt-4 text-3xl leading-tight md:text-4xl lg:text-[44px]">
                The Knowledge Hub for Industrial Hiring in Mexico
              </h2>
            </div>
            <p className="text-base leading-relaxed text-ink-muted lg:text-lg">
              We publish practical insights, salary benchmarks and hiring guides for international
              companies building teams in Mexico. Educational first, transactional never.
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
                  Explore <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SNAPSHOT */}
      <section className="bg-surface py-24 lg:py-32">
        <div className="container-x">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Market Intelligence</p>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-[44px]">
                Current Industrial Hiring Snapshot
              </h2>
            </div>
            <p className="max-w-md text-sm text-ink-muted">
              Updated quarterly based on active recruiting projects and market conversations.
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-5">
            {snapshot.map((s) => (
              <div key={s.label} className="flex flex-col gap-6 bg-white p-7">
                <s.icon className="h-5 w-5 text-navy" />
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-muted">
                    {s.label}
                  </p>
                  <p className="mt-3 font-display text-xl font-semibold leading-tight text-navy">
                    {s.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY DIFFERENT */}
      <section className="py-24 lg:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <p className="eyebrow">Our Perspective</p>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-[44px]">
              Why Industrial Hiring is Different
            </h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-ink-muted lg:text-lg">
            <p>
              Hiring industrial professionals requires technical understanding, commercial judgment,
              international communication and local market knowledge.
            </p>
            <p>
              The right Sales Engineer, Service Manager or Plant Manager rarely answers a generic
              recruiter. They are evaluated by peers who speak their language — technical,
              commercial and cultural — and who understand how German, Swiss, Dutch or North
              American organizations actually operate in Mexico.
            </p>
            <div className="grid gap-px border border-hairline bg-hairline sm:grid-cols-3">
              {["Technical fluency", "Commercial judgment", "International mindset"].map((t) => (
                <div key={t} className="bg-white p-5 text-sm font-medium text-navy">
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-navy py-24 text-white lg:py-32">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-end">
            <div>
              <p className="eyebrow text-turquoise">Services</p>
              <h2 className="mt-4 text-3xl text-white md:text-4xl lg:text-[44px]">
                Strategic hiring support, not transactional recruiting.
              </h2>
            </div>
            <p className="text-base leading-relaxed text-white/70 lg:text-lg">
              From single executive searches to full hiring partnerships, we work as an extension of
              your leadership team — focused, discreet and accountable to results.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <div key={s} className="group bg-navy p-7 transition-colors hover:bg-white/[0.04]">
                <p className="font-display text-sm text-turquoise">
                  0{i + 1}
                </p>
                <p className="mt-6 font-display text-lg text-white">{s}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-turquoise link-underline"
            >
              View all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-24 lg:py-32">
        <div className="container-x">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Industries</p>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-[44px]">
                Built for technical B2B & industrial sectors.
              </h2>
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
                className="group relative overflow-hidden rounded-sm border border-hairline bg-white"
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
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-turquoise">
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

      {/* TYPICAL ROLES */}
      <section className="bg-surface py-24 lg:py-32">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="eyebrow">Typical Roles</p>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-[44px]">
              Profiles we search for across Mexico and North America.
            </h2>
          </div>

          <div className="mt-12 flex flex-wrap gap-2">
            {roles.map((r) => (
              <span
                key={r}
                className="inline-flex items-center rounded-sm border border-hairline bg-white px-4 py-2.5 text-sm text-navy transition-colors hover:border-turquoise hover:text-turquoise"
              >
                {r}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-32 lg:py-40">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="eyebrow">The Atlas Method™</p>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-[44px]">
              A structured eight-step decision framework.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-muted">
              Every engagement follows the same discipline — designed to produce hiring decisions
              you can defend to your board, not just candidates you can interview.
            </p>
          </div>

          <AtlasDivider className="mx-auto mt-16 text-navy" />

          <ol className="mt-10 grid gap-px overflow-hidden border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <li key={p} className="bg-white p-7">
                <p className="font-display text-sm text-ink-muted">Step {String(i + 1).padStart(2, "0")}</p>
                <p className="mt-5 font-display text-lg text-navy">{p}</p>
                <div className="mt-6 h-px w-10 bg-turquoise" />
              </li>
            ))}
          </ol>
        </div>
      </section>


      {/* CASE STUDIES */}
      <section className="bg-surface py-24 lg:py-32">
        <div className="container-x">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Case Studies</p>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-[44px]">
                Selected industrial searches.
              </h2>
            </div>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {cases.map((c) => (
              <article
                key={c.title}
                className="flex flex-col gap-6 rounded-sm border border-hairline bg-white p-8"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-turquoise">
                  {c.tag}
                </p>
                <h3 className="text-xl leading-snug">{c.title}</h3>
                <dl className="space-y-4 text-sm leading-relaxed text-ink-muted">
                  <div>
                    <dt className="font-semibold text-navy">Challenge</dt>
                    <dd className="mt-1">{c.challenge}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-navy">Solution</dt>
                    <dd className="mt-1">{c.solution}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-navy">Result</dt>
                    <dd className="mt-1">{c.result}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* LATEST KNOWLEDGE */}
      <section className="py-24 lg:py-32">
        <div className="container-x">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Latest from the Knowledge Hub</p>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-[44px]">
                Briefings for international hiring leaders.
              </h2>
            </div>
            <Link to="/knowledge-hub" className="text-sm font-medium text-navy link-underline">
              All articles
            </Link>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {articles.map((a) => (
              <Link
                key={a.title}
                to="/knowledge-hub"
                className="group flex flex-col gap-5 rounded-sm border border-hairline bg-white p-7 transition-colors hover:border-turquoise"
              >
                <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.16em]">
                  <span className="text-turquoise">{a.tag}</span>
                  <span className="text-ink-muted">{a.read}</span>
                </div>
                <h3 className="text-base leading-snug">{a.title}</h3>
                <span className="mt-auto inline-flex items-center gap-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-navy transition-colors group-hover:text-turquoise">
                  Read article <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* LEAD MAGNET */}
      <section className="container-x pb-24 lg:pb-32">
        <div className="relative overflow-hidden rounded-sm border border-hairline bg-white">
          <div className="grid gap-10 p-10 lg:grid-cols-[1.3fr_1fr] lg:items-center lg:p-16">
            <div>
              <p className="eyebrow">Free Download</p>
              <h2 className="mt-4 text-3xl md:text-4xl">
                Download the Mexico Industrial Hiring Guide
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-muted">
                Get practical benchmarks on salaries, hiring timelines, candidate availability,
                benefits and interview processes for industrial roles in Mexico.
              </p>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-3"
            >
              <input
                type="email"
                required
                placeholder="Work email"
                className="rounded-sm border border-hairline bg-white px-4 py-3.5 text-sm text-navy placeholder:text-ink-muted focus:border-turquoise focus:outline-none"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-sm bg-navy px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-turquoise"
              >
                Download the Guide
              </button>
              <p className="text-xs text-ink-muted">
                Example content — replace with your gated asset.
              </p>
            </form>
          </div>
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-surface" />
        </div>
      </section>

      <CTABand />
    </SiteLayout>
  );
}
