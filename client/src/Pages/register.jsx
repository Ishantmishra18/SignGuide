import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [conPass, setConPass] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [eye , setEye] = useState(false)
    const [eye1 , setEye1] = useState(false)

   

    const handleUser = (e) => {
        setUsername(e.target.value);
    };

    const handlePass = (e) => {
        setPassword(e.target.value);
    };

    const handleCon = (e) => {
        setConPass(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Check if passwords match
        if (password !== conPass) {
            setError("Passwords do not match");
            return;
        }

        setError('');
        setSuccess('');

    
            // Make the POST request to the backend
            const response = await axios.post('http://localhost:3000/register', {
                username,
                password,
               
            });

            // If registration is successful, display a success message
            setSuccess("Registration successful!");
            console.log(response.data);  // Log the response data for debugging

            // Optionally, clear the input fields
            setUsername('');
            setPassword('');
            setConPass('');
    };

    return (
   <div className='h-screen w-screen flex'>
          <div className="w-[55vw] h-full rounded-r-[10%] shadow-lg overflow-hidden grid place-content-center bg-[url('/assets/login.png')] bg-center bg-cover bg-black/50">
     <div className="w-[30vw] aspect-square rounded-3xl bg-white bg-opacity-10 backdrop-blur-md p-5 flex items-center justify-center">
       <h2 className="text-white text-2xl px-4">"I Don't mind being deaf.What bothers me is that they don't let me deaf"</h2>
     </div>
   </div>
           <div className="login grid place-content-center h-auto w-[45vw] py-6 shadow-lg bg-white rounded-md">
              
               <form action="" onSubmit={handleSubmit} className='flex flex-col gap-4 items-center w-[27vw]'>
                    <h1 className='text-6xl font-semibold text-sec'>Register User</h1>
                   <input type="text" placeholder='username' value={username} onChange={e=>setUsername(e.target.value)} className=' border-b-2 border-neutral-200 outline-none h-16 w-full' />
   
                   <div className="border-b-2 border-neutral-200 h-16 w-full overflow-hidden relative">
                        <input type={!eye?"password":'text'} placeholder='password'  value={password} onChange={e=>setPassword(e.target.value)} className='h-full w-full absolute top-0 outline-none'/>
                        <div className='absolute cursor-pointer h-6 w-6  top-1/2 -translate-y-1/2 right-2' onClick={()=>setEye(!eye)}>
                           {eye?<FaEye className='h-full w-full text-neutral-700'/>:<FaEyeSlash className='h-full w-full text-neutral-700'/>}
   
                        </div>
                        
                   </div>
                   <div className="border-b-2 border-neutral-200 h-16 w-full overflow-hidden relative">
                        <input type={!eye1?"password":'text'} placeholder='password'  value={conPass} onChange={e=>setConPass(e.target.value)} className='h-full w-full absolute top-0 outline-none'/>
                        <div className='absolute cursor-pointer h-6 w-6  top-1/2 -translate-y-1/2 right-2' onClick={()=>setEye1(!eye1)}>
                           {eye1?<FaEye className='h-full w-full text-neutral-700'/>:<FaEyeSlash className='h-full w-full text-neutral-700'/>}
   
                        </div>
                        
                   </div>
                   {error && <p className="text-red-500">{error}</p>}
                   <input type="submit" className='h-16 w-full mt-24 bg-sec rounded-md cursor-pointer'/>
                   <h4>Already have an account? <Link to='/login' className='underline text-blue-600'>login account </Link></h4>
               </form>
           </div>
       </div>
    );
};

export default Register;