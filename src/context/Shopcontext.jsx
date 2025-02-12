import { createContext, useEffect, useState } from "react";
import { product } from "../assets/assets";
import { toast } from "react-toastify";

export const ShopContext = createContext()

const ShopContextProvider = (props) => {
     const currency = "$";
     const deliveryFee = 10;
     const [search, setSearch] = useState('')
     const [showSearch, setShowSearch] = useState(false)
     const [cartItems,setCartItems] = useState({})

     const addToCart = async (itemId,size)=>{
          if(!size){
               toast.error("Select size")
               return;
          }
          else{

               let cartData = structuredClone(cartItems)
               if(cartData[itemId]){
                    if(cartData[itemId][size]){
                         cartData[itemId][size]+=1;
                    }
                    else{
                         cartData[itemId][size]=1;
                    }
               }else{
                    cartData[itemId]={};
                    cartData[itemId][size]=1;
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
     const value = {
          currency,deliveryFee,
          product,
          search, setSearch, showSearch, setShowSearch,
          addToCart,cartItems,getCartCount
     }

     return (
          <ShopContext.Provider value={value}>
               {props.children}
          </ShopContext.Provider>
     )
}

export default ShopContextProvider;