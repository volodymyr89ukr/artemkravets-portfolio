# Photo Site Starter

A small photography portfolio built with Next.js App Router, Tailwind CSS, Formspree and Vercel.

## What is already included

- clean one-page layout
- portfolio grid with category filters
- lazy-loaded gallery preview images
- lightbox-style large image view
- services section
- about/testimonials section
- contact form wired for Formspree
- SEO metadata in `layout.tsx`
- ready-to-edit content in `src/data/site.ts`

## Recommended architecture

- **Next.js**: UI, routing, SEO, static-first rendering
- **Tailwind CSS**: styling
- **Cloudinary**: image hosting and optimization
- **Formspree**: form backend
- **Vercel**: deployment

## How to run locally

```bash
npm install
npm run dev
```

## What to edit first

### 1. Replace content

Open `src/data/site.ts` and replace:
- site name
- email / phone / instagram
- service texts
- testimonials
- gallery items

### 2. Connect Formspree

Create a form in Formspree and replace:

```ts
formspreeId: 'YOUR_FORMSPREE_FORM_ID'
```

Formspree's React hook pattern is documented in its official React library guide. citeturn761682search3turn761682search11

### 3. Move images to Cloudinary

Right now the starter uses placeholder Unsplash URLs so the project works immediately.

For production, upload final images to Cloudinary and replace each `image` and `large` value in `src/data/site.ts` with Cloudinary delivery URLs or public IDs.

Cloudinary documents Next.js integration and recommends using Cloudinary’s delivery and optimization features with Next.js. citeturn761682search2turn761682search6turn761682search18

### 4. Deploy to Vercel

Push to GitHub and import the repo into Vercel.

Next.js documents Vercel as a primary deployment target, while also noting other deployment modes. citeturn761682search20turn761682search0

## Notes

This starter uses the App Router, which is the current standard path in the Next.js docs. citeturn761682search0turn761682search4turn761682search8

Tailwind’s official Next.js guide covers the current installation flow for Next.js projects. citeturn761682search1


## Important compatibility note

This version submits to Formspree with `fetch` and does **not** use `@formspree/react`, which avoids the current React 19 peer dependency conflict.
