"use client";

import { LOGO } from "@/constants/image";
import UIButton from "@/ui/uibutton";
import UIInput from "@/ui/uiinput";
import Image from "next/image";
import Link from "next/link";
export default function Forgetpassword() {
  return (
    <>
      <div className="bigcontainer">
        <div className="resetpassword">
          <div className="resetpassword-logo">
            <Image
              src={LOGO}
              alt="logo"
              width={285}
              height={125}
              quality={100}
            />
          </div>
          <div className="resetpassword-title">
            <div className="resetpassword-title--main authfont">
              Create New Password
            </div>
            <div className="resetpassword-title--titles">
              Your new password must be unique from those previously used.
            </div>
          </div>
          <div className="resetpassword-form">
            <div className="resetpassword-form--input">
              <UIInput type="password" placeholder="New password" />
            </div>
            <div className="resetpassword-form--input">
              <UIInput type="password" placeholder="Confirm password" />
            </div>
          </div>
          <div className="resetpassword-button">
            <UIButton type="primary" className="btn-primary" label="Reset password" />
          </div>
          <div className="resetpassword-signupfield">
            <span>Don&apos;t have any account?&nbsp;<Link className="resetpassword-signupfield--link" href="/auth/signup">Sign up</Link></span>
          </div>
        </div>
      </div>
    </>
  );
}
