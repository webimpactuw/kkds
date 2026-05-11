"use client";

import Link from "next/link";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils/cn";

type ButtonVariant = "primary" | "gold" | "send";

type ButtonAsButton = HTMLMotionProps<"button"> & {
  variant?: ButtonVariant;
  className?: string;
  href?: undefined;
};

type ButtonAsLink = {
  variant?: ButtonVariant;
  className?: string;
  href: string;
  /** Open external links in a new tab. Auto-detected for `http(s)://` URLs. */
  external?: boolean;
  children: React.ReactNode;
};

export type ButtonProps = ButtonAsButton | ButtonAsLink;

/**
 * Three variants, all sourced from Figma:
 *
 *   primary →  Learn More / Enroll / View All / Buy Tickets / Sign Up
 *              wine bg, white Rambla Bold 24, 200×64, rounded-10
 *
 *   gold    →  "Contact Us" nav button
 *              gold bg, maroon Rambla Bold 20, smaller px/py, rounded-10
 *
 *   send    →  Contact form Send button
 *              wine bg, white Rambla Bold 24, full-width, rounded-15
 */
const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-wine text-white rounded-[10px] h-[64px] w-[200px] px-[50px] py-[5px] text-body-lg font-bold",
  gold: "bg-gold text-maroon rounded-[10px] px-5 py-2.5 text-[20px] font-bold",
  send:
    "bg-wine text-white rounded-[15px] h-[64px] w-full px-[50px] py-[5px] text-body-lg font-bold",
};

const baseClasses =
  "font-rambla inline-flex items-center justify-center text-center whitespace-nowrap cursor-pointer select-none transition-shadow shadow-[0_4px_12px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-cream disabled:opacity-60 disabled:cursor-not-allowed";

const hoverProps = {
  whileHover: { y: -2 },
  whileTap: { scale: 0.97 },
  transition: { type: "spring" as const, stiffness: 400, damping: 26 },
};

function isLink(props: ButtonProps): props is ButtonAsLink {
  return "href" in props && typeof props.href === "string";
}

export function Button(props: ButtonProps) {
  const { variant = "primary", className } = props;
  const classes = cn(baseClasses, variantClasses[variant], className);

  if (isLink(props)) {
    const { href, external, children } = props;
    const isExternal = external ?? /^https?:\/\//.test(href);
    /* If the caller asked for w-full we also need to widen the outer
     * Link/anchor wrapper — otherwise the inner span's `w-full` is bounded
     * by the inline-flex wrapper and the button stays content-width. */
    const isFullWidth = /(^|\s)w-full(\s|$)/.test(className ?? "");
    const wrapperClass = isFullWidth ? "flex w-full" : "inline-flex";
    if (isExternal) {
      return (
        <motion.a
          {...hoverProps}
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </motion.a>
      );
    }
    return (
      <Link href={href} className={wrapperClass}>
        <motion.span {...hoverProps} className={classes}>
          {children}
        </motion.span>
      </Link>
    );
  }

  const { variant: _v, className: _c, children, ...buttonAttrs } = props;
  void _v;
  void _c;
  return (
    <motion.button {...hoverProps} className={classes} {...buttonAttrs}>
      {children}
    </motion.button>
  );
}
