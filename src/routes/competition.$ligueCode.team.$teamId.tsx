import { createFileRoute } from '@tanstack/react-router'


export const Route = createFileRoute('/competition/$ligueCode/team/$teamId')({
  component: RouteComponent,
  loader: (args)=>{
      return {crumb:args.params.teamId}
    }
})

function RouteComponent() {
    const params = Route.useParams()
    return <span> {params.teamId} </span>
}