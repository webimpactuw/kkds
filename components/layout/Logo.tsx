import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils/cn";

interface LogoProps {
  className?: string;
  /** Render only the wordmark, not the emblem (used on small mobile). */
  textOnly?: boolean;
  /** Color theme for the wordmark text. */
  theme?: "light" | "dark";
}

/**
 * Brand mark: circular emblem + two-line wordmark.
 * Used in the Navbar and Footer.
 *
 * Figma: 62px emblem + "Kalamandapam / Kuchipudi Dance School" (Rambla Bold 20).
 */
export function Logo({ className, textOnly = false, theme = "light" }: LogoProps) {
  const textColor = theme === "light" ? "text-white" : "text-maroon";

  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-4 md:gap-[28px]",
        className,
      )}
      aria-label="Kalamandapam Kuchipudi Dance School — Home"
    >
      {!textOnly && (
        <Image
          src="/images/brand/logo.png"
          alt=""
          width={62}
          height={62}
          priority
          className="size-12 md:size-[62px] transition-transform duration-500 group-hover:rotate-3"
        />
      )}
      <span
        className={cn(
          "font-rambla text-[16px] md:text-[20px] font-bold leading-tight",
          textColor,
        )}
      >
        <span className="block">Kalamandapam</span>
        <span className="block">Kuchipudi Dance School</span>
      </span>
    </Link>
  );
}
