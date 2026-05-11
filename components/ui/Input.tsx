"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils/cn";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

/**
 * Contact form text input. Figma:
 *   • white bg, 1px solid #aaa border, 61px tall
 *   • placeholder: Rambla Bold 24px, #aaa
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  function Input({ className, label, id, ...rest }, ref) {
    const inputId = id ?? rest.name;
    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="font-rambla text-body sr-only"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            "h-[61px] w-full px-[30px] py-[15px]",
            "bg-white border border-muted",
            "font-rambla font-bold text-body-lg text-ink",
            "placeholder:text-muted placeholder:font-bold",
            "focus:outline-none focus:border-maroon focus:ring-2 focus:ring-maroon/20",
            "transition-colors",
            className,
          )}
          {...rest}
        />
      </div>
    );
  },
);
