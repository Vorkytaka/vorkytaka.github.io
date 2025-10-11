# Page Creation Guide

This guide explains how to easily create new pages using the abstracted components system.

## Quick Start - Creating a New Page

1. Create a new `.astro` file in `src/pages/`
2. Use the `PageTemplate` component for consistent layout
3. Customize the props as needed

### Basic Page Template

```astro
---
import PageTemplate from "../components/PageTemplate.astro";

export const prerender = true;
---
<PageTemplate 
  title="Your Page Title"
  description="Page description for SEO"
  headerTitle="Header"
  headerSubtitle="Text"
  showSocialLinks={false}
  path="/your-page"
>
  <p>Your page content goes here</p>
</PageTemplate>
```

## Configuration

### Site Configuration (`src/config/site.ts`)

Central place for all site-wide settings:
- Site name, title, description
- Author information
- Social media links
- URL configuration

### Page Template Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | - | Page title (auto-generates full title) |
| `description` | `string` | site default | Meta description |
| `keywords` | `string[]` | `[]` | SEO keywords |
| `headerTitle` | `string` | "Vorky" | Header main text |
| `headerSubtitle` | `string` | "taka" | Header subtitle text |
| `showHeader` | `boolean` | `true` | Show page header |
| `showSocialLinks` | `boolean` | `false` | Show social links section |
| `path` | `string` | - | Page path for canonical URL |

## Components Overview

### Core Components

- **`Layout.astro`** - Base HTML layout with SEO
- **`PageTemplate.astro`** - Standard page template
- **`SEO.astro`** - SEO meta tags management
- **`Header.astro`** - Page header component
- **`SocialLinks.astro`** - Social media links
- **`PageSection.astro`** - Content section wrapper

### Icons

All icons are in `src/components/icons/` and exported from `index.ts`.

## Examples

### Simple Content Page
```astro
<PageTemplate 
  title="Blog"
  description="My blog posts"
  path="/blog"
>
  <p>Blog content here</p>
</PageTemplate>
```

### Page with Social Links
```astro
<PageTemplate 
  title="Contact"
  description="Get in touch"
  showSocialLinks={true}
  path="/contact"
>
  <p>Contact information</p>
</PageTemplate>
```

### Custom Header
```astro
<PageTemplate 
  title="Projects"
  headerTitle="My"
  headerSubtitle="Projects"
  path="/projects"
>
  <p>Project listings</p>
</PageTemplate>
```

## Styling

### Global Styles
- All global styles are in `src/styles/global.css`
- CSS custom properties (variables) for theming
- Consistent typography and spacing

### Page-Specific Styles
Add `<style>` blocks in your page files for page-specific styling:

```astro
<PageTemplate>
  <!-- content -->
</PageTemplate>

<style>
  /* Page-specific styles */
  .custom-class {
    color: var(--primary);
  }
</style>
```

## SEO Features

- Automatic title generation with site name
- Meta descriptions and keywords
- Open Graph tags for social sharing
- Twitter Card support
- Canonical URLs
- Structured data ready

## Best Practices

1. **Always set `prerender = true`** for static generation
2. **Use descriptive titles and descriptions** for SEO
3. **Set the `path` prop** for proper canonical URLs
4. **Keep content in logical sections** using semantic HTML
5. **Test accessibility** with proper ARIA labels