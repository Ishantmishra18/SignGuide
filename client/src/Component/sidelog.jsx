import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineHandshake } from "react-icons/md";

const sidelog = () => {
  return (
    <div className="w-[55vw] h-full rounded-r-[10%] shadow-lg overflow-hidden grid place-content-center bg-[url('/assets/login.png')] bg-center bg-cover bg-black/50">
    <div className="w-[30vw] aspect-square rounded-3xl bg-white bg-opacity-10 backdrop-blur-md p-10">
      <div className="flex gap-4 items-center">
        <MdOutlineHandshake className='text-sec text-4xl'/> <h1 className='text-sec text-4xl'>SignGuide</h1>
        </div>
        <h2 className='text-4xl text-white mt-10 mb-10'>Hey there Welcome</h2>
        
      <h2 className="text-2xl mb-36 text-neutral-400 relative">"Deafness is a sensory difference" <h3 className='text-lg absolute -bottom-6 -right-4'>Samay Jain</h3></h2>
      <Link to='/' className='bg-sec px-8 py-4 border-black border-2'>back to home</Link>
    </div>
  </div>
  )
}

export default sidelog