"use client";

import { LOGO } from "@/constants/image";
import UIButton from "@/ui/uibutton";
import UIInput from "@/ui/uiinput";
import Image from "next/image";
import Link from "next/link";
export default function Wlogin() {
  return (
    <>
      <div className="bigcontainer">
        <div className="Wlogin">
          <div className="Wlogin-logo">
            <Image
              src={LOGO}
              alt="logo"
              width={285}
              height={125}
              quality={100}
            />
          </div>
          <div className="Wlogin-title">
            <div className="Wlogin-title--main authfont">Login as Wholesale</div>
            <div className="Wlogin-title--titles">
              Get access to Saman . Become a member today
            </div>
          </div>
          <div className="Wlogin-form">
            <div className="Wlogin-form--input">
              <UIInput id="email" name="email" placeholder="Email Address" />
            </div>
            <div className="Wlogin-form--input">
              <UIInput type="password" placeholder="Enter your password" />
            </div>
          </div>

          <div className="Wlogin-button">
            <div className="Wlogin-button--forgotfield">
              <Link href={"/wholesaler/auth/forgot-password"}>
                <span className="Wlogin-button--forgotfield__text">
                  Forget Password?
                </span>
              </Link>
            </div>
            <UIButton label="Login" href="/wholesaler" type="primary" />
            <div className="Wlogin-button--loginfield">
              <span>
                Don&apos;t have an account?&nbsp;&nbsp;
                <Link href={"/wholesaler/auth/signup"}>
                  <span className="Wlogin-button--loginfield__text">
                    Signup
                  </span>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
