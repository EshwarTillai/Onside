import { FaArrowRight } from 'react-icons/fa'
import './Home.css'
import { Link } from '@tanstack/react-router'
export default function Home () {
    const  listLeague = [
        {
            id:'1',
            name:"Premier League",
            country:"England",
            code:"PL",
            img:"https://crests.football-data.org/PL.png"
        },
        {
            id:'2',
            name:"Serie A",
            country:"Italia",
            code:"SA",
            img:"https://crests.football-data.org/SA.png"
        },
        {
            id:'3',
            name:"La Liga",
            country:"Spain",
            code:"PD",
            img:"https://crests.football-data.org/PD.png"
        },
        {
            id:'4',
            name:"Bundesliga",
            country:"Germany",
            code:"BL1",
            img:"https://crests.football-data.org/BL1.png"
        },
        {
            id:'5',
            name:"Ligue 1",
            country:"France",
            code:"FL1",
            img:"https://crests.football-data.org/FL1.png"
        },
    ]

    return (
        <div className='list-container'>
            <ul className="list-competition">
                
                    {listLeague.map(ligue => 
                        <li key={ligue.id}>
                            <Link className='league-link' to="/competition/$ligueCode" params={{ligueCode: ligue.code}}>
                                <div className='ligue-container'>
                                    <img alt={ligue.code} src={ligue.img} />
                                    <div>
                                        <span className='ligue-name'>{ligue.name}</span>
                                        <span className='ligue-country'>{ligue.country}</span>
                                    </div>         
                                </div>
                                <FaArrowRight/>
                            </Link>
                        </li>
                    )}

                
            </ul>
            </div>
    )
}