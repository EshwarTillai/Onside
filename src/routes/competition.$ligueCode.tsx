import { createFileRoute } from '@tanstack/react-router'
import Standing from '../components/Standing/Standing'


export const Route = createFileRoute('/competition/$ligueCode')({
  component: RouteComponent,
})

function RouteComponent() {
    const params = Route.useParams()
   return <Standing code={params.ligueCode}/>
}
