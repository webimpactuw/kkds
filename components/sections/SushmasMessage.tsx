"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Instructor } from "@/sanity/schemas/instructor";

interface SushmasMessageProps {
  founder: Instructor;
}

/**
 * About-Us page hero section. Figma:
 *   • bg cream
 *   • Left column: title (Rambla Bold 48 maroon) + italic role + body paragraphs
 *   • Right column: large rounded portrait (579×690 desktop)
 *   • Stacks on mobile (portrait first, then text)
 */
export function SushmasMessage({ founder }: SushmasMessageProps) {
  const paragraphs = founder.bio.split(/\n\s*\n/);

  return (
    <section className="bg-cream w-full py-16 md:py-24 lg:py-[72px]">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-[136px]">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[527px_579px] lg:gap-[93px]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-3 lg:order-1 order-2"
          >
            <SectionHeading align="left">
              {founder.name}&rsquo;s Message
            </SectionHeading>
            {founder.title && (
              <p className="font-inter italic text-[20px] lg:text-body-lg text-ink leading-snug lg:leading-[70px]">
                {founder.title}
              </p>
            )}
            <div className="flex flex-col gap-5 pt-2">
              {paragraphs.map((para, i) => (
                <p
                  key={i}
                  className="font-inter text-body text-ink leading-[30px]"
                >
                  {para}
                </p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative aspect-[579/690] w-full overflow-hidden rounded-[10px] bg-cream shadow-[0_8px_24px_rgba(0,0,0,0.18)] lg:order-2 order-1"
          >
            <Image
              src={founder.photo.url}
              alt={founder.photo.alt ?? `${founder.name}, Founder & Instructor`}
              fill
              sizes="(max-width: 1024px) 100vw, 579px"
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
