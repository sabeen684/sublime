import UIButton from "../uibutton"


export const NavButton = () => {
      return (
            <>
                  <div className="bgnavcontainer">
                        <div className="frame-wrapper">
                              <div className="navbtn">
                                    <UIButton label="Groceries" className="navbtn-btn" />
                                    <UIButton label="Clothes & Wear" className="navbtn-btn" />
                                    <UIButton label="Home & Kitchen" className="navbtn-btn" />
                                    <UIButton label="Fashion" className="navbtn-btn" />
                                    <UIButton label="Electronics " className="navbtn-btn" />
                                    <UIButton label="Beauty" className="navbtn-btn" />
                                    <UIButton label="Home Improvement" className="navbtn-btn" />
                                    <UIButton label="Sports,Toys & Luggage" className="navbtn-btn" />
                              </div>

                        </div>
                  </div>

            </>
      )



}