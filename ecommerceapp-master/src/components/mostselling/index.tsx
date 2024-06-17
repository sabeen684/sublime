
import { mostdata } from "@/lib/latest";
import UIButton from "@/ui/uibutton";
import Image from "next/image";

export const MostSelling = () => {
  return (
    <div className="frame-wrapper">
      <div className="content">
        <div className="content-frist">
          <div className="content-frist--title">New Latest Arrivals</div>
          <div className="content-frist--button">
            <UIButton label="view all >"   style={{color:"black",width:"5.5rem",height:"1.1rem",fontWeight:"700",fontSize:"1rem",border:"none"}}/>
          </div>
        </div>

        <div className="content-second" > 
        {
        
        mostdata.slice(0,7).map((item:any,index:any) => ( 
            <div className="content-second--solocard" key={index}>
              <div className="content-second--solocard_image">
                <Image
                  src={item.img}
                  alt="solocard-image"
                  width={169}
                  height={169}
                  style={{ borderRadius: "6px" }}
                />
              </div>
              <div className="content-second--solocard_list">
                <div className="content-second--solocard_list__price">
                  Rs. {item.price}
                </div>
                <div className="content-second--solocard_list__minorder">
                  Min. Order {item.min_order} set
                </div>
              </div>
            </div>
        ))}
          </div>
      </div>
    </div>
  );
};
