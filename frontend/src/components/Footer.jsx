import React from 'react'

const Footer = () => {
     return (
          <div className=' py-7 flex flex-col gap-4 items-center'>
               <div className='flex flex-col sm:flex-row justify-evenly sm:gap-14 gap-5 px-5 sm:text-left'>
                    <div className='w-full sm:w-1/3'>
                         <p className='sm:text-3xl text-2xl text-gray-800 font-medium mb-4'>Forever</p>
                         <p className='text-sm text-gray-400 w-full sm:w-2/3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In recusandae eius qui optio? Cumque dolor repudiandae earum obcaecati esse. Cumque et atque quam dignissimos quas suscipit eum error optio doloremque.</p>
                    </div>
                    <div>
                         <p className='sm:text-xl text-lg text-gray-800 font-medium sm:mb-4 mb-2'>COMPANY</p>
                         <ul className='sm:text-lg text-sm text-gray-400'>
                              <li>Home</li>
                              <li>About</li>
                              <li>Delivery</li>
                              <li>Privacy policy</li>
                         </ul>
                    </div>
                    <div>
                         <p className='sm:text-xl text-lg text-gray-800 font-medium sm:mb-4 mb-2'>GET IN TOUCH</p>
                         <p className='sm:text-lg text-sm text-gray-400 '>+91-9775270246</p>
                         <p className='sm:text-lg text-sm text-gray-400 '>rroy64330@gmail.com</p>
                    </div>
               </div>
               <p className='w-[80%] bg-gray-200 h-[2px]'></p>
               <p className='text-sm text-gray-800 w-full sm:w-2/3 text-center font-medium'>© 2024 Forever. ------- All rights reserved.</p>
          </div>
     )
}

export default Footer