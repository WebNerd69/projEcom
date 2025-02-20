import React, { useContext , useEffect, useState} from 'react'
import { ShopContext } from '../context/Shopcontext'
import { useLocation } from 'react-router-dom'

const SearchBar = () => {
     const {search,setSearch,showSearch,setShowSearch} = useContext(ShopContext)
     const [visible,setVisible] = useState(false)
     const location = useLocation()
     useEffect(() => {
       if (location.pathname.includes('collection')) {
          setVisible(true)
       }
       else{
          setVisible(false)
       }
     }, [location])
     
     return showSearch && visible ? (
          <div className='w-full bg-white shadow-md transition-all duration-300 flex sm:px-20 px-5 items-center'>
               <div className="max-w-5xl min-w-2xl mx-auto w-full">
                    <div className="flex items-center gap-3 px-6 py-4 border-b border-gray-100">
                         <i className="ri-search-2-line text-gray-400 text-xl"></i>
                         <input 
                              type="text" 
                              className='w-full bg-transparent text-gray-700 text-base placeholder:text-gray-400 focus:outline-none'
                              placeholder='Search for products...'
                              value={search}
                              onChange={(e)=>(setSearch(e.target.value))}
                         />
                         {search && (
                              <button 
                                   onClick={() => setSearch('')}
                                   className="text-gray-400 hover:text-gray-600"
                              >
                                   <i className="ri-close-line text-xl"></i>
                              </button>
                         )}
                    </div>
               </div>
               <button onClick={()=>setShowSearch(false)} className="text-gray-400 hover:text-gray-600">
                    <i className="ri-close-line text-2xl font-bold"></i>
               </button>
          </div>
     ) : null
}

export default SearchBar