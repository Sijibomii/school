import React from 'react'
import List from './Lists'
import Image from 'next/image'
const Courses = () => {
  return (
    <div className='courses-container p-4 py-12 md:px-12'>
      <h2 className='text-2xl font-bold ml-4 mb-2'>Our Courses</h2>
      <div className='courses-con p-4 lg:flex lg:px-10'>
        <div className='courses-top'>
          <List />
        </div>
        <div className='courses-bottom mt-8 flex justify-center'>
          <Image src={'/bookkks.jpg'} width={300} height={200} className=""/>
        </div>
      </div>
    </div>
  )
}

export default Courses

