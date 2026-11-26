import { createFileRoute } from '@tanstack/react-router'
import { Outlet } from '@tanstack/react-router'
import type {StandingsResponse } from '../types/utils'
import StandingError from '../components/Standing/StandingError'
export const Route = createFileRoute('/competition/$ligueCode')({
  component: RouteComponent,
    loader: async (args)=>{
      
      const response = await fetch('/api/standings?competition=' + args.params.ligueCode)
       if(response.ok) {
          const result:StandingsResponse = await response.json()
        return {
          crumb:result.competition.name,
          standingData: result
        }
       }else{
        throw new Error ("an Error occured with the status" +  response.status)
       }
    },
    errorComponent:StandingError

})

function RouteComponent() {
   return <Outlet/>
} 
