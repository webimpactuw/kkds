import { cn } from "@/lib/utils/cn";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  /**
   * Width preset. Most sections use the standard 1168px Figma content width.
   * Use `wide` for full-bleed sections that still need horizontal padding.
   */
  width?: "default" | "wide";
}

/**
 * Centered content wrapper matching the Figma frame widths:
 *   - 1440 desktop frame, 1168 content (px-[136px])
 *   -  768 tablet frame,  576 content (px-[96px])
 *   -  390 phone frame,   294 content (px-[48px])
 */
export function Container({
  children,
  className,
  width = "default",
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-12 md:px-24 lg:px-[136px]",
        width === "default" && "max-w-[1440px]",
        className,
      )}
    >
      {children}
    </div>
  );
}
