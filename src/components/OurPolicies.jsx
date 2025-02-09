import React from 'react'

const OurPolicies = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-evenly items-center text-sm text-gray-700 p-6 gap-y-6 my-6'>
          <div className="text-center">
               <i className="ri-exchange-funds-fill text-4xl"></i>
               <p className='font-medium text-lg'>Easy Exchange</p>
               <p className='text-gray-400'>We provide free exchange policy within 7 days.</p>
          </div>
          <div className="text-center">
               <i className="ri-restart-line text-4xl"></i>
               <p className='font-medium text-lg'>Easy Return</p>
               <p className='text-gray-400'>We provide eaxy return policy within 7 days.</p>
          </div>
          <div className="text-center">
               <i className="ri-customer-service-fill text-4xl"></i>
               <p className='font-medium text-lg'>Best Customer Service</p>
               <p className='text-gray-400'>We provide 24/7 customer service.</p>
          </div>
    </div>
  )
}

export default OurPolicies