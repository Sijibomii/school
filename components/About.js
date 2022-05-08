import React from 'react'
import Accordion from './Accordion'
const About = () => {
  return (
    <div className='about flex flex-col p-4 mt-4 md:px-16 lg:flex-row lg:py-20 lg:mt-16 lg:mb-12'>
      <div className='about-top flex p-4 flex-col items-center justify-center mb-5 flex-1'>
        <h2 className='text-xl text-center mb-4 lg:text-left'>About Us</h2>
        <p className='mb-6'>
        Lorem ipsum dolor sit amet, consectetur adientum vel.
         A Lorem ipsum dolor sit amet, consectetur adientum vel. 
         A Lorem ipsum dolor sit amet, consectetur adientum vel. 
         A Lorem ipsum dolor sit amet, consectetur adientum vel. A
        </p>
        <div className='bg-[#ff3115] w-60 h-2 lg:hidden'></div>
      </div>
      <div className='about-bottom flex-1'>
        <h3 className='ml-4 text-xl text-center lg:hidden'>The Eternal Excellence College</h3>
        <div className='about-accordion'>
          <Accordion />
        </div>
      </div>
    </div>
  )
}

export default About