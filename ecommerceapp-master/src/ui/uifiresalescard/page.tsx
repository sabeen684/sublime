import Image, { StaticImageData } from "next/image";


interface ProductSales {
    id: number;
    title: string;
    img: StaticImageData;
    newPrice?: number;
    oldPrice: number;
    sold: number;
    free_delivery?: boolean;
    showbtn?: boolean;
}

const FireCard: React.FC<ProductSales> = ({ id, title, img, newPrice, oldPrice, sold, free_delivery, showbtn }) => {
    return (
        <>
            <div className="firecard">
                <div className="card" key={id}>
                    <div className="card-image">
                        <Image src={img} alt="product_image" height={1000} width={1000} quality={100} />
                    </div>
                    <div className="card-info">
                        <div className="card-info--title ">
                            {showbtn && <>
                                <button className="card-info--title_b1 poppins-medium-italic ">Mall</button>
                            </>}
                            <div className="card-info--title_name ">{title} </div>
                        </div>
                        <div className="card-info--price ">
                            {newPrice ? (
                                <div className="card-info--price_cutprice">Rs.{newPrice} <div className="card-info--price_cutprice__oldprice">
                                    <del>Rs.{oldPrice}</del>
                                </div></div>
                            ) :

                                <div>
                                    Rs.{oldPrice}
                                </div>}
                        </div>
                        <div className="card-info--delivery pacifico">
                            {free_delivery && "Free Delivery"}
                        </div>
                        <div className="card-info--left">
                            <p className="card-info--left_sold">
                                <p className="card-info--left_sold__remaining">{sold}&nbsp; sold</p>
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
};

export default FireCard;
