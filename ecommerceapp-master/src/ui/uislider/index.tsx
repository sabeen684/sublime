import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import { LAPTOP, PHOTO, SHOE } from '@/constants/image';
import UIButton from '../uibutton';
import { sliderdata } from '@/lib/sliderdata';

const SwiperComponent: React.FC = () => {
  const handleSwiperNavigation = (direction: "prev" | "next") => {
    const swiper = document.querySelector("#landinghomeSwiper") as any;
    if (swiper) {
      swiper.swiper?.[
        `slide${direction.charAt(0).toUpperCase() + direction.slice(1)}`
      ]();
    }
  };

  return (
    <div className='swiperbg'>
      <div className='frame-wrapper'>

        <div className="swiperbg-swiperdiv">

          <i className="fa-regular fa-chevron-left swiperbg-swiperdiv--prev" onClick={() => handleSwiperNavigation("prev")}></i>
          <div className="swiperbg-swiperdiv--swiperlist">
            <Swiper
              id='landinghomeSwiper'
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={30}
              centeredSlides={true}
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation
              className="mySwiper"
            >

              {
                sliderdata.map((item) => {
                  return (
                    <>

                      <SwiperSlide>

                        <div className="__saman-slider">
                          <div className="__saman-slider-img">
                            <Image src={item.image} width={1000} height={1000} quality={100} alt='slider1' />
                          </div>
                          <div className="__saman-slider--content">
                            <div className="__saman-slider--content_main">
                              {item.title}
                            </div>
                            <div className="__saman-slider--content_secondary">
                              {item.descp}
                            </div>
                          </div>
                          <div className="__saman-slider--content_button">
                            <div className="__saman-slider--content_button__main">
                              <UIButton className='btn-primary custom' label="Buy Now" />
                            </div>
                            <div className="__saman-slider--content_button__secondary">
                              <div className="__saman-slider--content_button__secondary-hearticon">
                                <i className="fa-regular fa-heart heart"></i>
                              </div>
                              <div className="__saman-slider--content_button__secondary-shoppingcart">
                                <i className="fa-solid fa-cart-shopping car"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    </>
                  )
                })
              }



            </Swiper>
          </div>
          <i className="fa-regular fa-chevron-right swiperbg-swiperdiv--next" onClick={() => handleSwiperNavigation("next")}></i>
        </div>


      </div>
    </div>
  );
};

export default SwiperComponent;
