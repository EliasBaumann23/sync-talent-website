import { defineTool } from "@lovable.dev/mcp-js";

const services = [
  {
    name: "Executive Search",
    description:
      "Retained executive search for country leadership, plant leadership, commercial and technical executives in Mexico's industrial sector.",
  },
  {
    name: "Search Blueprint™",
    description:
      "A written definition of the hiring decision: business objectives, decision criteria, evaluation dimensions and evidence required, agreed before search begins.",
  },
  {
    name: "Talent Lens™",
    description:
      "Four-dimensional evaluation framework covering capability evidence, decision behavior, contextual fit and motivation, used across every shortlist candidate.",
  },
  {
    name: "Hiring Confidence Index™",
    description:
      "A decision-support instrument that quantifies confidence across the Talent Lens dimensions so hiring committees can compare finalists on evidence, not impressions.",
  },
  {
    name: "Market Intelligence",
    description:
      "Compensation evidence, availability signals, notice-period patterns and competitor movement across Mexico's industrial corridors.",
  },
];

export default defineTool({
  name: "list_services",
  title: "List Sync Talent services",
  description:
    "Returns Sync Talent's executive search services and proprietary frameworks (Search Blueprint, Talent Lens, Hiring Confidence Index).",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(services, null, 2) }],
    structuredContent: { services },
  }),
});
