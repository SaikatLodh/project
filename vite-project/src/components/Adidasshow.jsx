import React, { useContext, useEffect } from 'react'
import image from '../../src/assets/newarivels.jpg'
import { FaHeart } from "react-icons/fa";
import { MdOutlineAddToPhotos } from "react-icons/md";
import MyContext from '../context/data/myContext';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { addToWishlist } from '../redux/Wishlist';
import { CiHeart } from "react-icons/ci";

const Adidasshow = () => {
    const context = useContext(MyContext)
    const {getadidas} = context
    
    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.cart)
    const wishlistItems = useSelector((state) => state.wishlist)
    
    // console.log(getadidas)
    
    const addCart = (product) => {
        dispatch(addToCart(product));
    }
    
    
    const wishlistCart = (product) => {
        dispatch(addToWishlist(product));
    }
    
    
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems])
    
    useEffect(() => {
        localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
    }, [wishlistItems])
  return (
    <div data-scroll-section >
    <div className='pb-[100px]'>
        <div className='text-center pt-[100px]'>
            <h2 className='text-[50px] text-[black]'>Adidas Shoes</h2>
        </div>

        <div className='flex gap-[38px] flex-wrap pt-[100px]'>

            {
                getadidas.map((item,index) =>{

                    const {imageUrl,category,title,id} = item
                    
                    return(
                        <div className='w-[32%] text-center relative' key={index}>

                        <div className='w-full h-[500px] relative' >
                            <div className='cursor-pointer relative z-20' onClick={() => window.location.href = `/productdetailes/${id}`}><img src={imageUrl} alt="" className='w-full h-[500px] object-cover' />  </div>
                            <div className='w-[14%] absolute z-20 right-4 top-0'>
                                <div className='flex items-center justify-end gap-2 p-5'>
                                    <div>{getadidas.id ? <><FaHeart className='text-[25px] cursor-pointer' /></> : <><CiHeart onClick={() => wishlistCart(item)} className='text-[25px] cursor-pointer' /></>}</div>
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


                    )
                })
            }

           






        </div>


    </div>
</div>
  )
}

export default Adidasshow
