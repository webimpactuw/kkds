import { cn } from "@/lib/utils/cn";

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
  /** Heading level — defaults to `h2` (sections); use `h1` only for page banners. */
  as?: "h1" | "h2" | "h3";
  /** Text alignment. Most Figma section headings are centered; some (Get In Touch) are left. */
  align?: "left" | "center";
}

/**
 * Standard section title. Matches Figma `Section Heading` style:
 *   Rambla Bold · 48px · color: maroon (#830033).
 */
export function SectionHeading({
  children,
  className,
  as: Tag = "h2",
  align = "center",
}: SectionHeadingProps) {
  return (
    <Tag
      className={cn(
        "font-rambla font-bold text-maroon",
        "text-[2.25rem] sm:text-[2.5rem] lg:text-section-heading",
        "leading-tight",
        align === "center" && "text-center",
        align === "left" && "text-left",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
