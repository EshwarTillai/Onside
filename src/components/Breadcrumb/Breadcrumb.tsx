import { useMatches } from "@tanstack/react-router"
import { Link } from "@tanstack/react-router"
import './Breadcrumb.css'
export default function Breadcrumb(){
    const crumbs = useMatches().filter(match => match.loaderData?.crumb !== undefined)
    if(crumbs.length === 0) return null
    return <nav aria-label="Breadcrumb" className="breadcrumb">
        <ol>
            <li><Link to="/">Home</Link></li>
        {    crumbs.map((match,index) => {
             return (
                <li key={match.id}> 
                    {index === crumbs.length - 1 ? 
                    <span aria-current="page">{match.loaderData?.crumb}</span> : 
                    <Link to={match.pathname}>{match.loaderData?.crumb}</Link>}
                </li>
                )
            })
        }
        </ol>
    </nav>
}