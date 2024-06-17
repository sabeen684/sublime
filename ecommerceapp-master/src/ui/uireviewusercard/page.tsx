import Image, { StaticImageData } from "next/image"
import React from "react"

interface Review {
  id: number,
  rating: number,
  description: string,
  helpfulnum: number,
  img: StaticImageData | StaticImageData[],
}

export const ReviewUser: React.FC<Review> = ({ id, rating, description, helpfulnum, img }) => {
  return (
    <>
      <div className="user" key={id}>
        <div className="user-review">
          <div className="user-review--rating">
            <div className="user-review--rating_icon">
              {

                Array.from({ length: 5 }).map((_, i) => {
                  let starClass;
                  if (i < rating) {
                    if (rating - i >= 1) {
                      starClass = "fa-solid fa-star";
                    } else if (rating - i >= 0.5) {
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

              }

            </div>
            <div className="user-review--rating_number">
              &nbsp; ({rating})
            </div>

          </div>
          <div className="user-review--desp">
            {description}
          </div>
          <div className="user-review--helpful">{helpfulnum}&nbsp;people found this helpful</div>
        </div>

        <div className="user-image">

          {Array.isArray(img) ? (
            img.map((image, index) => (

              <Image key={index} src={image} alt={`review-photo-${index}`} height={66} width={66} quality={100} className="ram" />
            ))
          ) : (
            <Image src={img} alt={`review-photo-${id}`} height={1000} width={1000} quality={100} />
          )}
        </div>

      </div>


    </>
  )
}
