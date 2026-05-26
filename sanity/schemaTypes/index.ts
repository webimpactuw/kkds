import { aboutPage } from "./aboutPage";
import { classLevel } from "./classLevel";
import { classOffering, classSchedule, scheduleBreak } from "./classes";
import {
  announcement,
  event,
  faq,
  galleryImage,
  testimonial,
  workshop,
} from "./content";
import { instructor } from "./instructor";
import { siteSettings } from "./siteSettings";

export const schemaTypes = [
  siteSettings,
  aboutPage,
  instructor,
  classLevel,
  classOffering,
  classSchedule,
  scheduleBreak,
  event,
  workshop,
  galleryImage,
  faq,
  testimonial,
  announcement,
];
