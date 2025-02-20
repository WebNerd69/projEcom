import React from 'react'

const Add = () => {
  const onSubmitHandler=(e)=>{
    e.preventDefault()
  }
  return (
    <form className='flex flex-col items-start gap-3' onSubmit={onSubmitHandler}>
      <div className="flex flex-col gap-2">
        <p className='text-gray-800 font-medium'>Upload images</p>
        <div className="flex flex-col md:flex-row gap-4">
          <label htmlFor="image1" className='w-20 h-20 rounded-lg bg-pink-50 flex items-center justify-center border-2 border-dashed border-[#ddaac0aa]'>
            <i className="ri-image-add-line text-4xl text-gray-400"></i>
            <input type="file" id="image1" className='hidden' />
          </label>
          <label htmlFor="image2" className='w-20 h-20 rounded-lg bg-pink-50 flex items-center justify-center border-2 border-dashed border-[#ddaac0aa]'>
            <i className="ri-image-add-line text-4xl text-gray-400"></i>
            <input type="file" id="image2" className='hidden' />
          </label>
          <label htmlFor="image3" className='w-20 h-20 rounded-lg bg-pink-50 flex items-center justify-center border-2 border-dashed border-[#ddaac0aa]'>
            <i className="ri-image-add-line text-4xl text-gray-400"></i>
            <input type="file" id="image3" className='hidden' />
          </label>
          <label htmlFor="image4" className='w-20 h-20 rounded-lg bg-pink-50 flex items-center justify-center border-2 border-dashed border-[#ddaac0aa]'>
            <i className="ri-image-add-line text-4xl text-gray-400"></i>
            <input type="file" id="image4" className='hidden' />
          </label>
        </div>
      </div>
      <div className="w-full md:w-1/2 mt-4">
        <p className='font-medium text-gray-800 mb-2'>Product name</p>
        <input type="text" placeholder='Type here' className='px-5 py-3 w-full rounded-lg outline-[#c9aabdcf] border ' />
      </div>
      <div className="w-full md:w-1/2 mt-4">
        <p className='font-medium text-gray-800 mb-2'>Product description</p>
        <textarea type="text" placeholder='Write Content here' className='px-5 py-3 w-full rounded-lg outline-[#c9aabdcf] border ' />
      </div>
      <div className="flex w-full md:w-1/2 justify-between">

        <div>
          <p className='font-medium text-gray-800 mb-2'>Select category</p>
          <select className='px-5 py-2 border rounded-lg outline-none'>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>
        <div>
          <p className='font-medium text-gray-800 mb-2'>Select type</p>
          <select className='px-5 py-2 border rounded-lg outline-none'>
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>

        <div className="w-full md:w-1/2">
          <p className='font-medium text-gray-800 mb-2'>Product name</p>
          <input type="Number" placeholder='25' className='px-5 py-2 w-full rounded-lg outline-[#c9aabdcf] border ' />
        </div>
      </div>

      <div className="flex flex-col w-full md:w-1/2 gap-3 mt-4">
        <p className='font-medium  text-gray-800'>Select Sizes</p>
        <div className='flex gap-3'>
          <div className='px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 cursor-pointer transition-colors duration-200 text-gray-700 font-medium shadow-sm'>
            <p>S</p>
          </div>
          <div className='px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 cursor-pointer transition-colors duration-200 text-gray-700 font-medium shadow-sm'>
            <p>M</p>
          </div>
          <div className='px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 cursor-pointer transition-colors duration-200 text-gray-700 font-medium shadow-sm'>
            <p>L</p>
          </div>
          <div className='px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 cursor-pointer transition-colors duration-200 text-gray-700 font-medium shadow-sm'>
            <p>XL</p>
          </div>
          <div className='px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 cursor-pointer transition-colors duration-200 text-gray-700 font-medium shadow-sm'>
            <p>XXL</p>
          </div>
        </div>

      </div>
      <div className=" flex items-center gap-3 mt-2">
        <input type="checkbox" id='bestSeller' />
        <label htmlFor="bestSeller " className='text-gray-800 font-medium'>Add to BestSellers</label>
      </div>
      <button type='submit' className='bg-black text-white px-8 py-3 rounded-lg font-medium mt-4 hover:bg-gray-800 transition-colors duration-200'>Add</button>
    </form>
  )
}

export default Add