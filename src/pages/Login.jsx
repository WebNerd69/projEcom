import React, { useState } from 'react'

const Login = () => {
  const [currentState, setCurrentState] = useState('signup')
  const onSubmitHandler = async (event)=>{
    event.preventDefault()
  }
  return (
    <form onSubmit={onSubmitHandler} className='flex items-center justify-center w-[80%] mx-auto my-28 flex-col gap-3'>
      <div className="flex justify-center w-full items-center gap-3 mb-5">
        <p className='text-3xl font-medium text-center'>{currentState === 'signup' ? "Signup" : "Login"}</p>
        <hr className='w-6 h-1 bg-gray-600' />
      </div>
      {currentState==='signup'&&<input type="text" placeholder='Name' className='sm:w-3/4 lg:w-1/4 lg:min-w-80 w-full px-5 py-2 border rounded' required />}
      <input type="email" placeholder='Email' className='sm:w-3/4 lg:w-1/4 lg:min-w-80 w-full px-5 py-2 border rounded' required />
      <input type="password" placeholder='Password' className='sm:w-3/4 lg:w-1/4 lg:min-w-80 w-full px-5 py-2 border rounded' required />
      {currentState==='signup'&&<input type="password" placeholder='Confirm password' className='sm:w-3/4 lg:w-1/4 lg:min-w-80 w-full px-5 py-2 border rounded' required />}
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
