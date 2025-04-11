import React from 'react'

const loader = () => {
  return (
    <div className='h-screen w-screen grid place-content-center fixed top-0 left-0 z-50 backdrop-blur-lg'>
        <div className="loader h-40 aspect-square rounded-full border-2 border-black "></div>
    </div>
  )
}

export default loader 