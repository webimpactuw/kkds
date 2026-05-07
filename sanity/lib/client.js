import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

// Sanity is optional during early development — until NEXT_PUBLIC_SANITY_PROJECT_ID
// is set in .env.local, every page should still render using its hardcoded
// fallback content. Exporting `null` here lets `live.js` short-circuit cleanly
// instead of throwing "Configuration must contain `projectId`" at import time.
export const isSanityConfigured = Boolean(projectId && dataset)

export const client = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
    })
  : null
