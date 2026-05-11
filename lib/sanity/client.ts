/**
 * Sanity client stub.
 *
 * Sanity is NOT yet connected. This file exists so:
 *   1. Data fetchers (`lib/data/*.ts`) can import a `sanityClient` symbol that
 *      matches the future shape of `@sanity/client`'s exported client.
 *   2. The day the client is configured, you swap this file's
 *      implementation for the real one — no fetcher edits required.
 *
 * Until then, every call to `sanityClient.fetch(...)` returns `null`, which
 * triggers the fallback path defined in every fetcher.
 */

interface SanityClient {
  fetch<T = unknown>(query: string, params?: Record<string, unknown>): Promise<T | null>;
}

export const sanityClient: SanityClient = {
  async fetch() {
    /* Sanity is not configured — fetchers will fall back to local data. */
    return null;
  },
};

/**
 * Future wiring (uncomment and configure when adopting Sanity):
 *
 *   import { createClient } from "@sanity/client";
 *
 *   export const sanityClient = createClient({
 *     projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
 *     dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET!,
 *     apiVersion: "2025-01-01",
 *     useCdn: true,
 *   });
 */
