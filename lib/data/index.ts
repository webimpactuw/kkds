/**
 * Public data API. Every page component imports its data through this module.
 *
 * Each fetcher follows the same pattern (per CLAUDE.md):
 *
 *   try {
 *     const data = await sanityClient.fetch(QUERY)
 *     if (data) return data
 *     return fallback
 *   } catch {
 *     return fallback
 *   }
 *
 * The Sanity client stub currently returns null, so every fetcher transparently
 * returns its hardcoded fallback. When Sanity is wired up, no page code needs
 * to change — fetchers automatically begin returning live CMS data.
 */
import { sanityClient } from "@/lib/sanity/client";
import {
  ABOUT_PAGE_QUERY,
  ACTIVE_ANNOUNCEMENT_QUERY,
  CLASS_OFFERINGS_QUERY,
  CLASS_SCHEDULE_QUERY,
  FAQS_QUERY,
  GALLERY_QUERY,
  INSTRUCTORS_QUERY,
  SCHEDULE_BREAKS_QUERY,
  SITE_SETTINGS_QUERY,
  TESTIMONIALS_QUERY,
  UPCOMING_EVENTS_QUERY,
  UPCOMING_WORKSHOPS_QUERY,
} from "@/lib/sanity/queries";
import {
  fallbackAboutPage,
  fallbackAnnouncement,
  fallbackClassOfferings,
  fallbackClassSchedule,
  fallbackEvents,
  fallbackFaqs,
  fallbackGalleryImages,
  fallbackInstructors,
  fallbackScheduleBreaks,
  fallbackSiteSettings,
  fallbackTestimonials,
  fallbackWorkshops,
} from "./fallbacks";

import type { AboutPage } from "@/sanity/schemas/aboutPage";
import type { Announcement } from "@/sanity/schemas/announcement";
import type { ClassOffering } from "@/sanity/schemas/classOffering";
import type { ClassSchedule } from "@/sanity/schemas/classSchedule";
import type { KkdsEvent } from "@/sanity/schemas/event";
import type { Faq } from "@/sanity/schemas/faq";
import type { GalleryImageEntry } from "@/sanity/schemas/galleryImage";
import type { Instructor } from "@/sanity/schemas/instructor";
import type { ScheduleBreak } from "@/sanity/schemas/scheduleBreak";
import type { SiteSettings } from "@/sanity/schemas/siteSettings";
import type { Testimonial } from "@/sanity/schemas/testimonial";
import type { Workshop } from "@/sanity/schemas/workshop";

/* -------------------------------------------------------------------------- */
/*  Generic fetcher helper                                                     */
/* -------------------------------------------------------------------------- */

async function withFallback<T>(
  query: string,
  fallback: T,
  isPresent: (value: unknown) => boolean = defaultIsPresent,
): Promise<T> {
  try {
    const data = await sanityClient.fetch<T>(query);
    if (isPresent(data)) return data as T;
    return fallback;
  } catch {
    return fallback;
  }
}

function defaultIsPresent(value: unknown): boolean {
  if (value === null || value === undefined) return false;
  if (Array.isArray(value)) return value.length > 0;
  return true;
}

/**
 * For list content where an empty Sanity result is valid (e.g. no workshops yet).
 * Falls back only when Sanity is unavailable (null) or the fetch throws.
 */
async function withListFallback<T>(query: string, fallback: T[]): Promise<T[]> {
  try {
    const data = await sanityClient.fetch<T[]>(query);
    if (data === null || data === undefined) return fallback;
    return data;
  } catch {
    return fallback;
  }
}

/* -------------------------------------------------------------------------- */
/*  Public fetchers                                                            */
/* -------------------------------------------------------------------------- */

export function getSiteSettings(): Promise<SiteSettings> {
  return withFallback<SiteSettings>(SITE_SETTINGS_QUERY, fallbackSiteSettings);
}

export function getAboutPage(): Promise<AboutPage> {
  return withFallback<AboutPage>(ABOUT_PAGE_QUERY, fallbackAboutPage);
}

export function getInstructors(): Promise<Instructor[]> {
  return withFallback<Instructor[]>(INSTRUCTORS_QUERY, fallbackInstructors);
}

export function getClassOfferings(): Promise<ClassOffering[]> {
  return withFallback<ClassOffering[]>(
    CLASS_OFFERINGS_QUERY,
    fallbackClassOfferings,
  );
}

export function getClassSchedule(): Promise<ClassSchedule> {
  return withFallback<ClassSchedule>(CLASS_SCHEDULE_QUERY, fallbackClassSchedule);
}

export function getScheduleBreaks(): Promise<ScheduleBreak[]> {
  return withFallback<ScheduleBreak[]>(
    SCHEDULE_BREAKS_QUERY,
    fallbackScheduleBreaks,
  );
}

export { getClassLevels } from "./classLevels";

export function getUpcomingEvents(): Promise<KkdsEvent[]> {
  return withListFallback(UPCOMING_EVENTS_QUERY, fallbackEvents);
}

export function getUpcomingWorkshops(): Promise<Workshop[]> {
  return withListFallback(UPCOMING_WORKSHOPS_QUERY, fallbackWorkshops);
}

export function getGalleryImages(): Promise<GalleryImageEntry[]> {
  return withFallback<GalleryImageEntry[]>(GALLERY_QUERY, fallbackGalleryImages);
}

export function getFaqs(): Promise<Faq[]> {
  return withFallback<Faq[]>(FAQS_QUERY, fallbackFaqs);
}

export function getTestimonials(): Promise<Testimonial[]> {
  return withFallback<Testimonial[]>(TESTIMONIALS_QUERY, fallbackTestimonials);
}

export function getActiveAnnouncement(): Promise<Announcement | null> {
  /* Announcement may legitimately be null when none is active. */
  return withFallback<Announcement | null>(
    ACTIVE_ANNOUNCEMENT_QUERY,
    fallbackAnnouncement,
    (v) => v !== null && v !== undefined,
  );
}
