import React from 'react'
import {NavLink} from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className='w-[18%] min-h-screen border-r-2'>
          <div className="flex flex-col gap-6 pt-10 pl-[20%]">
               <NavLink to={'/add'} className='flex items-center gap-3 border border-gray-300 rounded-l px-4 py-3'>
                    <i className="ri-add-circle-line text-xl"></i>
                    <p className='md:block hidden font-medium'>Add item</p>
               </NavLink>
               <NavLink to={'/list'} className='flex items-center gap-3 border border-gray-300 rounded-l px-4 py-3'>
                    <i className="ri-archive-line text-xl"></i>
                    <p className='md:block hidden font-medium'>List items</p>
               </NavLink>
               <NavLink to={'/orders'} className='flex items-center gap-3 border border-gray-300 rounded-l px-4 py-3'>
                    <i className="ri-archive-2-line text-xl"></i>
                    <p className='md:block hidden font-medium'>Orders</p>
               </NavLink>
          </div>
    </div>
  )
}

export default Sidebar