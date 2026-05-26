import { sanityImageField, type SanityImage, type SanitySchema } from "./_shared";

export type GalleryCategory =
  | "performance"
  | "class"
  | "event"
  | "studio"
  | "other";

export interface GalleryImageEntry {
  id: string;
  image: SanityImage;
  caption?: string;
  category: GalleryCategory;
  /** Optional credit / photographer attribution. */
  credit?: string;
  order: number;
  /** If true, render full-width (used for the two feature blocks on /gallery). */
  feature?: boolean;
}

export const galleryImageSchema: SanitySchema = {
  name: "galleryImage",
  title: "Gallery Image",
  type: "document",
  fields: [
    sanityImageField("image", "Image"),
    { name: "caption", title: "Caption", type: "text" },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Performance", value: "performance" },
          { title: "Class", value: "class" },
          { title: "Event", value: "event" },
          { title: "Studio", value: "studio" },
          { title: "Other", value: "other" },
        ],
      },
    },
    { name: "credit", title: "Credit", type: "string" },
    { name: "order", title: "Display order", type: "number" },
    { name: "feature", title: "Feature image?", type: "boolean" },
  ],
  preview: {
    select: { title: "caption", subtitle: "category", media: "image" },
  },
};
