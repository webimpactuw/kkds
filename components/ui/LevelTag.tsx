import { cn } from "@/lib/utils/cn";

interface LevelTagProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * The colored title strip used on every Class Card (Beginner / Intermediate /
 * Advanced). Figma:
 *   • horizontal 3-stop gradient: #50001f → #a10041 → #50001f
 *   • white Rambla Bold 24px, centered, full-width
 *   • 10px vertical padding
 */
export function LevelTag({ children, className }: LevelTagProps) {
  return (
    <div
      className={cn(
        "bg-card-label-gradient flex w-full items-center justify-center p-[10px]",
        className,
      )}
    >
      <span className="font-rambla text-body-lg text-center font-bold text-white">
        {children}
      </span>
    </div>
  );
}
