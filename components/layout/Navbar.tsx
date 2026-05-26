"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils/cn";
import { Button } from "@/components/ui/Button";
import { Logo } from "./Logo";
import { NAV_LINKS } from "./navLinks";

/**
 * Sticky top navigation with desktop link row + mobile hamburger drawer.
 *
 * Figma:
 *   • Desktop: bg #830033, 86px tall, px-[64px], py-[12px]
 *   • Mobile:  bg #830033, 99px tall, px-6, hamburger icon
 *   • Drawer drops DOWN from below the nav bar (per user choice)
 *   • Active link: gold underline accent (extending Figma "Variant2" pattern)
 */
export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  /* Close drawer whenever the route changes. */
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  /* Lock body scroll while mobile drawer is open. */
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    pathname === href || pathname?.startsWith(`${href}/`);

  const isStudio = pathname?.startsWith("/studio");

  return (
    <header
      className={cn("z-50 w-full", isStudio ? "relative" : "sticky top-0")}
    >
      <div className="bg-maroon shadow-[0_2px_18px_rgba(0,0,0,0.18)]">
        <div className="mx-auto flex h-[86px] max-w-[1440px] items-center justify-between px-6 md:h-[86px] md:px-12 lg:px-[64px]">
          <Logo />

          {/* Desktop links */}
          <nav
            aria-label="Primary"
            className="hidden lg:flex items-center gap-[32px]"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-rambla text-[20px] font-bold text-white transition-colors hover:text-gold",
                  "relative pb-1",
                  isActive(link.href) &&
                    "after:absolute after:-bottom-0.5 after:left-0 after:right-0 after:h-[2px] after:bg-gold",
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button href="/contact" variant="gold">
              Contact Us
            </Button>
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-drawer"
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden inline-flex size-12 items-center justify-center rounded-md text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            <HamburgerIcon open={open} />
          </button>
        </div>
      </div>

      {/* Mobile drawer (drops DOWN beneath navbar) */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-drawer"
            key="mobile-drawer"
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
            className="lg:hidden bg-maroon px-6 pb-6 pt-2 shadow-[0_12px_24px_rgba(0,0,0,0.25)]"
          >
            <nav aria-label="Mobile" className="flex flex-col gap-2 pb-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "font-rambla text-[20px] font-bold text-white",
                    "rounded-md px-4 py-3 transition-colors hover:bg-white/10",
                    isActive(link.href) && "bg-white/10 text-gold",
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-4 pt-3">
                {/* Full-width Contact Us — left/right edges align with the
                 * nav link rows above (link `px-4` matches this wrapper). */}
                <Button href="/contact" variant="gold" className="w-full">
                  Contact Us
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/**
 * Animated burger ↔ X icon. Uses two centered `<line>` segments that rotate
 * around the icon center: stacked into a hamburger when closed, crossed into
 * an X when open. The middle bar fades.
 *
 * `transform-origin: center` is applied via CSS (rather than Framer's
 * `originX/originY`) because Framer's origin props don't translate to SVG
 * coordinate space — they assume HTML box coords. Hence why the previous
 * implementation only animated to a "minus sign".
 */
function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
    >
      <motion.line
        x1="4"
        y1="9"
        x2="24"
        y2="9"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        style={{ transformOrigin: "14px 14px", transformBox: "view-box" }}
        animate={open ? { y: 5, rotate: 45 } : { y: 0, rotate: 0 }}
        transition={{ type: "spring", stiffness: 320, damping: 22 }}
      />
      <motion.line
        x1="4"
        y1="14"
        x2="24"
        y2="14"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        animate={{ opacity: open ? 0 : 1, scaleX: open ? 0 : 1 }}
        style={{ transformOrigin: "14px 14px", transformBox: "view-box" }}
        transition={{ duration: 0.15 }}
      />
      <motion.line
        x1="4"
        y1="19"
        x2="24"
        y2="19"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        style={{ transformOrigin: "14px 14px", transformBox: "view-box" }}
        animate={open ? { y: -5, rotate: -45 } : { y: 0, rotate: 0 }}
        transition={{ type: "spring", stiffness: 320, damping: 22 }}
      />
    </svg>
  );
}
