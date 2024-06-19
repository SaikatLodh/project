import React, { useEffect } from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useDispatch, useSelector } from 'react-redux';
import { MdDelete } from "react-icons/md";
import { deleteFromWishlist } from '../redux/Wishlist';




    const AllWishList = () => {
    const wishlistItems = useSelector((state) => state.wishlist)
    const dispatch = useDispatch()

    const deleteWishlist = (product) => {
        dispatch(deleteFromWishlist(product))
    }

    // useEffect(() => {

    //     gsap.to(".nav", {
    //         backgroundColor: "#7098D4",
    //         duration: 0.5,
    //         height: "100",
    //         scrollTrigger: {
    //             trigger: ".nav",
    //             scroller: "body",
    //             markers: false,
    //             start: "90%",
    //             end: "100%",
    //             scrub: 1,

    //         }

    //     })



    //     gsap.to(".margin", {
    //         marginLeft: "-150%",
    //         duration: 5,
    //         scrollTrigger: {
    //             trigger: ".margin",
    //             scroller: "body",
    //             markers: false,
    //             start: "10%",
    //             end: "900%",
    //             pin: ".margin",
    //             scrub: true,

    //         }

    //     })


    // }, [])

    useEffect(() => {
        localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
    }, [wishlistItems])

    return (
        <div>
            <div>
                <div className=' pt-[10vw] pb-10 px-10 margin'>

                    <div><h2 className='text-[100px]'>FILES/assets</h2></div>

                    <div className='my-10 flex gap-5 flex-wrap justify-between'>





                        {wishlistItems.map((item, key) => {
                            const { imageUrl, price, title, category } = item

                            return (
                                <>
                                    <div className='w-[32%]'>
                                        <div className='relative'><img src={imageUrl} className='w-[100%] h-[500px] object-cover rounded-[30px] cursor-pointer' />
                                            <div className='absolute right-4 top-3 text-[25px] cursor-pointer' onClick={() => deleteWishlist(item)}><MdDelete /></div>

                                        </div>

                                        <div className='text-[50px] text-center text-[#D88774]'>{category}</div>
                                        <div className='text-[30px] text-center'>{title}</div>
                                        <div className='text-[20px] text-center'> RS:{price}</div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllWishList
