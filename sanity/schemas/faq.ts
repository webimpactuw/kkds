import type { SanitySchema } from "./_shared";

export interface Faq {
  id: string;
  question: string;
  answer: string;
  order: number;
}

export const faqSchema: SanitySchema = {
  name: "faq",
  title: "FAQ",
  type: "document",
  fields: [
    { name: "question", title: "Question", type: "string" },
    { name: "answer", title: "Answer", type: "text" },
    { name: "order", title: "Display order", type: "number" },
  ],
};
