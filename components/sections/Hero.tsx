"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";

interface HeroProps {
  wordmark: string;
  subhead: string;
  subtitle: string;
  image: { url: string; alt?: string };
  /** CTA button — defaults to "Learn More" → /about. */
  ctaLabel?: string;
  ctaHref?: string;
}

/**
 * Home page hero. Figma:
 *   • bg gradient: peach (left) → white (right) — horizontal
 *   • Dancer image hugs the right edge, starting near the top of the section
 *   • Wordmark "Kalamandapam" sits high on the left in Oleo Script Swash Caps
 *   • Section is ~720px tall on desktop, shorter on tablet, stacked on phone
 */
export function Hero({
  wordmark,
  subhead,
  subtitle,
  image,
  ctaLabel = "Learn More",
  ctaHref = "/about",
}: HeroProps) {
  /* ------------------------------------------------------------------------
   * Parallax on the dancer image (Framer Motion).
   *
   * PROMPT: To remove the parallax effect, delete the `useScroll` and
   * `useTransform` hooks below and remove `style={{ y: dancerY }}` from the
   * <motion.div> wrapping the dancer image (search this file for "PARALLAX").
   * --------------------------------------------------------------------- */
  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const dancerY = useTransform(
    scrollY,
    [0, 800],
    prefersReducedMotion ? [0, 0] : [0, -120],
  );

  return (
    <section
      className="bg-hero-gradient relative w-full overflow-hidden"
      aria-label="Hero"
    >
      {/* Hero is at least viewport-tall on desktop so the maroon Mission
       * Banner that follows is always parked safely below the fold. The
       * lg:h-[720px] guarantees a comfortable minimum on very short windows. */}
      <div className="relative mx-auto max-w-[1440px] lg:h-[720px] lg:min-h-[100vh]">
        {/* Text content
         * Mobile: flow layout with padding
         * Desktop: positioned absolute high-left so the dancer can overlap */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 flex flex-col items-start gap-5 px-6 pt-10 pb-8 md:px-12 md:pt-12 md:pb-12 lg:absolute lg:left-[113px] lg:top-[100px] lg:max-w-[710px] lg:gap-7 lg:px-0 lg:pt-0 lg:pb-0"
        >
          {/* Wordmark is fluid-sized so it never overflows narrow phones.
           * On a 390px iPhone 14 Pro viewport it sits ~38px which leaves
           * comfortable margin inside our px-6 padding. */}
          <h1 className="font-oleo text-maroon w-full max-w-full text-[clamp(2.25rem,9.5vw,3.25rem)] sm:text-[60px] md:text-[88px] lg:text-[128px] leading-[1.05] tracking-normal sm:tracking-[2px] lg:tracking-[5px]">
            {wordmark}
          </h1>
          <p className="font-rambla text-maroon text-[24px] sm:text-[32px] md:text-[36px] lg:text-[44px] leading-tight">
            {subhead}
          </p>
          <p className="font-rambla text-ink max-w-[625px] text-[16px] sm:text-[20px] md:text-[22px] lg:text-[28px] leading-snug tracking-[0.5px]">
            {subtitle}
          </p>
          <Button href={ctaHref} variant="primary">
            {ctaLabel}
          </Button>
        </motion.div>

        {/* Dancer image — PARALLAX block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          style={{ y: dancerY }}
          className="relative mx-auto -mt-4 aspect-[626/863] w-full max-w-[380px] sm:max-w-[460px] md:max-w-[520px] lg:absolute lg:right-0 lg:top-0 lg:mx-0 lg:mt-0 lg:h-[720px] lg:w-auto lg:max-w-none"
        >
          <Image
            src={image.url}
            alt={image.alt ?? "Kuchipudi dancer"}
            fill
            priority
            sizes="(max-width: 768px) 90vw, (max-width: 1024px) 60vw, 720px"
            className="object-contain object-bottom lg:object-right-bottom"
          />
        </motion.div>
      </div>
    </section>
  );
}
