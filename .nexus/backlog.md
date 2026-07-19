# Backlog — Onside

## Setup
- [x] Scaffold Vite + React + TS project.
- [x] Enable `strict: true` in `tsconfig.app.json`.
- [x] Create `/api` folder for the serverless proxy.
- [x] `.env.example` for `FOOTBALL_DATA_API_KEY`, `.env`/`.env.local` gitignored.
- [ ] Get a football-data.org API key.
- [ ] Design mockups (Stitch AI).

## MVP
- [ ] `/api` proxy route(s) to football-data.org.
- [ ] Home: list of the 5 competitions.
- [ ] Competition view: standings table, sortable columns.
- [ ] Competition view: search/filter by team name (debounced).
- [ ] Team view: full season history (score, opponent, date, home/away).
- [ ] Team view: upcoming fixtures.
- [ ] Team view: cumulative points chart (Recharts).
- [ ] Loading / error / empty / data states on every fetching view.
- [ ] Accessibility pass (keyboard nav, screen reader check, contrast).
- [ ] Responsive pass.
- [ ] README.
- [ ] Deploy to Vercel.

## Bonus (only after the MVP above is fully done and polished)
- [ ] Team comparison (pick 2 teams, overlaid chart).
