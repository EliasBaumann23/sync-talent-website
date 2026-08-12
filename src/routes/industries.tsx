import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { CTABand } from "@/components/site/CTA";
import indPackaging from "@/assets/ind-packaging.jpg";
import indAutomation from "@/assets/ind-automation.jpg";
import indManufacturing from "@/assets/ind-manufacturing.jpg";
import indMachinery from "@/assets/ind-machinery.jpg";
import indSoftware from "@/assets/ind-software.jpg";
import indFood from "@/assets/ind-food.jpg";
import indMaterial from "@/assets/ind-material.jpg";
import indLogistics from "@/assets/ind-logistics.jpg";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — Industrial Recruitment Mexico | Sync Talent" },
      {
        name: "description",
        content:
          "Specialized recruitment for packaging machinery, industrial automation, manufacturing, machinery, industrial software, food processing, material handling and logistics automation in Mexico.",
      },
      { property: "og:title", content: "Industries — Sync Talent" },
      { property: "og:description", content: "Industries we serve across Mexico and North America." },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: IndustriesPage,
});

const industries = [
  {
    name: "Packaging Machinery",
    img: indPackaging,
    challenges: "Few candidates with both OEM service experience and bilingual commercial exposure.",
    roles: ["Setup Engineer", "Field Service Engineer", "Regional Sales Manager"],
    market:
      "High demand from European OEMs entering or expanding in Mexico; tight market for after-sales leadership.",
  },
  {
    name: "Industrial Automation",
    img: indAutomation,
    challenges: "Strong competition for PLC, robotics and integration talent from end-users and integrators.",
    roles: ["Automation Engineer", "Controls Engineer", "Application Engineer"],
    market: "Bilingual engineers with EU and US OEM exposure are the most contested profiles.",
  },
  {
    name: "Manufacturing",
    img: indManufacturing,
    challenges: "Plant-level leadership needs operational depth and international reporting capability.",
    roles: ["Plant Manager", "Operations Manager", "Project Manager"],
    market: "Bajío and Northeast Mexico remain the most active corridors for international manufacturers.",
  },
  {
    name: "Industrial Machinery",
    img: indMachinery,
    challenges: "Specialized service and applications profiles require long lead times to identify.",
    roles: ["Service Manager", "Applications Engineer", "Mechanical Engineer"],
    market: "Senior candidates are often passive and require discreet, direct outreach.",
  },
  {
    name: "Industrial Software",
    img: indSoftware,
    challenges: "Need consultants combining manufacturing context, ERP/MES knowledge and client-facing skills.",
    roles: ["Implementation Consultant", "Pre-Sales Engineer", "Customer Success Lead"],
    market: "Limited pool of bilingual consultants with both industry and software backgrounds.",
  },
  {
    name: "Food Processing Equipment",
    img: indFood,
    challenges: "Hygienic-design knowledge and food-grade compliance experience are differentiators.",
    roles: ["Sales Engineer", "Service Engineer", "Application Engineer"],
    market: "Growing investment from EU and US food OEMs across central and northern Mexico.",
  },
  {
    name: "Material Handling",
    img: indMaterial,
    challenges: "Sales cycles require profiles fluent in intralogistics and capex commercial conversations.",
    roles: ["Regional Sales Manager", "Project Manager", "Service Manager"],
    market: "Demand driven by automotive, e-commerce and 3PL expansion in Mexico.",
  },
  {
    name: "Logistics Automation",
    img: indLogistics,
    challenges: "Project leadership profiles with WMS, conveyor and AS/RS experience are scarce.",
    roles: ["Project Manager", "Solutions Engineer", "Implementation Lead"],
    market: "Highly competitive; international project exposure is the strongest differentiator.",
  },
];

function IndustriesPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Industries"
        title="Industrial sectors we know — at depth."
        description="Each industry has its own talent dynamics, competitor landscape and salary bands. Sync Talent specializes in industrial verticals to bring real context to every search."
      />

      <section className="py-20 lg:py-28">
        <div className="container-x flex flex-col gap-20">
          {industries.map((ind, i) => (
            <article
              key={ind.name}
              className={`grid gap-10 lg:grid-cols-2 lg:items-center ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="overflow-hidden rounded-sm border border-hairline bg-surface">
                <img
                  src={ind.img}
                  alt={ind.name}
                  loading="lazy"
                  className="aspect-[4/3] h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="eyebrow">Industry · 0{i + 1}</p>
                <h2 className="mt-4 text-3xl md:text-4xl">{ind.name}</h2>
                <div className="mt-8 space-y-6 text-sm leading-relaxed text-ink-muted lg:text-base">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-navy">
                      Hiring Challenges
                    </p>
                    <p className="mt-2">{ind.challenges}</p>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-navy">
                      Typical Roles
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {ind.roles.map((r) => (
                        <span
                          key={r}
                          className="rounded-sm border border-hairline bg-white px-3 py-1.5 text-xs text-navy"
                        >
                          {r}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-navy">
                      Market Observations
                    </p>
                    <p className="mt-2">{ind.market}</p>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center rounded-sm bg-navy px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-turquoise"
                >
                  Discuss hiring in {ind.name}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTABand />
    </SiteLayout>
  );
}
