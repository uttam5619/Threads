import PostCard from '@/components/PostCard'
import React, { useEffect, useState } from 'react'

const HomePage = () => {

  const [homeData, setHomeData] =useState([])
  const [postData, setPostData] =useState([])

  const homePageData = async ()=>{
    const data = await fetch('/api/v1/post')
    const jsonData = await data.json()
    setHomeData(jsonData)
    setPostData(jsonData.data)
    console.log(jsonData)
  }

  useEffect(()=>{
    homePageData()
  },[])

  if(!homeData)return <h1>Loading...</h1>

  //console.log(homeData.data[0].text)

  return (
    <div className='bg-gray-100'>
    HomePage
    {
      postData.map((e)=>{
        return <div>
          <PostCard info={e} />
        </div>
      })
    }
    </div>
  )
}

export default HomePage