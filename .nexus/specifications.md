# Specifications — Onside

A football stats app consuming the [football-data.org](https://www.football-data.org/) API.

## Pitch

Explore the 5 major European leagues (standings, team history and fixtures) with a polished experience: accessible, responsive, strictly typed.

## Competitions covered

Ligue 1, Premier League, La Liga, Bundesliga, Serie A — all 5 are included in the API's free tier (permanent access, confirmed via the official docs).

## Features (MVP)

1. **Home** : list of the 5 competitions, pick one.
2. **Competition view**: standings table (sortable by points / goal difference / wins), search/filter by team name (debounced).
3. **Team view** (from the standings table):
   - Full season history: score, opponent, date, home/away.
   - Upcoming fixtures (same data source as the history, filtered by status `SCHEDULED` vs `FINISHED`).
   - Chart (Recharts) of cumulative points over the full season.
4. **States**: loading / error / empty / data on every view that fetches (reuses a `useFetch` custom hook).

## Bonus (only if time allows, after the MVP is done and polished)

- Team comparison (pick 2 teams, multi-series chart overlaying their points progression).

## Explicit non-goals

- User auth / favorites.
- Any competition beyond the 5 planned ones.
- Individual player stats (not available on the API's free tier — scorers, cards, lineups are paid-tier only).

## Cross-cutting constraints

- TypeScript strict from project creation (`strict: true`, verified from the first commit).
- Accessible: fully usable via keyboard, tested with a screen reader where possible.
- Responsive.
- Clear README, code on GitHub, deployed on Vercel.

## Design

Mockups made with Stitch AI upfront — component code is hand-written from those mockups, not generated.
