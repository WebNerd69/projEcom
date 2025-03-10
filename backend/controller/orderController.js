import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import razorpay from 'razorpay'

// global variables
const currency = 'INR'
let deliveryFee = 40
// initialise payment gateway

const razorpayInstance = new razorpay({
     key_id: process.env.RAZORPAY_KEY_ID,
     key_secret: process.env.RAZORPAY_KEY_SECRET
})
// function to place order using cod method
const placeOrder = async (req, res) => {
     try {
          const { userId, items, amount, address } = req.body;

          const orderData = {
               userId,
               items,
               address,
               amount,
               paymentMethod: "COD",
               payment: false,
               date: Date.now()
          }

          const newOrder = new orderModel(orderData)
          await newOrder.save()

          await userModel.findByIdAndUpdate(userId, { cartData: {} })
          res.json({ success: true, message: "Your order is placed" })
     } catch (error) {
          console.log(error.message)
          res.json({ success: false, message: error.message })
     }
}

// function to place order using razorpay
const placeOrderRazorpay = async (req, res) => {
     try {
          const { userId, items, amount, address } = req.body;

          const orderData = {
               userId,
               items,
               address,
               amount,
               paymentMethod: "Razorpay",
               payment: false,
               date: Date.now()
          }

          const newOrder = new orderModel(orderData)
          await newOrder.save()

          const options = {
               amount: amount * 100,
               currency: currency,
               receipt: newOrder._id.toString()
          }

          await razorpayInstance.orders.create(options, (error, order) => {
               if (error) {
                    console.log(error)
                    return res.json({ success: false, message: error })
               }
               res.json({ success: true, order })

          })
     } catch (error) {
          console.log(error.message)
          res.json({ success: false, message: error.message })
     }
}
// function to verify razorpay payment
const verifyRazorpay =  async(req,res)=>{
     try {
          const {razorpay_order_id , userId} = req.body
          const orderInfo = await razorpayInstance.orders.fetch(razorpay_order_id)
          console.log(orderInfo)
          if (orderInfo.status === "paid") {
               await orderModel.findByIdAndUpdate(orderInfo.receipt,{payment:true})
               await userModel.findByIdAndUpdate(userId,{cartData:{}})
               res.json({success:true , message:"Payment successfull"})
          }else{
               res.json({success:false , message:"Payment failed"})
          }
     } catch (error) {
          console.log(error.message)
          res.json({ success: false, message: error.message })
     }
}
// function to show all orders in admin panel
const showAllOrders = async (req, res) => {
     try {
          const orders = await orderModel.find({})
          res.json({ success: true, orders })
     } catch (error) {
          console.log(error.message)
          res.json({ success: false, message: error.message })
     }
}

// function to update status from admin
const updateStatus = async (req, res) => {
     try {
          const { orderId, status } = req.body
          await orderModel.findByIdAndUpdate(orderId, { status })
          res.json({ success: true, message: "Status updated" })
     } catch (error) {
          console.log(error.message)
          res.json({ success: false, message: error.message })
     }
}

// function to show orders for frontend
const userOrders = async (req, res) => {
     try {
          const { userId } = req.body
          const orders = await orderModel.find({ userId })
          res.json({ success: true, orders })
     } catch (error) {
          console.log(error.message)
          res.json({ success: false, message: error.message })
     }
}

export { placeOrder, placeOrderRazorpay, verifyRazorpay,  showAllOrders, updateStatus, userOrders }