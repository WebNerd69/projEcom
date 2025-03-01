import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { backendURL, currency } from '../App'
import { toast } from 'react-toastify'
const List = ({token}) => {

  const [list,setList] = useState([])

  const fetchListitem = async()=>{
    try {
      const response = await axios.get(backendURL+'/api/product/list')
      console.log(response)
      if (response.data.success) {
        setList(response.data.product)
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      toast.error(error.message+"1")
    }
  }

  const removeProduct = async(id)=>{
    try {
      const response = await axios.post(backendURL + '/api/product/remove',{id},{headers:{token}})
      if (response.data.success) {
        toast.success(response.data.message)
        await fetchListitem()
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }
  
  useEffect(() => {
    fetchListitem()
  }, [])
  return (
    <>
     <p className='mb-2 font-medium'>All products list</p>
     <div>
      {/* list table */}
      <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] bg-gray-100 border px-4 py-3">
        <b>Image</b>
        <b>Name</b>
        <b>Category</b>
        <b>Price</b>
        <b className='text-center'>Action</b>
      </div>

      {/* list items */}
      {
        list.map((item,index)=>{
          return(
            <div className="grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] bg-gray-50 border p-2 my-3 font-medium items-center" key={index}>
            <img src={item.image[0]} alt="" className='w-12' />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>{currency}{item.price}</p>
            <p className='text-right md:text-center cursor-pointer text-lg' onClick={()=>removeProduct(item._id)}>X</p>
            </div>
          )
        })
      }
     </div>
    </>
  )
}

export default List