"use client";
import { LOGO } from "@/constants/image";
import { provinces } from "@/lib/provinces";
import UIButton from "@/ui/uibutton";
import UICheckbox from "@/ui/uicheckbox/page";
import UIFileInput from "@/ui/uifileinput";
import UIInput from "@/ui/uiinput";
import UISelect from "@/ui/uiselect";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function RsignUp() {
  const [province, setProvince] = useState("");
  return (
    <>
      <div className="bgcontainer">
        <div className="frame-wrapper">
          <div className="Rsignup">
            <div className="Rsignup-logo">
              <Image
                src={LOGO}
                alt="logo"
                width={285}
                height={125}
                quality={100}
              />
            </div>
            <div className="Rsignup-title">
              <div className="Rsignup-title--main authfont">Sign up as Retailer</div>
              <div className="Rsignup-title--slogan">
                Get access to Samansansar. Become a member today.
              </div>
            </div>
            <div className="Rsignup-form">
              <div className="Rsignup-form--row">
                <div className="Rsignup-form--row_title">Basic Details:</div>
                <div className="Rsignup-form--row_input">
                  <UIInput type="text" placeholder="Full Name" />
                  <UIInput type="email" placeholder="Email Address" />
                  <UIInput type="number" placeholder="Contact" />
                </div>
              </div>

              <div className="Rsignup-form--row"> 
                <div className="Rsignup-form--row_title">Address:</div>
                <div className="Rsignup-form--row_input">
                  <UISelect
                    style={{ width: " 100%" }}
                    placeholder="Province"
                    id="province"
                    isRequired
                    options={(
                      Object.keys(provinces) as Array<keyof typeof provinces>
                    ).map((option) => ({
                      value: option.toString(),
                      displayValue: option.toString(),
                    }))}
                    showSearch
                    onChange={(e) => setProvince(e.target.value)}
                  />
                  <UISelect
                    style={{ width: "100%" }}
                    placeholder="City"
                    id="city"
                    isRequired
                    options={
                      province
                        ? provinces[province].map((option) => ({
                            value: option.toString(),
                            displayValue: option.toString(),
                          }))
                        : []
                    }
                    showSearch
                  />
                  <UIInput
                    id="Area"
                    name="area"
                    placeholder="Enter your area"
                  />
                </div>
              </div>
              <div className="Rsignup-form--row">
                <div className="Rsignup-form--row_title">Create Password:</div>
                <div className="Rsignup-form--row_inputpass">
                  <UIInput
                    type="password"
                    placeholder="Create Password"
                    style={{ width: "33%" }}
                  />
                  <UIInput
                    type="password"
                    placeholder="Retype Password"
                    style={{ width: "33%" }}
                  />
                </div>
              </div>
              <div className="Rsignup-form--checkbox">
                <UICheckbox
                  label={
                    <span>
                      I agree to the&nbsp;
                      <Link href="#">Terms and Condition.</Link>
                    </span>
                  }
                />
              </div>
            </div>
            <div className="signup-form--row">
              <div className="signup-form--row_title">
                Upload citizenship:
              </div>
              <div className="signup-form--row_file">
                <UIFileInput
                  placeholder="Upload Citizenship"
                  accept=".jpg, .jpeg, .png, .pdf"
                  style={{ width: "33%", border: "0.5px solid #d5d5d5" }}
                />
              </div>
            </div>
            <div className="Rsignup-button">
              <UIButton
                label="Create Account"
                type="primary"
                href="/wholesaler/auth/otppage"
              />
              <div className="Rsignup-button--loginfield">
                <span>
                  Already have an account?&nbsp;&nbsp;
                  <Link href={"/auth/login"}>
                    <span className="Rsignup-button--loginfield_text">
                      Login
                    </span>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
