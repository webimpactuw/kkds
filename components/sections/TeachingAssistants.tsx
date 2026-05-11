"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { InstructorCard } from "@/components/ui/InstructorCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils/cn";
import type { Instructor } from "@/sanity/schemas/instructor";

interface TeachingAssistantsProps {
  assistants: Instructor[];
}

/* Breakpoint → how many cards visible at once. Mirrors the Figma mobile spec
 * (1 card with side arrows + dots) and scales up gracefully on tablet/desktop. */
const VISIBLE_BY_BREAKPOINT = { base: 1, md: 2, lg: 4 } as const;

function getVisibleCount(width: number): number {
  if (width >= 1024) return VISIBLE_BY_BREAKPOINT.lg;
  if (width >= 768) return VISIBLE_BY_BREAKPOINT.md;
  return VISIBLE_BY_BREAKPOINT.base;
}

/**
 * About-Us "Teaching Assistants" carousel. Figma (mobile):
 *   • One assistant card visible at a time, framed by left/right arrow buttons
 *   • Pagination dots beneath the card
 *
 * Responsive: visible-count scales up (1 → 2 → 4) at md / lg breakpoints, with
 * arrow + dot navigation working at every size.
 */
export function TeachingAssistants({ assistants }: TeachingAssistantsProps) {
  const [visibleCount, setVisibleCount] = useState<number>(1);
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  /* Track viewport width via matchMedia so visible-count updates on resize. */
  useEffect(() => {
    if (typeof window === "undefined") return;
    const update = () => setVisibleCount(getVisibleCount(window.innerWidth));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  /* Group assistants into pages of `visibleCount`. */
  const pages = useMemo(() => {
    if (assistants.length === 0) return [];
    const result: Instructor[][] = [];
    for (let i = 0; i < assistants.length; i += visibleCount) {
      result.push(assistants.slice(i, i + visibleCount));
    }
    return result;
  }, [assistants, visibleCount]);

  /* Keep page index valid when the breakpoint changes the page count. */
  useEffect(() => {
    if (page >= pages.length) setPage(Math.max(0, pages.length - 1));
  }, [page, pages.length]);

  if (assistants.length === 0 || pages.length === 0) return null;

  const goPrev = () => {
    setDirection(-1);
    setPage((p) => (p === 0 ? pages.length - 1 : p - 1));
  };
  const goNext = () => {
    setDirection(1);
    setPage((p) => (p === pages.length - 1 ? 0 : p + 1));
  };
  const jumpTo = (i: number) => {
    setDirection(i > page ? 1 : -1);
    setPage(i);
  };

  const currentPage = pages[page] ?? pages[0]!;

  return (
    <section className="bg-cream w-full py-16 md:py-24 lg:py-[72px]">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-[136px]">
        <div className="flex flex-col items-center gap-10 lg:gap-12">
          <SectionHeading>Teaching Assistants</SectionHeading>

          {/* Carousel row: arrows + cards window */}
          <div className="flex w-full items-center gap-3 sm:gap-4 md:gap-6">
            <CarouselArrow
              direction="left"
              onClick={goPrev}
              disabled={pages.length < 2}
            />
            <div className="relative min-h-[340px] flex-1 overflow-hidden sm:min-h-[380px]">
              <AnimatePresence initial={false} mode="wait" custom={direction}>
                <motion.div
                  key={page}
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -40 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className={cn(
                    "grid w-full grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2",
                    visibleCount === 4 && "lg:grid-cols-4",
                  )}
                >
                  {currentPage.map((assistant, i) => (
                    <div
                      key={assistant.id}
                      className="mx-auto w-full max-w-[256px]"
                    >
                      <InstructorCard
                        instructor={assistant}
                        variant="assistant"
                        index={i}
                      />
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
            <CarouselArrow
              direction="right"
              onClick={goNext}
              disabled={pages.length < 2}
            />
          </div>

          {/* Pagination dots */}
          {pages.length > 1 && (
            <div
              role="tablist"
              aria-label="Teaching Assistants pages"
              className="flex items-center gap-2"
            >
              {pages.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === page}
                  aria-label={`Go to page ${i + 1}`}
                  onClick={() => jumpTo(i)}
                  className={cn(
                    "size-3 rounded-full transition-all",
                    i === page
                      ? "bg-maroon scale-110"
                      : "bg-maroon/30 hover:bg-maroon/60",
                  )}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function CarouselArrow({
  direction,
  onClick,
  disabled,
}: {
  direction: "left" | "right";
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === "left" ? "Previous assistants" : "Next assistants"}
      whileHover={disabled ? undefined : { scale: 1.08 }}
      whileTap={disabled ? undefined : { scale: 0.94 }}
      className={cn(
        "flex size-10 shrink-0 items-center justify-center rounded-full",
        "bg-maroon text-white shadow-[0_4px_12px_rgba(131,0,51,0.25)]",
        "transition-colors hover:bg-wine-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-cream",
        "disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none",
        "md:size-12",
      )}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        aria-hidden="true"
        className={direction === "right" ? "" : "rotate-180"}
      >
        <path
          d="M2 7h10M8 3l4 4-4 4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.button>
  );
}
