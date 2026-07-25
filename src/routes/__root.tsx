import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { ThemeProvider } from '../context/ThemeProvider'
import Navbar from '../components/Navbar/Navbar'
export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <ThemeProvider >
        <Navbar/>
        <div className='main'>
          <Outlet />
        </div>
    </ThemeProvider>
  )
}
