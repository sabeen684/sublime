import { Sticker } from "@/constants/image";
import UIButton from "@/ui/uibutton";
import Image from "next/image";

export default function Sucess() {
  return (
    <>
      <div className="bigcontainer">
        <div className="sucess">
          <div className="sucess-logo">
            <Image
              src={Sticker}
              alt="sticker"
              width={130}
              height={130}
              quality={100}
            />
          </div>
          <div className="sucess-title">
            <div className="sucess-title--main">Password Changed!</div>
            <div className="sucess-title--titles">
              Your Password has been changed sucessfully.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
