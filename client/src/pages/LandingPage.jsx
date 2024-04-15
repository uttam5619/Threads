import NavigationBar from '@/components/NavigationBar'
import React from 'react'
import { Outlet } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div>
        LandingPage
        <NavigationBar/>
        <Outlet/>
    </div>
  )
}

export default LandingPage