"use client";

import { motion } from "framer-motion";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import type { GalleryImageEntry } from "@/sanity/schemas/galleryImage";

interface GalleryFeatureProps {
  feature: GalleryImageEntry;
  /** "single" → one large image; "collage" → 1 large + 2 small alongside. */
  layout: "single" | "collage";
  /** Optional additional images for the collage layout. */
  extras?: GalleryImageEntry[];
}

/**
 * The two feature blocks at the top of /gallery. Figma desktop:
 *   • Block 1: single big image + caption beneath
 *   • Block 2: large image left + two smaller stacked on the right + caption
 *
 * Responsive:
 *   • Mobile: collage stacks into 3 images vertically
 *   • Tablet: same as desktop but with reduced padding
 */
export function GalleryFeature({
  feature,
  layout,
  extras = [],
}: GalleryFeatureProps) {
  return (
    <section className="bg-cream w-full py-12 md:py-16 lg:py-[72px]">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-[100px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6"
        >
          {layout === "single" ? (
            <ImageWithFallback
              src={feature.image.url}
              alt={feature.image.alt ?? feature.caption ?? "Gallery image"}
              sizes="(max-width: 1024px) 90vw, 1224px"
              wrapperClassName="aspect-[1224/739] w-full overflow-hidden rounded-[10px] bg-cream"
              className="rounded-[10px]"
            />
          ) : (
            <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
              <ImageWithFallback
                src={feature.image.url}
                alt={feature.image.alt ?? feature.caption ?? "Gallery image"}
                sizes="(max-width: 1024px) 90vw, 604px"
                wrapperClassName="aspect-[604/801] w-full overflow-hidden rounded-[10px] bg-cream lg:row-span-2"
                className="rounded-[10px]"
              />
              {extras.map((extra, i) => (
                <ImageWithFallback
                  key={extra.id}
                  src={extra.image.url}
                  alt={extra.image.alt ?? extra.caption ?? `Gallery image ${i + 1}`}
                  sizes="(max-width: 1024px) 90vw, 604px"
                  wrapperClassName="aspect-[604/377] w-full overflow-hidden rounded-[10px] bg-cream"
                  className="rounded-[10px]"
                />
              ))}
            </div>
          )}
          {feature.caption && (
            <p className="font-rambla text-body text-ink/80 leading-relaxed lg:text-[20px]">
              {feature.caption}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
