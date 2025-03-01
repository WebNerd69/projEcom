import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
     userId: {typeof:String,required:true},
     orders: {typeof:Array,required:true},
     amount: {typeof:Number,required:true},
     address: {typeof:String,required:true},
     status: {typeof:String,required:true,default:"Placed"},
     paymentMethod: {typeof:String,required:true},
     payment: {typeof:Boolean,required:true,default:false},
     date: {typeof:Number,required:true},
})
