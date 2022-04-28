import React from 'react'
import Image from 'next/image';
const Testimony = () => {


  return (
   <div className='testimony-con p-4 py-12 flex items-center flex-col'>
     <div className='testimony-top p-4 mb-8'>
      <h2 className='text-white font-bold text-3xl text-center'>What Our Customers are saying</h2>
      <p></p>
     </div>
     <div className='bg-[#ff3115] w-40 h-2 mb-12'></div>
     <div className='testimony-down flex flex-col'>
      <div className='services-item bg-white relative mt-24'>
          <div className='service-icon bb h-32 w-32 absolute text-center flex justify-center z-10'>
            <Image className='bb-img' src={'/bookkks.jpg'} width={150} height={150} />
          </div>
          <div className='service-item flex flex-col items-center p-3 justify-center'>
            <h2 className='text-black text-2xl mb-5 mt-10 font-bold'>Mark John</h2>
            <h2 className='text-black text-sm'>
            Lorem ipsum dolor sit amet, consectetur adientum
            Lorem ipsum dolor sit amet, consectetur adientum
            Lorem ipsum dolor sit amet, consectetur adientum
            Lorem ipsum dolor sit amet, consectetur adientum
            Lorem ipsum dolor sit amet, consectetur adientum
            </h2>
          </div>
      </div>
      <div className='services-item bg-white relative mt-24'>
          <div className='service-icon bb h-32 w-32 absolute text-center flex justify-center z-10'>
            <Image className='bb-img' src={'/bookkks.jpg'} width={150} height={150} />
          </div>
          <div className='service-item flex flex-col items-center p-3 justify-center'>
            <h2 className='text-black text-2xl mb-5 mt-10 font-bold'>Mark John</h2>
            <h2 className='text-black text-sm'>
            Lorem ipsum dolor sit amet, consectetur adientum
            Lorem ipsum dolor sit amet, consectetur adientum
            Lorem ipsum dolor sit amet, consectetur adientum
            Lorem ipsum dolor sit amet, consectetur adientum
            Lorem ipsum dolor sit amet, consectetur adientum
            </h2>
          </div>
      </div>
      <div className='services-item bg-white relative mt-24'>
          <div className='service-icon bb h-32 w-32 absolute text-center flex justify-center z-10'>
            <Image className='bb-img' src={'/bookkks.jpg'} width={150} height={150} />
          </div>
          <div className='service-item flex flex-col items-center p-3 justify-center'>
            <h2 className='text-black text-2xl mb-5 mt-10 font-bold'>Mark John</h2>
            <h2 className='text-black text-sm'>
            Lorem ipsum dolor sit amet, consectetur adientum
            Lorem ipsum dolor sit amet, consectetur adientum
            Lorem ipsum dolor sit amet, consectetur adientum
            Lorem ipsum dolor sit amet, consectetur adientum
            Lorem ipsum dolor sit amet, consectetur adientum
            </h2>
          </div>
      </div>
     </div>
   </div>
  )
}

export default Testimony