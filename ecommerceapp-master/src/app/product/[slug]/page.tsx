"use client";
import { data } from "@/lib/data";
import { mostdata } from "@/lib/latest";
import UIButton from "@/ui/uibutton";
import UIInput from "@/ui/uiinput";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Swiper as SwiperType } from "swiper/core";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";
import { PHOTO, SHOE, STORE } from "@/constants/image";
import { FUQs } from "@/lib/fuq";
import { reviewData } from "@/lib/review";
import { specification } from "@/lib/specification";
import { Spec } from "./specification";
import { Review } from "./review";
import { Question } from "./faq";
import SoloCards from "@/components/categorycardcomponent/page";
import { ProductComp } from "@/components/productcomponent/page";
import { ProductSlider } from "./imgslider";
import Link from "next/link";

export default function SingleProduct() {
  const datam = mostdata.slice(0, 8);
  const dataa = data.slice(0, 5);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  let ram = specification.slice(0, 10);

  return (
    <>
      <div className="bgcontainersingle">
        <div className="singleproduct">
          <div className="singleproduct-first">
            <div className="frame-wrapper">
              <div className="singleproduct-first--swiper">
                <ProductSlider />
              </div>
              <div className="singleproduct-first--content">
                <div className="singleproduct-first--content_main">
                  {/* {items.title} */} title
                  {/* {items.review} */}review
                  {/* {items.review} reviews */} 10 reviews
                </div>
                <div className="singleproduct-first--content_descp">
                  {/* {items.descp} */} Lorem ipsum dolor sit, amet consectetur
                  adipisicing elit. Maiores hic quod, minima quam molestiae
                  voluptatem qui, repellat delectus error, deserunt id fugiat
                  tenetur est libero quae similique adipisci. Omnis, adipisci!
                </div>
                <div className="singleproduct-first--content_price">
                  {/* {items.newprice} */} 5200
                  {/* {items.oldprice} */}6000
                </div>
                <div className="singleproduct-first--content_color">color</div>
                <div className="singleproduct-first--content_size">size</div>
                <div className="singleproduct-first--content_details">
                  <div className="singleproduct-first--content_details__one">
                    Quantity
                  </div>
                  <div className="singleproduct-first--content_details__two">
                    <div className="singleproduct-first--content_details__two-buttondiv">
                      <div className="singleproduct-first--content_details__two-buttondiv--sub">
                        <button
                          style={{
                            color: "black",
                            border: "none",
                            height: 16,
                            width: 16,
                            backgroundColor: "transparent",
                            fontSize: "1rem",
                          }}
                        >
                          -
                        </button>
                      </div>
                      <div className="singleproduct-first--content_details__two-buttondiv--item">
                        6
                      </div>
                      <div className="singleproduct-first--content_details__two-buttondiv--add">
                        <button
                          style={{
                            color: "black",
                            border: "none",
                            height: 16,
                            width: 16,
                            backgroundColor: "transparent",
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="singleproduct-first--content_details__btn">
                      <UIButton
                        label={
                          <span>
                            <i className="fa-regular fa-heart"></i>
                            &nbsp;Wishlist
                          </span>
                        }
                      />
                    </div>
                    <div className="singleproduct-first--content_details__btn1">
                      <UIButton label={<span>Send&nbsp;Inquiry</span>} />
                    </div>
                  </div>
                </div>
                <div className="singleproduct-first--content_button">
                  <UIButton
                    label="Buy Now"
                    type="primary"
                    style={{ width: "362px" }}
                  />
                </div>
              </div>
              <div className="singleproduct-first--delievery">
                <div className="singleproduct-first--delievery_ship">
                  <div className="singleproduct-first--delievery_ship__text">
                    Ship to
                  </div>
                  <div className="singleproduct-first--delievery_ship__texts">
                    <i className="fa-solid fa-location-dot"></i>
                    &nbsp;&nbsp;Baiyabedi 02,Dhangadi
                  </div>
                </div>

                <div className="singleproduct-first--delievery_price">
                  <div className="singleproduct-first--delievery_price__text">
                    Delievery&nbsp;&gt;
                  </div>
                  <div className="singleproduct-first--delievery_price__text">
                    Shipping:NPR 220
                  </div>
                  <div className="singleproduct-first--delievery_price__texts">
                    Estimated delievery on Jun 09
                  </div>
                </div>
                <div className="singleproduct-first--delievery_return">
                  <div className="singleproduct-first--delievery_return__text">
                    Return&nbsp;&&nbsp;Refund&nbsp;Policy&nbsp;&gt;
                  </div>
                  <div className="singleproduct-first--delievery_return__list">
                    <li>7 days Easy Return</li>
                    <li>
                      Products Didn&apos;t Match with Seller information
                    </li>
                    <li>Different product than your order</li>
                  </div>

                  <div className="singleproduct-first--delievery_input">
                    <UIInput placeholder="Leave a Review" />
                  </div>
                </div>
              </div>

            </div>
          </div>

          <hr />

          <div className="singleproduct-second">
            <div className="frame-wrapperr">
              <div className="singleproduct-second--specifications">
                Specification
              </div>
              <div className="singleproduct-second--data">
                <Spec specifications={ram} />
              </div>
              <div className="singleproduct-second--button">
                <UIButton label="View More" type="bprimary" />
              </div>
            </div>
          </div>

          <hr />
          <div className="singleproduct-third">
            <Review review={reviewData} />
          </div>
          <hr />

          <div className="singleproduct-fourth">
            <div className="frame-wrapper">
              <div className="singleproduct-fourth--line">
                <div className="singleproduct-fourth--line_title">
                  <div className="singleproduct-fourth--line_title__main">
                    Buyer Question & Answers
                  </div>

                  <div className="singleproduct-fourth--line_title__btn">
                    <UIButton
                      label="Ask Question"
                      className=" ram"
                      type="primary"
                    />
                  </div>
                </div>
                <div className="singleproduct-fourth--line_fuqs">
                  {FUQs.slice(0, 3).map((item) => {
                    return (
                      <Question
                        key={item.id}
                        id={item.id}
                        question={item.question}
                        answer={item.answer}
                      />
                    );
                  })}
                </div>
                <div className="singleproduct-fourth--line_buttonfield">
                  <UIButton label="Read all FAQ" type="bprimary" />
                </div>
              </div>
            </div>
          </div>

          <div className="singleproduct-fifth">
            <div className="frame-wrapper">
              <div className="singleproduct-fifth--store">

                <div className="singleproduct-fifth--store_shippositive">
                  <div className="singleproduct-fifth--store_shippositive__positiverev">
                    <div className="singleproduct-fifth--store_shippositive__positiverev-percent">
                      82.32%
                    </div>
                    <div className="singleproduct-fifth--store_shippositive__positiverev-text">
                      POSITIVE REVIEW
                    </div>
                  </div>
                  <div className="singleproduct-fifth--store_shippositive__line">

                  </div>
                  <div className="singleproduct-fifth--store_shippositive__ship">
                    <div className="singleproduct-fifth--store_shippositive__ship-percent">
                      92%
                    </div>
                    <div className="singleproduct-fifth--store_shippositive__ship-text">
                      SHIP ON TIME
                    </div>
                  </div>
                </div>
                <div className="singleproduct-fifth--store_photo">
                  <Link className="singleproduct-fifth--store_photo__image" href={"/store"}>
                    <Image
                      src={STORE}
                      alt="store-logo"
                      width={1000}
                      height={1000}
                      quality={100}
                    />
                  </Link>
                </div>
                <div className="singleproduct-fifth--store_icons">
                  <div className="singleproduct-fifth--store_icons__text">
                    SOLD BY
                  </div>
                  <div className="singleproduct-fifth--store_icons__texts">
                    Sneakers
                  </div>
                </div>
                <div className="singleproduct-fifth--store_buttons">
                  <UIButton label="Following" type="follow" />
                  <UIButton label={<span>Share&nbsp;<i className="fa-regular fa-share-nodes share"></i></span>}
                    type="bprimary" className="singleproduct-fifth--store_buttons__follow" />
                </div>

              </div>
            </div>
          </div>

          <div className="singleproduct-sixth">
            <SoloCards title="More From Sneaker" link="" cards={datam} />
          </div>
          <div className="singleproduct-seventh">
            <ProductComp
              title="Recommended Saman"
              link=""
              products={dataa}
              shownavbtn={true}
            />
          </div>
        </div>
      </div>
    </>
  );
}
