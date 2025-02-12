import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/Shopcontext';
import { images } from '../assets/assets'
import RelatedProducts from '../components/RelatedProducts';
const Product = () => {
     const { product,currency,addToCart } = useContext(ShopContext)
     const { id } = useParams();
     // useStates
     const [productData, setProductData] = useState(null)
     const [image, setImage] = useState('')
     const [size,setSize] = useState('')

     // function
     const fetchProductData = async () => {
          product.map((item) => {
               if (item.id == id) {
                    setProductData(item)
                    setImage(item.image[0])
                    return null;
               }
          })
     }
     // useEffect
     useEffect(() => {
          fetchProductData()
     }, [id, productData])
     return productData ? (
          <div className='border-t-2 pt-10 transition-opacity duration-500 opacity-100 ease-in sm:px-24 px-10'>
               {/* product data */}
               <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row justify-between py-10">
                    {/* images */}
                    <div className="flex sm:flex-col flex-row overflow-x-auto justify-between sm:justify-normal sm:w-[18.7%] w-full items-center gap-2 ">
                         {
                              productData.image.map((item, index) => (
                                   <img src={item} key={index} onClick={() => setImage(item)} className='w-[24%] flex-shrink-0 sm:mb-3 sm:w-[50%] cursor-pointer' />
                              ))
                         }
                    </div>
                    <div className='sm:w-[40%]  w-full overflow-hidden'>
                         <img src={image} alt="" />
                    </div>
                    {/* product details */}
                    <div className="flex-1 gap-4">
                         <h1 className='font-medium text-2xl text-black'>{productData.name}</h1>
                         <div className="flex gap-1 mt-2">
                              <img src={images.star} alt="" className='w-3.5' />
                              <img src={images.star} alt="" className='w-3.5' />
                              <img src={images.star} alt="" className='w-3.5' />
                              <img src={images.star} alt="" className='w-3.5' />
                              <img src={images.dimStar} alt="" className='w-3.5' />
                              <p className='pl-2 text-sm'>(122)</p>
                         </div>
                         <p className='font-medium text-3xl mt-5'>{currency}{productData.price}</p>
                         <p className='mt-5 text-gray-500 '>{productData.description}</p>
                         <div className="flex flex-col mt-5 gap-2">
                              <p className='font-medium text-lg text-gray-800'>Select size</p>
                              <div className="flex gap-4">

                                   {productData.sizes.map((item,index)=>(
                                        <button className={`bg-gray-100 w-10 h-10 rounded-lg font-medium cursor-pointer ${item== size?'border-2 border-orange-500':''}`} key={index} onClick={()=>setSize(item)}>{item}</button>
                                   ))}
                              </div>
                         </div>
                         <button onClick={()=>addToCart(productData.id,size)} className='bg-zinc-950 text-white active:bg-gray-700 transition-all p-4 mt-5 rounded-lg' >ADD TO CART</button>
                         <hr className='mt-8 sm:w-3/4'/>
                         <div className="flex flex-col mt-5">
                              <p className="text-gray-400">100% original product.</p>
                              <p className="text-gray-400">Cash on delivery availabe.</p>
                              <p className="text-gray-400">Easy 7 days return policy.</p>
                         </div>
                    </div>

               </div>
               {/* description and review */}
               <div className="mt-20">
                    <div className="flex">
                         <p className='border px-5 py-3 text-sm font-medium'>Description</p>
                         <p className='border px-5 py-3 text-sm font-medium text-gray-600'>Reviews (122)</p>
                    </div>
                    <div className="flex flex-col text-sm text-gray-500 px-5 py-4 border gap-4 w-full sm:w-3/4">
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque rerum, at sint enim quae esse accusamus. Unde impedit, reiciendis, similique corporis quos ut perspiciatis debitis eos eaque quam atque nam id ad praesentium animi et sed commodi minus necessitatibus hic fugiat nisi qui sapiente? Dignissimos obcaecati non saepe sed quidem.</p>
                         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non quos atque quo qui! Officiis, distinctio debitis! Recusandae atque dolore maxime hic incidunt architecto voluptatum, delectus soluta quos rem, corporis, debitis asperiores ex alias voluptatem sit. Perspiciatis in iste rem magnam et maiores sit dicta natus veniam delectus. Facilis veritatis delectus quis omnis atque accusamus pariatur, doloremque laboriosam, id incidunt consectetur dicta soluta facere fugit aperiam commodi ipsam mollitia, dolorem cupiditate ea voluptatum! Voluptas modi aut debitis maxime eos sed laboriosam.</p>
                    </div>
               </div>
               <RelatedProducts category={productData.category} type={productData.type}/>
          </div>
     ) : <div className="opacity-0"></div>
}

export default Product
