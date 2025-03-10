import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/Shopcontext'
import Title from './Title'

const CartTotal = () => {
     const { currency, deliveryFee, getCartAmount, cartItems } = useContext(ShopContext);
     const [cartAmt, setCartAmt] = useState(0);
     const [totalAmt, setTotaltAmt] = useState(0);
     
     useEffect(() => {
         const cartAmount = parseFloat(getCartAmount().toFixed(2)); // Ensure 2 decimal places
         setCartAmt(cartAmount);
     
         if (cartAmount > 0) {
             const temp = (cartAmount + deliveryFee).toFixed(2); // Ensure 2 decimal places
             setTotaltAmt(parseFloat(temp)); // Convert back to number
         } else {
             setTotaltAmt(0);
         }
     }, [cartItems]);
     
     
     
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
                    <b>{currency}{totalAmt}</b>
               </div>

          </div>
    </div>
  )
}

export default CartTotal