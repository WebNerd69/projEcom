import React, { useContext, useState, useEffect } from 'react'
import { ShopContext } from '../context/Shopcontext'
import Title from './Title'
import ProductItem from './ProductItem'
const RelatedProducts = ({ category, type }) => {
     const { products } = useContext(ShopContext)
     const [related, setRelated] = useState([])
     let productCopy;
     useEffect(() => {
          productCopy = products.slice();
          if (products.length > 0) {
               productCopy = productCopy.filter((item) => category === item.category)
               productCopy = productCopy.filter((item) => type === item.type)
          }
          setRelated(productCopy.slice(0, 5));

     }, [products])

     return (

          <div className='my-20'>
               <div className="text-center text-3xl px-5">
                    <Title text1={"RELATED"} text2={"PRODUCTS"} />
               </div>
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-10 px-5">
                    {related.map((item, index) => (
                         <ProductItem key={index} image={item.image} _id={item._id} name={item.name} price={item.price} />
                    ))}
               </div>
          </div>
     )
}

export default RelatedProducts