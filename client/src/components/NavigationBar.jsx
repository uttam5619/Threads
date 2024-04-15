import React from 'react'

const NavigationBar = () => {
  return (
    <div>
        <nav className='flex justify-between bg-red-400'>
            <section className='ml-10'>
                logo
            </section>

            <section className='mr-10 flex gap-x-10'>
                <div>home</div>
                <div>connection</div>
            </section>
        </nav>
    </div>
  )
}

export default NavigationBar