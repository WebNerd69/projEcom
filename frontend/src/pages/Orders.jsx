import React, { useContext, useEffect, useState } from 'react'
import Title from '../components/Title'
import { ShopContext } from '../context/Shopcontext'
import axios from 'axios'
import { toast } from 'react-toastify'

const Orders = () => {
  const { backendURL , token , currency } = useContext(ShopContext)
  const [orderData , setOrderData ] = useState([])

  const fetchOrderData = async()=>{
    try {
      if(!token){return null}
      const response = await axios.get(backendURL+"/api/order/orders",{headers:{token}})
      // console.log(response)
      if (response.data.success) {
        // setOrderData(response.data.orders)
        let allOrderItems = []
        response.data.orders.map((order)=>{
          order.items.map((item)=>{
            item['status'] = order.status
            item['date'] = order.date
            item['payment'] = order.payment
            item['paymentMethod'] = order.paymentMethod
            allOrderItems.push(item)
          })
        })
        setOrderData(allOrderItems.reverse())
      } else {
        toast.error("Unexpected error occoured")
        console.log(response.data.message)
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    fetchOrderData()
  }, [token])
  

  return (
    <div className='mt-8 pt-8 sm:px-14 px-5'>
      <div className="">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>
      <div className="flex flex-col mt-8">
        {
          orderData.map((item, index) => {
            return (
              <div className="flex md:items-center md:justify-between md:px-20 border-t border-b py-4 flex-col md:flex-row gap-3 items-start" key={index}>
                <div className="flex gap-8 items-center sm:w-1/4 w-full">
                  <img src={item.image[0]} className='w-24 h-24 object-contain' />
                  <div className="flex flex-col gap-2">
                    <p className='font-medium text-lg'>{item.name}</p>
                    <div className="flex gap-3">
                      <p>{currency}{item.price}</p>
                      <p>Quantity : {item.quantity}</p>
                      <p>Size : {item.size}</p>
                    </div>
                    <p className='text-gray-500'><span className='font-medium text-black'>Date : </span>{new Date(item.date).toDateString()}</p>
                    <p className='text-gray-500'><span className='font-medium text-black'>Payment : </span>{item.paymentMethod}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-800 w-1/6">
                  <p className='w-3.5 h-3.5 rounded-full bg-green-400'></p>
                  <p className='font-medium'>{item.status}</p>
                </div>
                <button onClick={()=>fetchOrderData()} className="border px-4 py-2 flex items-center justify-center cursor-pointer rounded-lg active:scale-[.87] transition-all ease-in-out duration-200 ">
                  Track Order
                </button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Orders
