import type { SanityImage, SanitySchema } from "./_shared";

/* ----------------------- Runtime type (used by app) ------------------------ */
export interface SiteSettings {
  studioName: string;
  hero: {
    wordmark: string;
    subhead: string;
    subtitle: string;
    image: SanityImage;
  };
  mission: string;
  contact: {
    email: string;
    phone: string;
    address: string;
    /** Google Maps URL or embed link. */
    mapUrl?: string;
    /** Optional studio hours. Falls back to phone number per Figma to-do. */
    hours?: string;
  };
  social: {
    facebookUrl: string;
    instagramUrl: string;
  };
}

/* ------------------------------ Sanity schema ------------------------------ */
export const siteSettingsSchema: SanitySchema = {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    { name: "studioName", title: "Studio name", type: "string" },
    {
      name: "hero",
      title: "Hero",
      type: "object",
      fields: [
        { name: "wordmark", title: "Hero wordmark", type: "string" },
        { name: "subhead", title: "Hero subheading", type: "string" },
        { name: "subtitle", title: "Hero subtitle copy", type: "text" },
        { name: "image", title: "Hero image", type: "image" },
      ],
    },
    { name: "mission", title: "Mission statement", type: "text" },
    {
      name: "contact",
      title: "Contact info",
      type: "object",
      fields: [
        { name: "email", title: "Studio email", type: "string" },
        { name: "phone", title: "Phone", type: "string" },
        { name: "address", title: "Address", type: "string" },
        { name: "mapUrl", title: "Google Maps URL", type: "url" },
        { name: "hours", title: "Studio hours (optional)", type: "text" },
      ],
    },
    {
      name: "social",
      title: "Social links",
      type: "object",
      fields: [
        { name: "facebookUrl", title: "Facebook URL", type: "url" },
        { name: "instagramUrl", title: "Instagram URL", type: "url" },
      ],
    },
  ],
};
