import React, { useContext, useState } from 'react'
import Title from "../components/Title"
import CartTotal from "../components/CartTotal"
import { ShopContext } from '../context/Shopcontext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { IDLE_FETCHER } from 'react-router-dom'
const PlaceOrder = () => {
	const [method,setMethod] = useState('Razorpay')
	const [formData,setFormData] = useState({
		firstName: "",
		lastName:"",
		email:"",
		street:"",
		city:"",
		state:"",
		zipcode:"",
		country:"",
		phone:""
	})

	const onChangeHandler = (e)=>{
		const name = e.target.name
		const value = e.target.value

		setFormData(data=> ({...data,[name]:value}))
	}
	const {navigate, token, getCartAmount, setCartItems, deliveryFee, cartItems, products, backendURL, } = useContext(ShopContext)

	const initPay = (order) => {
		if (!order || !order.id) {
		    console.error("Order object is missing or invalid:", order);
		    return;
		}
	 
		const options = {
		    key: import.meta.env.VITE_RAZORPAY_KEY_ID,
		    amount: order.amount,
		    currency: order.currency,
		    name: "Order payment",
		    description: "Order payment",
		    order_id: order.id, // Ensure order.id is correctly passed
		    handler: async (response) => {
			   console.log("Payment Response:", response);
			   try {
				const {data} = await axios.post(backendURL+"/api/order/verifyRazorpay" , response , {headers:{token}})
				if (data.success) {
					navigate("/orders")
					setCartItems({})
					toast.success(data.message)
				}else{
					toast.error(data.message)
				}
			   } catch (error) {
				console.log(error)
				toast.error(error.message)
			   }
		    },
		};
	 
		const rzp = new window.Razorpay(options); // Add 'new' keyword
		rzp.open();
	 };
	 

	const onSubmitHandler  = async(e)=>{
		e.preventDefault();
		try {
			let orderItems = []
			for (const items in cartItems){
				for(const item in cartItems[items]){
					if(cartItems[items][item]>0){
						const itemsInfo  = structuredClone(products.find(product => product._id === items))
						if (itemsInfo){
							itemsInfo.size = item;
							itemsInfo.quantity = cartItems[items][item]
							orderItems.push(itemsInfo)
						}
					}
				}
			}
			console.log(getCartAmount())
			const orderData = {
				address: formData,
				items: orderItems,
				amount:(getCartAmount() + deliveryFee).toFixed(2)
			}

			switch (method){
				case 'COD':
					const response = await axios.post(backendURL+'/api/order/place',orderData,{headers:{token}})
					console.log(response)
					console.log(orderData)
					if (response.data.success) {
						toast.success("Order placed")
						setCartItems({})
						navigate('/orders')
					}else{
						toast.error(response.data.message)
					}
					break;
				case 'Razorpay':
					const razorpayResponse = await axios.post(backendURL+"/api/order/razorpay",orderData,{headers:{token}})
					if (razorpayResponse.data.success) {
						initPay(razorpayResponse.data.order)
						console.log(razorpayResponse.data)
					}else{
						console.log(razorpayResponse.data)
					}
					break;
				default:
					break;
			}
		} catch (error) {
			console.log(error.message)
		}

	}
  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col sm:flex-row justify-between gap-4 pt-4 sm:pt-14 min-h-[80vh] px-5 sm:px-28'>
		{/* left side */}
		<div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
			<div className="text-xl sm:text-2xl my-3">
				<Title text1={'DELIVERY'} text2={'INFORMATION'}/>
			</div>
			<div className="flex w-full gap-3">
				<input onChange={onChangeHandler} name='firstName' value={formData.firstName} type="text" placeholder='First name' className='px-4 py-2 rounded bg-gray-50 border w-full' required />
				<input onChange={onChangeHandler} name='lastName' value={formData.lastName} type="text" placeholder='Last name' className='px-4 py-2 rounded bg-gray-50 border w-full' required />
			</div>
			<input onChange={onChangeHandler} name='email' value={formData.email} type="email" placeholder='Email address' className='px-4 py-2 rounded bg-gray-50 border w-full' required />
			<input onChange={onChangeHandler} name='street' value={formData.street} type="text" placeholder='Street' className='px-4 py-2 rounded bg-gray-50 border w-full' required />
			<div className="flex w-full gap-3">
				<input onChange={onChangeHandler} name='city' value={formData.city} type="text" placeholder='City' className='px-4 py-2 rounded bg-gray-50 border w-full' required />
				<input onChange={onChangeHandler} name='state' value={formData.state} type="text" placeholder='State' className='px-4 py-2 rounded bg-gray-50 border w-full' required />
			</div>
			<div className="flex w-full gap-3">
				<input onChange={onChangeHandler} name='zipcode' value={formData.zipcode} type="number" placeholder='Zipcode' className='px-4 py-2 rounded bg-gray-50 border w-full' required />
				<input onChange={onChangeHandler} name='country' value={formData.country} type="text" placeholder='Country' className='px-4 py-2 rounded bg-gray-50 border w-full' required />
			</div>
			<input onChange={onChangeHandler} name='phone' value={formData.phone} type="number" placeholder='Phone' className='px-4 py-2 rounded bg-gray-50 border w-full' required />
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
				<div onClick={()=>setMethod('Razorpay')} className="flex items-center justify-between p-2 px-3 cursor-pointer border gap-4 rounded">
					<p className={`rounded-full w-3.5 h-3.5 border transition-all ease-in duration-200 ${method === 'Razorpay'?'bg-green-400':''}`}></p>
					<p className='font-medium '>Razorpay</p>
				</div>
				{/* <div onClick={()=>setMethod('stripe')} className="flex items-center justify-between p-2 px-3 cursor-pointer border gap-4 rounded">
					<p className={`rounded-full w-3.5 h-3.5 border transition-all ease-in duration-200 ${method === 'stripe'?'bg-green-400':''}`}></p>
					<p className='font-medium '>Stripe</p>
				</div> */}

				<div onClick={()=>setMethod('COD')} className="flex items-center justify-between p-2 px-3 cursor-pointer border gap-4 rounded">
					<p className={`rounded-full w-3.5 h-3.5 border transition-all ease-in duration-200 ${method === 'COD'?'bg-green-400':''}`}></p>
					<p className='font-medium '>CASH ON DELIVERY</p>
				</div>

			</div>
			<div className="mt-4 w-full text-end">
				<button type="submit" className='bg-black text-white px-8 py-3 rounded'>PLACE ORDER</button>
			</div>
		</div>
    </form>
  )
}

export default PlaceOrder
