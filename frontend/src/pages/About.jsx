import React from 'react'
import Title from '../components/Title'
import Newsletter from '../components/Newsletter'
import {images} from '../assets/assets'
const About = () => {
  return (
    <div className='w-full px-4 flex flex-col gap-10'>
      <div className="text-center mt-8">
        <Title text1={"ABOUT"} text2={"US"}/>
      </div>
      <div className="flex md:flex-row flex-col w-full items-center gap-10">
        <img className="max-w-[360px] md:max-w-[480px]" src={images.teddy} alt="Teddy Bear" />
        <div className="flex flex-col gap-6 px-10">
          <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minus repellat incidunt architecto vel atque assumenda, fuga a saepe recusandae enim placeat aspernatur quidem delectus sapiente, tenetur consequatur repellendus reprehenderit amet porro ipsum. Doloremque esse perferendis nam? Omnis dicta atque, enim inventore iusto rem dolorem animi neque, distinctio quasi ex.</p>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minus repellat incidunt architecto vel atque assumenda, fuga a saepe recusandae enim placeat aspernatur quidem delectus sapiente, tenetur consequatur repellendus reprehenderit amet porro ipsum. Doloremque esse perferendis nam? Omnis dicta atque, enim inventore iusto rem dolorem animi neque, distinctio quasi ex.</p>
          <div className="flex flex-col gap-4">
            <b>OUR MISSION</b>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam vitae ad magnam animi amet alias vero odit, aliquid, id eum, distinctio esse et neque voluptatum consequatur aperiam iure expedita consequuntur!</p>
          </div>
        </div>
      </div>
      <div className="px-14 mt-2">
        <Title text1={"WHY"} text2={"CHOOSE US"}/>
      </div>
      <div className="flex flex-col md:flex-row px-14">
        <div className="border flex justify-center md:py-15 py-10 px-10  flex-col gap-3">
          <b>Quality assurance:</b>
          <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, officia?</p>
        </div>
        <div className="border flex justify-center md:py-15 py-10 px-10  flex-col gap-3">
          <b>Convenience:</b>
          <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, officia?</p>
        </div>
        <div className="border flex justify-center md:py-15 py-10 px-10  flex-col gap-3">
          <b>Exceptional Customer service:</b>
          <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, officia?</p>
        </div>
      </div>
      <Newsletter/>
    </div>
  )
}

export default About
