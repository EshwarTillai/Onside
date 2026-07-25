import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/competition/$ligueCode')({
  component: RouteComponent,
})

function RouteComponent() {
    const params = Route.useParams()
  return <div>
    Hello "/competition/$ligueCode"!
    <span> {params.ligueCode}</span>
    </div>
}
