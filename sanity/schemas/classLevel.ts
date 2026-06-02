import type { SanityImage, SanitySchema } from "./_shared";
import type { ClassLevel as Level } from "./classOffering";

/**
 * Long-form description of a class level for the /classes page. Each Class
 * Level Card is a row with a video/image thumbnail on the left and a name +
 * description block on the right.
 */
export interface ClassLevelDetail {
  id: string;
  level: Level;
  /** Display name (e.g. "Beginner", "Adavus", etc.). */
  name: string;
  description: string;
  /** Poster / thumbnail image. */
  image: SanityImage;
  /** Resolved video URL from Sanity file asset or local fallback path. */
  videoUrl?: string;
  /** MIME type from Sanity asset (e.g. video/mp4). */
  videoMimeType?: string;
  order: number;
}

export const classLevelSchema: SanitySchema = {
  name: "classLevel",
  title: "Class Level",
  type: "document",
  fields: [
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
    { name: "name", title: "Display name", type: "string" },
    { name: "description", title: "Description", type: "text" },
    { name: "image", title: "Image", type: "image" },
    { name: "video", title: "Class demo video", type: "file" },
    { name: "order", title: "Display order", type: "number" },
  ],
};
