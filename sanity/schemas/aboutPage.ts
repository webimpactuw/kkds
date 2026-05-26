/** About page intro content (singleton in Sanity). */
export interface AboutPage {
  heading: string;
  paragraphs: string[];
}

/** Plain schema stub kept for documentation; Studio uses sanity/schemaTypes/aboutPage.ts */
export const aboutPageSchema = {
  name: "aboutPage",
  title: "About Page",
  type: "document" as const,
  fields: [],
};
