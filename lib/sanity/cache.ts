/**
 * How often CMS-backed pages re-fetch Sanity (ISR).
 * Without this, Next.js bakes Sanity data in at build time and Vercel
 * keeps serving that snapshot until the next deploy.
 *
 * Must be duplicated as a literal in each page: `export const revalidate = 60`
 * (Next.js does not allow imported values in segment config).
 */
export const CMS_PAGE_REVALIDATE_SECONDS = 60 as const;
