import type { SanityImage, SanitySchema } from "./_shared";

export interface Workshop {
  id: string;
  title: string;
  date: string;
  dateLabel: string;
  description: string;
  image: SanityImage;
  /** Sign-up URL — wired to the "Sign Up" button. */
  signUpUrl?: string;
  upcoming: boolean;
  order: number;
}

export const workshopSchema: SanitySchema = {
  name: "workshop",
  title: "Workshop",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "date", title: "Date (ISO)", type: "datetime" },
    { name: "dateLabel", title: "Date label (display)", type: "string" },
    { name: "description", title: "Description", type: "text" },
    { name: "image", title: "Image", type: "image" },
    { name: "signUpUrl", title: "Sign Up URL", type: "url" },
    {
      name: "upcoming",
      title: "Upcoming?",
      type: "boolean",
      initialValue: true,
    },
    { name: "order", title: "Display order", type: "number" },
  ],
};
