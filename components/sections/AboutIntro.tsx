"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { AboutPage } from "@/sanity/schemas/aboutPage";

interface AboutIntroProps {
  content: AboutPage;
}

/** School-wide intro copy at the top of the About page. */
export function AboutIntro({ content }: AboutIntroProps) {
  return (
    <section className="bg-cream w-full py-16 md:py-24 lg:py-[72px]">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-[136px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto flex max-w-[900px] flex-col gap-8"
        >
          <SectionHeading>{content.heading}</SectionHeading>
          <div className="flex flex-col gap-5">
            {content.paragraphs.map((paragraph, i) => (
              <p
                key={i}
                className="font-rambla text-body text-ink leading-[30px] tracking-[0.5px]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
