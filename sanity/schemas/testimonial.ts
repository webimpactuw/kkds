import type { SanitySchema } from "./_shared";

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  /** Class taken (e.g. "Beginner — Adavus"). */
  className?: string;
  order: number;
}

export const testimonialSchema: SanitySchema = {
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    { name: "quote", title: "Quote", type: "text" },
    { name: "author", title: "Author", type: "string" },
    { name: "className", title: "Class", type: "string" },
    { name: "order", title: "Display order", type: "number" },
  ],
};
