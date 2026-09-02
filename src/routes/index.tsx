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
import logoOmp from "@/assets/OMP.png.asset.json";
import logoHennecke from "@/assets/Hennecke.png.asset.json";
import logoZimmer from "@/assets/ZIMMER.png.asset.json";
import logoNita from "@/assets/NITA.png.asset.json";
import logoSomic from "@/assets/SOMIC.png.asset.json";
import logoTpg from "@/assets/TPG.png.asset.json";
import logoTavil from "@/assets/TAVIL.png.asset.json";
import indFood from "@/assets/ind-food.jpg";
import indMaterial from "@/assets/ind-material.jpg";
import indLogistics from "@/assets/ind-logistics.jpg";
import {
  ArrowRight,
  MessageSquare,
  ClipboardList,
  Lightbulb,
  Target,
  FileText,
  Scan,
  GaugeCircle,
  BookMarked,
  BookOpen,
  BarChart3,
  TrendingUp,
  Layers,
  CheckCircle2,
  Users,
  Sparkles,
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

const discoveryJourney = [
  {
    icon: MessageSquare,
    t: "Discovery Call",
    d: "A structured conversation about the business behind your hiring decision.",
  },
  {
    icon: ClipboardList,
    t: "Discovery Canvas",
    d: "A one-page articulation of objectives, constraints and open questions.",
  },
  {
    icon: Lightbulb,
    t: "Business Understanding",
    d: "Shared clarity on what this hire must actually change in your organization.",
  },
  {
    icon: Target,
    t: "Decision Clarity",
    d: "The criteria by which the decision will be judged — before the search begins.",
  },
  {
    icon: FileText,
    t: "Search Blueprint",
    d: "A written strategy your leadership team can defend and act upon.",
  },
];

const blueprintCallouts = [
  "Business objectives",
  "Definition of success",
  "Target companies",
  "Candidate profile",
  "Compensation assumptions",
  "Search strategy",
  "Decision criteria",
];

const atlasStages = [
  {
    t: "Understand",
    q: "What business decision is this hire really solving?",
    d: "Clarify the objective behind the role before defining the profile.",
  },
  {
    t: "Structure",
    q: "How will we know we have chosen well?",
    d: "Convert assumptions into measurable decision criteria.",
  },
  {
    t: "Evaluate",
    q: "What is the evidence — not the impression?",
    d: "Apply the Talent Lens™ to replace opinion with structured evaluation.",
  },
  {
    t: "Decide",
    q: "How confident are you in the decision?",
    d: "Frame the choice with the Hiring Confidence Index™.",
  },
  {
    t: "Learn",
    q: "What did this search teach the next one?",
    d: "Feed every engagement back into institutional intelligence.",
  },
];

const traditional = ["Collect requirements", "Search", "Interviews", "Recommendation"];

const synctalent = [
  "Discovery Experience",
  "Search Blueprint",
  "Market Intelligence",
  "Talent Lens",
  "Hiring Confidence Index",
  "Decision",
];

const talentLensDimensions = [
  {
    t: "Technical Capability",
    d: "Depth of expertise required to deliver against your specific decision.",
  },
  {
    t: "Leadership & Judgement",
    d: "How the candidate reasons, decides and leads under industrial constraints.",
  },
  {
    t: "Cultural & Contextual Fit",
    d: "Alignment with your organization, market and cross-border reality.",
  },
  {
    t: "Motivation & Trajectory",
    d: "Why this role, why now, and where the candidate is heading next.",
  },
];

const confidenceSignals = [
  { level: "Low", label: "Decision unclear", tone: "bg-white/10" },
  { level: "Mid", label: "Criteria emerging", tone: "bg-turquoise/30" },
  { level: "High", label: "Defensible choice", tone: "bg-turquoise/70" },
  { level: "Full", label: "Confident decision", tone: "bg-turquoise" },
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

const hubFeatured = [
  {
    tag: "Featured Atlas Note",
    icon: BookMarked,
    title: "Why Executive Search deserves a better methodology.",
    meta: "6 min read",
  },
  {
    tag: "Latest Salary Intelligence",
    icon: BarChart3,
    title: "Compensation evidence for Sales Engineers in Mexico.",
    meta: "Updated Q4",
  },
  {
    tag: "Latest Hiring Guide",
    icon: BookOpen,
    title: "Hiring your first General Manager in Mexico.",
    meta: "Playbook",
  },
  {
    tag: "Latest Market Report",
    icon: FileText,
    title: "Industrial talent evidence: demand, availability, notice periods.",
    meta: "Quarterly",
  },
];

const trendingTopics = [
  "Nearshoring leadership",
  "Plant Manager compensation",
  "Automation talent scarcity",
  "Cross-border hiring",
  "Sales Engineer benchmarks",
  "OEM leadership transitions",
];

const clientLogos = [
  { name: "OMP", src: logoOmp.url, className: "max-h-9" },
  { name: "Hennecke", src: logoHennecke.url, className: "max-h-[80px] mt-2" },
  { name: "Zimmer Group", src: logoZimmer.url, className: "max-h-9" },
  { name: "NITA", src: logoNita.url, className: "max-h-5" },
  { name: "SOMIC", src: logoSomic.url, className: "max-h-9" },
  { name: "TPG", src: logoTpg.url, className: "max-h-11" },
  { name: "TAVIL", src: logoTavil.url, className: "max-h-6" },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* 1 — HERO */}
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
                to="/contact"
                className="inline-flex items-center gap-2 rounded-[10px] bg-turquoise px-6 py-3.5 text-sm font-medium text-navy transition-colors hover:bg-white"
              >
                Contact us <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-[10px] border border-white/30 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:border-white hover:bg-white/5"
              >
                Executive Search
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

      {/* 2 — THE PROBLEM */}
      <section className="py-32 lg:py-40">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div>
            <p className="eyebrow">The Problem</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-4xl lg:text-[44px]">
              Most hires are not lost in the search. They are lost in the decision.
            </h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-ink-muted lg:text-lg">
            <p>
              Traditional Executive Search begins with a request for candidates. Your most
              important hires deserve to begin with a request for clarity.
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
              When the decision behind the hire is fully understood, the search that follows is
              faster, sharper and defensible.
            </p>
          </div>
        </div>
      </section>

      {/* 3 — DISCOVERY EXPERIENCE */}
      <section className="bg-surface py-32 lg:py-40">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">The Discovery Experience</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-4xl lg:text-[44px]">
              What you will actually experience when you engage with Sync Talent.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink-muted lg:text-lg">
              Every engagement begins the same way — with a structured conversation designed to
              turn your hiring intent into decision clarity.
            </p>
          </div>

          <AtlasDivider className="mx-auto mt-14" />

          <ol className="mt-14 grid gap-6 md:grid-cols-3 lg:grid-cols-5">
            {discoveryJourney.map((s, i) => (
              <li
                key={s.t}
                className="relative flex flex-col gap-4 rounded-[10px] border border-hairline bg-white p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-navy font-display text-sm text-white">
                    {i + 1}
                  </span>
                  <s.icon className="h-5 w-5 text-navy/70" />
                </div>
                <p className="font-display text-lg text-navy">{s.t}</p>
                <p className="text-sm leading-relaxed text-ink-muted">{s.d}</p>
                {i < discoveryJourney.length - 1 && (
                  <span className="pointer-events-none absolute right-[-14px] top-1/2 hidden h-px w-7 -translate-y-1/2 bg-hairline lg:block" />
                )}
              </li>
            ))}
          </ol>

          <div className="mt-14 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-[10px] bg-navy px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-turquoise hover:text-navy"
            >
              Contact us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4 — SEARCH BLUEPRINT */}
      <section className="py-32 lg:py-40">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow">The Search Blueprint</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-4xl lg:text-[44px]">
              A document your leadership team can defend.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink-muted lg:text-lg">
              The Search Blueprint transforms the Discovery conversation into a written hiring
              strategy. It is the deliverable that turns your decision into an executable search —
              and the reference every stakeholder returns to.
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {blueprintCallouts.map((c) => (
                <li key={c} className="flex items-start gap-3 text-sm text-navy">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-turquoise" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Document preview */}
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[14px] bg-gradient-to-br from-turquoise/10 to-navy/5 blur-2xl" />
            <div className="rounded-[10px] border border-hairline bg-white p-8 shadow-[0_20px_60px_-30px_rgba(11,31,51,0.25)] lg:p-10">
              <div className="flex items-center justify-between border-b border-hairline pb-5">
                <div className="flex items-center gap-3">
                  <div className="grid h-9 w-9 place-items-center rounded-sm bg-navy text-white">
                    <FileText className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-muted">
                      Deliverable
                    </p>
                    <p className="font-display text-sm text-navy">Search Blueprint™</p>
                  </div>
                </div>
                <p className="text-[11px] uppercase tracking-[0.14em] text-ink-muted">v1.0</p>
              </div>

              <div className="mt-6 space-y-5">
                {[
                  { k: "Objective", v: "Establish commercial leadership in Mexico automation." },
                  { k: "Success in 12 months", v: "Pipeline structured, three OEM accounts opened." },
                  { k: "Target companies", v: "Tier-1 automation, packaging and robotics OEMs." },
                  { k: "Compensation frame", v: "Benchmarked against regional evidence." },
                ].map((r) => (
                  <div key={r.k} className="grid gap-1 border-b border-hairline pb-4 last:border-none">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-turquoise">
                      {r.k}
                    </p>
                    <p className="text-sm text-navy">{r.v}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] text-ink-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-turquoise" />
                <span>Prepared for leadership review</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5 — ATLAS METHOD */}
      <section className="bg-navy py-32 text-white lg:py-40">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow text-turquoise">The Atlas Method™</p>
            <h2 className="mt-4 text-3xl leading-tight text-white md:text-4xl lg:text-[44px]">
              Every stage exists to answer a business question.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/70 lg:text-lg">
              The Atlas Method is not a workflow. It is a reasoning process — five stages that turn
              a hiring intent into a defensible decision.
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
                <p className="text-sm italic leading-relaxed text-white/60">"{s.q}"</p>
                <p className="text-sm leading-relaxed text-white/75">{s.d}</p>
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

      {/* 6 — EXECUTIVE SEARCH REIMAGINED */}
      <section className="py-32 lg:py-40">
        <div className="container-x">
          <div className="max-w-3xl">
            <p className="eyebrow">Executive Search Reimagined</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-4xl lg:text-[44px]">
              Methodology creates better decisions.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-muted lg:text-lg">
              Executive Search is our commercial application. Decision intelligence is our purpose.
              The difference is visible in how the engagement is structured.
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

      {/* 7 — TALENT LENS */}
      <section className="bg-surface py-32 lg:py-40">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:items-start">
          <div>
            <p className="eyebrow">The Talent Lens</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-4xl lg:text-[44px]">
              Every candidate evaluated against the same decision.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink-muted lg:text-lg">
              The Talent Lens replaces impression-based screening with a structured evaluation
              framework — the same four dimensions, applied consistently, generating comparable
              evidence for your decision.
            </p>
            <div className="mt-8 flex items-center gap-3 text-[11px] uppercase tracking-[0.16em] text-navy/70">
              <Scan className="h-4 w-4 text-turquoise" />
              <span>Evidence · Not impressions</span>
            </div>
          </div>

          <div className="grid gap-px overflow-hidden border border-hairline bg-hairline sm:grid-cols-2">
            {talentLensDimensions.map((d, i) => (
              <div key={d.t} className="flex flex-col gap-3 bg-white p-8">
                <p className="font-display text-sm text-turquoise">
                  Dimension {String(i + 1).padStart(2, "0")}
                </p>
                <p className="font-display text-lg text-navy">{d.t}</p>
                <p className="text-sm leading-relaxed text-ink-muted">{d.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8 — HIRING CONFIDENCE INDEX */}
      <section className="py-32 lg:py-40">
        <div className="container-x grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow">The Hiring Confidence Index</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-4xl lg:text-[44px]">
              We do not simply recommend candidates. We measure confidence in the decision.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink-muted lg:text-lg">
              The Hiring Confidence Index is a shared measure — reviewed with your leadership team —
              of how well the decision is understood before it is made. It is what you present to
              the board when you say: <span className="text-navy">"we are ready."</span>
            </p>
          </div>

          {/* Confidence dial */}
          <div className="rounded-[10px] border border-hairline bg-white p-10">
            <div className="flex items-baseline justify-between">
              <p className="font-display text-sm text-ink-muted">Confidence Index</p>
              <p className="font-display text-3xl text-navy">
                87<span className="text-base text-ink-muted">/100</span>
              </p>
            </div>

            <div className="mt-6 flex h-3 overflow-hidden rounded-full bg-hairline">
              {confidenceSignals.map((s) => (
                <div key={s.level} className={`flex-1 ${s.tone}`} />
              ))}
            </div>

            <div className="mt-3 flex justify-between text-[11px] uppercase tracking-[0.14em] text-ink-muted">
              {confidenceSignals.map((s) => (
                <span key={s.level}>{s.level}</span>
              ))}
            </div>

            <div className="mt-8 space-y-3 border-t border-hairline pt-6">
              {[
                { k: "Decision clarity", v: "High" },
                { k: "Market evidence", v: "Complete" },
                { k: "Candidate evidence", v: "Structured" },
                { k: "Stakeholder alignment", v: "Confirmed" },
              ].map((r) => (
                <div key={r.k} className="flex items-center justify-between text-sm">
                  <span className="text-ink-muted">{r.k}</span>
                  <span className="font-display text-navy">{r.v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9 — EVERY INTERVIEW CREATES INTELLIGENCE */}
      <section className="bg-navy py-32 text-white lg:py-40">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow text-turquoise">Institutional Intelligence</p>
            <h2 className="mt-4 text-3xl leading-tight text-white md:text-4xl lg:text-[44px]">
              Every interview creates intelligence.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/70 lg:text-lg">
              Every conversation produces two outputs — and both feed back into an institutional
              library that becomes sharper with every engagement.
            </p>
          </div>

          <AtlasDivider className="mx-auto mt-14 text-white" />

          <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
            <div className="flex flex-col gap-4 rounded-[10px] border border-white/15 bg-white/[0.04] p-8">
              <Users className="h-5 w-5 text-turquoise" />
              <p className="font-display text-xl text-white">Candidate Intelligence</p>
              <p className="text-sm leading-relaxed text-white/70">
                Evidence about the individual — their trajectory, reasoning and fit for a specific
                hiring decision.
              </p>
            </div>

            <div className="hidden lg:flex flex-col items-center justify-center">
              <div className="flex flex-col items-center gap-2 text-white/40">
                <span className="h-16 w-px bg-current opacity-60" />
                <span className="h-2 w-2 rounded-full bg-turquoise" />
                <span className="h-16 w-px bg-current opacity-60" />
              </div>
            </div>

            <div className="flex flex-col gap-4 rounded-[10px] border border-white/15 bg-white/[0.04] p-8">
              <TrendingUp className="h-5 w-5 text-turquoise" />
              <p className="font-display text-xl text-white">Market Intelligence</p>
              <p className="text-sm leading-relaxed text-white/70">
                Evidence about industries, salaries, notice periods and leadership expectations
                across North America.
              </p>
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <div className="rounded-[10px] border border-turquoise/30 bg-turquoise/10 px-6 py-4 text-center">
              <div className="flex items-center justify-center gap-2 text-[11px] uppercase tracking-[0.16em] text-turquoise">
                <Layers className="h-4 w-4" />
                <span>Atlas Knowledge Library</span>
              </div>
              <p className="mt-2 text-sm text-white/80">
                Every engagement makes the next one sharper.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10 — KNOWLEDGE HUB */}
      <section className="py-32 lg:py-40">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-end">
            <div>
              <p className="eyebrow">Knowledge Hub</p>
              <h2 className="mt-4 text-3xl leading-tight md:text-4xl lg:text-[44px]">
                An active research institution for industrial hiring.
              </h2>
            </div>
            <p className="text-base leading-relaxed text-ink-muted lg:text-lg">
              Atlas Notes, Salary Intelligence, Hiring Guides and Market Reports — written for
              international leaders making hiring decisions in Mexico and North America.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {hubFeatured.map((a) => (
              <Link
                key={a.title}
                to="/knowledge-hub"
                className="group flex flex-col gap-5 rounded-[10px] border border-hairline bg-white p-7 transition-colors hover:border-navy"
              >
                <div className="flex items-center justify-between">
                  <a.icon className="h-5 w-5 text-navy" />
                  <span className="text-[11px] uppercase tracking-[0.14em] text-ink-muted">
                    {a.meta}
                  </span>
                </div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-turquoise">
                  {a.tag}
                </p>
                <h3 className="text-base leading-snug text-navy">{a.title}</h3>
                <span className="mt-auto inline-flex items-center gap-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-navy transition-colors group-hover:text-turquoise">
                  Read <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-4 rounded-[10px] border border-hairline bg-surface p-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <Sparkles className="h-4 w-4 text-turquoise" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-navy">
                Trending topics
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {trendingTopics.map((t) => (
                <Link
                  key={t}
                  to="/knowledge-hub"
                  className="rounded-full border border-hairline bg-white px-3 py-1.5 text-xs text-navy transition-colors hover:border-navy"
                >
                  {t}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 11 — INDUSTRIES */}
      <section className="bg-surface py-32 lg:py-40">
        <div className="container-x">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow">Industries</p>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-[44px]">
                We focus on industries where technical hiring decisions directly influence
                commercial performance.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-muted">
                Automation, Packaging, Industrial Software, OEM, Food Processing, Manufacturing and
                Industrial Equipment across Mexico, the US and Canada.
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

      {/* 12 — CLIENT PROOF */}
      <section className="py-32 lg:py-40">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Client Proof</p>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-[44px]">
              Trusted by international industrial companies.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-muted lg:text-lg">
              A selection of the industrial leaders who have engaged Sync Talent for hiring
              decisions across North America.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden border border-hairline bg-hairline sm:grid-cols-3 lg:grid-cols-7">
            {clientLogos.map((logo) => (
              <div
                key={logo.name}
                className="flex h-24 items-center justify-center bg-white px-6"
              >
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

      {/* 13 — FINAL CTA */}
      <CTABand
        eyebrow="The Discovery Experience"
        title="Every interaction should leave you better prepared to make the right hiring decision."
        text="Whether or not we work together afterwards, our objective is that every conversation leaves you with a clearer understanding of your hiring decision."
        buttonText="Contact us"
        secondaryText="Explore the Atlas Method"
        to="/contact"
        secondaryTo="/atlas-method"
      />
    </SiteLayout>
  );
}
