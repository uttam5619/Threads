import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { landingPageBG } from '@/utils/constants'



const LandingPage = () => {

  const [formType, setFormType]=useState('SignUp')
  const [message, setMessage]=useState('Already an existing user?')

  const [userData, setUserData]=useState({name:'',username:'',email:'',password:''})

  const navigate = useNavigate()
  
  const changeFormType =()=>{
    formType==='SignUp'?setFormType('SignIn'):setFormType('SignUp')
    message==='Already an existing user?'?setMessage('Newt to forum, Register yourself.'):setMessage('Already an existing user?')
  }

  //signUp form
  
  const handleSignUp =async()=>{
    try{
      const result= await fetch('/api/v1/auth/signUp',{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(userData)
      })
      const data= await result.json()
      console.log(data)
      localStorage.setItem('userInformation', JSON.stringify(data))
      toast.success('registered successfully',{position:'top-center',autoClose:1500})
    }catch(err){
      console.log(err)
      toast.error(err.message,{position:'top-center',autoClose:1500})
    }
  }

  //signIn form

  const handleSignIn =async()=>{
    try{
      const data = await fetch('/api/v1/auth/signIn',{
        method:'POST',
        headers: {
          'Content-Type':'application/json',
        },
        body: JSON.stringify(userData),
      })
      const userInfo = await data.json()
      localStorage.setItem('userInformation', JSON.stringify(userInfo))
      toast.success('signIn successfully',{position:'top-center',autoClose:1500})
    }catch(err){
      console.log(err)
      toast.error(err.message,{position:'top-center',autoClose:1500})
    }
  }

  // generic form method which goes under submission
  const HandldeForm=async(e)=>{
    console.log('button clicked')
    e.preventDefault()
    try{
      if(formType==='SignUp'){
        if(!userData.name || !userData.username || !userData.email || !userData.password){
          return
        }
        handleSignUp()
      }else{
        if(!userData.email || !userData.password){
          return
        }
        handleSignIn()
      }
      setUserData({name:'',username:'',email:'',password:''})
    }catch(err){
      toast.error(err.message,{position:'top-center',autoClose:1500})
      console.log(err)
    }
  }


  const redirectUser =()=>{
    const userInformation = localStorage.getItem('userInformation')
    if(userInformation){
      navigate('/')
    }else{
      navigate('/auth')
    }
  }

  useEffect(()=>{
    redirectUser()
  },[])

  return (

    <section>

      <img src={landingPageBG}
      className='w-[100%] absolute z-[-1] object-cover'
      ></img>

      <h1 className='text-3xl text-center text-bold text-gray-700 font-semibold'>PostDaily</h1>

    <div className='bg-opacity-70'>
        <form className='w-3/12 mx-auto mt-20 bg-gray-300 bg-opacity-70 shadow-lg shadow-gray-700' onSubmit={(e)=>{HandldeForm(e)}}>

          <h1 className='m-2 p-2 text-3xl text-center text-bold font-semibold text-gray-700'>{formType}</h1>
          <section className='mx-8'>
          {
            formType==='SignUp'
            ?
            <div className='my-2'>
              <input className='pl-3 w-80 h-12 border border-gray-300 outline-none' placeholder='name' type='text'
              value={userData.name}
              onChange={(e)=>setUserData({...userData, name: e.target.value})}
              ></input>
            </div>
            :
            ''
          }
          {
            formType==='SignUp'
            ?
            <div className='my-2'>
              <input className='pl-3 w-80 h-12 border border-gray-300 outline-none' placeholder='username' type='text'
              onChange={(e)=>setUserData({...userData, username: e.target.value})}
              value={userData.username}
              ></input>
            </div>
            :
            ''
          }
            <div className='my-2'>
              <input className='pl-3 w-80 h-12 border border-gray-300 outline-none' placeholder='email' type='email'
              onChange={(e)=>setUserData({...userData, email:e.target.value})}
              value={userData.email}
              ></input>
            </div>
            <div className='my-2'>
              <input className='pl-3 w-80 h-12 border border-gray-300 outline-none' placeholder='password' type='password'
              onChange={(e)=>setUserData({...userData, password:e.target.value})}
              value={userData.password}
              ></input>
            </div>
          </section>

          <div>
            <button className='mx-36 w-20 h-10 bg-gray-300 border rounded-2xl hover:bg-gray-400'>{formType}</button>
          </div>

          <div className='flex gap-x-2 p-5 text-gray-500 text-xs text-bold font-semibold'>
            <div className='cursor-pointer'>{message}</div>
            <div className='cursor-pointer hover:text-blue-700' onClick={changeFormType}>ClickHere</div>
          </div>

        </form>
    </div>

    </section>
  )
}

export default LandingPage