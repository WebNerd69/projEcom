import React, { useState } from 'react'
import axios from 'axios'
import { backendURL } from '../App'
import { toast } from 'react-toastify'
const Login = ({setToken}) => {
     const [email,setEmail] = useState('')
     const [password,setPassword] = useState('')
     const onSubmitHandler = async(e)=>{
          try {
               e.preventDefault();
               const response = await axios.post(backendURL + '/api/user/admin' , {email,password});
               if (response.data.success) {
                    setToken(response.data.token)
               } else {
                    toast.error(response.data.message)
               }
          } catch (error) {
               toast.error(error.message)
          }
     }
  return (
    <div className='flex items-center justify-center min-h-screen p-10 bg-gray-50' >
          <div className="p-5 w-[380px] flex gap-6 flex-col  bg-white rounded-lg shadow-lg">
               <h1 className='text-3xl font-bold'>Admin panel</h1>
               <form onSubmit={onSubmitHandler} className='flex flex-col gap-4'>
                    <div>
                         <p className='text-sm text-gray-600 mb-2 font-medium'>Email</p>
                         <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" placeholder='your@email.com' className='w-full px-4 py-3 bg-gray-50 text-gray-800 rounded-lg outline-none' required />
                    </div>
                    <div>
                         <p className='text-sm text-gray-600 mb-2 font-medium'>Password</p>
                         <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" placeholder='Enter your password' className='w-full px-4 py-3 bg-gray-50 text-gray-800 rounded-lg outline-none' required />
                    </div>
                    
                    <button type="submit" className='bg-black rounded-lg w-full text-center py-4 text-white '>Login</button>
               </form>
          </div>
    </div>
  )
}

export default Login