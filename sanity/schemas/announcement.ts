import type { SanitySchema } from "./_shared";

/**
 * Banner / strip announcements (optional UI surface). Kept for future use.
 */
export interface Announcement {
  id: string;
  title: string;
  body: string;
  /** ISO date used for ordering. */
  date: string;
  /** Only `active === true` announcements are surfaced. */
  active: boolean;
  /** Optional CTA URL. */
  ctaUrl?: string;
  ctaLabel?: string;
}

export const announcementSchema: SanitySchema = {
  name: "announcement",
  title: "Announcement",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "body", title: "Body", type: "text" },
    { name: "date", title: "Date", type: "datetime" },
    { name: "active", title: "Active?", type: "boolean", initialValue: false },
    { name: "ctaUrl", title: "CTA URL", type: "url" },
    { name: "ctaLabel", title: "CTA label", type: "string" },
  ],
};
