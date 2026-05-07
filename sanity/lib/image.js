import createImageUrlBuilder from '@sanity/image-url'

import { dataset, projectId } from '../env'

// Builder is only constructed when both env vars are present. When Sanity
// isn't configured, `urlFor` returns a chainable stub that ultimately yields
// `null`, which the calling components already handle as "no image".
const builder =
  projectId && dataset ? createImageUrlBuilder({ projectId, dataset }) : null

const NULL_BUILDER = new Proxy(
  {},
  {
    get: (_target, prop) => {
      if (prop === 'url') return () => null
      return () => NULL_BUILDER
    },
  },
)

// https://www.sanity.io/docs/image-url
export const urlFor = (source) => {
  if (!builder || !source) return NULL_BUILDER
  return builder.image(source)
}
