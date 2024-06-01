import NavigationBar from '@/components/NavigationBar'
import React from 'react'
import { Outlet } from 'react-router-dom'


const BrowsePage = () => {

  return (
    <div>
        <NavigationBar/>
        <section className='mt-16'>
          <Outlet/>
        </section>
    </div>
  )

}

export default BrowsePage