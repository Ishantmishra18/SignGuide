import React from 'react'
import { FiPlayCircle } from "react-icons/fi";
import { Link } from 'react-router-dom';

const landing = () => {
    
  return (
    <div className='h-[88vh] w-screen flex px-[20%] items-center relative'>
        <div className="circle h-[30vh] aspect-square rounded-full bg-sec absolute left-[10vw] top-[0vh]"></div>
        <div className="w-[60%] flex flex-col">
            <div className="w-full relative">
                <h2 className='text-wrap text-6xl leading-tight tracking-tighter'>Learn sign language with the help of <span className='flex items-center'><img src="assets/blast.png" alt="" className='h-[20vh] object-cover' /> <span className='hover:text-sec duration-300'>SIGNBRIDGE</span></span></h2>
                
            </div>
            <div className="text-lg">learn to connect with deaf people</div>
            <div className="flex gap-8 mt-10 text-2xl items-center">
                <Link to='/articles' className="bg-sec rounded-full px-12 py-3 border-[2px] border-black whitespace-nowrap hover:translate-y-1 duration-300">Start Learning</Link>
                <Link to='/videos/no' className="flex gap-3 items-center px-12 py-3 rounded-full hover:bg-main whitespace-nowrap"><FiPlayCircle/> <h1>Watch Videos</h1></Link>
            </div>
        </div>
        <div className="w-[40%] h-full">
            <img src="assets/hand.png" alt="" className='w-full h-full object-cover'/>
        </div>
    </div>
  )
}

export default landing