import React from 'react'
import Link from 'next/link'
const Hero = () => {
  return (
    <div className='hero-con h-screen'>
      <div className="hero flex hero-pattern h-4/5 relative">
      <div className="hero__container flex flex-col 
      absolute mt-16 h-full items-center md:ml-16 md:mt-40 lg:mt-32 ">
        <div className="hero__container__heading">
          <h2 className='text-3xl text-white font-extrabold text-center'>The Eternal Excellence College</h2>
          <h3 className='text-center text-white mt-4'>Lorem ipsum dolor sit amet, consectetur adientum vel. Aenean viverra sollicitudin leo, </h3>
        </div>
        <div className='hero-footer flex justify-center'>
          <Link href="/" >
            <a className='rounded-none p-4 bg-red-700 text-white mt-4 mr-4'>About Us</a></Link>
          <Link href="/" className=''>
          <a className='rounded-none p-4 bg-red-700 text-white mt-4'>Contact Us</a>
          </Link>
        </div>
      </div>
    </div>
    </div>
    
  )
}

export default Hero

{/* <div className='hero-con'>
      <div className="hero flex hero-pattern h-4/5 relative">
      <div className="hero__container flex relative">
        <div className="z-10 flex flex-col p-4 mt-12">
          <div className="hero__container__heading ">
            <h2 className='text-3xl text-black z-10 font-extrabold'>The Eternal Excellence College</h2>
            <h3 className= 'text-black z-10 mt-4'>Lorem ipsum dolor sit amet, consectetur adientum vel. Aenean viverra sollicitudin leo, </h3>
          </div>
          <div className='hero-footer flex'>
            <Link href="/" >
              <a className='rounded-none p-4 bg-[#ff3115] text-black z-10 mt-4 mr-4'>About Us</a></Link>
            <Link href="/" className=''>
            <a className='rounded-none p-4 bg-[#ff3115] text-black z-10 mt-4'>Contact Us</a>
            </Link>
          </div>
        </div>
        <div className='img2 absolute'>
          <Image 
          className='shadow-none' 
          src={'/background.jpg'} width={500} height={450} />
        </div>
      </div>
    </div>
    </div> */}