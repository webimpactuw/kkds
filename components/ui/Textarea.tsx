"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils/cn";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

/**
 * Contact form textarea (Message). Figma:
 *   • white bg, 1px solid #aaa border, 292px tall
 *   • placeholder: Rambla Bold 24px, #aaa, top-aligned
 */
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea({ className, label, id, ...rest }, ref) {
    const fieldId = id ?? rest.name;
    return (
      <div className="w-full">
        {label && (
          <label htmlFor={fieldId} className="font-rambla text-body sr-only">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={fieldId}
          rows={6}
          className={cn(
            "min-h-[292px] w-full px-[30px] py-[27px]",
            "bg-white border border-muted",
            "font-rambla font-bold text-body-lg text-ink",
            "placeholder:text-muted placeholder:font-bold",
            "focus:outline-none focus:border-maroon focus:ring-2 focus:ring-maroon/20",
            "resize-y transition-colors",
            className,
          )}
          {...rest}
        />
      </div>
    );
  },
);
