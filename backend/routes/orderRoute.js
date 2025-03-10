import express from "express"
import { placeOrder , placeOrderRazorpay , showAllOrders , updateStatus , userOrders, verifyRazorpay } from "../controller/orderController.js"
import adminAuth from './../middleware/adminAuth.js';
import authUser from './../middleware/auth.js';

const orderRouter = express.Router()

// admin routes
orderRouter.post("/list", adminAuth,showAllOrders);
orderRouter.post("/status", adminAuth,updateStatus);

// payment routes
orderRouter.post("/place",authUser,placeOrder);
orderRouter.post("/razorpay",authUser,placeOrderRazorpay);
// to verify payment
orderRouter.post("/verifyRazorpay",authUser,verifyRazorpay);

// user orders route
orderRouter.get("/orders",authUser,userOrders);

export default orderRouter