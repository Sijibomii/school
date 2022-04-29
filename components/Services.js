import React from 'react'
 
const Services = () => {
  return (
    <div className='services flex flex-col items-center p-4 py-8'>
      {/* service-1 */}
      <div className='services-item bg-[#212121] relative mb-20'>
        <div className='service-icon h-32 w-32 absolute text-center bg-[#212121] flex justify-center p-2'>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 icon mt-2" viewBox="0 0 20 20" fill="currentColor">
            <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
          </svg>
        </div>
        <div className='service-item flex flex-col items-center p-3 justify-center'>
          <h2 className='text-white text-xl mb-5'>Trending Courses</h2>
          <h2 className='text-white text-sm'>Lorem ipsum dolor sit amet, consectetur adientum</h2>
        </div>
      </div>
      {/* service-2 */}
      <div className='services-item bg-[#212121] relative mb-20'>
        <div className='service-icon h-32 w-32 absolute text-center bg-[#212121] flex justify-center p-2'>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 icon mt-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
        </div>
        <div className='service-item flex flex-col items-center p-3 justify-center'>
          <h2 className='text-white text-xl mb-5'>Certified Teachers</h2>
          <h2 className='text-white text-sm'>Lorem ipsum dolor sit amet, consectetur adientum</h2>
        </div>
      </div>
      {/* service-3 */}
      <div className='services-item bg-[#212121] relative mb-20'>
        <div className='service-icon h-32 w-32 absolute text-center bg-[#212121] flex justify-center p-2'>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 icon mt-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
        </div>
        <div className='service-item flex flex-col items-center p-3 justify-center'>
          <h2 className='text-white text-xl mb-5'>Good Grades</h2>
          <h2 className='text-white text-sm'>Lorem ipsum dolor sit amet, consectetur adientum</h2>
        </div>
      </div>
      {/* service-4 */}
      <div className='services-item bg-[#212121] relative '>
        <div className='service-icon h-32 w-32 absolute text-center bg-[#212121] flex justify-center p-2'>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 icon mt-2" viewBox="0 0 20 20" fill="currentColor">
          <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
          <path fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clip-rule="evenodd" />
        </svg>
        </div>
        <div className='service-item flex flex-col items-center p-3 justify-center'>
          <h2 className='text-white text-xl mb-5'>Affordable fees</h2>
          <h2 className='text-white text-sm'>Lorem ipsum dolor sit amet, consectetur adientum</h2>
        </div>
      </div>
    </div>
  )
}

export default Services