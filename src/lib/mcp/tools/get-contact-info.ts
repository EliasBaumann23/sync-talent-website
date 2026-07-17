import { defineTool } from "@lovable.dev/mcp-js";

const contact = {
  company: "Sync Talent",
  positioning: "Industrial Hiring Intelligence for Mexico",
  serves: "European, US and Canadian industrial companies operating in Mexico.",
  contactPage: "/contact",
  responseTime: "Within one business day",
  nextSteps:
    "Send a brief describing the role, timeline and target market via the contact page, or schedule a Discovery Experience™ consultation.",
};

export default defineTool({
  name: "get_contact_info",
  title: "Get Sync Talent contact information",
  description:
    "Returns how to contact Sync Talent and start a search engagement, including the contact page and expected response time.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(contact, null, 2) }],
    structuredContent: contact,
  }),
});
