import { cn } from "@/lib/utils/cn";

interface DividerProps {
  className?: string;
  /** Thickness in px (default 1). */
  thickness?: number;
}

/**
 * Thin horizontal rule. Used under each FAQ item in Figma.
 */
export function Divider({ className, thickness = 1 }: DividerProps) {
  return (
    <hr
      style={{ height: thickness }}
      className={cn("w-full border-0 bg-ink/20", className)}
    />
  );
}
