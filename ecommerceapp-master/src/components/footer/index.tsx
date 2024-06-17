import { FaWhatsapp } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";
import { LiaCopyrightSolid } from "react-icons/lia";
import Image from "next/image";


export const Footer = () => {
    return (
        <>
            <header className="bgfootercontainer">
                <div className="frame-wrapper">
                    <main className="footer">
                        <section className="footer-content">
                            <div className="footer-content--contact">
                                <p className="footer-content--contact_title">Contact Us</p>
                                <div className="footer-content--contact_whatsapp">
                                    <i className="fa-brands fa-whatsapp footer-content--contact_whatsapp__icon"></i>
                                    <div className="footer-content--contact_whatsapp__data">
                                        <p className="footer-content--contact_whatsapp__data-name">Whats App</p>
                                        <p className="footer-content--contact_whatsapp__data-number">9856378201</p>
                                    </div>
                                </div>
                                <div className="footer-content--contact_phone">
                                    <i className="fa-regular fa-phone-volume footer-content--contact_phone__icon"></i>
                                    <div className="footer-content--contact_phone__call">
                                        <p className="footer-content--contact_phone__call-title">Call Us</p>
                                        <p className="footer-content--contact_phone__call-callnum">9856378201</p>
                                    </div>
                                </div>
                                <div className="footer-content--contact_download">
                                    <p className="footer-content--contact_download__title">Download App</p>
                                    <div className="footer-content--contact_download__text">
                                        <div className="footer-content--contact_download__text-img1" >
                                            <Image src={"/images/iosstore.jpg"} alt="app-store" width={167} height={55} />
                                        </div>
                                        <div className="footer-content--contact_download__text-img2">
                                            <Image src={"/images/googleplay.jpg"} alt="app-store" width={167} height={55} />
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="footer-content--category">

                                <div className="footer-content--category_title">
                                    Our Categories

                                    <div className="footer-content--category_title__line"></div>
                                </div>
                                <div className="footer-content--category_list">
                                    <li>Fashions</li>
                                    <li>Cosmetics</li>
                                    <li>Electronics</li>
                                    <li>Household & Kitchen</li>
                                    <li>Machinery</li>
                                    <li>Decorations</li>
                                    <li>Automobiles</li>
                                    <li>Books & Stationary</li>
                                    <li>Sports</li>
                                </div>

                            </div>
                            <div className="footer-content--services">

                                <div className="footer-content--services_title">Customer Services

                                    <div className="footer-content--services_title__line"></div>

                                </div>


                                <div className="footer-content--services_info">
                                    <li>About Us</li>
                                    <li>Terms & Conditions</li>
                                    <li>FAQ</li>
                                    <li>Privacy Policy</li>
                                    <li>Cancellation & Return Policy</li>
                                </div>

                            </div>
                        </section>
                        <section className="footer-rights">
                            <div className="footer-rights--line"></div>
                            <span className="footer-rights--text"><i className="fa-regular fa-copyright"></i> All rights reserved.Samansansar Ltd.</span>
                        </section>
                    </main>


                </div>
            </header>





        </>

    )


}