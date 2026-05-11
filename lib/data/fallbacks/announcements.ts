import type { Announcement } from "@/sanity/schemas/announcement";

/**
 * No active announcement by default. Set `active: true` here (or via Sanity
 * once wired up) to surface an announcement banner.
 */
export const fallbackAnnouncement: Announcement | null = null;
