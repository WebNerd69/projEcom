import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";


export const ShopContext = createContext()

const ShopContextProvider = (props) => {
  const currency = "$";
  const deliveryFee = 10;
  const backendURL = import.meta.env.VITE_BACKEND_URL;
  const [search, setSearch] = useState('')
  const [showSearch, setShowSearch] = useState(false)
  const [cartItems, setCartItems] = useState({})
  const [products, setProducts] = useState([])
  const [token, setToken] = useState('')
  const navigate = useNavigate()

  const addToCart = async (_id, size) => {
    if (!size) {
      toast.error("Select size")
      return;
    }
    else {
      let cartData = structuredClone(cartItems)
      if (cartData[_id]) {
        if (cartData[_id][size]) {
          cartData[_id][size] += 1;
        }
        else {
          cartData[_id][size] = 1;
        }
      } else {
        cartData[_id] = {};
        cartData[_id][size] = 1;
      }
      setCartItems(cartData)

    }
    try {
      await axios.post(backendURL + "/api/cart/add", { _id, size }, { headers: { token } })
    } catch (error) {
      console.log(error)
      toast.error(error.message)
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
  const updateQuantity = async (_id, size, quantity) => {
    try {

      // Update local state
      const cartData = structuredClone(cartItems);
      if (quantity === 0) {
        // Remove the size entry if quantity is 0
        if (cartData[_id] && cartData[_id][size]) {
          delete cartData[_id][size];
          // Remove the product entry if no sizes left
          if (Object.keys(cartData[_id]).length === 0) {
            delete cartData[_id];
          }
        }
      } else {
        // Ensure the nested structure exists
        if (!cartData[_id]) cartData[_id] = {};
        cartData[_id][size] = quantity;
      }
      setCartItems(cartData);

      // Update database if user is authenticated
      if (token) {
        const response = await axios.post(
          backendURL + "/api/cart/update",
          { _id, size, quantity },
          { headers: { token } }
        );
        if (!response.data.success) {
          toast.error("Failed to update cart in database");
        }
      }

      
    } catch (error) {
      console.error("Error updating cart:", error);
      toast.error(error.response?.data?.message || "Failed to update cart");
    }
  }

  const getCartData = async(token)=>{
    try {
      const response = await axios.post(backendURL+"/api/cart/get",{},{headers:{token}})
      if (response.data.success) {
        setCartItems(response.data.cartData)
      } 
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  let totalPrice = 0;
  const getCartAmount = () => {
    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id == items)
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalPrice += itemInfo.price * cartItems[items][item]
          }
        } catch (error) {

        }
      }
    }
    return totalPrice.toFixed(2);
  }
  const getProductsdata = async () => {
    try {
      const response = await axios.get(backendURL + "/api/product/list")
      if (response.data.success) {
        setProducts(response.data.product)
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }
  const logoutHandler = () => {
    if (token) {

      setToken("")
      localStorage.removeItem("token")
      setCartItems({})
      navigate("/login")
    }
  }
  useEffect(() => {
    getProductsdata()

  }, [])
  useEffect(() => {
    if (!token && localStorage.getItem('token')){
      setToken(localStorage.getItem("token"))
      getCartData(localStorage.getItem("token"))
    }

      
  }, [])


  const value = {
    currency, deliveryFee,
    products,
    search, setSearch, showSearch, setShowSearch,
    addToCart, cartItems, getCartCount, updateQuantity, getCartAmount, logoutHandler, getCartData,
    navigate,
    backendURL,
    token, setToken
  }

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider;