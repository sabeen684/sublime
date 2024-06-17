import { FaStar } from "react-icons/fa";
import UIButton from "@/ui/uibutton";
import ProductCard from "@/ui/uiproductcard";
import { data } from "@/lib/data";
import { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import FireCard from "@/ui/uifiresalescard/page";

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
  shownavbtn: boolean;
  link: string;
  navbtn?: boolean;
}

export const FireSales: React.FC<Productprops> = ({ products, title, link, shownavbtn }) => {

  let [days, setDays] = useState(0)
  let [hours, setHours] = useState(0)
  let [minutes, setMinutes] = useState(0)
  let [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const target = new Date("6/22/2024 1:59:14")
    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime()

      if (difference <= 0) {
        clearInterval(interval);
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      } else {
        const d = Math.floor(difference / (1000 * 60 * 60 * 24));
        const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((difference % (1000 * 60)) / 1000);

        setDays(d);
        setHours(h);
        setMinutes(m);
        setSeconds(s);
      }
    }, 1000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="bgzcontainer">
        <div className="frame-wrapper">
          <div className="bgzcontainer-title">
            <div className="bgzcontainer-title--titlefield">
              <div className="bgzcontainer-title--titlefield_name">{title}</div>
              <div className="bgzcontainer-title--titlefield_timer">
                <div className="bgzcontainer-title--titlefield_timer__days">
                  <div className="bgzcontainer-title--titlefield_timer__days-first">{days}</div>
                  <div className="bgzcontainer-title--titlefield_timer__days-second">Days</div>
                </div>
                <div className="bgzcontainer-title--titlefield_timer__hours">
                  <div className="bgzcontainer-title--titlefield_timer__hours-first">{hours} </div>
                  <div className="bgzcontainer-title--titlefield_timer__hours-second">Hours</div>
                </div>
                <div className="bgzcontainer-title--titlefield_timer__minutes">
                  <div className="bgzcontainer-title--titlefield_timer__minutes-first">{minutes}</div>
                  <div className="bgzcontainer-title--titlefield_timer__minutes-second">Min</div>
                </div>
                <div className="bgzcontainer-title--titlefield_timer__seconds">
                  <div className="bgzcontainer-title--titlefield_timer__seconds-first">{seconds}</div>
                  <div className="bgzcontainer-title--titlefield_timer__seconds-second"> Sec</div>
                </div>



              </div>

            </div>
            {
              shownavbtn &&
              <div className="bgzcontainer-title--viewall">



                <UIButton label={<span>View All&nbsp;<i className="fa-regular fa-chevron-right"></i></span>} style={{ height: "1.2rem", width: "5.7rem", border: "none" }} href={link} />
              </div>
            }
          </div>
        </div>

        <div className="bgzcontainer-line">
        </div>
        <div className="frame-wrapper">
          <div className="bgzcontainer-image">
            {products.map(product => (
              <FireCard key={product.id} title={product.title} img={product.img} id={product.id} oldPrice={product.oldPrice} sold={product.sold} newPrice={product.newPrice} showbtn={product.showbtn} free_delivery={product.free_delivery}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
