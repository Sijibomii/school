import React from 'react'

import Carousel from './carousel';
const Testimony = () => {
 
  return (
   <div className='testimony-con p-4 py-12 flex items-center flex-col'>
     <div className='testimony-top p-4 mb-8'>
      <h2 className='text-white font-bold text-3xl text-center'>What Our Customers are saying</h2>
      <p></p>
     </div>
     <div className='bg-[#ff3115] w-40 h-2 mb-12'></div>
     <div className='testimony-down'>
      <Carousel />
     </div>
   </div>
  )
}

export default Testimony