"use client"
import React, { useRef, useState } from 'react';
import { Swiper as SwiperType, SwiperSlide, Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Image from 'next/image';
import { SHOE } from '@/constants/image';
import { sliderdata } from '@/lib/sliderdata';
import { cartdata } from '@/lib/cartdata';

export const ProductSlider = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

    return (
        <>
            <div className="productslider">
                <Swiper
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    loop={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2"
                >
                    {
                        sliderdata.map((item) => {
                            return (
                                <SwiperSlide key={item.id}>
                                    <Image src={item.image} alt='slider_main_image' />
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={4}
                    loop={true}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                >
                    {
                        sliderdata.map((item) => {
                            return (
                                <SwiperSlide key={item.id}>
                                    <Image src={item.image} alt='swiper_down_image' />
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </>
    );
}
