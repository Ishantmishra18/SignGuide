import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Sidelog from '../Component/sidelog';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [conPass, setConPass] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [eye, setEye] = useState(false);
    const [eye1, setEye1] = useState(false);

    // Password Validation Function
    const validatePassword = (password) => {
        let errors = [];
        if (!/.{8,}/.test(password)) errors.push("At least 8 characters");
        if (!/[A-Z]/.test(password)) errors.push("One uppercase letter");
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) errors.push("One special character");
        if (!/[0-9]/.test(password)) errors.push("One number");
        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Check if passwords match
        if (password !== conPass) {
            setError("Passwords do not match");
            return;
        }

        // Validate password
        const passwordErrors = validatePassword(password);
        if (passwordErrors.length > 0) {
            setError(`Password must have: ${passwordErrors.join(", ")}`);
            return;
        }

        setError('');
        setSuccess('');

        try {
            const response = await axios.post('/register', {
                username,
                password,
                email,
            });

            setSuccess("Registration successful!");
            console.log(response.data);

            // Clear fields
            setUsername('');
            setPassword('');
            setConPass('');
            setEmail('');
        } catch (err) {
            setError("Registration failed. Please try again.");
        }
    };

    return (
        <div className='h-screen w-screen flex'>
            <Sidelog />
            <div className="login grid place-content-center h-auto w-[45vw] py-6 shadow-lg bg-white rounded-md">
                <form onSubmit={handleSubmit} className='flex flex-col gap-4 items-center w-[27vw]'>
                    <h1 className='text-6xl font-semibold text-sec'>Register User</h1>
                    <input type="text" placeholder='Username' value={username} 
                        onChange={e => setUsername(e.target.value)} 
                        className='border-b-2 border-neutral-200 outline-none h-16 w-full' 
                    />
                    
                    {/* Password Input with Validation */}
                    <div className="border-b-2 border-neutral-200 h-16 w-full relative">
                        <input type={eye ? 'text' : 'password'} placeholder='Password' value={password}
                            onChange={e => setPassword(e.target.value)} 
                            className='h-full w-full absolute top-0 outline-none'
                        />
                        <div className='absolute cursor-pointer h-6 w-6 top-1/2 -translate-y-1/2 right-2' 
                            onClick={() => setEye(!eye)}>
                            {eye ? <FaEye className='h-full w-full text-neutral-700'/> 
                                : <FaEyeSlash className='h-full w-full text-neutral-700'/>}
                        </div>
                    </div>

                    {/* Confirm Password Input */}
                    <div className="border-b-2 border-neutral-200 h-16 w-full relative">
                        <input type={eye1 ? 'text' : 'password'} placeholder='Confirm Password' value={conPass}
                            onChange={e => setConPass(e.target.value)} 
                            className='h-full w-full absolute top-0 outline-none'
                        />
                        <div className='absolute cursor-pointer h-6 w-6 top-1/2 -translate-y-1/2 right-2' 
                            onClick={() => setEye1(!eye1)}>
                            {eye1 ? <FaEye className='h-full w-full text-neutral-700'/> 
                                : <FaEyeSlash className='h-full w-full text-neutral-700'/>}
                        </div>
                    </div>

                    <input type='email' placeholder='Email' value={email} 
                        onChange={e => setEmail(e.target.value)} 
                        className='border-b-2 border-neutral-200 outline-none h-16 w-full' 
                    />

                    {error && <p className="text-red-500">{error}</p>}
                    {success && <p className="text-green-500">{success}</p>}

                    <input type="submit" className='h-16 w-full mt-24 bg-sec rounded-md cursor-pointer'/>
                    
                    <h4>Already have an account? <Link to='/login' className='underline text-blue-600'>Login</Link></h4>
                </form>
            </div>
        </div>
    );
};

export default Register;
