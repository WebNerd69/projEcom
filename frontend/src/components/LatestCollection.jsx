import React, { useEffect, useState } from 'react'
import { ShopContext } from '../context/Shopcontext'
import { useContext } from 'react'
import Title from './Title'
import ProductItem from './ProductItem'
const LatestCollection = () => {
     const { products } = useContext(ShopContext)
     const [LatestCollection,setLatestCollection] = useState([])
     useEffect(() => {
       setLatestCollection(products.slice(0,10));
     }, [])
     // console.log(LatestCollection)
     return (
          <div className='w-full p-20 flex flex-col justify-center items-center gap-3'>
               <div className='text-center py-8'>

                    <Title text1={"Latest"} text2={"Collection"} />
                    <p className='text-gray-400 font-medium'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus expedita placeat commodi debitis delectus vel aliquid voluptate nesciunt ipsam incidunt!</p>
               </div>
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 gap-y-12 sm:gap-6 md:gap-8">
                    {
                         LatestCollection.map((item,index)=>(
                              <ProductItem key={index} image={item.image} _id={item._id} name={item.name} price={item.price}/>
                         ))
                    }
               </div>
          </div>
          
     )
}

export default LatestCollection
