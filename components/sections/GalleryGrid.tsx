"use client";

import { motion } from "framer-motion";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import type { GalleryImageEntry } from "@/sanity/schemas/galleryImage";

interface GalleryGridProps {
  images: GalleryImageEntry[];
}

/**
 * 2-column photo grid for the bottom of /gallery.
 *
 * Responsive (per user direction since mobile Figma is missing):
 *   • Mobile: 1 image per row
 *   • Tablet / desktop: 2 images per row
 *
 * Each tile uses a Figma-spec `aspect-[615/385]`.
 */
export function GalleryGrid({ images }: GalleryGridProps) {
  return (
    <section className="bg-cream w-full pb-16 md:pb-24 lg:pb-[120px]">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-[100px]">
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          {images.map((entry, i) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
              whileHover={{ scale: 1.01 }}
            >
              <ImageWithFallback
                src={entry.image.url}
                alt={entry.image.alt ?? entry.caption ?? "Kalamandapam gallery"}
                sizes="(max-width: 768px) 90vw, 615px"
                wrapperClassName="aspect-[615/385] w-full overflow-hidden rounded-[10px] bg-cream"
                className="rounded-[10px]"
              />
              {entry.caption && (
                <p className="font-rambla text-body text-ink/70 mt-3">
                  {entry.caption}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
