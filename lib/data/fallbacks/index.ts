/**
 * Barrel for fallback content. Each fetcher in `lib/data/*.ts` imports its
 * fallback from here and falls back to it when Sanity returns no data.
 */
export { fallbackAnnouncement } from "./announcements";
export { fallbackClassLevels } from "./classLevels";
export { fallbackClassOfferings } from "./classOfferings";
export { fallbackClassSchedule } from "./classSchedule";
export { fallbackEvents } from "./events";
export { fallbackFaqs } from "./faqs";
export { fallbackGalleryImages } from "./gallery";
export { fallbackInstructors } from "./instructors";
export { fallbackScheduleBreaks } from "./scheduleBreaks";
export { fallbackSiteSettings } from "./siteSettings";
export { fallbackTestimonials } from "./testimonials";
export { fallbackWorkshops } from "./workshops";
