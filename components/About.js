import React from 'react'
import Accordion from './Accordion'
const About = () => {
  return (
    <div className='about flex flex-col p-4 mt-4 md:px-16'>
      <div className='about-top flex p-4 flex-col items-center justify-center mb-5'>
        <h2 className='text-xl text-center mb-4'>About Us</h2>
        <p className='mb-6'>
        Lorem ipsum dolor sit amet, consectetur adientum vel.
         A Lorem ipsum dolor sit amet, consectetur adientum vel. 
         A Lorem ipsum dolor sit amet, consectetur adientum vel. 
         A Lorem ipsum dolor sit amet, consectetur adientum vel. A
        </p>
        <div className='bg-[#ff3115] w-60 h-2'></div>
      </div>
      <div className='about-bottom'>
        <h3 className='ml-4 text-xl text-center'>The Eternal Excellence College</h3>
        <div className='about-accordion'>
          <Accordion />
        </div>
      </div>
    </div>
  )
}

export default About