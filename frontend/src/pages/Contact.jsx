import React from 'react'
import Title from '../components/Title'
import {images} from '../assets/assets'
import Newsletter from '../components/Newsletter'
const Contact = () => {
  return (
    <div className='flex flex-col gap-8 px-5 md:px-20'>
        <div className="text-center">
          <Title text1={'CONTACT'} text2={"US"}/>
        </div>
        <div className="flex flex-col md:flex-row justify-evenly ">
          <img src={images.teddy} alt="" className='md:max-w-[420px] px-10' />
          <div className="flex flex-col  gap-4 px-10 items-start py-10 justify-center">
            <p className='font-semibold text-2xl text-gray-600'>Our store</p>
            <p className='text-gray-500'>1640 kobiraj street <br/> 350 WestBengal,India </p>
            <p className='text-gray-500'>Tel: (+91) 9775270246 <br /> Email:rroy64330@gmail.com</p>
            <p className='font-semibold text-2xl text-gray-600'>Careers at forever.</p>
            <p className='text-gray-500'>1640 kobiraj street <br/> 350 WestBengal,India </p>
            <button className='px-8 py-4 border-black border hover:bg-black hover:text-white transition-all duration-300 ease-in-out'>Explore jobs</button>
          </div>
        </div>
        <Newsletter/>
    </div>
  )
}

export default Contact
