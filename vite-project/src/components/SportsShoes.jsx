import React, { useContext } from 'react'
import image from '../../src/assets/messi.jpg'
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import myContext from '../context/data/myContext';
import 'swiper/css';
import 'swiper/css/pagination'
import { Link } from 'react-router-dom';



const SportsShoes = () => {

    const context = useContext(myContext)
    const { sportsgetproduct } = context

    return (
        <div data-scroll-section>
            <div className='text-center mt-[100px]'>
                <div>
                    <h2 className='text-[50px] text-[black]'>SPORTS SHOES</h2>
                </div>

                <div className='relative z-[999] mt-[100px]'>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={false}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >

                        {sportsgetproduct.map((item, index) => {

                            const { imageUrl, imageUrlTwo, imageUrlThree, id } = item

                            return (
                                <>

                                    <SwiperSlide key={index} onClick={() => window.location.href = `/productdetailes/${id}`}>

                                        <div className='flex justify-between gap-3 cursor-pointer relative z-[999]'>
                                            <div className='w-[40%] h-screen'>
                                                <img src={imageUrl} alt="" className='w-full h-full object-cover' />
                                            </div>

                                            <div className='w-[40%] h-screen'>
                                                <img src={imageUrlTwo} alt="" className='w-full h-full object-cover' />
                                            </div>

                                            <div className='w-[20%] h-screen relative'>
                                                <img src={imageUrlThree} alt="" className='w-full h-full object-cover' />

                                                {/* <div className='absolute bottom-3 left-3 text-[black]'><button className='border border-[#0166AE] py-2 px-6'>Buy Now</button></div> */}
                                            </div>
                                        </div>

                                    </SwiperSlide>



                                </>
                            )
                        })}

















                    </Swiper>

                    <div className='swiper-pagination'></div>


                </div>











            </div>
        </div>
    )
}

export default SportsShoes
