import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
const LogOut = () => {

    const navigate = useNavigate()

    const handleLogOut = async() => {
        try{
            const data =await fetch('api/v1/auth/logOut',{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
            })
            const logoutData = await data.json()
            console.log(logoutData)
            localStorage.removeItem('userInformation')
            toast.success('logOut successfully',{position:'top-center',autoClose:1500})
            navigate('/auth')
        }catch(err){
            console.log(err)
            toast.error('error in loggingOut',{position:'top-center',autoClose:1500})
        }
    }

  return (
    <button className='w-20' onClick={handleLogOut}>LogOut</button>
  )
}

export default LogOut