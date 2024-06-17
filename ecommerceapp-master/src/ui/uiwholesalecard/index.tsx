import Image, { StaticImageData } from "next/image";

interface SoloCard {
    id: number,
    img: StaticImageData,
    price: number,
    min_order: number,
}


export const SingleProduct: React.FC<{ soloproduct: SoloCard }> = ({ soloproduct }) => {
    return (
        <div className="solocard" key={soloproduct.id}>
            <div className="solocard-image">
                <Image src={soloproduct.img} alt="solocard-image" width={1000} height={1000} quality={100} />
            </div>
            <div className="solocard-list">
                <div className="solocard-list--price">
                    Rs. {soloproduct.price}
                </div>
                <div className="solocard-list--minorder">
                    Min. Order {soloproduct.min_order} set
                </div>
            </div>
        </div>

    );
};
