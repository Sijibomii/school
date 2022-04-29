import React from 'react'

const Info = () => {
  return (
    <div className='info-con flex'>
      <div className='info-con-inner flex flex-col bg-[#222] p-4 py-12'>
        <div className='info-1 flex flex-col p-8 items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 " fill="#ff3115" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <h3 className='text-white text-xl text-center font-bold mt-4 mb-4'>Address</h3>
          <p className='text-white text-center text-lg'>20 dummy street, off tell close Ile-Ife Osun State</p>
        </div>
        <div className='info-2 flex flex-col p-8 items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="#ff3115" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
          </svg>
          <h3 className='text-white text-xl text-center font-bold mt-4 mb-4'>Phone Number</h3>
          <p className='text-white text-center text-lg'>888-888-8888</p>
          <p className='text-white text-center text-lg'>888-888-8888</p>
        </div>
        <div className='info-3 flex flex-col p-8 items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="#ff3115" className="h-12 w-12 bg-none" viewBox="0 0 512 512"><path d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z"/></svg>
          <h3 className='text-white text-xl text-center font-bold mt-4 mb-4'>Email</h3>
          <p className='text-white text-center text-lg'>info@school.com</p>
          <p className='text-white text-center text-lg'>hello@school.com</p>
        </div>
      </div>
    </div>
  )
}

export default Info