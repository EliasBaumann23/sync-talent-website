import { defineTool } from "@lovable.dev/mcp-js";

const industries = [
  "Industrial Automation & Robotics",
  "Packaging Machinery",
  "Manufacturing & Metalworking",
  "Automotive & Mobility Suppliers",
  "Food & Beverage Processing",
  "Building Materials & Construction Technology",
  "Energy, Utilities & Sustainability",
  "Logistics & Industrial Distribution",
];

export default defineTool({
  name: "list_industries",
  title: "List industries served",
  description:
    "Returns the industrial sectors Sync Talent serves across Mexico for European, US and Canadian companies.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(industries, null, 2) }],
    structuredContent: { industries },
  }),
});
