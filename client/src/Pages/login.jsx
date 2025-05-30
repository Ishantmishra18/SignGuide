
import React, { useState ,useContext} from 'react'
import { Link, Navigate  } from 'react-router-dom'
import axios from 'axios'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import {UserContext} from "../Context/user";
import Sidelog from '../Component/sidelog';

const login = () => {
    const [username, setUsername]=useState('')
    const [password, setPassword]=useState('')
    const [redirect , setRedirect]=useState(false)
    const [error , setError]=useState('')
    const [eye , setEye]=useState(false)

    const {setUser} = useContext(UserContext)


    const loginSub = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/login', { username, password }
                  // This ensures the cookie is sent with the request
            );
           
            
            if (response.status === 200) {
                console.log('Logged In:', response.data);
                setUser(response.data.user); 
                setRedirect(true);  // Redirect only if login is successful
            }
        } catch (error) {
            if (error.response) {
                // Check the status code to determine the error type
                if (error.response.status === 404) {
                    setError('User not found');
                } else if (error.response.status === 401) {
                    setError('Incorrect password');
                } else {
                    setError('Login failed. Please try again.');
                }
            } else {
                setError('Login failed. Please check your connection and try again.');
            }
            console.error('Login error:', error);
        }
    };
    

    if (redirect) {
        return <Navigate to="/" />;
    }

  return (
    <div className='h-screen w-screen flex'>
     <Sidelog></Sidelog>
        <div className="login grid place-content-center h-auto w-[45vw] py-6 shadow-lg bg-white rounded-md">
           
            <form action="" onSubmit={loginSub} className='flex flex-col gap-4 items-center w-[27vw]'>
                 <h1 className='text-6xl font-semibold text-sec'>Login User</h1>
                <input type="text" placeholder='username' value={username} onChange={e=>setUsername(e.target.value)} className=' border-b-2 border-neutral-200 outline-none h-16 w-full' />

                <div className="border-b-2 border-neutral-200 h-16 w-full overflow-hidden relative">
                     <input type={!eye?"password":'text'} placeholder='password'  value={password} onChange={e=>setPassword(e.target.value)} className='h-full w-full absolute top-0 outline-none'/>
                     <div className='absolute cursor-pointer h-6 w-6  top-1/2 -translate-y-1/2 right-2' onClick={()=>setEye(!eye)}>
                        {eye?<FaEye className='h-full w-full text-neutral-700'/>:<FaEyeSlash className='h-full w-full text-neutral-700'/>}

                     </div>
                     
                </div>
                {error && <p className="text-red-500">{error}</p>}
                <input type="submit" className='h-16 w-full mt-24 bg-sec rounded-md cursor-pointer'/>
                <h4>Don't have an account? <Link to='/register' className='underline text-blue-600'>create account </Link></h4>
            </form>
        </div>
    </div>
  )
}

export default login
