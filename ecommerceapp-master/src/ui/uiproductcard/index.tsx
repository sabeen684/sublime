import Image, { StaticImageData } from "next/image";


interface Product {
    id: number;
    title: string;
    img: StaticImageData;
    color?: string;
    quantity?: number;
    brachshipping_price?: number;
    homeshipping_price?: number;
    min_order?: number;
    newPrice?: number;
    oldPrice: number;
    rating: number;
    sold: number;
    free_delivery?: boolean;
    delivery_time: {
        min: number;
        max: number;
    };
    showbtn?: boolean;
}

const ProductCard: React.FC<{ singleproduct: Product }> = ({ singleproduct }) => (
    <>
        <div className="productcard">
            <div className="card" key={singleproduct.id}>
                <div className="card-image">
                    <Image src={singleproduct?.img} alt="product_image" height={1000} width={1000} quality={100} />
                </div>
                <div className="card-info">
                    <div className="card-info--title ">
                        {singleproduct?.showbtn && <>
                            <div className="card-info--title_button">
                                <button className="card-info--title_button__b1 poppins-medium-italic ">Mall</button>
                                <button className="card-info--title_button__b2 poppins-medium-italic ">Import</button>
                            </div>
                        </>}
                        <div className="card-info--title_name">{singleproduct.title} </div>
                    </div>
                    <div className="card-info--rating ">
                        <div className="card-info--rating_icons">
                            {Array.from({ length: 5 }).map((_, i) => {
                                let starClass;
                                if (i < singleproduct.rating) {
                                    if (singleproduct.rating - i >= 1) {
                                        starClass = "fa-solid fa-star";
                                    } else if (singleproduct.rating - i >= 0.5) {
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
                            })}
                        </div>
                        <div className="card-info--rating_numbers">
                            {`(${singleproduct.rating})`}
                        </div>


                    </div>
                    <div className="card-info--price ">
                        {singleproduct.newPrice ? (
                            <div className="card-info--price_cutprice">Rs.{singleproduct.newPrice} 
                            <span className="card-info--price_cutprice__oldprice">
                                <del>Rs.{singleproduct.oldPrice}</del>
                            </span></div>
                        ) :

                            <div>
                                Rs.{singleproduct.oldPrice}
                            </div>}
                        <div className="card-info--price_sold">{`(${singleproduct.sold} sold)`}</div>
                    </div>
                    <div className="card-info--delivery ">
                        <div className="card-info--delivery_text pacifico">
                            {singleproduct.free_delivery && "Free Delivery"}
                        </div>
                        <div className="card-info--delivery_days">

                            {`Delievery ${singleproduct.delivery_time.min}-${singleproduct.delivery_time.max} `}
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </>
);

export default ProductCard;
