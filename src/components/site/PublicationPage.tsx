import { Link } from "@tanstack/react-router";
import { marked } from "marked";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "./SiteLayout";
import { AtlasDivider } from "./AtlasLine";
import { CTABand } from "./CTA";
import {
  getRelatedPublications,
  type Publication,
} from "@/lib/publications";

marked.setOptions({ gfm: true, breaks: false });

function formatDate(value?: string) {
  if (!value) return undefined;
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return value;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Universal Atlas publication template.
 * Every long-form publication renders through this component — optional
 * blocks appear only when the publication provides that content.
 */
export function PublicationPage({ publication }: { publication: Publication }) {
  const pub = publication;
  const related = getRelatedPublications(pub);
  const liveRelated = related.filter((r) => r.status === "published");
  const html = marked.parse(pub.body) as string;

  const published = formatDate(pub.publishedDate);
  const updated = formatDate(pub.updatedDate);

  return (
    <SiteLayout>
      {/* Masthead */}
      <header className="border-b border-hairline bg-white">
        <div className="container-x pt-20 pb-14 lg:pt-28 lg:pb-16">
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow text-turquoise">{pub.eyebrow ?? pub.category}</p>
            <h1 className="mt-5 text-4xl leading-[1.08] tracking-tight md:text-5xl">
              {pub.title}
            </h1>
            {pub.excerpt && (
              <p className="mt-6 text-base leading-relaxed text-ink-muted lg:text-lg">
                {pub.excerpt}
              </p>
            )}
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-hairline pt-6 text-[12px] font-medium uppercase tracking-[0.14em] text-ink-muted">
              {pub.author && <span className="text-navy">{pub.author}</span>}
              {published && <span>Published {published}</span>}
              {updated && <span>Updated {updated}</span>}
              {pub.readTime && <span>{pub.readTime}</span>}
            </div>
          </div>
        </div>
      </header>

      <article className="py-16 lg:py-24">
        <div className="container-x">
          <div className="mx-auto max-w-3xl">
            {/* Key findings */}
            {pub.keyFindings.length > 0 && (
              <section className="mb-14 rounded-[10px] border border-hairline bg-surface p-8 lg:p-10">
                <h2 className="text-[12px] font-semibold uppercase tracking-[0.18em] text-navy">
                  Key findings
                </h2>
                <ul className="mt-6 space-y-4">
                  {pub.keyFindings.map((f) => (
                    <li key={f} className="flex gap-4 text-sm leading-relaxed text-ink">
                      <span className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-turquoise" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Stat blocks */}
            {pub.stats.length > 0 && (
              <section className="mb-14 grid gap-px overflow-hidden rounded-[10px] border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
                {pub.stats.map((s) => (
                  <div key={s.label} className="bg-white p-7">
                    <p className="font-display text-3xl text-navy">{s.value}</p>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                      {s.label}
                    </p>
                  </div>
                ))}
              </section>
            )}

            {/* Article body */}
            <div className="mx-auto max-w-[720px]">
              <div
                className="atlas-prose"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </div>

            {/* Methodology */}
            {pub.methodology && (
              <section className="mt-16 border-t border-hairline pt-10">
                <h2 className="text-[12px] font-semibold uppercase tracking-[0.18em] text-navy">
                  Methodology Note
                </h2>
                <div
                  className="atlas-prose atlas-prose-sm mt-5"
                  dangerouslySetInnerHTML={{
                    __html: marked.parse(pub.methodology) as string,
                  }}
                />
              </section>
            )}

            {/* Sources */}
            {pub.sources.length > 0 && (
              <section className="mt-12 border-t border-hairline pt-10">
                <h2 className="text-[12px] font-semibold uppercase tracking-[0.18em] text-navy">
                  Sources &amp; notes
                </h2>
                <ol className="mt-5 space-y-3 text-sm leading-relaxed text-ink-muted">
                  {pub.sources.map((s, i) => (
                    <li key={s.label} className="flex gap-3">
                      <span className="font-display text-turquoise">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {s.href ? (
                        <a
                          href={s.href}
                          target="_blank"
                          rel="noreferrer"
                          className="underline decoration-hairline underline-offset-4 transition-colors hover:text-navy"
                        >
                          {s.label}
                        </a>
                      ) : (
                        <span>{s.label}</span>
                      )}
                    </li>
                  ))}
                </ol>
              </section>
            )}

            <AtlasDivider className="mt-16" />
          </div>
        </div>
      </article>

      {/* Related Intelligence */}
      {liveRelated.length > 0 && (
        <section className="border-t border-hairline bg-surface py-20">
          <div className="container-x">
            <p className="eyebrow">Related Intelligence</p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {liveRelated.map((r) => (
                <Link
                  key={r.id}
                  to="/knowledge-hub/$slug"
                  params={{ slug: r.slug }}
                  className="group flex flex-col gap-5 rounded-[10px] border border-hairline bg-white p-7 transition-colors hover:border-navy"
                >
                  <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.16em]">
                    <span className="text-navy">{r.category}</span>
                    {r.readTime && <span className="text-ink-muted">{r.readTime}</span>}
                  </div>
                  <h3 className="text-base leading-snug">{r.title}</h3>
                  {r.excerpt && (
                    <p className="text-sm leading-relaxed text-ink-muted">{r.excerpt}</p>
                  )}
                  <span className="mt-auto inline-flex items-center gap-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-navy transition-colors group-hover:text-turquoise">
                    Read <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {pub.ctaTitle && (
        <CTABand
          title={pub.ctaTitle}
          text={pub.ctaText ?? ""}
          buttonText={pub.ctaButtonText ?? "Contact us"}
          to={pub.ctaTo ?? "/contact"}
          externalHref={pub.ctaExternalHref}
          secondaryText={pub.ctaSecondaryText ?? ""}
          secondaryTo={pub.ctaSecondaryTo}
        />
      )}
    </SiteLayout>
  );
}
