import React from 'react'
import List from './Lists'
import Image from 'next/image'
const Courses = () => {
  return (
    <div className='courses-container p-4 py-12'>
      <h2 className='text-2xl font-bold ml-4 mb-2'>Our Courses</h2>
      <div className='courses-con p-4'>
        <div className='courses-top'>
          <List />
        </div>
        <div className='courses-bottom mt-8'>
          <Image src={'/bookkks.jpg'} width={300} height={200} />
        </div>
      </div>
    </div>
  )
}

export default Courses

