import React from 'react'

const PostCard = ({info}) => {

    const { postedBy } = info
    const { avatar } = postedBy
    const { secure_url, public_id } =avatar

  return (
    <div className='text-gray-600'>
      <div className='w-4/12 p-5 mx-auto border rounded-lg bg-white hover:shadow-lg hover:shadow-red-200'>
        <section className='flex gap-x-5'>
          <img className='w-10 h-10 border rounded-full' alt='pofileImage'></img>
          <div className='text-bold font-semibold'>{postedBy.username}</div>
        </section>
        <section>
          {
            //<img alt='postImage'></img> post image
          }
          {
            info.text ? <h1 className='text-bold font-semibold text-sm'>{info.text}</h1>: <div></div>
          }
        </section>
        </div>
    </div>
  )
}

export default PostCard