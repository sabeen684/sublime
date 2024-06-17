"use client"
import { LOGO } from "@/constants/image";
import UIButton from "@/ui/uibutton";
import UIInput from "@/ui/uiinput";
import Image from "next/image";
import Link from "next/link";

export default function OttpPage() {
  const tabChange = (val: number) => (e: React.ChangeEvent<HTMLInputElement>) => {

    const ele = document.querySelectorAll('input[type="number"]');
    if (e.target.value !== '' && val < ele.length) {
      (ele[val] as HTMLInputElement)?.focus();
    } else if (e.target.value === '' && val > 1) {
      (ele[val - 2] as HTMLInputElement)?.focus();
    }
  };
  return (
    <>
      <div className="bgotppage">
        <div className="otpage">
          <div className="otpage-logo">
            <Image src={LOGO} alt="logo" height={1000} width={1000} quality={100} />
          </div>
          <div className="otpage-titlefield">
            <div className="otpage-titlefield--title authfont">OTP Verification</div>
            <div className="otpage-titlefield--descpfield">
              Enter the verification code we just sent on your email address
            </div>
          </div>
          <div className="otpage-inputfield">
            <UIInput type="number" maxLength={1} onChange={tabChange(1)} />
            <UIInput type="number" maxLength={1} onChange={tabChange(2)} />
            <UIInput type="number" maxLength={1} onChange={tabChange(3)} />
            <UIInput type="number" maxLength={1} onChange={tabChange(4)} />
            <UIInput type="number" maxLength={1} onChange={tabChange(5)} />
            <UIInput type="number" maxLength={1} onChange={tabChange(6)} />
          </div>
          <div className="otpage-buttonfield">
            <UIButton label="Verify" type="primary" href="/wholesaler" />
          </div>
          <div className="otpage-resendfield">
            <span>
              Didn&apos;t Received code?&nbsp;
              <Link href="#" style={{ color: "orangered", fontWeight: 700 }}>
                Resend it
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}