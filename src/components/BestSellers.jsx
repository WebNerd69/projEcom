import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/Shopcontext'
import Title from './Title'
import ProductItem from './ProductItem'
const BestSellers = () => {
     const { product } = useContext(ShopContext)
     const [BestSeller, SetBestSeller] = useState([])
     useEffect(() => {
          const bestItem = product.filter((e) => (e.bestSeller))
          SetBestSeller(bestItem.slice(0,5))
     }, [])
     // console.log(BestSeller)
     return (
          <div className='w-full p-20 flex flex-col justify-center items-center gap-3'>
               <div className='text-center py-8'>

                    <Title text1={"Best"} text2={"Sellers"} />
                    <p className='text-gray-400 font-medium'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus expedita placeat commodi debitis delectus vel aliquid voluptate nesciunt ipsam incidunt!</p>
               </div>
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 gap-y-12 sm:gap-6 md:gap-8">
                    {
                         BestSeller.map((item, index) => (
                              <ProductItem key={index} image={item.image} id={item.id} name={item.name} price={item.price} />
                         ))
                    }
               </div>
          </div>
     )
}

export default BestSellers
