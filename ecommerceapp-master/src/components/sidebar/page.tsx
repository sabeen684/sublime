"use client";
import { SHOE } from "@/constants/image";
import Image from "next/image";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const SideBar = () => {
  const pathname = usePathname();

  return (
    <div className="sidebar">
      <div className="sidebar-profile">
        <div className="sidebar-profile--photo">
          <Image
            src={SHOE}
            width={1000}
            height={1000}
            alt="Profile picture"
            quality={100}
          />
          <button className="sidebar-profile--photo_icon"><i className="fa-regular fa-camera"></i></button>
        </div>
        <div className="sidebar-profile--text">
          <p className="sidebar-profile--text_title">John Doe</p>
          <p className="sidebar-profile--text_name">johndoe23@gmail.com</p>
        </div>
      </div>
      <hr className="sidebar-break" />
      <ul className="sidebar-ul">
        <li className={`${pathname === "/profile" ? "active" : ""}`}>
          <Link href="/profile" className={`sidebar-ul--a ${pathname === "/profile" ? "active" : ""} `} passHref>
            <i className="fa-regular fa-user icon"></i>
            <span>Profile</span>
          </Link>
        </li>
        <li className={`${pathname === "/profile/address" ? "active" : ""}`}>
          <Link
            href="/profile/address"
            passHref
            className={`sidebar-ul--a ${pathname === "/profile/address" ? "active" : ""
              }`}
          >
            <i className="fa-regular fa-location-dot"></i>
            <span>Address Book</span>
          </Link>
        </li>
        <li className={`${pathname === "/profile/recent-orders" ? "active" : ""
          }`}>
          <Link
            href="/profile/recent-orders"
            passHref
            className={`sidebar-ul--a ${pathname === "/profile/recent-orders" ? "active" : ""
              }`}
          >
            <i className="fa-solid fa-bag-shopping"></i>
            <span>Recent Orders</span>
          </Link>
        </li>
        <li className={`${pathname === "/profile/my-returns" ? "active" : ""
          }`}>
          <Link
            href="/profile/my-returns"
            passHref
            className={`sidebar-ul--a ${pathname === "/profile/my-returns" ? "active" : ""
              }`}
          >
            <i className="fa-solid fa-arrow-turn-down-left"></i>
            <span>My Returns</span>
          </Link>
        </li>
        <li className={`${pathname === "/profile/my-cancellations" ? "active" : ""
          }`}>
          <Link
            href="/profile/my-cancellations"
            passHref
            className={`sidebar-ul--a ${pathname === "/profile/my-cancellations" ? "active" : ""
              }`}
          >
            <i className="fa-regular fa-circle-xmark"></i>
            <span>My Cancellations</span>
          </Link>
        </li>
      </ul>
      <hr className="sidebar-break" />
      <ul className="sidebar-ul">
        <li className={` ${pathname === "/profile/track-order" ? "active" : ""
          }`}>
          <Link
            href="/profile/track-order"
            passHref
            className={`sidebar-ul--a ${pathname === "/profile/track-order" ? "active" : ""
              }`}
          >
            <i className="fa-light fa-truck fa-flip-horizontal"></i>
            <span>Track Orders</span>
          </Link>
        </li>
        <li className={` ${pathname === "/profile/followed-store" ? "active" : ""
          }`}>
          <Link
            href="/profile/followed-store"
            passHref
            className={`sidebar-ul--a ${pathname === "/profile/followed-store" ? "active" : ""
              }`}
          >
            <i className="fa-thin fa-store"></i>
            <span>Followed Store</span>
          </Link>
        </li>
        <li className={` ${pathname === "/logout" ? "active" : ""
          }`}>
          <Link
            href="#"
            passHref
            className={`sidebar-ul--a ${pathname === "/logout" ? "active" : ""
              }`}
          >
            <i className="fa-regular fa-power-off"></i>
            <span>Logout</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};
