"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils/cn";

type ImageWithFallbackProps = Omit<
  ImageProps,
  "onError" | "fill" | "width" | "height"
> & {
  /**
   * Fallback shown when `src` fails to load or is missing. By default we render
   * a soft maroon-tinted placeholder that mirrors the brand palette.
   */
  fallback?: React.ReactNode;
  /** Tailwind classes applied to the wrapper element. */
  wrapperClassName?: string;
  /** Override the next/image sizes hint. */
  sizes?: string;
};

/**
 * `next/image` wrapper that gracefully falls back to a brand-themed
 * placeholder when the image is missing, unset, or fails to load.
 *
 * The image is always rendered in `fill` mode so it tracks the wrapper's
 * dimensions exactly — this prevents the "image smaller than its slot"
 * issue you'd otherwise get when the wrapper uses aspect-ratio + w-full
 * and the underlying file's intrinsic size is smaller than the layout box.
 *
 * Wrap the component in a `wrapperClassName` that provides explicit
 * dimensions (e.g. `aspect-[307/256] w-full`).
 */
export function ImageWithFallback({
  src,
  alt,
  fallback,
  wrapperClassName,
  className,
  sizes,
  ...rest
}: ImageWithFallbackProps) {
  const [errored, setErrored] = useState(false);
  const showFallback = errored || !src;

  return (
    <div className={cn("relative overflow-hidden", wrapperClassName)}>
      {showFallback ? (
        fallback ?? (
          <div
            className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-maroon/20 via-orange/20 to-cream"
            aria-hidden="true"
          >
            <span className="font-rambla text-maroon text-body text-center opacity-60">
              {alt || "Image coming soon"}
            </span>
          </div>
        )
      ) : (
        <Image
          src={src as ImageProps["src"]}
          alt={alt}
          fill
          sizes={sizes ?? "(max-width: 768px) 100vw, 50vw"}
          onError={() => setErrored(true)}
          className={cn("object-cover", className)}
          {...rest}
        />
      )}
    </div>
  );
}
