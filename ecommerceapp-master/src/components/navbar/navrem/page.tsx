'use client'; // This directive ensures the component is treated as a client component

import { LOGO } from "@/constants/image";
import UIButton from "@/ui/uibutton";
import UIInput from "@/ui/uiinput";
import { NavButton } from "@/ui/uicategorypills/page";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

interface NavProp {
  navbtn?: boolean;
}

export const NavRem: React.FC<NavProp> = ({ navbtn }) => {
  const [activeView, setActiveView] = useState<'retail' | 'wholesale'>('retail');
  const router = useRouter();
  const pathname = usePathname();

  const handleToggle = (view: 'retail' | 'wholesale') => {
    setActiveView(view);
    if (view === 'retail') {
      router.push('/');
    } else {
      router.push('/wholesaler/auth/login');
    }
  };

  return (
    <header className="bg-container">
      <div className="frame-wrapper">
        <main className="navbar">
          <div className="navbar-custom">
            <div className="navbar-custom-retail">
              <button
                className={`toggle-${activeView === 'retail' ? 'active' : ''} b1`}
                onClick={() => handleToggle('retail')}
              >
                Retail
              </button>

            </div>
            <div className="navbar-custom-wholesale">
              <button
                className={`toggle-${activeView === 'wholesale' ? 'active' : ''} b2`}
                onClick={() => handleToggle('wholesale')}
              >
                Wholesale
              </button>
            </div>
          </div>
        </main>
      </div>

      <div className="bg-container--line" />
      <div className="frame-wrapper">
        <header className="largescreen">
          <main className="lnavbar">
            <div className="lnavbar-searchbar">
              <div className="lnavbar-searchbar--logo">
                <Link href="/">
                  <Image src={LOGO} alt="logo" height={1000} width={1000} quality={100} />
                </Link>
              </div>
              <div className="lnavbar-searchbar--search">
                <UIInput placeholder="Retails/wholesaler" />
                <div className="lnavbar-searchbar--search_select">
                  <select className="lnavbar-searchbar--search_select__box">
                    <option value="all category">All Category</option>
                    <option value="groceries">Groceries</option>
                    <option value="clothes">Clothes</option>
                    <option value="fashion">Fashion</option>
                    <option value="sports">Sports, Toys & Luggage</option>
                    <option value="homeimprovement">Home Improvement</option>
                  </select>
                  <div className="lnavbar-searchbar--search_select__icon">
                    <i className="fa-regular fa-chevron-up"></i>
                    <i className="fa-regular fa-chevron-down"></i>
                  </div>
                </div>
                <UIButton label="Search" type="primary" />
              </div>
              <div className="lnavbar-searchbar--icons">
                <Link href={"/profile"} style={{ cursor: "pointer" }} className={`lnavbar-searchbar--icons_profile ${pathname.startsWith("/profile") ? "setactive" : ""}`
                }>
                  <div className="lnavbar-searchbar--icons_profile__icon">
                    <i className="fa-solid fa-user"></i>
                  </div>
                  <div className="lnavbar-searchbar--icons_profile__name">Profile</div>
                </Link>
                <Link href={'/message'} className={`lnavbar-searchbar--icons_message ${pathname === "/message" ? "setactive" : ""}`}>
                  <div className="lnavbar-searchbar--icons_message__icon">
                    <i className="fa-solid fa-message-lines"></i>
                  </div>
                  <div className="lnavbar-searchbar--icons_message__name">Message</div>
                </Link>
                <Link href={'/notification'} className={`lnavbar-searchbar--icons_notification ${pathname === "/notification" ? "setactive" : ""}`}>
                  <div className="lnavbar-searchbar--icons_notification__icon">
                    <i className="fa-solid fa-bell"></i>
                  </div>
                  <div className="lnavbar-searchbar--icons_notification__name">Notification</div>
                </Link>
                <Link href="/cart" className={`lnavbar-searchbar--icons_mycart ${pathname === '/cart' ? "setactive" : ""}`}>
                  <div className="lnavbar-searchbar--icons_mycart__icon">
                    <i className="fa-solid fa-cart-shopping"></i>
                  </div>
                  <div className="lnavbar-searchbar--icons_mycart__name">My Cart</div>
                </Link>
              </div>
            </div>
          </main>
        </header>

        <header className="smallscreen">
          <main className="snavbar">
            <div className="snavbar-searchbar">
              <div className="snavbar-searchbar--first">
                <div className="snavbar-searchbar--first_logo">
                  <Link href="/">
                    <Image src={LOGO} alt="logo" height={1000} width={1000} quality={100} />
                  </Link>
                </div>
                <div className="snavbar-searchbar--first_icons">
                  <Link href={"/profile"} style={{ cursor: "pointer" }} className={`snavbar-searchbar--first_icons__profile ${pathname.startsWith("/profile") ? "setactive" : ""}`
                  }>
                    <div className="snavbar-searchbar--first_icons__profile-icon">
                      <i className="fa-solid fa-user"></i>
                    </div>
                    <div className="snavbar-searchbar--first_icons__profile-name">Profile</div>
                  </Link>
                  <Link href={'/message'} className={`snavbar-searchbar--first_icons__message ${pathname === "/message" ? "setactive" : ""}`}>
                    <div className="snavbar-searchbar--first_icons__message-icon">
                      <i className="fa-solid fa-message-lines"></i>
                    </div>
                    <div className="snavbar-searchbar--first_icons__message-name">Message</div>
                  </Link>
                  <Link href={'/notification'} className={`snavbar-searchbar--first_icons__notification ${pathname === "/notification" ? "setactive" : ""}`}>
                    <div className="snavbar-searchbar--first_icons__notification-icon">
                      <i className="fa-solid fa-bell"></i>
                    </div>
                    <div className="snavbar-searchbar--first_icons__notification-name">Notification</div>
                  </Link>
                  <Link href="/cart" className={`snavbar-searchbar--first_icons__mycart ${pathname === '/cart' ? "setactive" : ""}`}>
                    <div className="snavbar-searchbar--first_icons__mycart-icon">
                      <i className="fa-solid fa-cart-shopping"></i>
                    </div>
                    <div className="snavbar-searchbar--first_icons__mycart-name">My Cart</div>
                  </Link>
                </div>
              </div>

              <div className="snavbar-searchbar--search">
                <UIInput placeholder="Retails/wholesaler" />
                <div className="snavbar-searchbar--search_select">
                  <select className="snavbar-searchbar--search_select__box">
                    <option className="snavbar-searchbar--search_select__box-option" value="all category">All Category</option>
                    <option value="groceries">Groceries</option>
                    <option value="clothes">Clothes</option>
                    <option value="fashion">Fashion</option>
                    <option value="sports">Sports, Toys & Luggage</option>
                    <option value="homeimprovement">Home Improvement</option>
                  </select>
                  <div className="snavbar-searchbar--search_select__icon">
                    <i className="fa-regular fa-chevron-up"></i>
                    <i className="fa-regular fa-chevron-down"></i>
                  </div>
                </div>
                <UIButton label="Search" type="primary" />
              </div>

            </div>
          </main>
        </header>

      </div>
      <div className="bg-container--bottomline"></div>
      <div className="frame-wrapper">
        {
          navbtn &&
          <NavButton />
        }
      </div>

    </header>
    
  );
};


