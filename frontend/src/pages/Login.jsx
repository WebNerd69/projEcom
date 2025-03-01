import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { ShopContext } from '../context/Shopcontext'
import { toast } from 'react-toastify'


const Login = () => {
  const {setToken,token,navigate,backendURL} = useContext(ShopContext)
  const [currentState, setCurrentState] = useState('login')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  
  const onSubmitHandler = async (event)=>{
    event.preventDefault()
    try {
      if(currentState === "signup"){
        if (password === confirmPassword) {
          const response = await axios.post(backendURL+"/api/user/register",{name,email,password})
          if (response.data.success) {
            setToken(response.data.token)
            localStorage.setItem("token",response.data.token)
          } else {
            toast.error(response.data.message)  
          }
          
        } else {
          toast.warning("Please enter password carefully")
        }
      }else{
        const response = await axios.post(backendURL+"/api/user/login",{email,password})
        if (response.data.success) {
          setToken(response.data.token)
          localStorage.setItem("token",response.data.token)
        } else {
          toast.error(response.data.message)
        }
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    if (token) {
      navigate('/')
    }
  }, [token])
  
  return (
    <form onSubmit={onSubmitHandler} className='flex items-center justify-center w-[80%] mx-auto my-28 flex-col gap-3'>
      <div className="flex justify-center w-full items-center gap-3 mb-5">
        <p className='text-3xl font-medium text-center'>{currentState === 'signup' ? "Signup" : "Login"}</p>
        <hr className='w-6 h-1 bg-gray-600' />
      </div>
      {currentState==='signup'&&<input 
        type="text" 
        placeholder='Name' 
        className='sm:w-3/4 lg:w-1/4 lg:min-w-80 w-full px-5 py-2 border rounded'
        value={name}
        onChange={(e) => setName(e.target.value)}
        required 
      />}
      <input 
        type="email" 
        placeholder='Email' 
        className='sm:w-3/4 lg:w-1/4 lg:min-w-80 w-full px-5 py-2 border rounded'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required 
      />
      <input 
        type="password" 
        placeholder='Password' 
        className='sm:w-3/4 lg:w-1/4 lg:min-w-80 w-full px-5 py-2 border rounded'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required 
      />
      {currentState==='signup'&&<input 
        type="password" 
        placeholder='Confirm password' 
        className='sm:w-3/4 lg:w-1/4 lg:min-w-80 w-full px-5 py-2 border rounded'
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required 
      />}
      <div className="flex mt-[-8px] text-sm sm:w-3/4 lg:w-1/4 lg:min-w-80 w-full justify-between">
        <p className={`cursor-pointer hover:text-gray-600 ${currentState==='login'?'opacity-1':'opacity-0'}`}>Forgot your password?</p>
        {currentState === 'signup' ?
         <p className='cursor-pointer hover:text-gray-600' onClick={()=>setCurrentState('login')}>Login</p> 
         :
         <p className='cursor-pointer hover:text-gray-600' onClick={()=>setCurrentState('signup')}>Create an account</p>}
      </div>
      <div className="flex justify-center my-8" >
        <button type='submit' className='px-8 py-3 bg-black text-white'>{currentState === 'signup' ? "SIGNUP" : "LOGIN"}</button>
      </div>

    </form>
  )
}

export default Login
