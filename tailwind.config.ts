/**
 * Tailwind v4 uses CSS-first configuration via the `@theme` block in
 * `styles/globals.css`. All design tokens (colors, fonts, type scale, radii,
 * shadows) live there — that file is the single source of truth.
 *
 * This config file is intentionally minimal and exists only for:
 *   1. Compat with tools/editors that still expect a `tailwind.config.ts` file.
 *   2. A documentation anchor pointing future contributors to the tokens.
 *
 * Do NOT add design tokens here. Edit `styles/globals.css` instead.
 */
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
};

export default config;
