/** GROQ fragment: project a Sanity image field to `{ url, alt }`. */
export function imageProjection(fieldName: string): string {
  return `"${fieldName}": {
    "url": ${fieldName}.asset->url,
    "alt": ${fieldName}.alt
  }`;
}
