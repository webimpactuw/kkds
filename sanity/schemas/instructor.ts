import type { SanityImage, SanitySchema } from "./_shared";

export type InstructorRole = "founder" | "youth" | "assistant";

export interface Instructor {
  /** Stable id for `key` props. */
  id: string;
  name: string;
  role: InstructorRole;
  /** Short title shown under the name (e.g. "Founder & Instructor"). */
  title?: string;
  bio: string;
  photo: SanityImage;
  /** Order within the instructor's role group (lower = earlier). */
  order: number;
  specialties?: string[];
}

export const instructorSchema: SanitySchema = {
  name: "instructor",
  title: "Instructor",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string" },
    {
      name: "role",
      title: "Role",
      type: "string",
      options: {
        list: [
          { title: "Founder / Lead", value: "founder" },
          { title: "Youth Instructor", value: "youth" },
          { title: "Teaching Assistant", value: "assistant" },
        ],
      },
    },
    { name: "title", title: "Title (e.g. Founder & Instructor)", type: "string" },
    { name: "bio", title: "Biography", type: "text" },
    { name: "photo", title: "Portrait", type: "image" },
    {
      name: "specialties",
      title: "Specialties",
      type: "array",
      of: [{ type: "string" }],
    },
    { name: "order", title: "Display order", type: "number" },
  ],
  preview: { select: { title: "name", subtitle: "role", media: "photo" } },
};
