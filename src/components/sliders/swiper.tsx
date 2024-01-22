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
    withPagination?: boolean
    classname?: string
    gap?: number
    wrapperClass?: string
}

export const CustomSwiper: FC<Props> = ({ children, withPagination = true, classname = "", gap = 0, wrapperClass = "" }) => {

    return <Swiper
        slidesPerView={"auto"}
        spaceBetween={gap}
        pagination={{
            clickable: true,
        }}
        wrapperClass={wrapperClass}
        mousewheel={true}
        // freeMode={true}
        modules={withPagination ? [Pagination] : undefined}
        className={["mySwiper", classname].join(" ")}
    >
        {
            React.Children.map(children, child => {
                return <SwiperSlide className='!w-fit !h-fit z-0 hover:z-10'>
                    {child}
                </SwiperSlide>
            })
        }
    </Swiper>
}