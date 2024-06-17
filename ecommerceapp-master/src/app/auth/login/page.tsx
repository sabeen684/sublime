"use client";

import { LOGO } from "@/constants/image";
import UIButton from "@/ui/uibutton";
import UIInput from "@/ui/uiinput";
import Image from "next/image";
import Link from "next/link";
export default function Rlogin() {
  return (
    <>
      <div className="bigcontainer">
        <div className="Rlogin">
          <div className="Rlogin-logo">
            <Image
              src={LOGO}
              alt="logo"
              width={285}
              height={125}
              quality={100}
            />
          </div>
          <div className="Rlogin-title">
            <div className="Rlogin-title--main authfont">Login as Retailer</div>
            <div className="Rlogin-title--titles">
              Get access to Saman . Become a member today
            </div>
          </div>
          <div className="Rlogin-form">
            <UIInput id="email" name="email" placeholder="Email Address/ Phone number" />

            <UIInput type="password" placeholder="Enter your password" />

            <div className="Rlogin-form--title"><Link href="/auth/forgot-password">forgot password?</Link></div>
            <div className="Rlogin-button">
              <UIButton type="primary" label="Login" href="/" />
              <span>
                {" "}
                Don&apos;t have an account?&nbsp;
                <Link href="/auth/signup" className="Rlogin-button--account">
                  Signup
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
