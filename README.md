# Vorky Portfolio (Astro)

A minimal static portfolio built with Astro using a component-based architecture for easy page creation.

## Scripts

- `npm run dev` — Start the dev server
- `npm run build` — Build to `dist/`
- `npm run preview` — Preview the static build
- `npm run astro check` — Type-check the project

## Quick Start - Adding a New Page

### Step 1: Create the page file
Create a new `.astro` file in `src/pages/` (e.g., `src/pages/about.astro`)

### Step 2: Use the PageTemplate
```astro
---
import PageTemplate from "../components/PageTemplate.astro";

export const prerender = true;
---
<PageTemplate 
  title="About"
  description="About me page"
  path="/about"
>
  <p>Your content goes here</p>
</PageTemplate>
```

### Step 3: Customize as needed
Add any of these optional props to `PageTemplate`:
- `headerTitle="Custom"` - Change header text
- `headerSubtitle="Header"` - Change header subtitle  
- `showSocialLinks={true}` - Show social media links
- `keywords={['keyword1', 'keyword2']}` - Add SEO keywords

### Step 4: Build and deploy
Run `npm run build` to generate the static site.

## Project Structure

- `src/pages/` — Your pages (auto-routing)
- `src/components/PageTemplate.astro` — Main page template
- `src/components/Layout.astro` — Base HTML layout
- `src/components/SEO.astro` — SEO meta tags
- `src/config/site.ts` — Site configuration & social links
- `src/styles/global.css` — Global styles
- `public/` — Static assets (favicon, robots)

## Configuration

Edit `src/config/site.ts` to update:
- Site name, title, and description
- Author information
- Social media links
- SEO defaults

## Notes

- All pages are statically generated (`prerender = true`)
- TypeScript interfaces ensure type safety
- SEO meta tags are automatically generated
- Responsive design with consistent styling
- Deploy `dist/` to any static host (Netlify, Vercel, GitHub Pages)
