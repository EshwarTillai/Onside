import { Outlet, createRootRoute } from '@tanstack/react-router'
import { ThemeProvider } from '../context/ThemeProvider'
import Navbar from '../components/Navbar/Navbar'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'
export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <ThemeProvider >
        <Navbar/>
        <Breadcrumb/>
        <div className='main'>
          <Outlet />
        </div>
    </ThemeProvider>
  )
}
