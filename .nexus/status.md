# Status — Onside

**Last updated:** 2026-07-22.

## Where things stand

- Project scaffolded (Vite + React + TS, `strict: true` verified with a clean build).
- `/api` proxy routes written and tested locally with `vercel dev`:
  - `standings.ts` — proxies `/v4/competitions/{code}/standings`, validates the competition code against the 5 supported leagues.
  - `team-matches.ts` — proxies `/v4/teams/{id}/matches`, splits the response into `{ history, fixtures }` server-side (FINISHED vs everything else) so the front doesn't duplicate that filter logic.
  - Both run on the Vercel Edge runtime (`export const config = { runtime: "edge" }`), required since the handler signature is the Fetch API `(Request) => Response` style.
- CI added: GitHub Actions workflow (`.github/workflows/ci.yml`) runs typecheck + lint on every PR and on push to `main`.
- Setup checklist fully done: `.env` has a real `FOOTBALL_DATA_API_KEY`, mockups for all MVP screens done in Stitch AI (Home, Competition view, Team view, each in dark/light + desktop/mobile, plus loading/error/empty states on the Competition view as the reference pattern).
- No frontend feature code written yet — `App.tsx` is still the default Vite template.

## Next step

- Home view: list of the 5 competitions, consuming `/api/standings` (or a dedicated lightweight list — TBD whether that needs its own endpoint or just the 5 hardcoded competition codes/names client-side, since football-data.org doesn't need a call just to enumerate them).
- Then: Competition view (standings table, sortable, searchable).
