"use client";

import React, { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, EffectFade } from 'swiper/modules';
// import { MemoProductCard } from '@/cards/deals';


type Props = {
    children: React.ReactNode
}

export const CustomSwiper: FC<Props> = ({ children }) => {

    return <Swiper
        slidesPerView={"auto"}
        // spaceBetween={30}
        pagination={{
            clickable: true,
        }}
        loop={true}
        freeMode={true}
        modules={[Pagination]}
        className="mySwiper"
    >
        {
            React.Children.map(children, child => {
                return <SwiperSlide className='!w-fit'>
                    {child}
                </SwiperSlide>
            })
        }
    </Swiper>
}