/**
 * GROQ queries for every content type.
 *
 * Each query matches the runtime TS type in `sanity/schemas/<type>.ts`.
 * Image fields use `lib/sanity/projections.ts` for consistent `{ url, alt }`.
 */
import { imageProjection } from "../projections";

export const SITE_SETTINGS_QUERY = `
  *[_type == "siteSettings" && _id == "siteSettings"][0]{
    studioName,
    hero{
      wordmark,
      subhead,
      subtitle,
      ${imageProjection("image")}
    },
    mission,
    contact,
    social
  }
`;

export const ABOUT_PAGE_QUERY = `
  *[_type == "aboutPage" && _id == "aboutPage"][0]{
    heading,
    paragraphs
  }
`;

export const INSTRUCTORS_QUERY = `
  *[_type == "instructor"] | order(role asc, order asc){
    "id": _id,
    name,
    role,
    title,
    bio,
    ${imageProjection("photo")},
    order
  }
`;

export const CLASS_OFFERINGS_QUERY = `
  *[_type == "classOffering"] | order(order asc){
    "id": _id,
    title,
    level,
    description,
    ${imageProjection("image")},
    order
  }
`;

export const CLASS_SCHEDULE_QUERY = `
  *[_type == "classSchedule" && _id == "classSchedule"][0]{
    title,
    startDateLabel,
    endDateLabel,
    days
  }
`;

export const SCHEDULE_BREAKS_QUERY = `
  *[_type == "scheduleBreak"] | order(order asc){
    "id": _id,
    title,
    dateRange,
    order
  }
`;

export const CLASS_LEVELS_QUERY = `
  *[_type == "classLevel"] | order(order asc){
    "id": _id,
    level,
    name,
    description,
    ${imageProjection("image")},
    "videoUrl": video.asset->url,
    order
  }
`;

export const UPCOMING_EVENTS_QUERY = `
  *[_type == "event" && upcoming == true] | order(date asc){
    "id": _id,
    title,
    "date": date,
    dateLabel,
    location,
    description,
    ${imageProjection("image")},
    ticketsUrl,
    upcoming,
    order
  }
`;

export const UPCOMING_WORKSHOPS_QUERY = `
  *[_type == "workshop" && upcoming == true] | order(date asc){
    "id": _id,
    title,
    "date": date,
    dateLabel,
    description,
    ${imageProjection("image")},
    signUpUrl,
    upcoming,
    order
  }
`;

export const GALLERY_QUERY = `
  *[_type == "galleryImage"] | order(order asc){
    "id": _id,
    ${imageProjection("image")},
    caption,
    category,
    credit,
    feature,
    order
  }
`;

export const TESTIMONIALS_QUERY = `
  *[_type == "testimonial"] | order(order asc){
    "id": _id,
    quote,
    author,
    className,
    order
  }
`;

export const FAQS_QUERY = `
  *[_type == "faq"] | order(order asc){
    "id": _id,
    question,
    answer,
    order
  }
`;

export const ACTIVE_ANNOUNCEMENT_QUERY = `
  *[_type == "announcement" && active == true] | order(date desc)[0]{
    "id": _id,
    title,
    body,
    date,
    active,
    ctaUrl,
    ctaLabel
  }
`;
