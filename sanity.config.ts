import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { deskStructure } from "./sanity/deskStructure";
import { schemaTypes } from "./sanity/schemaTypes";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  name: "kkds",
  title: "Kalamandapam KKDS",
  projectId,
  dataset,
  basePath: "/studio",
  plugins: [structureTool({ structure: deskStructure })],
  schema: { types: schemaTypes },
});
