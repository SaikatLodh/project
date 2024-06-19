import React, { useContext } from 'react'
import img from '../../src/assets/bannerimage.jpg'
import nike from '../../src/assets/nike.png'
import adidas from '../../src/assets/adidas.png'
import puma from '../../src/assets/puma.png'
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination'
import myContext from '../context/data/myContext';
import { Link } from 'react-router-dom'




const Banner = () => {
    const context = useContext(myContext)
    const { getbanner } = context





    return (
        <div className='relative banner' data-scroll-section>
            <div className='w-full h-screen'>



                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper"
                >

                    {getbanner.map((item, index) => {
                        const { imageUrl } = item
                        return (
                            <>
                                <SwiperSlide key={index}><div className='w-full h-screen'>
                                    <img src={imageUrl} alt="" className='w-full h-screen object-cover' />
                                </div>

                                    <div className='bg-[#D1D0C9] absolute right-0 top-[50%] translate-y-[-50%] px-4 py-4 z-10'>
                                        <div>
                                            <Link to="/nikeshow">

                                                <div className='py-5'>
                                                    <img src={nike} alt="" />
                                                </div>
                                            </Link>
                                            <Link to="/adidasshow">
                                                <div className='py-5'>
                                                    <img src={adidas} alt="" />
                                                </div>

                                            </Link>
                                            <Link to="/pumashow">

                                                <div className='py-5'>
                                                    <img src={puma} alt="" />
                                                </div>
                                            </Link>
                                        </div>
                                    </div>


                                </SwiperSlide>
                            </>
                        )
                    })}


                </Swiper>


            </div>
        </div>
    )
}

export default Banner
