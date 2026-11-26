import { createFileRoute } from '@tanstack/react-router'
import { Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/competition/$ligueCode')({
  component: RouteComponent,
    loader: (args)=>{
      return {crumb:args.params.ligueCode}
    }
})

function RouteComponent() {
   return <Outlet/>
} 
