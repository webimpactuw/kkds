/**
 * Barrel export for every Sanity schema in this directory.
 *
 * When Sanity Studio is wired up, the studio config will import this array
 * and pass it to `defineConfig({ schema: { types: schemaTypes } })`.
 */
import { aboutPageSchema } from "./aboutPage";
import { announcementSchema } from "./announcement";
import { classLevelSchema } from "./classLevel";
import { classOfferingSchema } from "./classOffering";
import { classScheduleSchema } from "./classSchedule";
import { eventSchema } from "./event";
import { faqSchema } from "./faq";
import { galleryImageSchema } from "./galleryImage";
import { instructorSchema } from "./instructor";
import { scheduleBreakSchema } from "./scheduleBreak";
import { siteSettingsSchema } from "./siteSettings";
import { testimonialSchema } from "./testimonial";
import { workshopSchema } from "./workshop";

export const schemaTypes = [
  announcementSchema,
  aboutPageSchema,
  classLevelSchema,
  classOfferingSchema,
  classScheduleSchema,
  eventSchema,
  faqSchema,
  galleryImageSchema,
  instructorSchema,
  scheduleBreakSchema,
  siteSettingsSchema,
  testimonialSchema,
  workshopSchema,
];

/* Re-export individual schemas and types for direct consumption. */
export * from "./_shared";
export * from "./aboutPage";
export * from "./announcement";
export * from "./classLevel";
export * from "./classOffering";
export * from "./classSchedule";
export * from "./event";
export * from "./faq";
export * from "./galleryImage";
export * from "./instructor";
export * from "./scheduleBreak";
export * from "./siteSettings";
export * from "./testimonial";
export * from "./workshop";
