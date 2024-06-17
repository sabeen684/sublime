import { ProductComp } from "@/components/productcomponent/page";
import { Cover, LOGO, STORE } from "@/constants/image";
import { cartdata } from "@/lib/cartdata";
import { data } from "@/lib/data";
import UIButton from "@/ui/uibutton";
import Image from "next/image";

export default function Store() {
    return (
        <>
            <div className="bgstorecontainer">
                <div className="frame-wrapper">
                    <div className="store">
                        <div className="store-imagecontainer">
                            <Image
                                src={Cover}
                                alt="image"
                                width={500}
                                height={500}
                                quality={100}
                                style={{ objectFit: "cover" }}
                                className="image"
                            />
                            <div className="store-imagecontainer--logosection">
                                <div className="store-imagecontainer--logosection_left">
                                    <span className="store-imagecontainer--logosection_left__logocontainer">
                                        <Image
                                            src={STORE}
                                            alt=""
                                            width={500}
                                            height={500}
                                            className="logo"
                                        />
                                    </span>
                                    <span className="store-imagecontainer--logosection_left__brand">
                                        <p className="store-imagecontainer--logosection_left__brand-brandname">
                                            Sneaker Nepal
                                        </p>
                                        <p><span>Store link after store is active&nbsp;<i className="fa fa-chevron-right"></i></span> </p>
                                    </span>
                                </div>
                                <span className="store-imagecontainer--logosection_right">
                                    <span className="store-imagecontainer--logosection_right__buttons">
                                        <UIButton type="primary" label="Follow" />
                                    </span>
                                    <span className="store-imagecontainer--logosection_right__followers">
                                        <h3>5.3k</h3>
                                        <p>Followers</p>
                                    </span>
                                    <span>

                                        <h3>91%</h3>
                                        <p>Positive Review</p>
                                    </span>
                                </span>
                            </div>
                        </div>

                        <div className="store-padding">
                            <hr />
                        </div>
                        {
                            <ProductComp title="Saman From Sneakers" navbtn={true} products={data} />
                        }
                        
                    </div>
                </div>
            </div>
        </>
    )
}