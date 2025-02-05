import React from 'react'

const Hero = () => {
     return (
          <div className='w-full py-2 flex justify-center items-center'>
               <div className="hero w-[80%] border border-gray-400 flex flex-col md:flex-row items-center px-4 py-6 gap-8 md:gap-0 rounded-xl">
                    <div className="left w-full md:w-1/2 flex flex-col gap-5 py-6 px-8 md:py-0">
                         <div className="part1 flex items-center">
                              <p className='border border-gray-400 w-12 md:w-16 h-[2px] mx-2'></p>
                              <p className='font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
                         </div>
                         <div className="part2 flex flex-col gap-5">
                              <h1 className='font-medium text-4xl md:text-5xl lg:text-6xl'>Latest Arrivals</h1>
                              <div className="part12 flex items-center">
                                   <p className='font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
                                   <p className='border border-gray-400 w-12 md:w-16 h-[2px] mx-2'></p>
                              </div>
                         </div>
                    </div>
                    <div className="right w-full md:w-1/2">
                         <img src="/src/assets/teddy.jpg" alt="Teddy Bear" className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-contain" />
                    </div>
               </div>
          </div>
     )
}

export default Hero
