import { createContext, useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import { products } from "../assets/assets";
import { toast } from "react-toastify";

export const ShopContext = createContext()

const ShopContextProvider = (props) => {
     const currency = "$";
     const deliveryFee = 10;
     const [search, setSearch] = useState('')
     const [showSearch, setShowSearch] = useState(false)
     const [cartItems,setCartItems] = useState({})
     const navigate = useNavigate()

     const addToCart = async (_id,size)=>{
          if(!size){
               toast.error("Select size")
               return;
          }
          else{
               let cartData = structuredClone(cartItems)
               if(cartData[_id]){
                    if(cartData[_id][size]){
                         cartData[_id][size]+=1;
                    }
                    else{
                         cartData[_id][size]=1;
                    }
               }else{
                    cartData[_id]={};
                    cartData[_id][size]=1;
               }
               setCartItems(cartData)
               
          }
     }
     const getCartCount = () => {
          try {
               if (!cartItems || typeof cartItems !== 'object') {
                    console.error('Invalid cart items data');
                    return 0;
               }

               let count = 0;
               for (const itemId in cartItems) {
                    if (!cartItems[itemId] || typeof cartItems[itemId] !== 'object') {
                         console.error(`Invalid data for item ID: ${itemId}`);
                         continue;
                    }

                    for (const size in cartItems[itemId]) {
                         const quantity = cartItems[itemId][size];
                         if (typeof quantity !== 'number' || quantity < 0) {
                              console.error(`Invalid quantity for item ${itemId}, size ${size}`);
                              continue;
                         }
                         count += quantity;
                    }
               }
               return count;
          } catch (error) {
               console.error('Error calculating cart count:', error);
               return 0;
          }
     }
     const updateQuantity = async (id,size,quantity)=>{
          const cartData = structuredClone(cartItems)
          cartData[id][size]=quantity;
          setCartItems(cartData)
     }
     let totalPrice = 0;
     const getCartAmount = () => {
          for (const items in cartItems) {
               let itemInfo = products.find((product)=> product._id == items)
               for (const item in cartItems[items]) {
                    try{
                         if(cartItems[items][item]>0){
                              totalPrice += itemInfo.price * cartItems[items][item]
                         }
                    }catch(error){

                    }
               }
          }
          return totalPrice.toFixed(2);
     }
     const value = {
          currency,deliveryFee,
          products,
          search, setSearch, showSearch, setShowSearch,
          addToCart,cartItems,getCartCount,updateQuantity,getCartAmount,
          navigate
     }

     return (
          <ShopContext.Provider value={value}>
               {props.children}
          </ShopContext.Provider>
     )
}

export default ShopContextProvider;