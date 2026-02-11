import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

const Login = ({ setToken }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmitHandler = async (e) => {
        try {
            e.preventDefault();
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/user/admin`, { email, password });
            
            if (response.data.success) {
                setToken(response.data.token)
                toast.success("Login Successful")
            } else {
                toast.error(response.data.message)
            }

        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }

    return (
        <div className='min-h-screen flex items-center justify-center w-full bg-black/95'>
            <div className='bg-white shadow-xl rounded-lg px-8 py-10 max-w-md w-full border border-[#b88a1e]/20'>
                <div className='mb-8 text-center'>
                    <h1 className='text-3xl font-serif font-bold text-gray-900 mb-2'>Movish</h1>
                    <p className='text-[#b88a1e] text-sm font-medium tracking-widest uppercase'>Admin Panel</p>
                </div>
                <form onSubmit={onSubmitHandler}>
                    <div className='mb-4'>
                        <p className='text-sm font-medium text-gray-700 mb-2'>Email Address</p>
                        <input onChange={(e) => setEmail(e.target.value)} value={email} className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none focus:border-[#b88a1e]' type="email" placeholder='your@email.com' required />
                    </div>
                    <div className='mb-6'>
                        <p className='text-sm font-medium text-gray-700 mb-2'>Password</p>
                        <input onChange={(e) => setPassword(e.target.value)} value={password} className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none focus:border-[#b88a1e]' type="password" placeholder='Enter your password' required />
                    </div>
                    <button className='w-full py-3 px-4 bg-black text-white hover:bg-[#b88a1e] transition-colors duration-300 rounded-md font-medium' type='submit'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login
