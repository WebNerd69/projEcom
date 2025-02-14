import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/Shopcontext'
import Title from './Title'

const CartTotal = () => {
     const {currency, deliveryFee, getCartAmount,cartItems} = useContext(ShopContext)
     const [cartAmt, setCartAmt] = useState(0)
     useEffect(() => {
       setCartAmt(getCartAmount())

     }, [cartItems])
     
  return (
     
    <div className='w-full'>
          <div className="text-2xl">
               <Title text1={"CART"} text2={"TOTAL"}/>
          </div>
          <div className="flex flex-col gap-2 mt-2 text-sm">
               <div className="flex justify-between">
                    <p>Subtotal</p>
                    <p>{currency}{cartAmt}</p>
               </div>
               <div className="flex justify-between">
                    <p>Delivery fee</p>
                    <p>{currency}{deliveryFee}</p>
               </div>
               <div className="flex justify-between">
                    <b>Total</b>
                    <b>{currency}{cartAmt>0?cartAmt+deliveryFee:0}</b>
               </div>

          </div>
    </div>
  )
}

export default CartTotal