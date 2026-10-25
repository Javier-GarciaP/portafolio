# Portfolio — José Javier García

Personal portfolio for clients. Isometric pixel art scenes, one per project, and a scroll that travels between them. Text is in Spanish.

Built with Astro 5, Tailwind 4, Astro Actions (zod) and Resend.

## Run it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # production build (Vercel adapter)
npm test         # contact form tests (Node test runner)
```

`astro preview` does not work with the Vercel adapter. Use `npm run dev` to try the contact form locally.

## Contact form

The form sends email with [Resend](https://resend.com). It needs one environment variable:

```
RESEND_API_KEY=your_resend_api_key
```

Put it in a local `.env` file (already ignored by git) and in the Vercel project settings. Without it, the form shows an error and sends nothing.

The form has zod validation, HTML escaping in the email and a hidden honeypot field against bots.

## Structure

- `src/pages/` — home, `casos/[slug]` (client cases) and `comunidad/[slug]` (open projects)
- `src/data/projects.ts` — all project texts and links
- `src/components/` — layout pieces and scenes
- `src/actions/` and `src/lib/contact.ts` — contact form logic and tests
- `public/scenes/` — scene images (replaceable); `public/light/` — light versions
- `public/captures/` — real screenshots, taken with sample data only

## Rules for images

Never publish a screenshot with names, ID numbers, phones or addresses of real people. Every image must be webp and under 300 KB.
