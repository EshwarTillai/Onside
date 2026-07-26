import { createFileRoute } from '@tanstack/react-router'
import useFetch from '../customHooks/useFetch'

interface Team {
  "id": number,
  "name": string,
  "shortName": string,
  "tla": string,
  "crest": string
}


interface Standing  {
            "stage": string,
            "type": string,
            "group": null | string,
            "table": 
                {
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
                }[],
}
interface StandingsResponse {
  "filters": {
        "season": string
    },
    standings: Standing[]
}

export const Route = createFileRoute('/competition/$ligueCode')({
  component: RouteComponent,
})

function RouteComponent() {
    const params = Route.useParams()
    const {data, loading, error} = useFetch<StandingsResponse>('/api/standings?competition=' + params.ligueCode)

  return <div>
    { error != null ? <span> {error}</span> : '' }
    { loading != false ? <span> Loading</span>: ''}
    { data != null ? data.standings.filter(e => e.type ==="TOTAL").map(x =>
          x.table.map(item => 
            <span key={item.team.id}> {item.team.name} </span>
          )
        ) 
    
    : '' }
    </div>
}
