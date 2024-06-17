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

export default function SignUp() {
  const [province, setProvince] = useState("");
  return (
    <>
      <div className="bgcontainer">
        <div className="frame-wrapper">
          <div className="signup">
            <div className="signup-logo">
              <Image
                src={LOGO}
                alt="logo"
                width={285}
                height={125}
                quality={100}
              />
            </div>
            <div className="signup-title">
              <div className="signup-title--main authfont">Sign up as Wholesaler</div>
              <div className="signup-title--slogan">
                Get access to Samansansar. Become a member today.
              </div>
            </div>
            <div className="signup-form">
              <div className="signup-form--row">
                <div className="signup-form--row_title">Basic Details:</div>
                <div className="signup-form--row_input">
                  <UIInput type="text" placeholder="Full Name" />
                  <UIInput type="email" placeholder="Email Address" />
                  <UIInput type="number" placeholder="Contact" />
                </div>
              </div>

              <div className="signup-form--row">
                <div className="signup-form--row_title">Address:</div>
                <div className="signup-form--row_input">
                  <UISelect

                    id="Province"
                    name="province"
                    isRequired
                    placeholder="Province"
                    options={Object.keys(provinces).map((option) => ({
                      value: option,
                      displayValue: option,
                    }))}
                    showSearch
                    onChange={(e) => setProvince(e.target.value)}
                  />
                  <UISelect
                    id="city"
                    isRequired
                    options={
                      province
                        ? provinces[province].map((option) => ({
                          value: option,
                          displayValue: option,
                        }))
                        : []
                    }
                    showSearch
                  />
                  <UIInput
                    id="area"
                    name="area"
                    placeholder="Enter your area"
                  />
                  <UIInput
                    id="street_address"
                    name="address"
                    placeholder="Street Address"
                  />
                  <UIInput
                    id="Landmark"
                    name="landmark"
                    placeholder="Landmark"
                  />
                </div>
              </div>
              <div className="signup-form--row">
                <div className="signup-form--row_title">Create Password:</div>
                <div className="signup-form--row_inputpass">
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
              <div className="signup-form--row">
                <div className="signup-form--row_title">
                  Upload VAT or PAN image:
                </div>
                <div className="signup-form--row_file">
                  <UIFileInput
                    placeholder="Upload VAT or PAN image"
                    accept=".jpg, .jpeg, .png, .pdf"
                    style={{ width: "33%", border: "0.5px solid #d5d5d5" }}
                  />
                </div>
              </div>
              <div className="signup-form--checkbox">
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
            <div className="signup-button">
              <UIButton
                label="Create Account"
                type="primary"
                href="/wholesaler/auth/otppage"
              />
              <div className="signup-button--loginfield">
                <span>
                  Already have an account?&nbsp;&nbsp;
                  <Link href={"/wholesaler/auth/login"}>
                    <span className="signup-button--loginfield_text">
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
