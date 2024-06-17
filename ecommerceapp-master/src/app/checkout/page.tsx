"use client";
import UIInput from "@/ui/uiinput";
import UISelect from "@/ui/uiselect";
import Image, { StaticImageData } from "next/image";
import { cartdata } from "@/lib/cartdata";
import UIButton from "@/ui/uibutton";
import cod from "../../../public/./images/cod.jpg";
import esewa from "../../../public/./images/esewa.png";
import khalti from "../../../public/./images/khalti.png";
import ime from "../../../public/./images/ime.png";
import cupon from "../../../public/./images/ticket-percent.png";
import { provinces } from "@/lib/provinces";
import { useState } from "react";

const subtotal = cartdata.reduce((acc, cart) => {
  return acc + cart.quantity * cart.price;
}, 0);

export default function Checkout() {
  const [province, setProvince] = useState("");
  return (
    <div className="checkoutbg">
      <div className="frame-wrapper">
        <div className="progresstab">
          <div className="progresstab-title">
            <div className="progresstab-title--name">Check Out</div>
            <div className="progresstab-title--choose">
              <div className="progresstab-title--choose_shopping">
                <div className="progresstab-title--choose_shopping__number">
                  1
                </div>
                <div className="progresstab-title--choose_shopping__name">
                  Shopping Cart
                </div>
              </div>
              <div className="progresstab-title--choose_checkout">
                <div className="progresstab-title--choose_checkout__number">
                  2
                </div>
                <div className="progresstab-title--choose_checkout__name">
                  Checkout details
                </div>
              </div>
              <div className="progresstab-title--choose_order">
                <div className="progresstab-title--choose_order__number">3</div>
                <div className="progresstab-title--choose_order__name">
                  Order Complete
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="checkout1">
          <div className="checkout1-form">
            <div className="checkout1-form--section">
              <h2 className="checkout1-form--section__title">
                Contact Details
              </h2>
              <div className="checkout1-form--section__fields">
                <div className="checkout1-form--section__fields-group">
                  <div className="checkout1-form--section__fields-input">
                    <UIInput
                      id="firstName"
                      label="First Name"
                      name="firstName"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="checkout1-form--section__fields-input">
                    <UIInput
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div className="checkout1-form--section__fields-input">
                  <UIInput
                    id="phoneNumber"
                    label="Phone Number"
                    name="phoneNumber"
                    placeholder="Phone Number"
                  />
                </div>
                <div className="checkout1-form--section__fields-input">
                  <UIInput
                    id="email"
                    label="Email"
                    name="email"
                    placeholder="Email"
                  />
                </div>
              </div>
            </div>
            <div className="checkout1-form--section">
              <h2 className="checkout1-form--section__title">
                Shipping Address
              </h2>
              <div className="checkout1-form--section__fields">
                <div className="checkout1-form--section__fields-input">
                <UISelect
                    label="Province"
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
                </div>
                <div className="checkout1-form--section__fields-input">
                <UISelect
                    label="CITY"
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
                </div>
                <div className="checkout1-form--section__fields-input">
                  <UIInput
                    id="Area"
                    label="Area"
                    placeholder="Enter your area"
                    isRequired
                  />
                </div>
                <div className="checkout1-form--section__fields-input">
                  <UIInput
                    id="street Address"
                    label="Street Adress"
                    placeholder="Town/City"
                    isRequired
                  />
                </div>
             
                <div className="checkout1-form--section__fields-input">
                  <UIInput
                    id="Land mark"
                    label="Land mark(optional)"
                    placeholder="E.g: Reflex It Solution"
                    isRequired
                  />
                </div>
                <div className="shipped-checkbox">
                  <input className="" type="checkbox" />
                  <div className="shipped-checkbox--default">
                    Use default shipping Address(optional)
                  </div>
                </div>
              </div>
            </div>
            <div className="checkout1-form--paymentMethod">
              <div className="font-w-600">
                <h2>Payment Method</h2>
              </div>
              <div className="checkout1-form--paymentMethod__items">
                <div className="checkout1-form--paymentMethod__items-item">
                  <input type="radio" name="paymentMethod" id="cod" />
                  <label htmlFor="cod">
                    <Pay image={cod} />
                  </label>
                </div>
                <div className="checkout1-form--paymentMethod__items-item">
                  <input type="radio" name="paymentMethod" id="esewa" />
                  <label htmlFor="esewa">
                    <Pay image={esewa} />
                  </label>
                </div>
                <div className="checkout1-form--paymentMethod__items-item">
                  <input type="radio" name="paymentMethod" id="khalti" />
                  <label htmlFor="esewa">
                    <Pay image={khalti} />
                  </label>
                </div>
                <div className="checkout1-form--paymentMethod__items-item">
                  <input type="radio" name="paymentMethod" id="ime" />
                  <label htmlFor="esewa">
                    <Pay image={ime} />
                  </label>
                </div>
              </div>
            </div>
            <div className="Placeorder">
              <UIButton
                className="btn-primary"
                type="primary"
                href="/order"
                label="Place order"
                style={{ width: "100%" }}
              />
            </div>
          </div>

          <div className="checkout1-summary">
            <h1 className="font-w-600">Order Summary</h1>
            <SummaryProducts />
            <div className="checkout1-summary--apply">
              <UIInput
                id="fname"
                name="fname"
                isRequired={false}
                placeholder="Input"
              />
              <UIButton
                className="btn-primary"
                type="primary"
                style={{ height: "3.25rem", width: "6.8rem" }}
                label="Apply"
              />
            </div>
            <table className="checkout1-summary--finalcost">
              <tr>
                <td className="couponCodePreview">
                  <Image src={cupon} alt="Coupon" />
                  <span>SamanSansar</span>
                </td>
                <td className="font-w-600">
                  <span className="font-c-success">-Rs.200&nbsp;</span>
                  <span className="font-c-error">[Remove]</span>
                </td>
              </tr>
              <tr>
                <td>Shipping</td>
                <td className="font-w-600">Free</td>
              </tr>
              <tr>
                <td>Subtotal</td>
                <td className="font-w-600">Rs. 11,279</td>
              </tr>
              <tr>
                <td>Total</td>
                <td className="font-w-600">Rs. 11,279</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
const SummaryProducts = () => {
  return (
    <div className="summaryProducts">
      {cartdata.slice(0, 3).map((item) => {
        return (
          <div key={item.id} className="summaryProducts-product">
            <div className="summaryProducts-product--image">
              <Image src={item.img} alt={item.title} width={512} height={512} />
            </div>
            <div className="summaryProducts-product--details">
              <div className="summaryProducts-product--details__general">
                <span className="summaryProducts-product--details__general-name">
                  {item.title}
                </span>
                <span className="summaryProducts-product--details__general-color">
                  Color: {item.color}
                </span>
                <div className="summaryProducts-product--details__general-count">
                  <button className="summaryProducts-product--details__general-count--btn">
                    -
                  </button>
                  <span className="summaryProducts-product--details__general-count--num">
                    {item.quantity}
                  </span>
                  <button className="summaryProducts-product--details__general-count--btn">
                    +
                  </button>
                </div>
              </div>
              <span className="summaryProducts-product--details__price">
                Rs. {item.price}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

interface PaymentMethodProps {
  image: StaticImageData | string;
}

const Pay = ({ image }: PaymentMethodProps) => {
  return (
    <Image className="paymentMethod-img" src={image} alt="Payment Method" />
  );
};
