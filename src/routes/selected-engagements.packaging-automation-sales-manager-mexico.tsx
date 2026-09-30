import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { AtlasDivider } from "@/components/site/AtlasLine";
import { CTABand } from "@/components/site/CTA";
import { SITE_NAME, SITE_URL, absoluteUrl, pageHead } from "@/lib/seo";

const PATH = "/selected-engagements/packaging-automation-sales-manager-mexico";
const TITLE = "Regional Sales Manager Mexico — Packaging Automation | Sync Talent";
const DESCRIPTION =
  "How Sync Talent helped an international packaging automation company appoint a Regional Sales Manager in Mexico by expanding the search beyond direct industry experience.";
const BOOKING = "https://calendar.app.google/KoYen9KgR1fkMTPP7";
const HEADLINE = "Building commercial capability in a specialized industrial market.";

export const Route = createFileRoute("/selected-engagements/packaging-automation-sales-manager-mexico")({
  head: () => ({
    ...pageHead({ path: PATH, title: TITLE, description: DESCRIPTION, ogType: "article" }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: HEADLINE,
          description: DESCRIPTION,
          mainEntityOfPage: absoluteUrl(PATH),
          publisher: { "@type": "Organization", name: SITE_NAME, url: `${SITE_URL}/` },
        }),
      },
    ],
  }),
  component: EngagementPage,
});

const facts: [string, string][] = [
  ["Position", "Regional Sales Manager Mexico"],
  ["Geography", "Mexico"],
  ["Search type", "Executive Search"],
  ["Focus", "Technical / Industrial Sales"],
  ["Outcome", "Successful Placement"],
  ["Year", "2026"],
];

const snapshot: [string, string][] = [
  ["Position", "Regional Sales Manager Mexico"],
  ["Industry", "Packaging Automation"],
  ["Geography", "Mexico"],
  ["Focus", "Technical / Industrial Sales"],
  ["Search Strategy", "Direct + Adjacent Industries"],
  ["Outcome", "Successful Placement"],
  ["Year", "2026"],
];

const dimensions = [
  "Technical-Commercial Selling",
  "Industrial Customer Experience",
  "Business Development",
  "Commercial Autonomy",
];

function Section({ label, title, children }: { label: string; title: string; children: React.ReactNode }) {
  return (
    <section className="mt-16 border-t border-hairline pt-12">
      <p className="eyebrow text-turquoise">{label}</p>
      <h2 className="mt-4 text-2xl leading-tight md:text-3xl">{title}</h2>
      <div className="mt-6 space-y-5 text-base leading-relaxed text-ink">{children}</div>
    </section>
  );
}

function EngagementPage() {
  return (
    <SiteLayout>
      <header className="border-b border-hairline bg-white">
        <div className="container-x pt-20 pb-14 lg:pt-28 lg:pb-16">
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow text-turquoise">Selected Engagement</p>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-muted">
              Confidential Client · Packaging Automation
            </p>
            <h1 className="mt-5 text-4xl leading-[1.08] tracking-tight md:text-5xl">{HEADLINE}</h1>
            <p className="mt-6 text-sm text-ink-muted">Mexico · Executive Search · Successful Placement · 2026</p>
            <dl className="mt-10 grid gap-x-8 gap-y-5 border-t border-hairline pt-6 sm:grid-cols-2 lg:grid-cols-3">
              {facts.map(([k, v]) => (
                <div key={k}>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-muted">{k}</dt>
                  <dd className="mt-1 text-sm text-navy">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </header>

      <article className="py-16 lg:py-24">
        <div className="container-x">
          <div className="mx-auto max-w-3xl">
            <div className="space-y-5 text-lg leading-relaxed text-ink">
              <p>
                An international packaging automation company was strengthening its commercial presence in Mexico and needed to appoint a Regional Sales Manager capable of developing the local market.
              </p>
              <p>
                The mandate required a profile who could combine industrial sales capability with sufficient technical understanding to sell sophisticated automation solutions.
              </p>
              <p>
                The challenge was that the number of candidates with direct experience in the company's specific technology environment was limited.
              </p>
              <p>
                The search therefore needed to distinguish between industry experience that was essential and capabilities that could transfer successfully from adjacent industrial markets.
              </p>
            </div>

            <Section label="The Hiring Challenge" title="A specialized market with a limited direct talent pool.">
              <p>The position required more than conventional sales experience.</p>
              <p>
                The successful candidate needed to understand technical industrial sales, develop relationships with manufacturing customers and operate independently in the Mexican market while collaborating effectively with an international organization.
              </p>
              <p>
                Direct experience within the company's specific technology niche was valuable, but defining the search exclusively around that background would have created an unnecessarily narrow candidate market.
              </p>
              <p>The central hiring question therefore became:</p>
              <p className="font-display text-xl leading-snug text-navy">
                Which capabilities genuinely required direct industry experience — and which could transfer from adjacent industrial environments?
              </p>
              <p>This distinction shaped the search strategy.</p>
            </Section>

            <blockquote className="my-16 border-l-2 border-turquoise pl-6 font-display text-2xl leading-snug text-navy md:text-3xl">
              “The closest industry match is not always the strongest candidate market.”
            </blockquote>

            <Section label="Our Approach" title="Expanding the market without lowering the bar.">
              <p>
                Sync Talent mapped candidates both within the immediate industry and across adjacent industrial markets where comparable technical-commercial capabilities could be found.
              </p>
              <p>
                The search considered professionals from packaging, automation, machinery and other technical solution environments.
              </p>
              <p>
                Rather than evaluating candidates primarily by industry labels, the assessment focused on the capabilities required to perform the role successfully.
              </p>
              <p>
                These included experience selling technical solutions, interaction with industrial customers, new-business development, commercial autonomy and the ability to communicate complex products effectively.
              </p>
              <p>This expanded the relevant candidate market while preserving the core requirements of the mandate.</p>
            </Section>

            <figure className="mt-14 rounded-[10px] border border-hairline bg-surface p-8 lg:p-10">
              <figcaption className="text-[12px] font-semibold uppercase tracking-[0.18em] text-navy">
                What needed to transfer
              </figcaption>
              <div className="mt-8 grid gap-px overflow-hidden rounded-[8px] border border-hairline bg-hairline sm:grid-cols-2">
                {dimensions.map((d) => (
                  <div key={d} className="flex items-center gap-3 bg-white p-6">
                    <span className="block h-1.5 w-1.5 shrink-0 rounded-full bg-turquoise" />
                    <span className="text-sm font-medium text-navy">{d}</span>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-[12px] uppercase tracking-[0.14em] text-ink-muted">
                Context · International collaboration
              </p>
            </figure>

            <Section label="The Outcome" title="A successful appointment from the relevant talent market.">
              <p>
                The search concluded successfully with the appointment of a Regional Sales Manager for Mexico in 2026.
              </p>
              <p>
                The selected candidate demonstrated the combination of technical-commercial capability, industrial customer understanding, business-development experience and autonomy required for the position.
              </p>
              <p>
                The engagement illustrates how expanding a search into adjacent industries can increase access to relevant talent without reducing the quality threshold — provided the transferable capabilities are clearly defined before candidates are evaluated.
              </p>
            </Section>

            <dl className="mt-12 grid gap-px overflow-hidden rounded-[10px] border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
              {snapshot.map(([k, v]) => (
                <div key={k} className="bg-white p-6">
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-muted">{k}</dt>
                  <dd className="mt-2 text-sm text-navy">{v}</dd>
                </div>
              ))}
            </dl>

            <section className="mt-16 border-y border-hairline py-12">
              <p className="eyebrow text-turquoise">Key Takeaway</p>
              <p className="mt-5 font-display text-2xl leading-snug text-navy md:text-3xl">
                “In specialized industrial markets, the strongest candidate pool may extend beyond the immediate industry. The critical question is which capabilities must already exist — and which industry knowledge can transfer.”
              </p>
            </section>

            <section className="mt-16">
              <h2 className="text-2xl leading-tight">Defining the relevant talent market.</h2>
              <p className="mt-5 text-base leading-relaxed text-ink">
                A candidate market should not be defined by job titles and industry labels alone.
              </p>
              <p className="mt-4 text-base leading-relaxed text-ink">
                For this engagement, separating essential experience from transferable capability allowed the search to explore adjacent industrial markets while maintaining the requirements of the hiring decision.
              </p>
              <Link
                to="/atlas-method"
                className="mt-6 inline-flex items-center gap-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-navy transition-colors hover:text-turquoise"
              >
                Explore the Atlas Method <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </section>

            <aside className="mt-16 border-t border-hairline pt-8 text-sm leading-relaxed text-ink-muted">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-navy">Client Confidentiality</p>
              <p className="mt-3">
                At the client's request, the company name and the identity of the appointed candidate remain confidential. The engagement is presented using only the business context relevant to the hiring challenge.
              </p>
            </aside>

            <AtlasDivider className="mt-16" />
          </div>
        </div>
      </article>

      <CTABand
        eyebrow="Discovery Experience™"
        title="Hiring in a specialized industrial market?"
        text="The Discovery Experience helps define the mandate, the relevant talent market and the evidence needed before the search begins."
        buttonText="Schedule a Discovery Experience"
        externalHref={BOOKING}
        secondaryText="Explore Executive Search →"
        secondaryTo="/services"
      />
    </SiteLayout>
  );
}
