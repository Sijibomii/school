import React from 'react'

const Footer = () => {
  return (
    <div className='footer-con achievements-container p-6 py-8 flex flex-col'>
      <div className='footer-1 flex flex-col mb-10'>
        <div className='footer-1-header flex  items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="white" className="h-12 w-12 bg-none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
          </svg>
          <h1 className='text-white text-2xl font-extrabold ml-4'>Eternal Excellence College</h1>
        </div>
        <div className='footer-1-bottom mt-4'>
          <p className='text-white text-xl'>
          Lorem ipsum dolor sit amet, consectetur adientum
              Lorem ipsum dolor sit amet, consectetur adientum
              Lorem ipsum dolor sit amet, consectetur adientum
              Lorem ipsum dolor sit amet, consectetur adientum
              Lorem ipsum dolor sit amet, consectetur adientum
          </p>
        </div>
      </div>
      <div className='footer-2 flex flex-col mb-10'>
        <h3 className='text-white text-xl font-bold mb-4'>SITEMAP</h3>
        <ul className='text-white'>
          <li className='flex items-center py-2'>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
            <h4 className='text-white ml-4'>Home</h4>
          </li>
          <li className='flex items-center py-2'>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
            <h4 className='text-white ml-4'>About</h4>
          </li>
          <li className='flex items-center py-2'>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
            <h4 className='text-white ml-4'>Services</h4>
          </li>
          <li className='flex items-center py-2'>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
            <h4 className='text-white ml-4'>Courses</h4>
          </li>
          <li className='flex items-center py-2'>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
            <h4 className='text-white ml-4'>Testimonies</h4>
          </li>
        </ul>
      </div>
      <div className='footer-3'>
        <h3 className='text-white text-xl font-bold mb-4'>NEWSLETTER</h3>
        <h4 className='text-white text-md mb-4'>Subscribe to Our newsletter</h4>
        <form>
          <input placeholder='enter your email' />
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Footer