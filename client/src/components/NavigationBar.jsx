import React from 'react'
import LogOut from './LogOut'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
  return (
    <div>
        <nav className='w-[100%] h-16 flex justify-between fixed top-0 shadow-lg shadow-gray-200'>
            <section className='ml-10'>
                logo
            </section>

            <section className='mr-10 flex gap-x-10'>
              <section className='mt-5 flex gap-x-10'>
                  <div>home</div>
                  <div>connection</div>
                  <div>
                    <Link to='/profile/:id'><img className=' w-10 rounded-full' src='https://th.bing.com/th/id/R.8c275b59e1feb85312f33fc82ea94744?rik=fb%2bKSAhV%2fTqB2g&pid=ImgRaw&r=0&sres=1&sresct=1'></img></Link>
                  </div>
                </section>
                <LogOut/>
            </section>
        </nav>
    </div>
  )
}

export default NavigationBar