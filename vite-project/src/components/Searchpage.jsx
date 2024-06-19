import React, { useContext, useEffect, useState } from 'react'
import image from '../../src/assets/newarivels.jpg'
import myContext from '../context/data/myContext';
import { MdOutlineAddToPhotos } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { toast } from 'react-toastify';
import { addToWishlist } from '../redux/Wishlist';
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';




const Searchpage = () => {
    const context = useContext(myContext)
    const { product,getbestselling,sportsgetproduct,getmenproducts,getkidsroducts,getwomenproducts,searchTerm,setSearchTerm } = context

    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.cart)
    const wishlistItems = useSelector((state) => state.wishlist)
    // const [searchTerm, setSearchTerm] = useState("");

    const addCart = (product) =>{
        dispatch(addToCart(product))
    }

    const wishlistCart = (product) => {
        dispatch(addToWishlist(product));
      }

    useEffect(() =>{
        localStorage.setItem('cart', JSON.stringify(cartItems))
    },[cartItems])

    useEffect(() =>{
        localStorage.setItem('wishlist', JSON.stringify(wishlistItems))
    },[wishlistItems])
  return (

    <div data-scroll-section className='mb-[100px]'>
            <div>
                <div className='text-center mt-[100px] w-full'>
                    <h2 className='text-[50px] text-[black]'>ALL PRODUCTS</h2>

                    {/* <div><input type="text" placeholder='search product' className='w-[50%] h-[50px] bg-transparent border-[1px] border-black text-center mt-[30px]' onChange={(event)=>setSearchTerm(event.target.value)} /></div> */}
                </div>



                <div className='flex gap-[38px] flex-wrap pt-[100px]'>

                {product 
              .filter((val) => {
                if(searchTerm == ""){
                  return val;
                }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())||val.category.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val;
                }
              })
              .map((val,index) => {
                const { title, price, description, imageUrl ,category,id} = val;
                return(
                    <div className='w-[32%] text-center relative' key={index} onClick={()=> window.location.href = `/productdetailes/${id}`}>
                                    
                    <div className='w-full h-[500px] overflow-hidden'>
                    <div  className='cursor-pointer relative z-10' ><img src={imageUrl} alt="" className='w-full h-full object-cover' /></div>    
                        <div className='w-[14%] absolute z-20 right-4 top-0 '>
                            <div className='flex items-center justify-end gap-2 p-5'>
                                <div>{product.id ? <><FaHeart className='text-[25px] cursor-pointer' /></> : <><CiHeart onClick={() => wishlistCart(val)} className='text-[25px] cursor-pointer' /></>}</div>
                                <div onClick={() => addCart(val)}><MdOutlineAddToPhotos className='text-[25px] cursor-pointer' /></div>
                            </div>

                        </div>
                    </div>

                    <div className='py-5'>
                        <h6 className='text-[28px] text-[black]'>{title}</h6>
                    </div>

                    <div className='py-2'>
                        <h6 className='text-[20px] text-[black]'>{category}</h6>
                    </div>

                    <div>
                        <button className='border border-[black] py-2 px-6'>Buy Now</button>
                    </div>
                    
                </div>
            
                )
              })
          }


{getbestselling 
              .filter((val) => {
                if(searchTerm == ""){
                  return val;
                }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())||val.category.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val;
                }
              })
              .map((val,index) => {
                const { title, price, description, imageUrl ,category,id} = val;
                return(
                    <div className='w-[32%] text-center relative' key={index} onClick={()=> window.location.href = `/productdetailes/${id}`}>
                                    
                    <div className='w-full h-[500px] overflow-hidden'>
                    <div  className='cursor-pointer relative z-10' ><img src={imageUrl} alt="" className='w-full h-full object-cover' /></div>    
                        <div className='w-[14%] absolute z-20 right-4 top-0 '>
                            <div className='flex items-center justify-end gap-2 p-5'>
                                <div>{product.id ? <><FaHeart className='text-[25px] cursor-pointer' /></> : <><CiHeart onClick={() => wishlistCart(val)} className='text-[25px] cursor-pointer' /></>}</div>
                                <div onClick={() => addCart(val)}><MdOutlineAddToPhotos className='text-[25px] cursor-pointer' /></div>
                            </div>

                        </div>
                    </div>

                    <div className='py-5'>
                        <h6 className='text-[28px] text-[black]'>{title}</h6>
                    </div>

                    <div className='py-2'>
                        <h6 className='text-[20px] text-[black]'>{category}</h6>
                    </div>

                    <div>
                        <button className='border border-[black] py-2 px-6'>Buy Now</button>
                    </div>
                    
                </div>
            
                )
              })
          }


{sportsgetproduct 
              .filter((val) => {
                if(searchTerm == ""){
                  return val;
                }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())||val.category.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val;
                }
              })
              .map((val,index) => {
                const { title, price, description, imageUrl ,category,id} = val;
                return(
                    <div className='w-[32%] text-center relative' key={index} onClick={()=> window.location.href = `/productdetailes/${id}`}>
                                    
                    <div className='w-full h-[500px] overflow-hidden'>
                    <div  className='cursor-pointer relative z-10' ><img src={imageUrl} alt="" className='w-full h-full object-cover' /></div>    
                        <div className='w-[14%] absolute z-20 right-4 top-0 '>
                            <div className='flex items-center justify-end gap-2 p-5'>
                                <div>{product.id ? <><FaHeart className='text-[25px] cursor-pointer' /></> : <><CiHeart onClick={() => wishlistCart(val)} className='text-[25px] cursor-pointer' /></>}</div>
                                <div onClick={() => addCart(val)}><MdOutlineAddToPhotos className='text-[25px] cursor-pointer' /></div>
                            </div>

                        </div>
                    </div>

                    <div className='py-5'>
                        <h6 className='text-[28px] text-[black]'>{title}</h6>
                    </div>

                    <div className='py-2'>
                        <h6 className='text-[20px] text-[black]'>{category}</h6>
                    </div>

                    <div>
                        <button className='border border-[black] py-2 px-6'>Buy Now</button>
                    </div>
                    
                </div>
            
                )
              })
          }


{getmenproducts 
              .filter((val) => {
                if(searchTerm == ""){
                  return val;
                }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())||val.category.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val;
                }
              })
              .map((val,index) => {
                const { title, price, description, imageUrl ,category,id} = val;
                return(
                    <div className='w-[32%] text-center relative' key={index} onClick={()=> window.location.href = `/productdetailes/${id}`}>
                                    
                    <div className='w-full h-[500px] overflow-hidden'>
                    <div  className='cursor-pointer relative z-10' ><img src={imageUrl} alt="" className='w-full h-full object-cover' /></div>    
                        <div className='w-[14%] absolute z-20 right-4 top-0 '>
                            <div className='flex items-center justify-end gap-2 p-5'>
                                <div>{product.id ? <><FaHeart className='text-[25px] cursor-pointer' /></> : <><CiHeart onClick={() => wishlistCart(val)} className='text-[25px] cursor-pointer' /></>}</div>
                                <div onClick={() => addCart(val)}><MdOutlineAddToPhotos className='text-[25px] cursor-pointer' /></div>
                            </div>

                        </div>
                    </div>

                    <div className='py-5'>
                        <h6 className='text-[28px] text-[black]'>{title}</h6>
                    </div>

                    <div className='py-2'>
                        <h6 className='text-[20px] text-[black]'>{category}</h6>
                    </div>

                    <div>
                        <button className='border border-[black] py-2 px-6'>Buy Now</button>
                    </div>
                    
                </div>
            
                )
              })
          }


{getkidsroducts 
              .filter((val) => {
                if(searchTerm == ""){
                  return val;
                }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())||val.category.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val;
                }
              })
              .map((val,index) => {
                const { title, price, description, imageUrl ,category,id} = val;
                return(
                    <div className='w-[32%] text-center relative' key={index} onClick={()=> window.location.href = `/productdetailes/${id}`}>
                                    
                    <div className='w-full h-[500px] overflow-hidden'>
                    <div  className='cursor-pointer relative z-10' ><img src={imageUrl} alt="" className='w-full h-full object-cover' /></div>    
                        <div className='w-[14%] absolute z-20 right-4 top-0 '>
                            <div className='flex items-center justify-end gap-2 p-5'>
                                <div>{product.id ? <><FaHeart className='text-[25px] cursor-pointer' /></> : <><CiHeart onClick={() => wishlistCart(val)} className='text-[25px] cursor-pointer' /></>}</div>
                                <div onClick={() => addCart(val)}><MdOutlineAddToPhotos className='text-[25px] cursor-pointer' /></div>
                            </div>

                        </div>
                    </div>

                    <div className='py-5'>
                        <h6 className='text-[28px] text-[black]'>{title}</h6>
                    </div>

                    <div className='py-2'>
                        <h6 className='text-[20px] text-[black]'>{category}</h6>
                    </div>

                    <div>
                        <button className='border border-[black] py-2 px-6'>Buy Now</button>
                    </div>
                    
                </div>
            
                )
              })
          }

{getwomenproducts 
              .filter((val) => {
                if(searchTerm == ""){
                  return val;
                }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())||val.category.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val;
                }
              })
              .map((val,index) => {
                const { title, price, description, imageUrl ,category,id} = val;
                return(
                    <div className='w-[32%] text-center relative' key={index} onClick={()=> window.location.href = `/productdetailes/${id}`}>
                                    
                    <div className='w-full h-[500px] overflow-hidden'>
                    <div  className='cursor-pointer relative z-10' ><img src={imageUrl} alt="" className='w-full h-full object-cover' /></div>    
                        <div className='w-[14%] absolute z-20 right-4 top-0 '>
                            <div className='flex items-center justify-end gap-2 p-5'>
                                <div>{product.id ? <><FaHeart className='text-[25px] cursor-pointer' /></> : <><CiHeart onClick={() => wishlistCart(val)} className='text-[25px] cursor-pointer' /></>}</div>
                                <div onClick={() => addCart(val)}><MdOutlineAddToPhotos className='text-[25px] cursor-pointer' /></div>
                            </div>

                        </div>
                    </div>

                    <div className='py-5'>
                        <h6 className='text-[28px] text-[black]'>{title}</h6>
                    </div>

                    <div className='py-2'>
                        <h6 className='text-[20px] text-[black]'>{category}</h6>
                    </div>

                    <div>
                        <button className='border border-[black] py-2 px-6'>Buy Now</button>
                    </div>
                    
                </div>
            
                )
              })
          }


                    {/* {product.map((item, index) => {

                        const { title, imageUrl, category, id } = item

                        return (
                            <>
                                
                                    <div className='w-[32%] text-center relative' key={index}>
                                    
                                        <div className='w-full h-[500px]'>
                                        <Link to='/productdetailes' className='cursor-pointer relative z-10'><img src={imageUrl} alt="" className='w-full h-full object-cover' /></Link>    
                                            <div className='w-[14%] absolute z-20 right-4 top-0'>
                                                <div className='flex items-center justify-end gap-2 p-5'>
                                                    <div>{product.id ? <><FaHeart className='text-[25px] cursor-pointer' /></> : <><CiHeart onClick={() => wishlistCart(item)} className='text-[25px] cursor-pointer' /></>}</div>
                                                    <div onClick={() => addCart(item)}><MdOutlineAddToPhotos className='text-[25px] cursor-pointer' /></div>
                                                </div>

                                            </div>
                                        </div>

                                        <div className='py-5'>
                                            <h6 className='text-[28px] text-[black]'>{title}</h6>
                                        </div>

                                        <div className='py-2'>
                                            <h6 className='text-[20px] text-[black]'>{category}</h6>
                                        </div>

                                        <div>
                                            <button className='border border-[black] py-2 px-6'>Buy Now</button>
                                        </div>
                                        
                                    </div>
                                






                            </>
                        )
                    })} */}

{/* {getbestselling.map((item, index) => {

const { title,imageUrl, category,id} = item

return (
    <>

        <div className='w-[32%] text-center relative' key={index}>

            <div className='w-full h-[500px]'>
                <img src={imageUrl} alt="" className='w-full h-full object-cover' />
                <div className='w-full h-full absolute last: top-0'>
                    <div className='flex items-center justify-end gap-2 p-5'>
                        <div>{product.id ? <><FaHeart className='text-[25px] cursor-pointer'  /></> : <><CiHeart onClick={() => wishlistCart(item)} className='text-[25px] cursor-pointer' /></>}</div>
                        <div onClick={()=>addCart(item)}><MdOutlineAddToPhotos className='text-[25px] cursor-pointer' /></div>
                    </div>

                </div>
            </div>

            <div className='py-5'>
                <h6 className='text-[28px] text-[black]'>{title}</h6>
            </div>

            <div className='py-2'>
                <h6 className='text-[20px] text-[black]'>{category}</h6>
            </div>

            <div>
                <button className='border border-[black] py-2 px-6'>Buy Now</button>
            </div>
        </div>





    </>
)
})} */}




                </div>


            </div>
        </div>

  )
}

export default Searchpage
