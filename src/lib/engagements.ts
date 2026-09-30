/**
 * Selected Engagements registry. Public descriptors only — never store
 * confidential client names, candidate identities or compensation here.
 */
export interface SelectedEngagement {
  slug: string;
  clientLabel: string;
  industry: string;
  region: string;
  location: string;
  position: string;
  headline: string;
  summary: string;
  meta: string[];
}

export const selectedEngagements: SelectedEngagement[] = [
  {
    slug: "food-processing-administrative-operations-manager",
    clientLabel: "Confidential Client",
    industry: "Food Processing",
    region: "Mexico",
    location: "State of Mexico, Mexico",
    position: "Administrative & Operations Manager",
    headline: "Professionalizing leadership in a growing family business.",
    summary:
      "After more than 40 years of growth, a family-owned food processing company sought a leader to strengthen its administrative and operational structure while preserving the practicality of an owner-led organization.",
    meta: ["~100 employees", "Successful Placement", "September 2026"],
  },
  {
    slug: "lako-sales-engineer-mexico",
    clientLabel: "LAKO Tool & Manufacturing",
    industry: "Packaging Machinery",
    region: "Mexico",
    location: "Mexico City, Mexico",
    position: "Sales Engineer",
    headline: "Building local commercial capability for Mexico.",
    summary:
      "A U.S. packaging-machinery supplier needed a Mexico-based Sales Engineer combining technical credibility, commercial capability and effective collaboration with its U.S. organization.",
    meta: ["< 2 months", "Mexico City", "Successful Placement"],
  },
  {
    slug: "hennecke-head-of-service-mexico",
    clientLabel: "HENNECKE",
    industry: "Industrial Machinery",
    region: "Mexico",
    location: "Querétaro, Mexico",
    position: "Head of Service / Site Manager Mexico",
    headline: "Turning a replacement hire into a broader leadership mandate.",
    summary:
      "Following the departure of its Service Manager, HENNECKE used the transition to define a broader role combining service leadership, site responsibility and commercial development.",
    meta: ["Senior Leadership", "Querétaro", "Successful Placement"],
  },
  {
    slug: "packaging-automation-sales-manager-mexico",
    clientLabel: "Confidential Client",
    industry: "Packaging Automation",
    region: "Mexico",
    location: "Mexico",
    position: "Regional Sales Manager Mexico",
    headline: "Building commercial capability in a specialized industrial market.",
    summary:
      "An international packaging automation company needed a commercial leader for Mexico in a market where direct industry talent was limited.",
    meta: ["Direct + Adjacent Industries", "Successful Placement", "2026"],
  },
];

/** Public portfolio display order. */
const PORTFOLIO_ORDER = [
  "hennecke-head-of-service-mexico",
  "lako-sales-engineer-mexico",
  "food-processing-administrative-operations-manager",
  "packaging-automation-sales-manager-mexico",
];

export const portfolioEngagements: SelectedEngagement[] = PORTFOLIO_ORDER.map(
  (slug) => selectedEngagements.find((e) => e.slug === slug)!,
);
