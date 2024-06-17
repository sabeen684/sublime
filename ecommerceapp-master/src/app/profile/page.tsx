import { SideBar } from "@/components/sidebar/page";
import UIButton from "@/ui/uibutton";
import UIInput from "@/ui/uiinput";

export default function MyProfile() {
    return (
        <>
            <div className="bgprofilecontainer">
                <div className="frame-wrapper">
                    <div className="profile">
                        <SideBar />
                        <div className="profile-info">
                            <div className="profile-info--heading">
                                <div className="profile-info--heading_title">
                                    My Profile
                                </div>

                            </div>

                            <div className="profile-info--namephfield">
                                <UIInput label="Name" placeholder="Enter your Name" />
                                <UIInput label="Phone Number" placeholder="Enter your phonenumber" />
                            </div>

                            <div className="profile-info--emailfield">
                                <UIInput label="Email" placeholder="Enter your email" />
                                <UIInput label="Address" placeholder="Enter your Address" />
                            </div>

                            <div className="profile-info--savechangefield">
                                <UIButton label="Save Changes" type="primary"
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}