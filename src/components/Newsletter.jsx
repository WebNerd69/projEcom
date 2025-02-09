import React, { useState } from 'react'

const Newsletter = () => {
     const [Email,SetEmail] = useState()
     const onEmailChange = (event)=>{
          SetEmail(event.target.value)
     }
     const onSubmithandler =(event)=>{
          event.preventDefault();
     }
  return (
    <div className='text-center p-4 flex items-center flex-col my-4 gap-3'>
          <p className='text-gray-700 text-2xl font-semibold'>Subscribe now & get 20% off</p>
          <p className='text-gray-400 text-xs'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem eos explicabo iste cupiditate dignissimos incidunt.</p>
          <form className='w-full sm:w-1/2 flex mt-3 justify-center items-center' onSubmit={onSubmithandler}>
               <input type="email" placeholder='Enter your email...' required className='w-3/4 p-4' onChange={onEmailChange} value={Email}/>
               <button className='bg-black text-white font-medium p-4' type='submit'>Subscribe</button>
          </form>
    </div>
  )
}

export default Newsletter