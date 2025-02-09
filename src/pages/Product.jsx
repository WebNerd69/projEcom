import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/Shopcontext';

const Product = () => {
     const { product } = useContext(ShopContext)
     const { id } = useParams();
     // useStates
     const [productData, setProductData] = useState(null)
     const [image,setImage] = useState('')

     const fetchProductData = async () => {
          product.map((item) => {
               if (item.id == id) {
                    setProductData(item)
                    setImage(item.image[0])
                    return null;
               }
          })
     }

     useEffect(() => {
          fetchProductData()
     }, [id, productData])

     return productData ?(
          <div>

          </div>
     ) : <div className="opacity-0"></div>
}

export default Product
