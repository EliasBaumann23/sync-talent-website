import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { AtlasDivider } from "@/components/site/AtlasLine";
import { CTABand } from "@/components/site/CTA";
import { SITE_NAME, SITE_URL, absoluteUrl, pageHead } from "@/lib/seo";

const PATH = "/selected-engagements/lako-sales-engineer-mexico";
const TITLE = "LAKO Sales Engineer Mexico — Selected Engagement | Sync Talent";
const DESCRIPTION =
  "How Sync Talent helped LAKO Tool & Manufacturing appoint a Sales Engineer in Mexico combining technical expertise, commercial capability and local market knowledge.";
const BOOKING = "https://calendar.app.google/KoYen9KgR1fkMTPP7";

/**
 * Client Perspective slot. Intentionally null: the original testimonial must not
 * be published or edited. Populate only with an updated, reconfirmed quote.
 */
const clientPerspective: { quote: string; name: string; role: string } | null = null;

export const Route = createFileRoute("/selected-engagements/lako-sales-engineer-mexico")({
  head: () => ({
    ...pageHead({ path: PATH, title: TITLE, description: DESCRIPTION, ogType: "article" }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Building local commercial capability for Mexico.",
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
  ["Position", "Sales Engineer"],
  ["Location", "Mexico City, Mexico"],
  ["Search type", "Executive Search"],
  ["Outcome", "Successful Placement"],
  ["Year", "2025"],
  ["Time to hire", "< 2 months"],
];

const snapshot: [string, string][] = [
  ["Position", "Sales Engineer"],
  ["Industry", "Packaging Machinery"],
  ["Location", "Mexico City, Mexico"],
  ["Focus", "Technical Sales"],
  ["Languages", "English / Spanish"],
  ["Time to Hire", "< 2 months"],
  ["Outcome", "Successful Placement"],
  ["Year", "2025"],
];

const dimensions: [string, string][] = [
  ["Technical Understanding", "Could the candidate operate credibly within a specialized packaging-machinery environment?"],
  ["Commercial Capability", "Could the candidate develop customer relationships and translate technical understanding into commercial opportunities?"],
  ["International Collaboration", "Could the candidate operate locally in Mexico while communicating effectively with LAKO's U.S. organization?"],
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
              LAKO Tool & Manufacturing · Packaging Machinery
            </p>
            <h1 className="mt-5 text-4xl leading-[1.08] tracking-tight md:text-5xl">
              Building local commercial capability for Mexico.
            </h1>
            <p className="mt-6 text-sm text-ink-muted">
              Mexico City, Mexico · Executive Search · Successful Placement · 2025
            </p>
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
                LAKO Tool & Manufacturing, an Ohio-based manufacturer of precision components and sealing technology for flexible packaging machinery, was strengthening its commercial presence in Mexico and Latin America.
              </p>
              <p>
                To support this expansion, LAKO needed a Sales Engineer based in Mexico City who could combine technical understanding with commercial capability and local market knowledge.
              </p>
              <p>
                The position would serve as an important connection between customers in Mexico and LAKO's U.S. organization, requiring both local autonomy and effective communication with headquarters.
              </p>
            </div>

            <Section label="The Hiring Challenge" title="Finding technical credibility and commercial capability in the same profile.">
              <p>The mandate required more than conventional sales experience.</p>
              <p>
                LAKO needed someone who could understand a specialized industrial product environment, communicate credibly with technical customers and translate that knowledge into commercial development.
              </p>
              <p>
                At the same time, the successful candidate needed to operate effectively across Mexico and the United States, combining English-Spanish communication with an understanding of the local customer environment.
              </p>
              <p>
                This made the relevant talent market considerably narrower than the title “Sales Engineer” alone would suggest.
              </p>
            </Section>

            <blockquote className="my-16 border-l-2 border-turquoise pl-6 font-display text-2xl leading-snug text-navy md:text-3xl">
              “The relevant market was not simply Sales Engineers in Mexico. It was professionals who could connect technical credibility, commercial capability and an international organization.”
            </blockquote>

            <Section label="Our Approach" title="Defining the search around technical-commercial capability.">
              <p>
                Sync Talent mapped engineers and commercial professionals with backgrounds in packaging machinery and industrial equipment sales.
              </p>
              <p>
                The search focused particularly on bilingual candidates who combined technical understanding with demonstrated commercial exposure.
              </p>
              <p>Structured interviews were used to evaluate three dimensions central to the mandate:</p>
              <dl className="space-y-5 border-l border-hairline pl-6">
                {dimensions.map(([k, v]) => (
                  <div key={k}>
                    <dt className="font-medium text-navy">{k}</dt>
                    <dd className="mt-1 text-ink-muted">{v}</dd>
                  </div>
                ))}
              </dl>
              <p>
                Close communication with LAKO's leadership throughout the process helped maintain alignment and support timely decision-making.
              </p>
            </Section>

            <figure className="mt-14 rounded-[10px] border border-hairline bg-surface p-8 lg:p-10">
              <figcaption className="text-[12px] font-semibold uppercase tracking-[0.18em] text-navy">
                What the search needed to connect
              </figcaption>
              <div className="mt-8 grid gap-px overflow-hidden rounded-[8px] border border-hairline bg-hairline sm:grid-cols-3">
                {dimensions.map(([d]) => (
                  <div key={d} className="flex items-center gap-3 bg-white p-6">
                    <span className="block h-1.5 w-1.5 shrink-0 rounded-full bg-turquoise" />
                    <span className="text-sm font-medium text-navy">{d}</span>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-[12px] uppercase tracking-[0.14em] text-ink-muted">
                Context · English / Spanish
              </p>
            </figure>

            <Section label="The Outcome" title="A successful placement in less than two months.">
              <p>
                Sync Talent successfully completed the search within two months, appointing a Sales Engineer with the combination of technical knowledge, business understanding and local customer relationships required for the position.
              </p>
              <p>
                Following the appointment, the new hire began supporting LAKO's commercial and technical activities in Mexico, including customer relationships and the company's local market activities.
              </p>
              <p>
                The engagement demonstrates how defining a search around the substance of the role — rather than the job title alone — can help identify technical-commercial talent for international industrial companies building local capability in Mexico.
              </p>
            </Section>

            <dl className="mt-12 grid gap-px overflow-hidden rounded-[10px] border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
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
                “Building a local market presence often requires more than adding sales capacity. The right hire needs to connect technical credibility, local customer understanding and the international organization behind the product.”
              </p>
            </section>

            {clientPerspective && (
              <section className="mt-16">
                <p className="eyebrow text-turquoise">Client Perspective</p>
                <blockquote className="mt-5 font-display text-2xl leading-snug text-navy">
                  “{clientPerspective.quote}”
                </blockquote>
                <p className="mt-4 text-sm text-ink-muted">
                  {clientPerspective.name} · {clientPerspective.role}
                </p>
              </section>
            )}

            <section className="mt-16">
              <h2 className="text-2xl leading-tight">Defining the market beyond the job title.</h2>
              <p className="mt-5 text-base leading-relaxed text-ink">
                For specialized industrial roles, the relevant candidate market is often defined by a combination of capabilities rather than by job titles alone.
              </p>
              <p className="mt-4 text-base leading-relaxed text-ink">
                In this engagement, technical understanding, commercial capability, bilingual communication and the ability to operate between Mexico and an international organization shaped the search market.
              </p>
              <Link
                to="/atlas-method"
                className="mt-6 inline-flex items-center gap-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-navy transition-colors hover:text-turquoise"
              >
                Explore the Atlas Method <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </section>

            <AtlasDivider className="mt-16" />
          </div>
        </div>
      </article>

      <CTABand
        eyebrow="Discovery Experience™"
        title="Building your team in Mexico?"
        text="For critical commercial, technical and leadership hires, the Discovery Experience helps define the hiring decision and the talent market the search should explore."
        buttonText="Schedule a Discovery Experience"
        externalHref={BOOKING}
        secondaryText="Explore Executive Search →"
        secondaryTo="/services"
      />
    </SiteLayout>
  );
}
