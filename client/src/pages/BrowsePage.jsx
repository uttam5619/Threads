import NavigationBar from '@/components/NavigationBar'
import React from 'react'
import { Outlet } from 'react-router-dom'

const BrowsePage = () => {
  return (
    <div>
        <NavigationBar/>
        <Outlet/>
    </div>
  )
}

export default BrowsePage