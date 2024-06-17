
import UIButton from "@/ui/uibutton";
import { SingleProduct } from "@/ui/uiwholesalecard";
import { StaticImageData } from "next/image";

interface SoloCard {
  id: number;
  img: StaticImageData;
  price: number;
  min_order: number;
}

interface SoloCardProps {
  cards: SoloCard[],
  link: string;
  title: string;
}

const SoloCards: React.FC<SoloCardProps> = ({ title, link, cards }) => {

  return (

    <div className="bgscontainer">
      <div className="frame-wrapper">

        <div className="bgscontainer-title">
          <div className="bgscontainer-title--name">{title}</div>
          <div className="bgscontainer-title--viewall">
            <UIButton label={<span>View All&nbsp;<i className="fa-regular fa-chevron-right"></i></span>} style={{ height: "1.2rem", width: "5.7rem", border: "none" }} href={link} />
          </div>
        </div>
      </div>


      <div className="bgscontainer-line">

      </div>

      <div className="frame-wrapper">
         <div className="bgscontainer-image">
          {
            cards.map((product) => (

              <SingleProduct key={product.id} soloproduct={product} />

            )

            )
          }

        </div>
      </div>
    </div>
  );
}

export default SoloCards;






