import React, { useContext } from 'react'
import Title from '../components/Title'
import { ShopContext } from '../context/Shopcontext'

const Orders = () => {
  const { product, currency } = useContext(ShopContext)
  return (
    <div className='mt-8 pt-8 sm:px-14 px-5'>
      <div className="">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>
      <div className="flex flex-col mt-8">
        {
          product.slice(0,4).map((item, index) => {
            return (
              <div className="flex sm:items-center sm:justify-between sm:px-14 border-t border-b py-4 flex-col sm:flex-row gap-3 items-start" key={index}>
                <div className="flex gap-3 items-center sm:w-1/4 w-full">
                  <img src={item.image[0]} className='w-24 h-24 object-contain' />
                  <div className="flex flex-col">
                    <p className='font-medium text-lg'>{item.name}</p>
                    <div className="flex gap-3">
                      <p>{currency}{item.price}</p>
                      <p>Quantity : 1</p>
                      <p>Size : M</p>
                    </div>
                    <p className='text-gray-500'><span className='font-medium text-black'>Date : </span>15 Feb 2025</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-800">
                  <p className='w-3.5 h-3.5 rounded-full bg-green-400'></p>
                  <p>Ready to ship</p>
                </div>
                <div className="border px-4 py-2 flex items-center justify-center cursor-pointer rounded">
                  <p>Track Order</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Orders
