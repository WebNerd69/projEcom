import React, { useContext, useState , useEffect} from 'react'
import { ShopContext } from '../context/Shopcontext'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'

const Collection = () => {
     // useState
     const { products, search, showSearch } = useContext(ShopContext)
     const [filterVisible,setFilterVisible] = useState(false)
     const [filterProducts,setFilterProducts] = useState([])
     const [category,setCategory] = useState([])
     const [type,setType] = useState([])
     const [sortType,setSortType] = useState('relevant')

     // functions
     const toggleCategory =(event)=>{
          setSortType('relevant')
          if (category.includes(event.target.value)) {
               setCategory(prev=> prev.filter(item => item != event.target.value))
          }
          else{
               setCategory(prev => [...prev,event.target.value])
          }
     }
     const toggleType =(event)=>{
          setSortType('relevant')
          if (type.includes(event.target.value)) {
               setType(prev=> prev.filter(item => item != event.target.value))
          }
          else{
               setType(prev => [...prev,event.target.value])
          }
     }
     const applyFilter =()=>{
          let productsCopy = products.slice();
          if (showSearch && search) {
               productsCopy = productsCopy.filter(item=> item.name.toLowerCase().includes(search.toLowerCase()))
          }
          if (category.length > 0) {
               productsCopy = productsCopy.filter(item => category.includes(item.category));
          }
          if (type.length > 0) {
               productsCopy = productsCopy.filter(item => type.includes(item.type));
          }
          setFilterProducts(productsCopy)
     }
     const sortProduct =()=>{
          let fpCopy = filterProducts.slice()
          switch (sortType){
               case 'low-high':
                    setFilterProducts(fpCopy = fpCopy.sort((a,b)=>(a.price-b.price)))
                    break;
               case 'high-low':
                    setFilterProducts(fpCopy = fpCopy.sort((a,b)=>(b.price - a.price)))
                    break;
               default:
                    applyFilter()
                    break;
          }
     }
     const filterHandler =()=>{
          setFilterVisible(!filterVisible)
     }

     // useEffects
     useEffect(() => {
          applyFilter()
     }, [category,type,search,showSearch])

     useEffect(() => {
          sortProduct()
     }, [sortType])
     
     
     return (
          <div className='flex flex-col sm:flex-row gap-2 sm:gap-10 pt-10 border-t sm:px-20 px-5'>
               {/* left side */}
               <div className='flex flex-col gap-5'>
                    <p className='font-medium text-xl cursor-pointer' onClick={filterHandler}>
                         FILTERS
                         <i className={filterVisible?"sm:hidden ri-arrow-down-s-line":"sm:hidden ri-arrow-right-s-line"}></i>
                    </p>
                    {/* Category filter */}
                    <div className={`border border-gray-400 rounded-xl py-2 px-4 min-w-44 sm:block  ${filterVisible?"block":'hidden'}`}>
                         <p className='font-medium text-lg mb-3'>CATEGORY</p>
                         <p className='font-medium flex items-center gap-4'>
                              <input type='checkbox' value={"Men"} onChange={toggleCategory}/>
                              Men
                         </p>
                         <p className='font-medium flex items-center gap-4'>
                              <input type='checkbox' value={"Women"} onChange={toggleCategory}/>
                              Women
                         </p>
                         <p className='font-medium flex items-center gap-4'>
                              <input type='checkbox' value={"Kids"} onChange={toggleCategory}/>
                              Kids
                         </p>
                    </div>
                    {/* Type filter */}
                    <div className={`border border-gray-400 rounded-xl py-2 px-4 min-w-44 sm:block  ${filterVisible?"block":'hidden'}`}>
                         <p className='font-medium text-lg mb-3'>TYPE</p>
                         <p className='font-medium flex items-center  gap-4'>
                              <input type='checkbox' value={"Topwear"} onChange={toggleType}/>
                              Topwear
                         </p>
                         <p className='font-medium flex items-center gap-4'>
                              <input type='checkbox' value={"Bottomwear"} onChange={toggleType}/>
                              Bottomwear
                         </p>
                         <p className='font-medium flex items-center gap-4'>
                              <input type='checkbox' value={"Winterwear"} onChange={toggleType}/>
                              Winterwear
                         </p>
                    </div>
               </div>
               {/* Right side */}
               <div className="flex-1 p-4">
                    <div className="flex justify-between items-center flex-col sm:flex-row">
                         <Title text1={"ALL"} text2={"COLLECTIONS"}/>
                         {/* item sort */}
                         <select className='border border-gray-300 p-2 rounded-lg font-medium mt-2' onChange={(e)=>setSortType(e.target.value)} value={sortType}>
                              <option value="relevant">Sort by: Relevant</option>
                              <option value="low-high">Sort by: Low to high</option>
                              <option value="high-low">Sort by: High to low</option>
                         </select>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center my-6">
                         {
                              filterProducts.map((item,index)=>(
                                   <ProductItem key={index} image={item.image} _id={item._id} name={item.name} price={item.price}/>
                              ))
                         }
                    </div>
               </div>
          </div>
     )
}

export default Collection
