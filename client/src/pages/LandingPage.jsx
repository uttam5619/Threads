import React, { useState } from 'react'

const LandingPage = () => {

  const [formType, setFormType]=useState('SignUp')
  const [message, setMessage]=useState('Already an existing user?')

  const changeFormType =()=>{
    formType==='SignUp'?setFormType('SignIn'):setFormType('SignUp')
    message==='Already an existing user?'?setMessage('Newt to forum, Register yourself.'):setMessage('Already an existing user?')
  }

  return (
    <div>
        <section className='w-3/12 mt-20 mx-auto shadow-lg shadow-gray-400'>

          <h1 className='m-2 p-2 text-3xl text-center text-bold font-semibold text-gray-700'>{formType}</h1>
          <section className='mx-8'>
          {
            formType==='SignUp'
            ?
            <div className='my-2'>
              <input className='pl-3 w-80 h-12 border border-gray-300 outline-none' placeholder='name'></input>
            </div>
            :
            ''
          }
          {
            formType==='SignUp'
            ?
            <div className='my-2'>
              <input className='pl-3 w-80 h-12 border border-gray-300 outline-none' placeholder='username'></input>
            </div>
            :
            ''
          }
            <div className='my-2'>
              <input className='pl-3 w-80 h-12 border border-gray-300 outline-none' placeholder='email'></input>
            </div>
            <div className='my-2'>
              <input className='pl-3 w-80 h-12 border border-gray-300 outline-none' placeholder='password'></input>
            </div>
          </section>

          <div>
            <button className='mx-36 w-20 h-10 border rounded-2xl hover:bg-gray-200'>{formType}</button>
          </div>

          <div className='flex gap-x-2 p-5 text-gray-500 text-xs text-bold font-semibold'>
            <div className='cursor-pointer'>{message}</div>
            <div className='cursor-pointer hover:text-blue-700' onClick={changeFormType}>ClickHere</div>
          </div>

        </section>
    </div>
  )
}

export default LandingPage