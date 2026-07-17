import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const articles = [
  { category: "Atlas Notes", title: "Why Executive Search deserves a better methodology.", readTime: "6 min read" },
  { category: "Decision Intelligence", title: "The hiring decision, reconsidered: from requirement to reasoning.", readTime: "9 min read" },
  { category: "Salary Intelligence", title: "Compensation evidence for Sales Engineers in Mexico.", readTime: "7 min read" },
  { category: "Hiring Guides", title: "Hiring Field Service leadership in Mexico: what to evaluate.", readTime: "8 min read" },
  { category: "Market Reports", title: "Q4 industrial talent evidence: demand, availability, notice periods.", readTime: "9 min read" },
  { category: "Research", title: "Bilingual technical talent across the Bajío corridor.", readTime: "6 min read" },
  { category: "Case Studies", title: "First hires playbook: from Country Manager to Plant leadership.", readTime: "10 min read" },
  { category: "Salary Intelligence", title: "Service Manager compensation benchmarks — industrial machinery.", readTime: "5 min read" },
  { category: "Atlas Notes", title: "Hiring confidence: the metric no one publishes.", readTime: "5 min read" },
];

const categories = [
  "Atlas Notes",
  "Research",
  "Salary Intelligence",
  "Hiring Guides",
  "Market Reports",
  "Case Studies",
  "Decision Intelligence",
] as const;

export default defineTool({
  name: "list_knowledge_articles",
  title: "List Knowledge Hub articles",
  description:
    "Lists articles from the Sync Talent Knowledge Hub. Optionally filter by category (Atlas Notes, Research, Salary Intelligence, Hiring Guides, Market Reports, Case Studies, Decision Intelligence).",
  inputSchema: {
    category: z
      .enum(categories)
      .optional()
      .describe("Optional category to filter by."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ category }) => {
    const filtered = category ? articles.filter((a) => a.category === category) : articles;
    return {
      content: [{ type: "text", text: JSON.stringify(filtered, null, 2) }],
      structuredContent: { articles: filtered, count: filtered.length },
    };
  },
});
