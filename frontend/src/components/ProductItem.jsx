import React, { useContext } from 'react'
import { ShopContext } from '../context/Shopcontext'
import { Link } from 'react-router-dom'

const ProductItem = ({_id,image,price,name}) => {
     const {currency} = useContext(ShopContext)
  return (
    <Link to={`/product/${_id}`} className='text-gray-700 cursor-pointer'>
          <div className="overflow-hidden mx-6 rounded-lg">
               <img src={image[0]} alt="image" className='hover:scale-110 transition ease-in-out duration-250' />
          </div>
          <p className='text-xl font-medium'>{name}</p>
          <p className='pt-2 pb-1 text-md font-bold '>{currency}{price}</p>
    </Link>
  )
}

export default ProductItem
