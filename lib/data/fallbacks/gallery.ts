import type { GalleryImageEntry } from "@/sanity/schemas/galleryImage";

/**
 * Gallery fallbacks. We intentionally leave the image URL empty so the
 * `ImageWithFallback` component renders the brand-themed placeholder pattern.
 * Real photos will be supplied via Sanity once the studio uploads them.
 */
const placeholder = {
  url: "",
  alt: "Gallery photo coming soon",
};

export const fallbackGalleryImages: GalleryImageEntry[] = [
  /* ---------- Two feature blocks at the top of /gallery ---------- */
  {
    id: "feature-1",
    image: placeholder,
    caption:
      "Annual Recital performance — our advanced students close the evening with a Tarangam, balancing on the rim of a brass plate.",
    category: "performance",
    feature: true,
    order: 0,
  },
  {
    id: "feature-2",
    image: placeholder,
    caption:
      "Classroom moments — daily training, deep focus, and the joy of community that defines life at Kalamandapam.",
    category: "class",
    feature: true,
    order: 1,
  },

  /* ---------- 10-image photo grid (2-col on desktop, 1-col on mobile) ---- */
  ...Array.from({ length: 10 }).map<GalleryImageEntry>((_, i) => {
    const cats = ["performance", "class", "event", "studio"] as const;
    return {
      id: `grid-${i + 1}`,
      image: placeholder,
      category: cats[i % 4] ?? "other",
      feature: false,
      order: i + 2,
    };
  }),
];
