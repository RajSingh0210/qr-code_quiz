## QR-enabled lead capture

This app powers the journey behind a QR code:

1. Visitor scans your QR and lands on the site.
2. They enter their name and surname (email/phone optional).
3. A 6-question timed quiz (15 seconds each) evaluates their answers.
4. Their score appears instantly on the page (no email is sent).

Everything is built with Next.js (App Router), server actions, and Tailwind CSS.

## Commands

Run everything from the `web` folder:

```bash
npm install        # already run once, repeats are safe
npm run dev        # start next dev server on http://localhost:3000
npm run build      # production build
npm run start      # run the compiled build
npm run lint       # lint all files
npm run qr -- --url https://your-hosted-site.com
```

The `qr` script writes `public/qr-code.png`, which you can print on flyers or booth signage. Pass the URL of your deployed site.

## Testing the flow locally

1. `npm run dev`
2. Browse to `http://localhost:3000`
3. Enter your name (email/phone optional), then answer the timed quiz.
4. When you finish, the score appears immediately along with a recap and a “Winner! Winner!” pop-up if you got all 6 correct.

## Deployment notes

- When deploying to Vercel (or any platform), no environment variables are required for the current flow.
- Re-run `npm run qr -- --url https://your-production-domain` so the QR points to the production host.
- Consider persisting responses in a database if you need historical stats. The current implementation keeps everything on the client for speed; see below for storage ideas.

## Adding actuarial questions

Replace the sample entries in `src/lib/questions.ts` with your full set of ~240 actuarial questions. Keep the shape `{ id, prompt, options: [{ id, label }...], answer }`. The app automatically picks 6 random questions for each session.

## Storing scores and contact info (suggestions)

- **Lightweight:** Post to a new API route that writes `{ name, surname, email?, phone?, score, answers, createdAt }` to a hosted KV (Upstash Redis) or a Google Sheet via an Apps Script webhook.
- **SQL-first:** Add Prisma + a `submissions` table in Supabase/PlanetScale. Call the API on result screen to persist the record.
- **Analytics-only:** Send an event to PostHog/GA4 containing the score and whether the user was a “Winner! Winner!”. Keep PII out if you don’t need it. 
