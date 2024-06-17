"use client"
import { ProductComp } from "@/components/productcomponent/page";
import { data } from "@/lib/data";
import { NavButton } from "@/ui/uicategorypills/page";
import SwiperComponent from "@/ui/uislider";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import Image from "next/image";
import { LAPTOP, LOGO, SHOE } from "@/constants/image";
import ProductCard from "@/ui/uiproductcard";
import { FireSales } from "@/components/firesales/[slug]/page";
import { sliderdata } from "@/lib/sliderdata";


// export const authDataAccessLayer = {
//   login : (email: string, password: string) => {
//     try {
//       // call api or get from cache


//     } catch (error) {

//     }
//   }
// }
// export const authService = {
//   login: (email: string, password: string) => {
//     try {
//       // check garne
//       if(!email || !pass) {
//         // state update for error
//         throw new Error("Missing fields")
//       }
//       const response = authDataAccessLayer.login(email, password)
//     } catch (error) {

//     }
//   }
// }

export default function Home() {
  const datam = data.slice(0, 5)
  const datas = data.slice(0, 5)
  // const handleSubmit = (e: any) => {
  //   const email = state.email
  //   const password = state.pass

  //   const response = authService.login(email, password)

  //   // manage state in reducer
  // }
  return (
    <main>
      <>
        {/* <UIButton onClick={handleSubmit} /> */}
        <NavButton />
        <SwiperComponent />
        <FireSales title="Saman Sales" products={datam} link="" shownavbtn={true}  />
        <ProductComp title="Saman Sales" link="/products/saman-sales/viewall" products={datam} shownavbtn={true} />
        <ProductComp title="Saman For You" link="" products={datas} shownavbtn={false} navbtn={true} />
        <div className="bgfcontainer">
          <div className="frame-wrapper">
            <div className="grid">
              <div className="grid-slider">


                <Swiper
                  loop={true}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    dynamicBullets: true,
                  }}
                  modules={[Pagination, Autoplay]}

                  className="mySwiper"
                >
                  {
                    sliderdata.map((item) => {
                      return (
                        <SwiperSlide key={item.id}>
                          <Image src={item.image} alt="slider-img" height={545} width={433} quality={100} />
                        </SwiperSlide>

                      )
                    })
                  }
                </Swiper>

              </div>
              <div className="grid-products">
                {
                  data.slice(0, 6).map((item) => {
                    return (
                      <>
                        <ProductCard singleproduct={item} />
                      </>
                    )
                  })
                }

              </div>
            </div>
            <div className="products">
              {
                data.slice(0, 5).map((item) => {
                  return (
                    <>
                      <ProductCard singleproduct={item} />
                    </>
                  )
                })
              }
            </div>

          </div>
        </div>
      </>
    </main>
  );
}
