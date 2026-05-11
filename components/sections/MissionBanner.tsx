"use client";

import { motion } from "framer-motion";

interface MissionBannerProps {
  mission: string;
}

/**
 * Maroon strip directly under the Hero. Figma:
 *   • bg #830033, py-[72px], px-[136px] on desktop
 *   • Rambla Bold 24, leading 48, white, centered
 */
export function MissionBanner({ mission }: MissionBannerProps) {
  return (
    <section className="bg-maroon w-full py-12 md:py-16 lg:py-[72px]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-[1168px] px-6 md:px-12 lg:px-[136px]"
      >
        <p className="font-rambla text-center text-[18px] font-bold text-white sm:text-[20px] lg:text-body-lg lg:leading-[48px]">
          {mission}
        </p>
      </motion.div>
    </section>
  );
}
