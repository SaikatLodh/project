import React, { useContext, useEffect } from 'react'
import img from '../../src/assets/logo.jpg'
import img2 from '../../src/assets/profile.png'
import img3 from '../../src/assets/wishlish.png'
import img4 from '../../src/assets/addto cart.png'
import { Link } from 'react-router-dom'



import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useDispatch, useSelector } from 'react-redux'
import MyContext from '../context/data/myContext'
import { auth } from '../firebase'
import { logoutUser } from '../redux/useSlice'
import { signOut } from 'firebase/auth';





gsap.registerPlugin(ScrollTrigger);


const Header = () => {

    const cartItems = useSelector((state) => state.cart)
    const wishlistItems = useSelector((state) => state.wishlist)

    const context = useContext(MyContext)
    const { setSearchTerm } = context
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user.user);
    const admin = JSON.parse(localStorage.getItem('user'))

    // useEffect(() => {

    //     gsap.to(".nav", {
    //         backgroundColor: "#BDC1BE",
    //         duration: 0.5,
    //         height: "100",
    //         scrollTrigger: {
    //             trigger: ".banner",
    //             scroller: "body",
    //             markers: false,
    //             start: "90%",
    //             end: "100%",
    //             scrub: 1,
    //         }

    //     })


    // }, [])

    const logout = () => {
        dispatch(logoutUser())
        signOut(auth)
    }

    return (
        <div>
            {user ? (<>
                <div className='fixed w-full top-0 left-0 h-[100px] px-10 z-[1000] nav bg-[rgba(0, 0, 0, 0.384)] filter' data-scroll-section>
                    <div className='w-full h-[100%]'>
                        <div className=' flex justify-between items-center h-full'>
                            <Link to="/"> <div><img src={img} alt="" /></div></Link>
                            <Link to='/searchpage'>
                                <div>
                                    <input type="text" name="" id="" placeholder='Search' className='bg-[#ffffff00] border border-[black] w-[440px] py-1 text-[white] text-center placeholder:text-[white] input' onChange={(e) => setSearchTerm(e.target.value)} />
                                </div>
                            </Link>

                            <div className='flex items-center gap-3'>
                                <Link to='/mensshoes'>
                                    <div className='text-white'>
                                        <a href="#">Men</a>
                                    </div></Link>
                                <Link to='/womenshoes'>
                                    <div className='text-white'>
                                        <a href="#">Women</a>
                                    </div>
                                </Link>
                                <Link to='/kidsshoes'>
                                    <div className='text-white'>
                                        <a href="#">Kids</a>
                                    </div>
                                </Link>

                            </div>
                            <div className='flex items-center gap-3'>
                                {admin.user.email === 'saikatlodh8@gmail.com' ?  <Link to="/profile">
                                    <div>
                                        <img src={img2} alt="" className='w-[30px] object-cover' />
                                    </div>
                                </Link> : <div> </div>}


                                <div className='relative'>
                                    <Link to="/wishlist"> <img src={img3} alt="" className='w-[30px] object-cover' /></Link>
                                    <div className='absolute right-0 top-[-35%] bg-white text-[black] w-[20px] h-[20px] rounded-full flex justify-center items-center'>{wishlistItems.length}</div>

                                </div>
                                <div className='relative'>
                                    <Link to="/addToCart"> <img src={img4} alt="" className='w-[30px] object-cover' /></Link>
                                    <div className='absolute right-0 top-[-35%] bg-white text-[black] w-[20px] h-[20px] rounded-full flex justify-center items-center'>{cartItems.length}</div>

                                </div>

                                <div>
                                    <button className='text-[white]' onClick={logout}>LOG OUT</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </>) : (<><div className='bg-[#DDD0B8] w-full flex justify-center items-center h-[100px]'><img src={img} alt="" /></div></>)}
        </div>



    )
}

export default Header
