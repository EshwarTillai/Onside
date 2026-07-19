# Architecture — Onside

## Stack

- **Frontend**: React + TypeScript (Vite), strict mode.
- **Backend**: thin serverless proxy (`/api` folder, deployed as Vercel serverless functions).
- **Charting**: Recharts.
- **Deployment**: Vercel.

## Why a serverless proxy

[football-data.org](https://www.football-data.org/) supports CORS, so the API could technically be called directly from the browser. But that would expose the API key (`X-Auth-Token`) client-side — visible in the Network tab and in the bundled JS.

Instead, the frontend calls our own `/api/*` routes. Those routes hold the API key server-side (via an environment variable, never bundled into client code) and forward the request to football-data.org. The key never reaches the browser.

## Data flow

```
React SPA  →  /api/standings?competition=PL  →  football-data.org (with X-Auth-Token)
           ←  JSON response                  ←
```

## Environment variables

- `FOOTBALL_DATA_API_KEY` — set locally in `.env` (gitignored), and in Vercel's project settings for production. Never prefixed with `VITE_` (that prefix gets inlined into the client bundle — the opposite of what we want here).

## Known constraint: rate limiting

Free tier: 10 requests/minute. The `/teams/{id}/matches` endpoint returns a full season (up to 500 matches) in a single call, so a team's full history + upcoming fixtures only costs one request — this keeps normal usage well under the limit.
