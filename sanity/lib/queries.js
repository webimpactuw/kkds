import { groq } from 'next-sanity'

// Fetched once and shared across the home/contact/classes pages.
export const SITE_SETTINGS_QUERY = groq`
  *[_type == "siteSettings" && _id == "siteSettings"][0]{
    title,
    heroTitle,
    heroSubtitle,
    heroDescription,
    heroImage,
    missionStatement,
    scheduleImage,
    registrationLink,
    address,
    mapImage,
    email,
    phone,
    hours,
    socialLinks
  }
`

export const CLASSES_QUERY = groq`
  *[_type == "class"] | order(order asc, title asc){
    _id,
    title,
    "slug": slug.current,
    order,
    shortDescription,
    description,
    image,
    registrationLink
  }
`

export const FAQS_QUERY = groq`
  *[_type == "faq"] | order(order asc, _createdAt asc){
    _id,
    question,
    answer,
    order
  }
`

export const FEATURED_EVENTS_QUERY = groq`
  *[_type == "event" && featured == true] | order(date asc)[0...3]{
    _id,
    title,
    "slug": slug.current,
    date,
    endDate,
    location,
    description,
    image,
    registrationLink
  }
`

export const ALL_EVENTS_QUERY = groq`
  *[_type == "event"] | order(date asc){
    _id,
    title,
    "slug": slug.current,
    date,
    endDate,
    location,
    description,
    image,
    registrationLink
  }
`

export const INSTRUCTORS_BY_ROLE_QUERY = groq`
  {
    "founders": *[_type == "instructor" && role == "founder"] | order(order asc){_id, name, bio, image, role},
    "youth":    *[_type == "instructor" && role == "youth"]    | order(order asc){_id, name, bio, image, role},
    "tas":      *[_type == "instructor" && role == "ta"]       | order(order asc){_id, name, bio, image, role},
    "dancers":  *[_type == "instructor" && role == "dancer"]   | order(order asc){_id, name, bio, image, role}
  }
`
