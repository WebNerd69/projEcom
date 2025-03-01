import React, { useState } from 'react'
import { addImage } from '../assets/assets'
import axios from 'axios'
import { backendURL } from '../App'
import { toast } from 'react-toastify'
const Add = ({token}) => {
  
  // state variables
  const [image1, setImage1] = useState(false)
  const [image2, setImage2] = useState(false)
  const [image3, setImage3] = useState(false)
  const [image4, setImage4] = useState(false)
  const [productName, setProductName] = useState("")
  const [description, setDescription] = useState("")
  const [price,setPrice] = useState('')
  const [category, setCategory] = useState("Men")
  const [type, setType] = useState("Topwear")
  const [bestseller, setBestseller] = useState(false)
  const [sizes, setSizes] = useState([])


  const onSubmitHandler = async (e) => {
    e.preventDefault()
    try {
      const formData = new FormData()
      formData.append('name',productName)
      formData.append('description',description)
      formData.append('price',price)
      formData.append('category',category)
      formData.append('type',type)
      formData.append('sizes',JSON.stringify(sizes))
      formData.append('bestseller',bestseller)

      image1 && formData.append('image1',image1)
      image2 && formData.append('image2',image2)
      image3 && formData.append('image3',image3)
      image4 && formData.append('image4',image4)

      const response = await axios.post(backendURL+'/api/product/add',formData,{headers:{token}})
      if (response.data.success) {
        toast.success(response.data.message)
        setProductName("")
        setDescription('')
        setCategory("Men")
        setType("Topwear")
        setPrice('')
        setSizes([])
        setImage1(false)
        setImage2(false)
        setImage3(false)
        setImage4(false)
        setBestseller(false)

      }else{
        toast.error("Failed to add product, fill the form carefully.")
      }
    } catch (error) {
      console.log(error.message)
      toast.error(error.message)
    }
  }

  return (
    <form className='flex flex-col items-start gap-3' onSubmit={onSubmitHandler}>
      <div className="flex flex-col gap-2">
        <p className='text-gray-800 font-medium'>Upload images</p>
        <div className="flex flex-col md:flex-row gap-4">
          <label htmlFor="image1" className='w-20 h-20 rounded-lg bg-pink-50 flex items-center justify-center border-2 border-dashed border-[#ddaac0aa]'>
            <img src={!image1 ? addImage : URL.createObjectURL(image1)} alt="" className={!image1?'w-6':'w-12 object-fill'} />
            <input onChange={(e) => setImage1(e.target.files[0])} type="file" id="image1" className='hidden'/>
          </label>
          <label htmlFor="image2" className='w-20 h-20 rounded-lg bg-pink-50 flex items-center justify-center border-2 border-dashed border-[#ddaac0aa]'>
            <img src={!image2 ? addImage : URL.createObjectURL(image2)} alt="" className={!image2?'w-6':'w-12 object-fill'} />
            <input onChange={(e) => setImage2(e.target.files[0])} type="file" id="image2" className='hidden' />
          </label>
          <label htmlFor="image3" className='w-20 h-20 rounded-lg bg-pink-50 flex items-center justify-center border-2 border-dashed border-[#ddaac0aa]'>
            <img src={!image3 ? addImage : URL.createObjectURL(image3)} alt="" className={!image3?'w-6':'w-12 object-fill'} />
            <input onChange={(e) => setImage3(e.target.files[0])} type="file" id="image3" className='hidden' />
          </label>
          <label htmlFor="image4" className='w-20 h-20 rounded-lg bg-pink-50 flex items-center justify-center border-2 border-dashed border-[#ddaac0aa]'>
            <img src={!image4 ? addImage : URL.createObjectURL(image4)} alt="" className={!image4?'w-6':'w-12 object-fill'} />
            <input onChange={(e) => setImage4(e.target.files[0])} type="file" id="image4" className='hidden' />
          </label>
        </div>
      </div>
      <div className="w-full lg:w-1/2 mt-4">
        <p className='font-medium text-gray-800 mb-2'>Product name</p>
        <input 
          type="text" 
          placeholder='Type here' 
          className='px-5 py-3 w-full rounded-lg outline-[#c9aabdcf] border'
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />
      </div>
      <div className="w-full lg:w-1/2 mt-4">
        <p className='font-medium text-gray-800 mb-2'>Product description</p>
        <textarea 
          type="text" 
          placeholder='Write Content here' 
          className='px-5 py-3 w-full rounded-lg outline-[#c9aabdcf] border'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div className="flex w-full lg:w-1/2 justify-between flex-col md:flex-row">

        <div>
          <p className='font-medium text-gray-800 mb-2'>Select category</p>
          <select 
            className='px-5 py-2 border rounded-lg outline-none'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>
        <div>
          <p className='font-medium text-gray-800 mb-2'>Select type</p>
          <select 
            className='px-5 py-2 border rounded-lg outline-none'
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>

        <div className="w-full lg:w-1/2">
          <p className='font-medium text-gray-800 mb-2'>Price</p>
          <input 
            type="number" 
            placeholder='25' 
            className='px-5 py-2 w-full rounded-lg outline-[#c9aabdcf] border'
            onChange={(e)=>setPrice(e.target.value)}
            value={price}
            required
          />
        </div>
      </div>

      <div className="flex flex-col w-full lg:w-1/2 gap-3 mt-4">
        <p className='font-medium  text-gray-800'>Select Sizes</p>
        <div className='flex md:gap-3 gap-1'>
          <div 
            className={`px-4 py-2  rounded-lg hover:bg-pink-50 cursor-pointer transition-colors duration-200 text-gray-700 font-medium shadow-sm ${sizes.includes("S") ? " bg-pink-100" : "bg-gray-100"}`}
            onClick={() => setSizes(prev=> prev.includes("S")?prev.filter(item=> item!=="S"):[...sizes, "S"])}
            
          >
            <p>S</p>
          </div>
          <div 
            className={`px-4 py-2  rounded-lg hover:bg-pink-50 cursor-pointer transition-colors duration-200 text-gray-700 font-medium shadow-sm ${sizes.includes("M") ? "bg-pink-100" : "bg-gray-100"}`}
            onClick={() => setSizes(prev=> prev.includes("M")?prev.filter(item=> item!=="M"):[...sizes, "M"])}
          >
            <p>M</p>
          </div>
          <div 
            className={`px-4 py-2  rounded-lg hover:bg-pink-50 cursor-pointer transition-colors duration-200 text-gray-700 font-medium shadow-sm ${sizes.includes("L") ? "bg-pink-100" : "bg-gray-100"}`}
            onClick={() => setSizes(prev=> prev.includes("L")?prev.filter(item=> item!=="L"):[...sizes, "L"])}
          >
            <p>L</p>
          </div>
          <div 
            className={`px-4 py-2  rounded-lg hover:bg-pink-50 cursor-pointer transition-colors duration-200 text-gray-700 font-medium shadow-sm ${sizes.includes("XL") ? "bg-pink-100" : "bg-gray-100"}`}
            onClick={() => setSizes(prev=> prev.includes("XL")?prev.filter(item=> item!=="XL"):[...sizes, "XL"])}
          >
            <p>XL</p>
          </div>
          <div 
            className={`px-4 py-2  rounded-lg hover:bg-pink-50 cursor-pointer transition-colors duration-200 text-gray-700 font-medium shadow-sm ${sizes.includes("XXL") ? "bg-pink-100" : "bg-gray-100"}`}
            onClick={() => setSizes(prev=> prev.includes("XXL")?prev.filter(item=> item!=="XXL"):[...sizes, "XXL"])}
          >
            <p>XXL</p>
          </div>
        </div>

      </div>
      <div className=" flex items-center gap-3 mt-2">
        <input 
          type="checkbox" 
          id='bestSeller'
          checked={bestseller}
          onChange={(e) => setBestseller(e.target.checked)}
        />
        <label htmlFor="bestSeller" className='text-gray-800 font-medium'>Add to BestSellers</label>
      </div>
      <button type='submit' className='bg-black text-white px-8 py-3 rounded-lg font-medium mt-4 hover:bg-gray-800 transition-colors duration-200'>Add</button>
    </form>
  )
}

export default Add