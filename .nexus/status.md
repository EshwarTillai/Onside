# Status — Onside

**Last updated:** 2026-07-19.

## Where things stand

- Project scaffolded (Vite + React + TS, `strict: true` verified with a clean build).
- `/api` folder created (empty — proxy logic not written yet).
- Setup checklist fully done: `.env` has a real `FOOTBALL_DATA_API_KEY`, mockups for all MVP screens done in Stitch AI (Home, Competition view, Team view, each in dark/light + desktop/mobile, plus loading/error/empty states on the Competition view as the reference pattern).
- No feature code written yet — `App.tsx` is still the default Vite template.

## Next step

- Write the `/api` proxy route(s) to football-data.org (serverless function(s) under `/api`, reading `FOOTBALL_DATA_API_KEY` server-side, forwarding to `api.football-data.org` with `X-Auth-Token`). Picking up here next session.
- Then: Home view (list of the 5 competitions).
