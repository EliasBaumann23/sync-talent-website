import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { CTABand } from "@/components/site/CTA";

export const Route = createFileRoute("/salary-guides")({
  head: () => ({
    meta: [
      { title: "Salary Guides — Industrial Roles in Mexico | Sync Talent" },
      {
        name: "description",
        content:
          "Salary benchmarks for Sales Engineers, Field Service Engineers, Automation Engineers, Service Managers, Regional Sales Managers and Country Managers in Mexico.",
      },
      { property: "og:title", content: "Salary Guides — Sync Talent" },
      { property: "og:description", content: "Compensation benchmarks for industrial roles in Mexico." },
      { property: "og:url", content: "/salary-guides" },
    ],
    links: [{ rel: "canonical", href: "/salary-guides" }],
  }),
  component: SalaryPage,
});

const guides = [
  {
    role: "Sales Engineer",
    range: "MXN 720K — 1.4M / yr",
    demand: "High",
    tth: "6–8 weeks",
  },
  {
    role: "Field Service Engineer",
    range: "MXN 540K — 1.1M / yr",
    demand: "Very High",
    tth: "8–10 weeks",
  },
  {
    role: "Automation Engineer",
    range: "MXN 600K — 1.3M / yr",
    demand: "High",
    tth: "6–9 weeks",
  },
  {
    role: "Service Manager",
    range: "MXN 1.2M — 2.4M / yr",
    demand: "High",
    tth: "8–12 weeks",
  },
  {
    role: "Regional Sales Manager",
    range: "MXN 1.4M — 2.8M / yr",
    demand: "Medium-High",
    tth: "8–12 weeks",
  },
  {
    role: "Country Manager",
    range: "MXN 2.4M — 4.5M+ / yr",
    demand: "Selective",
    tth: "10–16 weeks",
  },
];

function SalaryPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Salary Guides"
        title="Salary benchmarks for industrial roles in Mexico."
        description="Compensation ranges, demand levels and indicative time-to-hire for the technical, commercial and leadership roles we search most. Figures are example placeholders — request a tailored benchmark for your role and region."
      />

      <section className="py-20 lg:py-28">
        <div className="container-x">
          <div className="rounded-sm border border-amber-200 bg-amber-50 p-4 text-xs text-amber-900">
            Example content — placeholder ranges shown for demonstration. Contact us for current,
            role-specific benchmarks.
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {guides.map((g) => (
              <article
                key={g.role}
                className="flex flex-col gap-6 rounded-sm border border-hairline bg-white p-8"
              >
                <div>
                  <p className="eyebrow">Salary Mexico</p>
                  <h2 className="mt-3 text-2xl">{g.role}</h2>
                </div>

                <dl className="grid grid-cols-3 gap-3 border-y border-hairline py-5 text-center">
                  <div>
                    <dt className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-muted">
                      Range
                    </dt>
                    <dd className="mt-2 font-display text-sm font-semibold text-navy">{g.range}</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-muted">
                      Demand
                    </dt>
                    <dd className="mt-2 font-display text-sm font-semibold text-turquoise">
                      {g.demand}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-muted">
                      Time to Hire
                    </dt>
                    <dd className="mt-2 font-display text-sm font-semibold text-navy">{g.tth}</dd>
                  </div>
                </dl>

                <Link
                  to="/contact"
                  className="mt-auto inline-flex items-center justify-center rounded-sm bg-navy px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-turquoise"
                >
                  Request benchmark
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="Tailored benchmark"
        title="Need a specific salary view?"
        text="Share the role, level and region and we will reply with current market data based on active searches."
        buttonText="Request a Benchmark"
      />
    </SiteLayout>
  );
}
