import { pageHead } from "@/lib/seo";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CTABand } from "@/components/site/CTA";
import indAutomation from "@/assets/ind-automation.jpg";
import indManufacturing from "@/assets/ind-manufacturing.jpg";
import indSoftware from "@/assets/ind-software.jpg";
import indLogistics from "@/assets/ind-logistics.jpg";

export const Route = createFileRoute("/industries")({
  head: () =>
    pageHead({
      path: "/industries",
      title: "Industries — Executive Search for Industrial Companies | Sync Talent",
      description:
        "Executive Search across industrial machinery, automation, manufacturing, industrial technology, software, transportation and logistics.",
    }),
  component: IndustriesPage,
});

const BOOKING_URL = "https://calendar.app.google/KoYen9KgR1fkMTPP7";

const contextFactors = [
  {
    name: "Product & Technology",
    d: "The technical complexity of what the company builds, sells, integrates or services.",
  },
  {
    name: "Customer Environment",
    d: "Who the organization serves and how commercial or technical teams interact with those customers.",
  },
  {
    name: "Operating Model",
    d: "How the company manufactures, delivers, installs, services or supports its products.",
  },
  {
    name: "Organizational Context",
    d: "How local teams interact with regional or global leadership, functions and decision-makers.",
  },
];

const industries = [
  {
    name: "Industrial Machinery & Automation",
    img: indAutomation,
    d: "Companies developing, manufacturing, integrating or servicing machinery, automation systems and industrial equipment.",
    contexts: [
      "Machinery and equipment",
      "Industrial automation",
      "Systems integration",
      "Field service",
      "Applications and technical sales",
      "Aftermarket and customer support",
    ],
    searches:
      "Country Management · Sales Leadership · Service Leadership · Applications · Automation · Engineering",
  },
  {
    name: "Manufacturing",
    img: indManufacturing,
    d: "Industrial organizations operating production environments where leadership, operational execution and continuous improvement are central to performance.",
    contexts: [
      "Plant operations",
      "Production",
      "Engineering",
      "Maintenance",
      "Quality",
      "Operational improvement",
    ],
    searches:
      "Plant Management · Operations Leadership · Engineering · Maintenance · Quality · Commercial Roles",
  },
  {
    name: "Industrial Technology & Software",
    img: indSoftware,
    d: "Technology companies whose products operate within industrial, supply-chain, manufacturing or operational environments.",
    contexts: [
      "Industrial software",
      "Supply-chain technology",
      "Implementation and consulting",
      "Technical integration",
      "Customer success",
      "Enterprise sales",
    ],
    searches:
      "Consulting · Implementation · Integration · Technical Customer Roles · Sales · Business Development",
  },
  {
    name: "Transportation & Logistics",
    img: indLogistics,
    d: "Organizations operating transportation, fleet, logistics and supply-chain environments where operational and commercial execution are closely connected.",
    contexts: [
      "Transportation operations",
      "Fleet management",
      "Logistics",
      "Commercial development",
      "Technology-enabled operations",
      "Customer management",
    ],
    searches:
      "Operations Leadership · Commercial Management · Business Development · Fleet & Logistics Roles · Specialized Technical Roles",
  },
];

const roleAreas = [
  {
    name: "Leadership",
    examples: [
      "Country Management",
      "Operations Leadership",
      "Plant Management",
      "Heads of Function",
      "Service Leadership",
    ],
  },
  {
    name: "Commercial",
    examples: [
      "Sales Leadership",
      "Business Development",
      "Key Account Management",
      "Commercial Management",
      "Regional Sales",
    ],
  },
  {
    name: "Technical",
    examples: [
      "Engineering",
      "Automation",
      "Applications",
      "Technical Service",
      "Specialized Industrial Roles",
    ],
  },
];

function IndustriesPage() {
  return (
    <SiteLayout>
      {/* 01 — HERO */}
      <section className="border-b border-hairline bg-white">
        <div className="container-x pt-20 pb-16 lg:pt-28 lg:pb-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-end">
            <div>
              <p className="eyebrow">Industries</p>
              <h1 className="mt-4 text-4xl leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
                Industrial hiring decisions require industrial context.
              </h1>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-ink-muted lg:text-lg">
                The same job title can mean very different things across machinery, manufacturing,
                industrial technology and transportation. Understanding the environment around the
                role is part of understanding who can succeed in it.
              </p>
            </div>
            <div className="space-y-6">
              <p className="max-w-xl text-base leading-relaxed text-ink-muted lg:text-lg">
                Sync Talent focuses on international industrial organizations hiring leadership,
                commercial and specialized technical talent across Mexico and North America.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  to="/services"
                  className="inline-flex items-center rounded-[10px] bg-turquoise px-7 py-4 text-sm font-medium text-navy transition-colors hover:bg-navy hover:text-white"
                >
                  Explore Executive Search
                </Link>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-[10px] border border-hairline px-7 py-4 text-sm font-medium text-navy transition-colors hover:border-navy"
                >
                  Schedule a Discovery Experience
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 — WHY INDUSTRY CONTEXT MATTERS */}
      <section className="py-28 lg:py-36">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="eyebrow">Why Industry Context Matters</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-4xl lg:text-[44px]">
              The role never exists in isolation.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink-muted lg:text-lg">
              Industrial hiring decisions are shaped by more than responsibilities on a job
              description. Products, customers, operations, technology, geography and organizational
              structure all influence what relevant experience actually means.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-4">
            {contextFactors.map((f, i) => (
              <div key={f.name} className="flex flex-col bg-white p-8 lg:p-10">
                <p className="font-display text-sm text-turquoise">0{i + 1}</p>
                <h3 className="mt-3 font-display text-xl text-navy">{f.name}</h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-muted">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 — INDUSTRIES WE WORK WITH */}
      <section className="bg-surface py-28 lg:py-36">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="eyebrow">Industries We Work With</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-4xl lg:text-[44px]">
              Where we focus.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink-muted lg:text-lg">
              Our work is concentrated in industrial environments where technical understanding,
              commercial judgement and international collaboration often intersect.
            </p>
          </div>

          <div className="mt-14 flex flex-col gap-14 lg:gap-20">
            {industries.map((ind, i) => (
              <article
                key={ind.name}
                className={`grid gap-10 border-t border-hairline pt-10 lg:grid-cols-2 lg:items-center lg:gap-16 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="overflow-hidden rounded-sm border border-hairline bg-white">
                  <img
                    src={ind.img}
                    alt={ind.name}
                    loading="lazy"
                    className="aspect-[4/3] h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="eyebrow">Industry · 0{i + 1}</p>
                  <h3 className="mt-4 text-3xl md:text-4xl">{ind.name}</h3>
                  <p className="mt-6 text-sm leading-relaxed text-ink-muted lg:text-base">{ind.d}</p>
                  <div className="mt-8 space-y-6 text-sm leading-relaxed text-ink-muted lg:text-base">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-navy">
                        Typical hiring contexts may include
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {ind.contexts.map((c) => (
                          <span
                            key={c}
                            className="rounded-sm border border-hairline bg-white px-3 py-1.5 text-xs text-navy"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-navy">
                        Typical searches may include
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-ink-muted">{ind.searches}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 04 — ROLES ACROSS THE INDUSTRIAL ORGANIZATION */}
      <section className="py-28 lg:py-36">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="eyebrow">Roles Across the Industrial Organization</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-4xl lg:text-[44px]">
              From leadership to specialized expertise.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink-muted lg:text-lg">
              Our searches typically sit at the intersection of business responsibility, industrial
              context and specialized experience.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden border border-hairline bg-hairline md:grid-cols-3">
            {roleAreas.map((a) => (
              <div key={a.name} className="flex flex-col bg-white p-8 lg:p-10">
                <h3 className="font-display text-xl text-navy">{a.name}</h3>
                <p className="mt-4 text-[13px] font-medium tracking-wide text-ink-muted">
                  Examples:
                </p>
                <ul className="mt-2 space-y-1.5">
                  {a.examples.map((e) => (
                    <li key={e} className="text-sm leading-relaxed text-navy">
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-4 border-t border-hairline pt-8 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-ink-muted">
              These are representative search categories, not an exhaustive list.
            </p>
            <Link
              to="/services"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-navy link-underline"
            >
              Explore Executive Search <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 05 — FINAL CTA */}
      <CTABand
        eyebrow="The Discovery Experience"
        title="Hiring in an industrial market? Start with the context."
        text="The Discovery Experience is a focused conversation about the role, business environment and market before deciding how the search should begin."
        textNote="45–60 minutes · No fee · No commitment"
        buttonText="Schedule a Discovery Experience"
        externalHref={BOOKING_URL}
        secondaryText="Contact us"
        secondaryTo="/contact"
      />
    </SiteLayout>
  );
}
