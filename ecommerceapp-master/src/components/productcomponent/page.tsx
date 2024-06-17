
import UIButton from "@/ui/uibutton";
import { NavButton } from "@/ui/uicategorypills/page";
import ProductCard from "@/ui/uiproductcard";
import { StaticImageData } from "next/image";

interface Product {
  id: number;
  title: string;
  img: StaticImageData;
  color?: string;
  quantity?: number;
  brachshipping_price?: number;
  homeshipping_price?: number;
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

interface Productprops {
  products: Product[];
  title: string;
  shownavbtn?: boolean;
  link?: string;
  navbtn?: boolean;
}

export const ProductComp: React.FC<Productprops> = ({ products, title, link, shownavbtn, navbtn }) => {
  return (
    <>
      <div className="bgycontainer">
        <div className="frame-wrapper">
          <div className="bgycontainer-title">
            <div className="bgycontainer-title--name">{title}</div>
            {
              shownavbtn &&
              <div className="bgycontainer-title--viewall">
                <UIButton label={<span>View All&nbsp;<i className="fa-regular fa-chevron-right"></i></span>} style={{ height: "1.2rem", width: "5.7rem", border: "none" }} href={link} />
              </div>
            }
          </div>
          {
            navbtn &&
            <NavButton />
          }
        </div>

        <div className="bgycontainer-line">
        </div>
        <div className="frame-wrapper">
          <div className="bgycontainer-image">
            {products.map(product => (
              <ProductCard key={product.id} singleproduct={product}/>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
