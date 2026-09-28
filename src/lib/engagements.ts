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
];
