import { createContext, useState } from "react";
import { product } from "../assets/assets";

export const ShopContext = createContext()

const ShopContextProvider = (props) => {
     const currency = "$";
     const deliveryFee = 10;
     const [search, setSearch] = useState('')
     const [showSearch, setShowSearch] = useState(false)
     const value = {
          currency,
          deliveryFee,
          product,
          search, setSearch, showSearch, setShowSearch
     }

     return (
          <ShopContext.Provider value={value}>
               {props.children}
          </ShopContext.Provider>
     )
}

export default ShopContextProvider;