import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { backendURL, currency } from './../App';
import { toast } from 'react-toastify';
const Orders = ({token}) => {

  const [orders,setOrders] = useState([])

  const fetchAllOrders = async()=>{
    try {
      if (!token) {
        return null
      }
      const response = await axios.post(backendURL+'/api/order/list',{},{headers:{token}})
      if (response.data.success) {
        setOrders(response.data.orders)
      } else {
        toast.error("Some unknown error occoured :(")
        console.log(response.data.message)
      }
    } catch (error) {
      console.log(error.message)
      toast.error(error.message)
    }
  }

  const statusUpdateHandler = async (event , orderId)=>{
    try {
      const response = await axios.post(backendURL + "/api/order/status" , {orderId , status:event.target.value}, {headers:{token}})
      if (response.data.success) {
        toast.success(response.data.message)
        await fetchAllOrders()
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error.message)
      toast.error(error.message)
    }
  }

  useEffect(()=>{
    fetchAllOrders()
  },[token])
  
  console.log(orders)
  return (
    <div>
      <h3 className='font-bold text-3xl flex items-center gap-5'>Orders <p className='w-16 h-[2px] bg-zinc-900 mt-2'></p></h3>

      {
        orders.reverse().map((order,index)=>{
          return(
            <div key={index} className='grid sm:grid-cols-[0.5fr_2fr_1fr] md:grid-cols-[0.5fr_1.5fr_1.5fr_1fr_0.5fr] gap-3 items-start mt-8 px-10 py-5 border rounded-lg'>
              <i className="ri-box-1-line text-5xl my-auto"></i>
              <div>
                {
                  order.items.map((item,index)=>{
                    if (index === order.items.length -1) {
                      return <p key={index}>{item.name} x {item.quantity} <span>{item.size}</span></p>
                    } else {
                      return <p key={index}>{item.name} x {item.quantity} <span>{item.size}</span> ,</p>
                      
                    }
                  })
                }
              </div>
              <div>
                <p className='font-medium'>{`${order.address.firstName} ${order.address.lastName}`}</p>
                <p>{order.address.street + ","}</p>
                <p>{order.address.city + ", " + order.address.state + ", " + order.address.country + ", " + order.address.zipcode }</p>
                <p>+91-{order.address.phone}</p>
              </div>
              <div>
                <p>Items : <span className='font-medium'>{order.items.length}</span></p>
                <p>Payment method : <span className='font-medium'>{order.paymentMethod}</span></p>
                <p>Payment status : <span className={`font-medium ${order.payment?"text-green-300":"text-red-500"}`}>{order.payment?"Done":"Pending"}</span></p>
                <p>Date : {new Date(order.date).toLocaleDateString()} </p>
                <p className='font-medium '>{currency}{order.amount}</p>
              </div>
              <select onChange={(event)=>statusUpdateHandler(event,order._id)} value={order.status} className='px-4 py-2 border rounded-lg my-auto outline-none font-medium cursor-pointer'>
                <option className='cursor-pointer' value="Order placed">Order placed</option>
                <option className='cursor-pointer' value="Packing">Packing</option>
                <option className='cursor-pointer' value="Shipped">Shipped</option>
                <option className='cursor-pointer' value="Out for delivery">Out for delivery</option>
                <option className='cursor-pointer' value="Delivered">Delivered</option>
              </select>
            </div>
            
          )
        } 
        )
      }
    </div>
  )
}

export default Orders