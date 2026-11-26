export interface Team {
  "id": number,
  "name": string,
  "shortName": string,
  "tla": string,
  "crest": string
}

export interface Row {
    "position": number,
    "team":Team,
    "playedGames": number,
    "form": string,
    "won": number,
    "draw": number,
    "lost": number,
    "points": number,
    "goalsFor": number,
    "goalsAgainst": number,
    "goalDifference": number
}
export interface Standing  {
            "stage": string,
            "type": string,
            "group": null | string,
            "table": Row[],
}

export interface StandingsResponse {
  "filters": {
        "season": string
    },
    standings: Standing[],
    competition:{
        name:string
    }
}