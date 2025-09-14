# Vorky Portfolio (Astro)

A minimal static portfolio built with Astro. Initial commit scaffold.

## Scripts

- `npm run dev` — Start the dev server
- `npm run build` — Build to `dist/`
- `npm run preview` — Preview the static build

## Structure

- `src/pages/index.astro` — Homepage
- `src/components/Layout.astro` — Simple layout wrapper
- `src/styles/global.css` — Global styles
- `public/` — Static assets (favicon, robots)

## Notes

- Output is static (`output: 'static'` in `astro.config.mjs`).
- Update `site` in `astro.config.mjs` when you have a domain.
- You can deploy the contents of `dist/` to any static host (Netlify, Vercel static, GitHub Pages, etc.).
