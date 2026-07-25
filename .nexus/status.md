# Status — Onside

**Last updated:** 2026-07-25.

## Where things stand

- Project scaffolded (Vite + React + TS, `strict: true` verified with a clean build).
- `/api` proxy routes written and tested locally with `vercel dev`:
  - `standings.ts` — proxies `/v4/competitions/{code}/standings`, validates the competition code against the 5 supported leagues.
  - `team-matches.ts` — proxies `/v4/teams/{id}/matches`, splits the response into `{ history, fixtures }` server-side (FINISHED vs everything else) so the front doesn't duplicate that filter logic.
  - Both run on the Vercel Edge runtime (`export const config = { runtime: "edge" }`), required since the handler signature is the Fetch API `(Request) => Response` style.
- CI added: GitHub Actions workflow (`.github/workflows/ci.yml`) runs typecheck + lint on every PR and on push to `main`.
- Setup checklist fully done: `.env` has a real `FOOTBALL_DATA_API_KEY`, mockups for all MVP screens done in Stitch AI (Home, Competition view, Team view, each in dark/light + desktop/mobile, plus loading/error/empty states on the Competition view as the reference pattern).
- TanStack Router wired up (`__root.tsx`, `index.tsx`, `competition.$ligueCode.tsx`), Navbar with light/dark theme toggle (`ThemeProvider`, CSS variables in `index.css`).
- Home view done: static list of the 5 competitions (hardcoded client-side, no API call needed to enumerate them), linking to `/competition/$ligueCode`. Passed an accessibility pass: `<h1>` added, decorative arrow icon `aria-hidden`, alt text fixed, logo badge with fixed light background so crests stay legible in dark mode, `--accent-color` given a separate lighter value for `[data-theme="dark"]` (~7.5:1 contrast against `--bg`), responsive breakpoints at 770px and 360px.

## Next step

- Competition view (standings table, sortable, searchable).
