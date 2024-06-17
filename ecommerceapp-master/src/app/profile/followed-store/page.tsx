import { SideBar } from "@/components/sidebar/page";
import { followedstore } from "@/lib/followedstore";
import UIButton from "@/ui/uibutton";
import UIInput from "@/ui/uiinput";
import Image from "next/image";

export default function MyProfile() {
    return (
        <>
            <div className="bgfollowstorecontainer">
                <div className="frame-wrapper">
                    <div className="followstore">
                        <SideBar />

                        <div className="followstore-content">
                            <div className="followstore-content--info">
                                <div className="followstore-content--info_heading">
                                    <div className="followstore-content--info_heading__title">
                                        Followed Store
                                    </div>

                                </div>
                                <div className="followstore-content--info_storetab">
                                    {
                                        followedstore.map((item) => {
                                            return (
                                                <>
                                                    <div className="followstore-content--info_storetab__content">
                                                        <div className="followstore-content--info_storetab__content-imgnamefield">
                                                            <Image src={item.img} alt="store-image" width={1000} height={1000} quality={100} />
                                                            <div className="followstore-content--info_storetab__content-imgnamefield--name">
                                                                {item.store_name}
                                                            </div>
                                                        </div>
                                                        <div className="followstore-content--info_storetab__content-buttonfield">
                                                            <UIButton label="Following" type="bprimary" />
                                                            <UIButton label="Visit Store" type="primary" />
                                                        </div>

                                                    </div>

                                                </>
                                            )
                                        })
                                    }


                                </div>
                            </div>
                            <div className="followstore-content--pagination">
                                <div className="followstore-content--pagination_pagenumber">
                                    Showing 1-09 of 78
                                </div>
                                <div className="followstore-content--pagination_button">
                                    <button><i className="fa-solid fa-chevron-up fa-rotate-270"></i></button>
                                    <button><i className="fa-solid fa-chevron-up fa-rotate-90"></i></button>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}