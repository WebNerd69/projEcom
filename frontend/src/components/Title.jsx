import React from 'react'

const Title = ({text1,text2}) => {
  return (
    <div className='inline-flex justify-center items-center gap-5'>
          <p className='text-gray-500 text-3xl'>{text1} <span className='text-gray-700 font-medium text-3xl'>{text2}</span></p>
          <p className='w-8 h-[2px] bg-gray-400'></p>
    </div>
  )
}

export default Title
