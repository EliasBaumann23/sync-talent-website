import { defineMcp } from "@lovable.dev/mcp-js";
import listServices from "./tools/list-services";
import listIndustries from "./tools/list-industries";
import getAtlasMethod from "./tools/get-atlas-method";
import listKnowledgeArticles from "./tools/list-knowledge-articles";
import getContactInfo from "./tools/get-contact-info";

export default defineMcp({
  name: "sync-talent-mcp",
  title: "Sync Talent MCP",
  version: "0.1.0",
  instructions:
    "Public tools for Sync Talent — a boutique executive search firm providing industrial hiring intelligence for Mexico. Use these tools to describe services, industries served, the Atlas Method™ methodology, published Knowledge Hub research, and how to contact the firm.",
  tools: [listServices, listIndustries, getAtlasMethod, listKnowledgeArticles, getContactInfo],
});
