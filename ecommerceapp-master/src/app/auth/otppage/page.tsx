"use client"

import { LOGO } from "@/constants/image";
import UIButton from "@/ui/uibutton";
import UIInput from "@/ui/uiinput";
import Image from "next/image";
import Link from "next/link";

export default function OttpPage() {

    return (
        <>
            <div className="bgotppage">

                <div className="otpage">
                    <div className="otpage-logo">
                        <Image src={LOGO} alt="logo" height={1000} width={1000} quality={100}></Image>
                    </div>
                    <div className="otpage-titlefield">
                        <div className="otpage-titlefield--title authfont">
                            OTP Verification
                        </div>
                        <div className="otpage-titlefield--descpfield">
                            Enter the verification code we just sent on your email address
                        </div>
                    </div>

                    <div className="otpage-inputfield">
                        <UIInput type="number" maxLength={1} />
                        <UIInput type="number" maxLength={1} />
                        <UIInput type="number" maxLength={1} />
                        <UIInput type="number" maxLength={1} />

                    </div>
                    <div className="otpage-buttonfield">
                        <UIButton label="Verify" type="primary" />
                    </div>
                    <div className="otpage-resendfield">
                        <span>Didn&apos;t Received code?&nbsp;<Link href="#" style={{ color: "orangered", fontWeight: 700 }}>Resend it</Link></span>
                    </div>
                </div>






            </div>



        </>
    )
}