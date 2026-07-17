import { defineTool } from "@lovable.dev/mcp-js";

const atlasMethod = {
  name: "The Atlas Method™",
  summary:
    "Sync Talent's five-stage methodology for treating executive hiring as a decision problem rather than a recruitment task.",
  stages: [
    {
      stage: 1,
      name: "Discovery",
      description:
        "The Discovery Experience™ produces the Discovery Canvas — a shared understanding of the business objective the hire must serve.",
    },
    {
      stage: 2,
      name: "Blueprint",
      description:
        "The Search Blueprint™ codifies decision criteria, evaluation dimensions, evidence required and success conditions before search begins.",
    },
    {
      stage: 3,
      name: "Market Mapping",
      description:
        "Systematic mapping of the addressable talent market with compensation, availability and notice-period evidence.",
    },
    {
      stage: 4,
      name: "Evaluation",
      description:
        "Every shortlist candidate is evaluated through the Talent Lens™ across four dimensions with documented evidence.",
    },
    {
      stage: 5,
      name: "Decision",
      description:
        "The Hiring Confidence Index™ quantifies decision confidence so the hiring committee compares finalists on evidence.",
    },
  ],
};

export default defineTool({
  name: "get_atlas_method",
  title: "Get the Atlas Method",
  description:
    "Returns a structured description of Sync Talent's proprietary Atlas Method™ — the five-stage executive search methodology.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(atlasMethod, null, 2) }],
    structuredContent: atlasMethod,
  }),
});
