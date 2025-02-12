import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/Shopcontext';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const {showSearch, setShowSearch,getCartCount} = useContext(ShopContext)
    return (
        <div className='w-full h-[7vh] bg-[#ffffff63] backdrop-blur-sm  md:px-9 py-2 flex items-center justify-between relative px-10 sm:px-20'>
            <Link to={"/"} className='min-h-[2.5vw] flex items-center'>
                <span className='px-3 text-[1.2rem] md:text-[1.5rem] font-semibold cursor-pointer'>FOREVER™</span>
            </Link>

            {/* Desktop Navigation */}
            <div className='hidden md:flex gap-8 min-h-[2.5vw] justify-between items-center text-zinc-900'>
                <NavLink to="/" className="text-[1.2rem] font-medium flex flex-col items-center">
                    <p>Home</p>
                    <hr className='w-1/2 h-[2.5px] bg-gray-900 hidden transition-all' />
                </NavLink>
                <NavLink to="/collection" className="text-[1.2rem] font-medium flex flex-col items-center">
                    <p>Collection</p>
                    <hr className='w-1/2 h-[2.5px] bg-gray-900 hidden transition-all' />
                </NavLink>
                <NavLink to="/about" className="text-[1.2rem] font-medium flex flex-col items-center">
                    <p>About</p>
                    <hr className='w-1/2 h-[2.5px] bg-gray-900 hidden transition-all' />
                </NavLink>
                <NavLink to="/contact" className="text-[1.2rem] font-medium flex flex-col items-center">
                    <p>Contact</p>
                    <hr className='w-1/2 h-[2.5px] bg-gray-900 hidden transition-all' />
                </NavLink>
            </div>

            <div className='flex gap-4 md:gap-14 min-h-[2.5vw] rounded-full items-center px-2' id='searchBar'>
                <Link to={'/collection'}><i className="ri-search-2-line text-zinc-900 text-[24px] md:text-[32px] cursor-pointer" onClick={()=>{
                    setShowSearch(!showSearch);
                }}></i></Link>
                <div className="group relative">
                    <i className="ri-user-line text-zinc-900 text-[24px] md:text-[32px] cursor-pointer"></i>
                    <div className="hidden group-hover:block dropdown-menu absolute right-0 bg-zinc-100 gap-2 w-36 h-36 rounded-lg z-50">
                        <div className="flex flex-col text-gray-500 gap-4 py-4 px-6 justify-evenly">
                            <p className='hover:text-zinc-900 font-medium cursor-pointer'>My Profile</p>
                            <p className='hover:text-zinc-900 font-medium cursor-pointer'>Orders</p>
                            <p className='hover:text-red-600  font-medium cursor-pointer'>Logout</p>
                        </div>
                    </div>
                </div> 
                <Link to="/cart" className="cart relative">
                    <i className="ri-shopping-cart-2-line text-zinc-900 text-[24px] md:text-[32px]"></i>
                    <p className='right-[-5px] bottom-[-5px] text-center aspect-square bg-zinc-900 text-white rounded-full w-5 h-5 tracking-wide leading-5 text-[10px] absolute font-medium flex items-center justify-center'>{getCartCount()}</p>
                </Link>
                {/* Mobile Menu Button - Moved to the end */}
                <button 
                    className='md:hidden text-2xl'
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line`}></i>
                </button>
            </div>

            {/* Mobile Navigation */}
            <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:hidden absolute top-full left-0 w-full bg-white/70 backdrop-blur-md shadow-lg border border-white/20 flex-col py-4 transition-all duration-300 ease-in-out`}>
                <NavLink to="/" className="px-4 py-2 text-[1.1rem] font-medium hover:bg-gray-100" onClick={()=>setIsMenuOpen(false)}>
                    Home
                </NavLink>
                <NavLink to="/collection" className="px-4 py-2 text-[1.1rem] font-medium hover:bg-gray-100" onClick={()=>setIsMenuOpen(false)}>
                    Collection
                </NavLink>
                <NavLink to="/about" className="px-4 py-2 text-[1.1rem] font-medium hover:bg-gray-100" onClick={()=>setIsMenuOpen(false)}>
                    About
                </NavLink>
                <NavLink to="/contact" className="px-4 py-2 text-[1.1rem] font-medium hover:bg-gray-100" onClick={()=>setIsMenuOpen(false)}>
                    Contact
                </NavLink>
            </div>
        </div>
    )
}

export default Navbar
