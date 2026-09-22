import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import {
  publishedPublications,
  type Publication,
} from "@/lib/publications";

export const Route = createFileRoute("/knowledge-hub/")({
  head: () => ({
    meta: [
      { title: "Knowledge Hub — Industrial Hiring Intelligence | Sync Talent" },
      {
        name: "description",
        content:
          "Atlas Notes, Research, Salary Intelligence, Hiring Guides, Market Reports, Case Studies and the Industrial Hiring Thesis — written for international industrial leaders.",
      },
      { property: "og:title", content: "Knowledge Hub — Sync Talent" },
      {
        property: "og:description",
        content: "A research institution for industrial hiring in North America.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/knowledge-hub" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/knowledge-hub" }],
  }),
  component: KnowledgeHubPage,
});

const topics = [
  {
    name: "Atlas Notes",
    description:
      "Perspectives on Executive Search, hiring decisions and the thinking behind the Atlas Method.",
    categories: ["Atlas Notes", "Decision Intelligence"],
  },
  {
    name: "Market Intelligence",
    description:
      "Observations and analysis of industrial talent markets, hiring conditions and workforce dynamics.",
    categories: ["Market Intelligence", "Market Reports", "Case Studies"],
  },
  {
    name: "Salary Intelligence",
    description:
      "Compensation benchmarks and salary perspectives for industrial roles and markets.",
    categories: ["Salary Intelligence"],
  },
  {
    name: "Hiring Guides",
    description:
      "Practical guidance for companies defining, evaluating and executing important searches.",
    categories: ["Hiring Guides"],
  },
  {
    name: "Research",
    description:
      "Deeper studies, reports and structured analysis related to talent, organizations and industrial markets.",
    categories: ["Research", "The Industrial Hiring Thesis"],
  },
] as const;

function formatDate(value?: string) {
  if (!value) return undefined;
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function PublicationMeta({ publication }: { publication: Publication }) {
  const date = formatDate(publication.publishedDate);

  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] font-medium uppercase tracking-[0.14em] text-ink-muted">
      <span className="text-navy">{publication.category}</span>
      {date && <span>{date}</span>}
      {publication.readTime && <span>{publication.readTime}</span>}
      {publication.author && <span>{publication.author}</span>}
    </div>
  );
}

function KnowledgeHubPage() {
  const featured =
    publishedPublications.find((publication) => publication.featured) ??
    publishedPublications[0];
  const latest = publishedPublications.filter(
    (publication) => publication.slug !== featured?.slug,
  );
  const [activeTopic, setActiveTopic] = useState<string | undefined>();
  const selectedTopic = topics.find((topic) => topic.name === activeTopic);
  const visiblePublications = selectedTopic
    ? publishedPublications.filter((publication) =>
        selectedTopic.categories.some(
          (category) => category === publication.category,
        ),
      )
    : latest;

  const chooseTopic = (topicName: string) => {
    setActiveTopic(topicName);
    window.requestAnimationFrame(() => {
      document
        .getElementById("latest-intelligence")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <SiteLayout>
      {/* 01 — Hero */}
      <header className="border-b border-hairline bg-white">
        <div className="container-x py-20 lg:py-28">
          <div className="max-w-4xl">
            <p className="eyebrow">Knowledge Hub</p>
            <h1 className="mt-6 max-w-3xl text-4xl leading-[1.08] md:text-5xl lg:text-6xl">
              Research and intelligence for better hiring decisions.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-muted">
              Original analysis, market intelligence and practical perspectives on industrial
              talent, Executive Search and hiring in Mexico and North America.
            </p>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-ink-muted">
              The Knowledge Hub brings together what we learn through research, market observation
              and search work—and turns it into useful intelligence for leaders making important
              hiring decisions.
            </p>
            <a
              href="#latest-intelligence"
              className="mt-9 inline-flex items-center gap-2 text-sm font-medium text-navy transition-colors hover:text-turquoise"
            >
              Explore the latest intelligence <ArrowDown className="h-4 w-4" />
            </a>
          </div>
        </div>
      </header>

      {/* 02 — Featured Publication */}
      {featured && (
        <section className="bg-surface py-20 lg:py-24">
          <div className="container-x">
            <p className="eyebrow">Featured</p>
            <Link
              to="/knowledge-hub/$slug"
              params={{ slug: featured.slug }}
              className="group mt-8 grid overflow-hidden rounded-[10px] border border-hairline bg-white lg:grid-cols-[0.62fr_1.38fr]"
            >
              <div className="flex min-h-64 flex-col justify-between bg-navy p-8 lg:min-h-[430px] lg:p-12">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-turquoise">
                  {featured.publicationType?.replaceAll("-", " ") ?? featured.category}
                </p>
                <div>
                  <p className="font-display text-3xl leading-tight text-navy-foreground lg:text-4xl">
                    Sync Talent
                    <br />Knowledge Hub
                  </p>
                  <span className="mt-7 block h-px w-16 bg-turquoise" />
                </div>
              </div>
              <div className="flex flex-col justify-center p-8 lg:p-14">
                <PublicationMeta publication={featured} />
                <h2 className="mt-6 max-w-2xl text-3xl leading-tight md:text-4xl">
                  {featured.title}
                </h2>
                {featured.excerpt && (
                  <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-muted">
                    {featured.excerpt}
                  </p>
                )}
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-navy transition-colors group-hover:text-turquoise">
                  Read publication <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* 03 — Latest Intelligence */}
      <section id="latest-intelligence" className="scroll-mt-20 py-20 lg:py-24">
        <div className="container-x">
          <div className="flex flex-col gap-4 border-b border-hairline pb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Publication desk</p>
              <h2 className="mt-4 text-3xl md:text-4xl">
                {selectedTopic ? selectedTopic.name : "Latest intelligence"}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {selectedTopic
                  ? selectedTopic.description
                  : "Recent analysis, research and practical perspectives from Sync Talent."}
              </p>
            </div>
            {selectedTopic && (
              <Button
                type="button"
                variant="ghost"
                onClick={() => setActiveTopic(undefined)}
                className="self-start px-0 text-ink-muted hover:bg-transparent hover:text-navy sm:self-auto"
              >
                View latest
              </Button>
            )}
          </div>

          {visiblePublications.length > 0 ? (
            <div className="divide-y divide-hairline">
              {visiblePublications.map((publication) => (
                <Link
                  key={publication.id}
                  to="/knowledge-hub/$slug"
                  params={{ slug: publication.slug }}
                  className="group grid gap-5 py-9 md:grid-cols-[0.65fr_1.35fr_auto] md:items-start md:gap-10"
                >
                  <PublicationMeta publication={publication} />
                  <div>
                    <h3 className="text-xl leading-snug md:text-2xl">{publication.title}</h3>
                    {publication.excerpt && (
                      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-muted">
                        {publication.excerpt}
                      </p>
                    )}
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-navy transition-colors group-hover:text-turquoise">
                    Read <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              ))}
            </div>
          ) : (
            <p className="py-10 text-sm text-ink-muted">
              No published intelligence is available in this topic yet.
            </p>
          )}
        </div>
      </section>

      {/* 04 — Browse by Topic */}
      <section className="border-y border-hairline bg-surface py-20 lg:py-24">
        <div className="container-x">
          <p className="eyebrow">Browse by topic</p>
          <div className="mt-8 divide-y divide-hairline border-y border-hairline">
            {topics.map((topic, index) => (
              <Button
                key={topic.name}
                type="button"
                variant="ghost"
                onClick={() => chooseTopic(topic.name)}
                className="group grid h-auto w-full justify-normal gap-3 whitespace-normal rounded-none px-0 py-7 text-left hover:bg-transparent md:grid-cols-[4rem_0.7fr_1.3fr_auto] md:items-center md:gap-8"
                aria-pressed={activeTopic === topic.name}
              >
                <span className="font-display text-sm text-turquoise">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-xl font-semibold text-navy">{topic.name}</span>
                <span className="max-w-2xl text-sm leading-relaxed text-ink-muted">
                  {topic.description}
                </span>
                <ArrowRight className="hidden h-4 w-4 text-navy transition-transform group-hover:translate-x-1 md:block" />
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* 05 — Knowledge Hub CTA */}
      <section className="py-20 lg:py-24">
        <div className="container-x">
          <div className="grid gap-8 border-l-2 border-turquoise pl-6 md:grid-cols-[1fr_1fr] md:items-end md:pl-10">
            <div>
              <p className="eyebrow">From intelligence to action</p>
              <h2 className="mt-4 max-w-xl text-3xl leading-tight md:text-4xl">
                Intelligence should improve the next decision.
              </h2>
            </div>
            <div>
              <p className="max-w-xl text-sm leading-relaxed text-ink-muted">
                Our research and search work inform each other—helping us understand industrial
                talent markets while improving the questions we ask during Executive Search.
              </p>
              <div className="mt-6 flex flex-wrap gap-x-7 gap-y-3">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-sm font-medium text-navy transition-colors hover:text-turquoise"
                >
                  Explore Executive Search <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/atlas-method"
                  className="inline-flex items-center gap-2 text-sm font-medium text-navy transition-colors hover:text-turquoise"
                >
                  Explore the Atlas Method <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}