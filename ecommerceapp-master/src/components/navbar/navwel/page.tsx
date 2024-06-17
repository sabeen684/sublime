import { BiSolidOffer } from "react-icons/bi"
import { CiLocationOn } from "react-icons/ci"
import { TbTruckDelivery } from "react-icons/tb"




export const NavWel: React.FC = () => {
    return (
        <>
            <div className="bggcontainer">
                <div className="frame-wrapper">
                    <div className="welcome">
                        <div className="welcome-firstgrid">
                            Welcome to SamanSansar!
                        </div>
                        <div className="welcome-secondgrid">
                            <div
                                className="welcome-secondgrid--first">
                                <div className="welcome-secondgrid--first_icon">
                                    <CiLocationOn />
                                </div>
                                <div className="welcome-secondgrid--first_name">
                                    Deliever to 423651
                                </div>
                            </div>
                            <div className="welcome-secondgrid--second">
                                <div className="welcome-secondgrid--second_icon">
                                    <TbTruckDelivery />
                                </div>
                                <div className="welcome-secondgrid--second_name">
                                    Track your order
                                </div>
                            </div>
                            <div className="welcome-secondgrid--third">
                                <div className="welcome-secondgrid--third_icon">
                                    <BiSolidOffer />
                                </div>
                                <div className="welcome-secondgrid--third_name">
                                    All Offers
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>




        </>
    )
}