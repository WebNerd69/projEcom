import userModel from "../models/userModel.js";

// to add cart data
const addToCart = async(req,res)=>{
     try {
          const {userId , _id , size} = req.body;
          const userData = await userModel.findById(userId);
          let cartData = await userData.cartData;
          if (cartData[_id]) {
               if (cartData[_id][size]) {
                    cartData[_id][size]+=1;
               } else {
                    cartData[_id][size]=1;
               }
          } else {
               cartData[_id]={};
               cartData[_id][size]=1;
          }
          await userModel.findByIdAndUpdate(userId,{cartData})

          res.json({success:true,message:"Added to cart!"})
     } catch (error) {
          console.log(error)
          res.json({success:false,message:error.message})
     }
}
// to get user cart data
const getUserCart = async (req,res) =>{
     
     try {
          const {userId } = req.body;
          const userData = await userModel.findById(userId);
          let cartData = await userData.cartData;
          res.json({success:true,cartData})
          
     } catch (error) {
          console.log(error)
          res.json({success:false,message:error.message})
          
     }
}
// to update user cart data
const updateCart = async(req,res) =>{
     try {
          const {userId , _id , size , quantity} = req.body;
          const userData = await userModel.findById(userId);
          let cartData = userData.cartData; // Removed await since cartData is a property, not a Promise
          
          if (quantity > 0) {
               // Ensure nested structure exists before setting
               if (!cartData[_id]) {
                    cartData[_id] = {};
               }
               cartData[_id][size] = quantity;
          } else {
               // Check if product exists in cart before trying to delete
               if (cartData[_id]) {
                    if (Object.keys(cartData[_id]).length > 1) {
                         delete cartData[_id][size];
                    } else {
                         delete cartData[_id];
                    }
               }
          }

          await userModel.findByIdAndUpdate(userId,{cartData})
          
          res.json({success:true,message:"Cart updated"})
     } catch (error) {
          console.log(error)
          res.json({success:false,message:error.message})
     }
}
export {addToCart,getUserCart,updateCart}