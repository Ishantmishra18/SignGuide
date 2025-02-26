import React,{useContext} from 'react'
import { MdOutlineHandshake } from "react-icons/md";
import {Link}  from 'react-router-dom'
import { UserContext } from '../Context/user';

const  nav = () => {

  const navbar = [{main:'Learn' , sub:['articles' , 'videos' , 'quiz']},{main:'Detect' , sub:['imgDetect', 'imgUpload']},{main:'About Us', sub:["Akshat(Group Leader)",'Akash sharma(bhrahmin)','ishant' , 'kaddu' , 'samay' , 'rishabh',]}]

  const {user} = useContext(UserContext)
  return (
    <div className='h-[12vh] bg-white sticky top-0 right-0 z-50 w-[98vw] flex items-center justify-between px-10 bg-opacity-90 backdrop-blur-md'>
        <Link to='/' className="h-full flex items-center gap-4">
        < MdOutlineHandshake className='h-full w-12'/>
        <h2 className='text-xl font-bold uppercase'>SignGuide</h2>
        </Link>


<div className="flex gap-20 items-center h-full text-xl relative">
      {/* Course Dropdown */}
      {navbar.map((val , key)=>{
        return(
          <div className="relative group cursor-pointer">
        <div>{val.main}</div>
        <span className="absolute left-1/2 bottom-0 w-0 h-[3px] bg-sec transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        <div className="absolute left-1/2 -translate-x-1/2 top-full opacity-0 hidden group-hover:flex flex-col group-hover:opacity-100 backdrop-blur-lg group-hover:translate-y-0 -translate-y-4  duration-300 bg-white shadow-lg rounded-md p-2 w-40">
          {val.sub.map((val2, key)=>{
            return(
              <Link to={`/${val2}`} className="p-2 capitalize hover:bg-gray-200 rounded-lg">{val2}</Link>
            )
          })}
        </div>
      </div>
        )
        
      })}
    </div>


        {user!=null ? (
           <Link to="/profile" className={`font-semibold bg-sec px-12 border-2 border-black  py-3`}>Profile</Link>

) : (
          <Link to="/login" className={`font-semibold bg-sec px-12 border-2 border-black  py-3`}>Log in</Link>
        )}
    </div>
  )
}

export default  nav