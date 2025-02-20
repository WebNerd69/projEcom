import React from 'react'

const Navbar = ({ setToken }) => {
  const logoutHandler = () => {
    setToken('')
  }
  return (
    <div className='flex items-center justify-between px-10 py-5'>
      <div className="flex flex-col">
        <p className='text-2xl text-gray-800 font-medium'>FOREVER</p>
        <p className='text-sm text-gray-500'>admin panel</p>
      </div>
      <button className='bg-gray-500 text-white px-4 py-2 rounded-full hover:bg-red-600 font-medium' onClick={logoutHandler}>Log out</button>
    </div>
  )
}

export default Navbar