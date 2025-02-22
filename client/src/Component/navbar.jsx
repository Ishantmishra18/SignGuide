import React from 'react'
import { MdOutlineHandshake } from "react-icons/md";
import {Link}  from 'react-router-dom'

const  nav = () => {
  return (
    <div className='h-[12vh] bg-white sticky top-0 z-50 w-screen flex items-center justify-between px-10 bg-opacity-90 backdrop-blur-md'>
        <Link to='/' className="h-full flex items-center gap-4">
        < MdOutlineHandshake className='h-full w-12'/>
        <h2 className='text-xl font-bold uppercase'>SignGuide</h2>
        </Link>
        <div className="flex gap-20 items-center h-full text-xl">
          <Link to='/home' className="relative group cursor-pointer">
            Course
            <span className="absolute left-1/2 bottom-0 w-0 h-[3px] bg-sec transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </Link>
          <h2 className="relative group cursor-pointer">
            Quiz
            <span className="absolute left-1/2 bottom-0 w-0 h-[3px] bg-sec transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </h2>
          <h2 className="relative group cursor-pointer">
            About Us
            <span className="absolute left-1/2 bottom-0 w-0 h-[3px] bg-sec transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </h2>
        </div>
        <div className="">
          <Link to="/login" className="font-semibold bg-sec px-12 border-2 border-black  py-3">Log in</Link>
        </div>
    </div>
  )
}

export default  nav