"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Divider } from "./Divider";

interface FaqItemProps {
  question: string;
  answer: string;
  /** Initially-open state (defaults to false). */
  defaultOpen?: boolean;
  index?: number;
}

/**
 * A single FAQ row. Click the question to toggle the answer with a smooth
 * height animation. Chevron rotates 180° on open.
 *
 * Figma: Rambla Regular 24 (#000) question, thin gray divider beneath, chevron
 * icon on the right that flips on open.
 */
export function FaqItem({
  question,
  answer,
  defaultOpen = false,
  index = 0,
}: FaqItemProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="flex flex-col gap-4"
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-6 text-left transition-colors hover:text-maroon"
      >
        <span className="font-rambla text-[20px] lg:text-body-lg text-ink">
          {question}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          aria-hidden="true"
          className="shrink-0 text-maroon"
        >
          <svg width="32" height="20" viewBox="0 0 40 22" fill="none">
            <path
              d="M2 2 L20 19 L38 2"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="font-rambla text-body text-ink/85 pb-4">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
      <Divider />
    </motion.div>
  );
}
