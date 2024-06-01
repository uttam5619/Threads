import UserHeader from '@/components/UserHeader'
import UserPost from '@/components/UserPost'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const UserPage = () => {
  const [user, setUser] = useState(null)
  const {id} = useParams()

  const getUser =async()=>{
    const data = await fetch('/api/v1/user/:id')
    const userData = await data.json()
    console.log(userData)
    setUser(userData)
  }

  useEffect(()=>{
    getUser()
  },[])

  return (
    <div>
        <UserHeader/>
        <UserPost/>
    </div>
  )
}

export default UserPage