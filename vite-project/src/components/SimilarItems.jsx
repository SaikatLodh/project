import React, { useContext, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import MyContext from '../context/data/myContext';



const SimilarItems = ({ products, selling, sports, men, women, kids, puma, adidas, nike }) => {
    const context = useContext(MyContext)
    const { getbestselling, product, sportsgetproduct, getmenproducts, getwomenproducts, getkidsroducts, getpuma, getadidas, getnike } = context
   
    return (

        <div>

            <>
                <Swiper
                    id='relative'
                    pagination={{
                        type: 'progressbar',
                    }}
                    slidesPerView={3}
                    spaceBetween={50}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >

                    {products && product.map((item, index) => {
                        const { imageUrl } = item
                        return (
                            <SwiperSlide><img src={imageUrl} alt="" className='slider-image' key={index} /></SwiperSlide>
                        )
                    })}

                    {selling && getbestselling.map((item, index) => {
                        const { imageUrl } = item
                        return (
                            <SwiperSlide><img src={imageUrl} alt="" className='slider-image' key={index} /></SwiperSlide>
                        )
                    })}

                    {sports && sportsgetproduct.map((item, index) => {
                        const { imageUrl } = item
                        return (
                            <SwiperSlide><img src={imageUrl} alt="" className='slider-image' key={index} /></SwiperSlide>
                        )
                    })}


                    {men && getmenproducts.map((item, index) => {
                        const { imageUrl } = item
                        return (
                            <SwiperSlide><img src={imageUrl} alt="" className='slider-image' key={index} /></SwiperSlide>
                        )
                    })}


                    {women && getwomenproducts.map((item, index) => {
                        const { imageUrl } = item
                        return (
                            <SwiperSlide><img src={imageUrl} alt="" className='slider-image' key={index} /></SwiperSlide>
                        )
                    })}

                    {kids && getkidsroducts.map((item, index) => {
                        const { imageUrl } = item
                        return (
                            <SwiperSlide><img src={imageUrl} alt="" className='slider-image' key={index} /></SwiperSlide>
                        )
                    })}



                    {puma && getpuma.map((item, index) => {
                        const { imageUrl } = item
                        return (
                            <SwiperSlide><img src={imageUrl} alt="" className='slider-image' key={index} /></SwiperSlide>
                        )
                    })}


                    {adidas && getadidas.map((item, index) => {
                        const { imageUrl } = item
                        return (
                            <SwiperSlide><img src={imageUrl} alt="" className='slider-image' key={index} /></SwiperSlide>
                        )
                    })}


                    {nike && getnike.map((item, index) => {
                        const { imageUrl } = item
                        return (
                            <SwiperSlide><img src={imageUrl} alt="" className='slider-image' key={index} /></SwiperSlide>
                        )
                    })}


                </Swiper>


            </>
        </div>

    )
}

export default SimilarItems
