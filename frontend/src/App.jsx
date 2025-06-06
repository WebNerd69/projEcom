import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Orders from "./pages/Orders";
import PlaceOrder from "./pages/PlaceOrder";
import Contact from "./pages/Contact";
import Collection from "./pages/Collection";
import Product from "./pages/Product";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import { ToastContainer, toast } from 'react-toastify';
export default function App() {
  return (
    <div className="bg-[#ffffff] w-[100vw] h-[100vh]"> {/* className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]" */}
      <ToastContainer/>
      <Navbar/>
      <SearchBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/orders" element={<Orders/>}/>
        <Route path="/place-order" element={<PlaceOrder/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/collection" element={<Collection/>}/>
        <Route path="/product/:_id" element={<Product/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}