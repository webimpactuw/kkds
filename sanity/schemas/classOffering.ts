import type { SanityImage, SanitySchema } from "./_shared";

export type ClassLevel = "beginner" | "intermediate" | "advanced";

/**
 * High-level class card shown on the Home page (Classes Offered grid).
 */
export interface ClassOffering {
  id: string;
  title: string;
  level: ClassLevel;
  /** Short blurb shown in the cream panel below the card image. */
  description: string;
  image: SanityImage;
  order: number;
}

export const classOfferingSchema: SanitySchema = {
  name: "classOffering",
  title: "Class Offering",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    {
      name: "level",
      title: "Level",
      type: "string",
      options: {
        list: [
          { title: "Beginner", value: "beginner" },
          { title: "Intermediate", value: "intermediate" },
          { title: "Advanced", value: "advanced" },
        ],
      },
    },
    { name: "description", title: "Description", type: "text" },
    { name: "image", title: "Image", type: "image" },
    { name: "order", title: "Display order", type: "number" },
  ],
  preview: { select: { title: "title", subtitle: "level", media: "image" } },
};
