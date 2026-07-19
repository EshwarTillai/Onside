# Risks — Onside

## API rate limiting (10 req/min, free tier)

Mitigated for the core flows: fetching a team's full season history is a single request (endpoint returns up to 500 matches). Watch out if a feature ends up firing many requests in a short window (e.g. loading standings for several competitions at once) — consider caching responses.

## API key exposure

Mitigated by design: all calls go through the `/api` serverless proxy, key stays server-side only (see `architecture.md`).

## Scope creep — team comparison

Explicitly deferred to "bonus, only if the MVP is finished and polished first" (see `specifications.md`). A shipped, polished MVP beats an unfinished project with more features.

## No player-level stats on the free tier

Scorers, cards, lineups require a paid plan. Confirmed via the official pricing page. The project scope was adjusted upfront to focus on team/competition-level data instead of trying to work around this.
