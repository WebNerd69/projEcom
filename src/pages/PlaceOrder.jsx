import React, { useContext, useState } from 'react'
import Title from "../components/Title"
import CartTotal from "../components/CartTotal"
import { ShopContext } from '../context/Shopcontext'
const PlaceOrder = () => {
	const [method,setMethod] = useState('razorpay')
	const {navigate} = useContext(ShopContext)
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-4 sm:pt-14 min-h-[80vh] px-5 sm:px-28'>
		{/* left side */}
		<div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
			<div className="text-xl sm:text-2xl my-3">
				<Title text1={'DELIVERY'} text2={'INFORMATION'}/>
			</div>
			<div className="flex w-full gap-3">
				<input type="text" placeholder='First name' className='px-4 py-2 rounded bg-gray-50 border w-full' />
				<input type="text" placeholder='Last name' className='px-4 py-2 rounded bg-gray-50 border w-full' />
			</div>
			<input type="email" placeholder='Email address' className='px-4 py-2 rounded bg-gray-50 border w-full' />
			<div className="flex w-full gap-3">
				<input type="text" placeholder='City' className='px-4 py-2 rounded bg-gray-50 border w-full' />
				<input type="text" placeholder='State' className='px-4 py-2 rounded bg-gray-50 border w-full' />
			</div>
			<div className="flex w-full gap-3">
				<input type="number" placeholder='Zipcode' className='px-4 py-2 rounded bg-gray-50 border w-full' />
				<input type="text" placeholder='Country' className='px-4 py-2 rounded bg-gray-50 border w-full' />
			</div>
			<input type="number" placeholder='Phone' className='px-4 py-2 rounded bg-gray-50 border w-full' />
		</div>
		{/* Right side */}
		<div className="mt-8 min-w-80">
			<div className="mt-8 ">
				<CartTotal/>
			</div>
			{/* payment methods */}
			<div className="mt-12">
				<Title text1={"PAYMENT"} text2={"METHODS"}/>
			</div>
			<div className="w-full flex flex-col sm:flex-row gap-3 mt-5">
				<div onClick={()=>setMethod('razorpay')} className="flex items-center justify-between p-2 px-3 cursor-pointer border gap-4 rounded">
					<p className={`rounded-full w-3.5 h-3.5 border ${method === 'razorpay'?'bg-green-400':''}`}></p>
					<p className='font-medium '>Razorpay</p>
				</div>

				<div onClick={()=>setMethod('cod')} className="flex items-center justify-between p-2 px-3 cursor-pointer border gap-4 rounded">
					<p className={`rounded-full w-3.5 h-3.5 border ${method === 'cod'?'bg-green-400':''}`}></p>
					<p className='font-medium '>CASH ON DELIVERY</p>
				</div>

			</div>
			<div className="mt-4 w-full text-end">
				<button onClick={()=>navigate('/orders')} className='bg-black text-white px-8 py-3 rounded'>PLACE ORDER</button>
			</div>
		</div>
    </div>
  )
}

export default PlaceOrder
