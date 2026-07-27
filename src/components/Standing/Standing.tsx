import { Link } from "@tanstack/react-router"
import { useState } from "react"
import useFetch from "../../customHooks/useFetch"
import { FaArrowUp, FaArrowDown } from "react-icons/fa"
import './Standing.css'
import useDebounce from "../../customHooks/useDebounce"
interface Team {
  "id": number,
  "name": string,
  "shortName": string,
  "tla": string,
  "crest": string
}

interface Row {
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
interface Standing  {
            "stage": string,
            "type": string,
            "group": null | string,
            "table": Row[],
}
interface StandingsResponse {
  "filters": {
        "season": string
    },
    standings: Standing[]
}
export default function Standing({code}: {code:string}){
    const [sortKey, setSortKey] = useState<'position'|'points'|'won'|'defeat'|'goal difference'|'draw'|'played'|null>('position')
    const [sortDir, setSortDir] = useState<'asc'|'desc'>('asc')
    const {data, loading, error} = useFetch<StandingsResponse>('/api/standings?competition=' + code)
    const [searchTerm,setSearchTerm] = useState<string>('')
    const debouncedSearch = useDebounce(searchTerm,500)
    function getComparator(){
        if(data!= null){
            switch (sortKey) {
                case ('position'):
                        if(sortDir == 'asc'){
                            return (a:Row, b:Row) => a.position - b.position
                        }else{
                            return (a:Row, b:Row) => b.position - a.position
                        }
                case ('won'):
                        if(sortDir == 'asc'){
                            return (a:Row, b:Row) => a.won - b.won
                        }else{
                            return (a:Row, b:Row) => b.won - a.won
                        }
                case ('draw'):
                        if(sortDir == 'asc'){
                            return (a:Row, b:Row) => a.draw - b.draw
                        }else{
                            return (a:Row, b:Row) => b.draw - a.draw 
                        }
                case ('points'):
                        if(sortDir == 'asc'){
                            return (a:Row, b:Row) => a.points - b.points
                        }else{
                            return (a:Row, b:Row) => b.points - a.points
                        }
                case ('defeat'):
                        if(sortDir == 'asc'){
                            return (a:Row, b:Row) => a.lost - b.lost
                        }else{
                            return (a:Row, b:Row) => b.lost - a.lost
                        }
                case ('goal difference'):
                        if(sortDir == 'asc'){
                            return (a:Row, b:Row) => a.goalDifference - b.goalDifference
                        }else{
                            return (a:Row, b:Row) => b.goalDifference - a.goalDifference
                        }
                case ('played'):
                    if(sortDir == 'asc'){
                            return (a:Row, b:Row) => a.playedGames - b.playedGames
                        }else{
                            return (a:Row, b:Row) => b.playedGames - a.playedGames
                        }
                default:return null
            }
            
        }
    }
    function handleSort(key: typeof sortKey){
        if (key === sortKey){
            if(sortDir === 'asc'){
                setSortDir('desc')
            }else{
                setSortDir('asc')
            }
        }else{
            setSortKey(key)
            setSortDir('asc')
        }
    }

    if(error) return <span> {error}</span>
    if (loading) return <span> Loading</span>
    if (data != null) {
        const comparator = getComparator()
        return(
            <div className="standing-container " >
                <input
                id="searchInput"
                name="searchInput"
                className="searchInput"
                placeholder="Name"
                aria-label="Search a team"
                onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div
  className="standing-scroll"
  role="region"
  aria-label="Classement, défiler horizontalement pour voir plus de colonnes"
  tabIndex={0}
>
            <table className='standing-grid'>
                <thead>
                    <tr>
                        <th aria-sort={sortKey === 'position' ? (sortDir === 'asc' ? 'ascending' : 'descending') : 'none'} ><button className="standingHeaderColumn rankHeader" onClick={()=>{handleSort('position')}}>Rank {sortKey === 'position' && (sortDir === 'asc' ? <FaArrowUp className="third-color" /> : <FaArrowDown className="third-color" />)}</button></th>
                        <th >Team</th>
                        <th aria-sort={sortKey === 'played' ? (sortDir === 'asc' ? 'ascending' : 'descending') : 'none'}><button className="standingHeaderColumn" onClick={()=>{handleSort('played')}}> P {sortKey === 'played' && (sortDir === 'asc' ? <FaArrowUp className="third-color" /> : <FaArrowDown className="third-color" />)} </button></th>
                        <th aria-sort={sortKey === 'won' ? (sortDir === 'asc' ? 'ascending' : 'descending') : 'none'}><button className="standingHeaderColumn" onClick={()=>{handleSort('won')}}>  W {sortKey === 'won' && (sortDir === 'asc' ? <FaArrowUp className="third-color"/> : <FaArrowDown className="third-color"  />)}</button></th>
                        <th aria-sort={sortKey === 'draw' ? (sortDir === 'asc' ? 'ascending' : 'descending') : 'none'}><button className="standingHeaderColumn" onClick={()=>{handleSort('draw')}}> D {sortKey === 'draw' && (sortDir === 'asc' ? <FaArrowUp className="third-color"/> : <FaArrowDown className="third-color" />)}</button></th>
                        <th aria-sort={sortKey === 'defeat' ? (sortDir === 'asc' ? 'ascending' : 'descending') : 'none'}><button className="standingHeaderColumn" onClick={()=>{handleSort('defeat')}}>L {sortKey === 'defeat' && (sortDir === 'asc' ? <FaArrowUp className="third-color"/> : <FaArrowDown  className="third-color"/>)}</button></th>
                        <th aria-sort={sortKey === 'goal difference' ? (sortDir === 'asc' ? 'ascending' : 'descending') : 'none'}><button className="standingHeaderColumn" onClick={()=>{handleSort('goal difference')}}>GD {sortKey === 'goal difference' && (sortDir === 'asc' ? <FaArrowUp  className="third-color"/> : <FaArrowDown className="third-color"/>)}</button></th>
                        <th aria-sort={sortKey === 'points' ? (sortDir === 'asc' ? 'ascending' : 'descending') : 'none'}><button className="standingHeaderColumn" onClick={()=>{handleSort('points')}}>Pts {sortKey === 'points' && (sortDir === 'asc' ? <FaArrowUp className="third-color"/> : <FaArrowDown className="third-color"/>)}</button></th>
                    </tr>
                </thead>
                <tbody>
                    {data.standings.filter(e => e.type ==="TOTAL").map(x =>
                    (comparator ?   [...x.table].sort(comparator) :
                    x.table).filter(filterItem => filterItem.team.name.toLowerCase().includes(debouncedSearch.toLowerCase())).map(item => 
                        <tr key={item.team.id}> 
                        <td>{item.position} </td>
                        <td className="teamName"><Link to="/team/$teamId" params={{teamId: item.team.id.toString()}}><img aria-hidden="true" className="teamLogo" src={item.team.crest}/> {item.team.name} </Link></td>
                        <td> {item.playedGames}</td>
                        <td>{item.won} </td>
                        <td>{item.draw} </td>
                        <td>{item.lost} </td>
                        <td>{item.goalDifference} </td>
                        <td>{item.points} </td>
                        </tr>
                    )
                    ) 
                }
                </tbody>
            </table>
            </div>
            <div aria-live="polite" className="visually-hidden">
  {sortKey && `Trié par ${sortKey}, ordre ${sortDir === 'asc' ? 'croissant' : 'décroissant'}`}
</div>
            </div>
        )
    }
    if (data == null) return <span>An error occured</span>
}
