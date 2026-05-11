import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * tailwind-merge needs to know about our custom design-token utilities so it
 * doesn't confuse them with built-in conflict groups. Specifically:
 *   - `text-body`, `text-body-lg`, `text-footer`, `text-banner`,
 *     `text-section-heading`, `text-hero-wordmark`, `text-hero-subhead`,
 *     `text-hero-copy` are FONT SIZES (not text colors). Without this config,
 *     twMerge sees `text-white text-body-lg` and assumes both are text-colors,
 *     dropping the white.
 *   - `font-rambla`, `font-oleo`, `font-inter`, `font-montserrat` are font
 *     families.
 *   - `bg-maroon`, `bg-wine`, `bg-gold`, `bg-cream` etc are colors.
 *   - `rounded-card`, `rounded-send` are border-radii.
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        {
          text: [
            "hero-wordmark",
            "hero-subhead",
            "hero-copy",
            "banner",
            "section-heading",
            "body-lg",
            "body",
            "footer",
          ],
        },
      ],
      "font-family": [
        { font: ["rambla", "oleo", "inter", "montserrat"] },
      ],
      rounded: [{ rounded: ["card", "send"] }],
    },
  },
});

/**
 * Conditionally compose Tailwind classes, deduplicating conflicting utilities.
 * Usage: cn("p-4", isActive && "bg-maroon", className)
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
