// Querying with "sanityFetch" will keep content automatically updated
// Before using it, import and render "<SanityLive />" in your layout, see
// https://github.com/sanity-io/next-sanity#live-content-api for more information.
import { defineLive } from 'next-sanity/live'
import { client, isSanityConfigured } from './client'

// When Sanity isn't configured yet, expose a no-op `sanityFetch` that
// returns `{data: null}` and a `SanityLive` that renders nothing. Pages are
// expected to fall back to local defaults when `data` is null/empty.
const noopFetch = async () => ({ data: null, sourceMap: null, tags: [] })
const NoopSanityLive = () => null

export const { sanityFetch, SanityLive } = isSanityConfigured
  ? defineLive({ client })
  : { sanityFetch: noopFetch, SanityLive: NoopSanityLive }
