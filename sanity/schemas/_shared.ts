/**
 * Shared building blocks for every Sanity schema in this directory.
 *
 * Sanity Studio is NOT yet wired up — we ship schema objects as plain
 * TypeScript constants. When Sanity is adopted later, each schema can be
 * dropped into `defineType()` from the `sanity` package with no edits.
 *
 * Example of future wiring:
 *
 *   import { defineType } from "sanity";
 *   import { instructorSchema } from "./instructor";
 *   export default defineType(instructorSchema);
 */

export interface SanitySchemaField {
  name: string;
  title: string;
  type: string;
  description?: string;
  fields?: SanitySchemaField[];
  of?: Array<{ type: string }>;
  to?: Array<{ type: string }>;
  options?: Record<string, unknown>;
  validation?: string;
  initialValue?: unknown;
}

export interface SanitySchema {
  name: string;
  title: string;
  type: "document" | "object";
  fields: SanitySchemaField[];
  fieldsets?: Array<{ name: string; title: string }>;
  preview?: {
    select: Record<string, string>;
  };
}

/** Sanity image asset reference (resolved to a URL via the GROQ query). */
export interface SanityImage {
  /** Relative URL into /public/images/* (fallback) OR a Sanity CDN URL. */
  url: string;
  /** Optional alt text. */
  alt?: string;
}
