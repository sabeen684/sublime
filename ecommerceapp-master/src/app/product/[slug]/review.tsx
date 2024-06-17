
import UIButton from "@/ui/uibutton"
import { ReviewUser } from "@/ui/uireviewusercard/page";
import  { StaticImageData } from "next/image"
import React from "react";

interface Review{
    id:number,
    rating:number,
    description:string,
    helpfulnum:number,
    img: StaticImageData | StaticImageData[];
}

interface ReviewProps{
       review:Review[],

}

export const Review:React.FC<ReviewProps> = ({review}) => {

    return (
        <>
            <div className="bgxsinglecontainer" >
                <div className="frame-wrapper">
                    <div className="bgxsinglecontainer-title">
                        Reviews & Photos
        
                    </div>
                    <div className="bgxsinglecontainer-grid" >
                        <div className="bgxsinglecontainer-grid--first">
                            <div className="bgxsinglecontainer-grid--first_number">
                                4.2
                            </div>
                            <div className="bgxsinglecontainer-grid--first_rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                {/* {
                                            Array.from({ length: 5 }).map((_, i) => {
                                                let starClass;
                                                if (i < rating) {
                                                  if (singleproduct?.rating - i >= 1) {
                                                    starClass = "fa-solid fa-star"; 
                                                  } else if (singleproduct?.rating - i >= 0.5) {
                                                    starClass = "fa-solid fa-star-half-alt"; 
                                                  } else {
                                                    starClass = "fa-regular fa-star"; 
                                                  }
                                                } else {
                                                  starClass = "fa-regular fa-star"; 
                                                }
                                                return (
                                                  <i
                                                    key={i}
                                                    className={starClass}
                                                  ></i>
                                                );
                                              })

                                       }  */}
                            </div>
                            <div className="bgxsinglecontainer-grid--first_text">
                                All from verified Purchases
                            </div>
                        </div>
                        <div className="bgxsinglecontainer-grid--second">
                            <ul>
                                <li>
                                    <div className="bgxsinglecontainer-grid--second_container">
                                        <div className="bgxsinglecontainer-grid--second_container__star">5 star</div>
                                        <div className="bgxsinglecontainer-grid--second_container__progress">
                                            <div className="bgxsinglecontainer-grid--second_container__progress-main">
                                                <div className="bgxsinglecontainer-grid--second_container__progress-main--mainbar"></div>
                                                <div className="bgxsinglecontainer-grid--second_container__progress-main--secbar"></div>
                                            </div>
                                        </div>
                                        <div className="bgxsinglecontainer-grid--second_container__number">10</div>
                                    </div>

                                </li>
                                <li><div className="bgxsinglecontainer-grid--second_container">
                                    <div className="bgxsinglecontainer-grid--second_container__star">4 star</div>
                                    <div className="bgxsinglecontainer-grid--second_container__progress">
                                        <div className="bgxsinglecontainer-grid--second_container__progress-main">
                                            <div className="bgxsinglecontainer-grid--second_container__progress-main--mainbar"></div>
                                            <div className="bgxsinglecontainer-grid--second_container__progress-main--secbar"></div>
                                        </div>
                                    </div>
                                    <div className="bgxsinglecontainer-grid--second_container__number">10</div>
                                </div></li>
                                <li><div className="bgxsinglecontainer-grid--second_container">
                                    <div className="bgxsinglecontainer-grid--second_container__star">3 star</div>
                                    <div className="bgxsinglecontainer-grid--second_container__progress">
                                        <div className="bgxsinglecontainer-grid--second_container__progress-main">
                                            <div className="bgxsinglecontainer-grid--second_container__progress-main--mainbar"></div>
                                            <div className="bgxsinglecontainer-grid--second_container__progress-main--secbar"></div>
                                        </div>
                                    </div>
                                    <div className="bgxsinglecontainer-grid--second_container__number">10</div>
                                </div></li>
                                <li><div className="bgxsinglecontainer-grid--second_container">
                                    <div className="bgxsinglecontainer-grid--second_container__star">2 star</div>
                                    <div className="bgxsinglecontainer-grid--second_container__progress">
                                        <div className="bgxsinglecontainer-grid--second_container__progress-main">
                                            <div className="bgxsinglecontainer-grid--second_container__progress-main--mainbar"></div>
                                            <div className="bgxsinglecontainer-grid--second_container__progress-main--secbar"></div>
                                        </div>
                                    </div>
                                    <div className="bgxsinglecontainer-grid--second_container-number">10</div>
                                </div></li>
                                <li>
                                    <div className="bgxsinglecontainer-grid--second_container">
                                        <div className="bgxsinglecontainer-grid--second_container__star">1 star</div>
                                        <div className="bgxsinglecontainer-grid--second_container__progress">
                                            <div className="bgxsinglecontainer-grid--second_container__progress-main">
                                                <div className="bgxsinglecontainer-grid--second_container__progress-main--mainbar"></div>
                                                <div className="bgxsinglecontainer-grid--second_container__progress-main--secbar"></div>
                                            </div>
                                        </div>
                                        <div className="bgxsinglecontainer-grid--second_container__number">10</div>
                                    </div></li>

                            </ul>
                        </div>
                    </div>
                    <div className="bgxsinglecontainer-third">
                    {
                          review.slice(0,3).map((item)=>{
                            return(
                                
                                <ReviewUser key={item.id} 
                                id={item.id} rating={item.rating} description={item.description} helpfulnum={item.helpfulnum} img={Array.isArray(item.img) ? item.img : [item.img]}
                                />
                                
                            )
                        })
                    }
                    </div>
                    <div className="bgxsinglecontainer-button">
                        <UIButton label="Read all review" type="bprimary" />
                    </div>



                </div>

            </div>

        </>
    )
}





