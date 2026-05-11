/**
 * GROQ queries for every content type. Written ahead of time; not yet called
 * (the Sanity client stub returns null, which triggers fetcher fallbacks).
 *
 * Each query intentionally matches the runtime TS type defined in
 * `sanity/schemas/<type>.ts` so swapping in real Sanity data requires no
 * downstream component changes.
 */

export const SITE_SETTINGS_QUERY = `
  *[_type == "siteSettings"][0]{
    studioName,
    hero{ wordmark, subhead, subtitle, "image": image.asset->{ "url": url, "alt": altText } },
    mission,
    contact,
    social
  }
`;

export const INSTRUCTORS_QUERY = `
  *[_type == "instructor"] | order(role asc, order asc){
    "id": _id,
    name,
    role,
    title,
    bio,
    "photo": photo.asset->{ "url": url, "alt": altText },
    specialties,
    order
  }
`;

export const CLASS_OFFERINGS_QUERY = `
  *[_type == "classOffering"] | order(order asc){
    "id": _id,
    title,
    level,
    description,
    "image": image.asset->{ "url": url, "alt": altText },
    order
  }
`;

export const CLASS_SCHEDULE_QUERY = `
  *[_type == "classSchedule"][0]{ title, startDateLabel, endDateLabel, days }
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
    "image": image.asset->{ "url": url, "alt": altText },
    videoUrl,
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
    "image": image.asset->{ "url": url, "alt": altText },
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
    "image": image.asset->{ "url": url, "alt": altText },
    signUpUrl,
    upcoming,
    order
  }
`;

export const GALLERY_QUERY = `
  *[_type == "galleryImage"] | order(order asc){
    "id": _id,
    "image": image.asset->{ "url": url, "alt": altText },
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
