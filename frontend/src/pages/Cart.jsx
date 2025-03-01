import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/Shopcontext'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'

const Cart = () => {
  const { products, cartItems, currency, updateQuantity, navigate , token , getCartData } = useContext(ShopContext)
  const [cartData, setCartData] = useState([])

  useEffect(() => {
    if(products.length > 0){

      let tempData = []
      for (const itemId in cartItems) {
        if (cartItems[itemId]) {
          for (const size in cartItems[itemId]) {
            if (cartItems[itemId][size] > 0) {
              tempData.push({
                _id: itemId,
                quantity: cartItems[itemId][size],
                size: size
              })
            }
          }
        }
      }
      setCartData(tempData)
    }

  }, [cartItems,products])

  return (
    <div className='mt-3 sm:px-10 px-5 '>
      <div className="mb-3 px-3 text-2xl">
        <Title text1={'YOUR'} text2={'PRODUCTS'} />
      </div>
      <div className="flex flex-col text-lg gap-4 mb-3">
        {
          cartData.map((item, index) => {
            const productData = products.find((product) => product._id == item._id);
            if (!productData) {
              console.error(`Product not found for ID: ${item._id}`);
              return null;
            }
            const imageSrc = productData.image && productData.image.length > 0 ? productData.image[0] : '';
            return (
              <div key={index} className="grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_2fr] gap-6 text-gray-700 border-b border-t mb-3 px-3">
                <div className="flex sm:gap-20 py-5 items-center justify-between w-full  ">
                  <img src={imageSrc} alt={productData.name} className='w-16 sm:w-24' />
                  <div className="flex flex-col gap-2">
                    <p className='font-medium'>{productData.name}</p>
                    <div className='flex gap-6'>
                      <p>{currency}{productData.price}</p>
                      <p className='px-2 py-1 border bg-gray-200 border-gray-600 text-sm'>{item.size}</p>
                    </div>
                  </div>
                  <input type="number" onChange={(e) => e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id, item.size, Number(e.target.value))} className='border max-w-10 sm:max-w-20 sm:px-2 px-1 py-1 max-h-7' defaultValue={item.quantity} min={1} />
                  <i onClick={() => updateQuantity(item._id, item.size, 0)} className="ri-delete-bin-6-line cursor-pointer"></i>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="my-20 flex justify-end">
        <div className=" sm:w-[450px] w-full ">
          <CartTotal />
          <div className="btn w-full text-end">
            <button onClick={() => navigate('/place-order')} className='bg-black text-white text-sm my-8 px-8 py-3'>PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
