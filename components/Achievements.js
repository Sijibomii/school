import React from 'react'
import Image from 'next/image'
const Achievements = () => {
  return ( 
    <>
      <div className='achievements-container py-20 flex-col'>
          <div className='achievements-top p-4'>
            <h2 className='text-2xl text-white font-bold mb-8'>Achievements</h2>
            <p className='achieve-note text-xl mb-12'>
            Lorem ipsum dolor sit amet, consectetur adientum vel.
          A Lorem ipsum dolor sit amet, consectetur adientum vel. 
          A Lorem ipsum dolor sit amet, consectetur adientum vel. 
          A Lorem ipsum dolor sit amet, consectetur adientum ve
            </p>
            <Image className='' width={400} height={200} src='/work2.jpg' alt='school image'/>
          </div>
          <div className='achievements-bottom p-4 mt-8'>    
            <div className='achievement-1 px-16 py-8 mb-8 border lex flex-col items-center justify-center
            hover:border-[#ff3115] focus:border-[#ff3115]'>
              <h3 className='text-[#ffffff] text-3xl text-center font-bold'>60</h3>
              <p className='text-[#ffffff] text-3xl text-center font-bold'>Teachers</p>
            </div>
            <div className='achievement-1 px-16 py-8 mb-8 border lex flex-col items-center justify-center
            hover:border-[#ff3115] focus:border-[#ff3115]'>
              <h3 className='text-[#ffffff] text-3xl text-center font-bold'>60</h3>
              <p className='text-[#ffffff] text-3xl text-center font-bold'>Teachers</p>
            </div>
            <div className='achievement-1 px-16 py-8 mb-8 border lex flex-col items-center justify-center
            hover:border-[#ff3115] focus:border-[#ff3115]'>
              <h3 className='text-[#ffffff] text-3xl text-center font-bold'>60</h3>
              <p className='text-[#ffffff] text-3xl text-center font-bold'>Teachers</p>
            </div>
            <div className='achievement-1 px-16 py-8 mb-8 border lex flex-col items-center justify-center
            hover:border-[#ff3115] focus:border-[#ff3115]'>
              <h3 className='text-[#ffffff] text-3xl text-center font-bold'>60</h3>
              <p className='text-[#ffffff] text-3xl text-center font-bold'>Teachers</p>
            </div>
          </div>
      </div>
    </>
  )
}

export default Achievements