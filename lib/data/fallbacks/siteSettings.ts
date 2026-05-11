import type { SiteSettings } from "@/sanity/schemas/siteSettings";

/**
 * Fallback site-wide content. Sourced from the Figma file. Editable in Sanity
 * once the studio is wired up (every field maps 1:1 to `siteSettings.ts`
 * schema).
 */
export const fallbackSiteSettings: SiteSettings = {
  studioName: "Kalamandapam Kuchipudi Dance School",

  hero: {
    wordmark: "Kalamandapam",
    subhead: "Kuchipudi Dance School",
    subtitle:
      "Discover the vibrant world of Kuchipudi dance at our studio in Sammamish, Washington.",
    image: {
      url: "/images/hero/dancer.png",
      alt: "Kuchipudi dancer in traditional costume",
    },
  },

  mission:
    "At Kalamandapam, we believe in the power of dance to inspire, educate, and connect people. Our experienced instructors are passionate about sharing their knowledge and expertise, ensuring that each student receives personalized attention to develop their skills, grace, and confidence. Through a blend of traditional techniques and modern teaching methods, we create a dynamic learning experience that celebrates the heritage of Kuchipudi while encouraging individual expression.",

  contact: {
    email: "info@kalamandapam.com",
    phone: "Phone number coming soon",
    address: "3042 245th Ave SE, Sammamish, WA 98075, USA",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=3042+245th+Ave+SE%2C+Sammamish%2C+WA+98075",
    hours: "By appointment — please call or email to confirm class times.",
  },

  social: {
    facebookUrl: "https://www.facebook.com/",
    instagramUrl: "https://www.instagram.com/",
  },
};
