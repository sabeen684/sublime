"use client";

import { LOGO } from "@/constants/image";
import UIButton from "@/ui/uibutton";
import UIInput from "@/ui/uiinput";
import Image from "next/image";

export default function Forgetpassword() {
  return (
    <>
      <div className="bigcontainer">
        <div className="forgotpassword">
          <div className="forgotpassword-logo">
            <Image
              src={LOGO}
              alt="logo"
              width={285}
              height={125}
              quality={100}
            />
          </div>
          <div className="forgotpassword-title">
            <div className="forgotpassword-title--main authfont">Forgot Password?</div>
            <div className="forgotpassword-title--titles">
              Don&apos;t worry it occurs,please enter email address linked with this
              account.
            </div>
          </div>
          <div className="forgotpassword-form">
            <div className="forgotpassword-form--input">
              <UIInput id="email" name="email" placeholder="Email Address" type="email"/>
            </div>
          </div>
          <div className="forgotpassword-buttondiv">
           <UIButton type="primary" href="/auth/otppage" label="Send Code"/>
          </div>
        </div>
      </div>
    </>
  );
}
