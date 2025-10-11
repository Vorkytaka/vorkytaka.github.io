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

## Text Toggle Component - Step-by-Step Guide

The site includes a reusable `TextToggle` component that allows you to create clickable text that reveals hidden content. Perfect for expandable sections, details, or interactive content.

### Step 1: Import the Component
Add the import to your page's frontmatter:

```astro
---
import TextToggle from "../components/TextToggle.astro";
---
```

### Step 2: Create the Toggle Trigger
Use the `TextToggle` component with a unique `targetId`:

```astro
<p>Click <TextToggle targetId="my-content">here</TextToggle> to see more.</p>
```

### Step 3: Create the Hidden Content
Add the content you want to toggle with matching ID and required classes:

```astro
<p id="my-content" class="toggle-content hidden">
  This content will be hidden by default and shown when the trigger is clicked!
</p>
```

### Step 4: Complete Example
Here's a full working example:

```astro
---
import PageTemplate from "../components/PageTemplate.astro";
import TextToggle from "../components/TextToggle.astro";

export const prerender = true;
---

<PageTemplate title="My Page" description="Page with toggles">
  <h1>Welcome</h1>
  
  <p>Learn about <TextToggle targetId="skills">my skills</TextToggle> and 
     <TextToggle targetId="experience">experience</TextToggle>.</p>
  
  <div id="skills" class="toggle-content hidden">
    <h3>My Skills</h3>
    <ul>
      <li>JavaScript/TypeScript</li>
      <li>React & Astro</li>
      <li>Node.js</li>
    </ul>
  </div>
  
  <div id="experience" class="toggle-content hidden">
    <h3>Experience</h3>
    <p>I have 5+ years of web development experience...</p>
  </div>
</PageTemplate>
```

### Step 5: Styling (Optional)
You can add custom styles to your toggle triggers:

```astro
<TextToggle targetId="info" class="custom-style">Click me</TextToggle>

<style>
  .custom-style {
    background: var(--primary);
    color: var(--bg);
    padding: 2px 6px;
    border-radius: 4px;
    text-decoration: none !important;
  }
</style>
```

### Key Points:
- ✅ **Automatic**: No JavaScript needed in your pages - it's global!
- ✅ **Accessible**: Includes ARIA attributes and keyboard support (Enter/Space)
- ✅ **Reusable**: Works on any page that uses the Layout component
- ✅ **Flexible**: Can toggle any HTML content (text, images, forms, etc.)
- ✅ **Multiple**: Use as many toggles as needed on a single page

### Required Elements:
1. `<TextToggle targetId="unique-id">Trigger Text</TextToggle>`
2. `<element id="unique-id" class="toggle-content hidden">Hidden Content</element>`

The `targetId` must match the `id` of the element you want to toggle, and the hidden element must have both `toggle-content` and `hidden` classes.

## Notes

- All pages are statically generated (`prerender = true`)
- TypeScript interfaces ensure type safety
- SEO meta tags are automatically generated
- Responsive design with consistent styling
- Deploy `dist/` to any static host (Netlify, Vercel, GitHub Pages)
