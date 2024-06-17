"use client";

import { cartdata } from "@/lib/cartdata";
import UIButton from "@/ui/uibutton";
import UIInput from "@/ui/uiinput";
import Image from "next/image";

export default function Cart() {
  const subtotal = cartdata.reduce((acc, cart) => {
    return acc + cart.quantity * cart.price;
  }, 0);

  return (
    <>
      <div className="bgcartcontainer">
        <div className="frame-wrapper">
          <div className="cart">
            <div className="cart-title">
              <div className="cart-title--name">Cart</div>
              <div className="cart-title--choose">
                <div className="cart-title--choose_shopping">
                  <div className="cart-title--choose_shopping__number">1</div>
                  <div className="cart-title--choose_shopping__name">
                    Shopping Cart
                  </div>
                </div>
                <div className="cart-title--choose_checkout">
                  <div className="cart-title--choose_checkout__number">2</div>
                  <div className="cart-title--choose_checkout__name">
                    Checkout details
                  </div>
                </div>
                <div className="cart-title--choose_order">
                  <div className="cart-title--choose_order__number">3</div>
                  <div className="cart-title--choose_order__name">
                    Order Complete
                  </div>
                </div>
              </div>
            </div>

            <div className="cart-content">
              <div className="cart-content--product">
                <div className="cart-content--product_table">
                  <table>
                    <thead>
                      <tr className="cart-content--product_table__th">
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Subtotal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartdata.map((item) => (
                        <tr key={item.id}>
                          <td>
                            <div className="cart-content--product_table__imgdetail">
                              <div className="cart-content--product_table__imgdetail-image">
                                <Image
                                  src={item.img}
                                  alt="product_image"
                                  height={96}
                                  width={80}
                                  quality={100}
                                  style={{ objectFit: "cover" }}
                                />
                              </div>
                              <div className="cart-content--product_table__imgdetail-details">
                                <div className="cart-content--product_table__imgdetail-details--first">
                                  {item.title}
                                </div>
                                <div className="cart-content--product_table__imgdetail-details--second">
                                  Color:{item.color}
                                </div>
                                <div className="cart-content--product_table__imgdetail-details--third">
                                  <button>
                                    <span>
                                      <i className="fa-solid fa-xmark "></i>
                                      <p>Remove</p>
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </td>

                          <td>
                            <div className="cart-content--product_table__buttondiv">
                              <div className="cart-content--product_table__buttondiv-sub">
                                <button
                                  style={{
                                    color: "black",
                                    border: "none",
                                    height: 16,
                                    width: 16,
                                    backgroundColor: "transparent",
                                    fontSize: "1rem",
                                  }}
                                >
                                  -
                                </button>
                              </div>
                              <div className="cart-content--product_table__buttondiv-item">
                                {item.quantity}
                              </div>
                              <div className="cart-content--product_table__buttondiv-add">
                                <button
                                  style={{
                                    color: "black",
                                    border: "none",
                                    height: 16,
                                    width: 16,
                                    backgroundColor: "transparent",
                                  }}
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          </td>

                          <td>Rs. {item.price}</td>
                          <td style={{ fontSize: "1.1rem", fontWeight: "600" }}>
                            Rs. {item.quantity * item.price}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="cart-content--product_cartsummary">
                  <div className="cart-content--product_cartsummary__title">
                    Cart summary
                  </div>
                  <div className="cart-content--product_cartsummary__radio">
                    <div className="cart-content--product_cartsummary__radio-freeshipping">
                      <div className="cart-content--product_cartsummary__radio-freeshipping--label">
                        <input
                          type="radio"
                          id="freeshipping"
                          name="shipping"
                          style={{ height: "1.1rem", width: "1.1rem" }}
                        />

                        <label htmlFor="freeshipping">Free Shipping</label>
                      </div>
                      <div className="cart-content--product_cartsummary__radio-freeshipping--price">
                        Rs 0
                      </div>
                    </div>
                    <div className="cart-content--product_cartsummary__radio-branchshipping">
                      <div className="cart-content--product_cartsummary__radio-branchshipping--label">
                        <input
                          type="radio"
                          id="branchshipping"
                          name="shipping"
                          style={{ height: "1.1rem", width: "1.1rem" }}
                        />
                        <label htmlFor="branchshipping">Branch Shipping</label>
                      </div>
                      <div className="cart-content--product_cartsummary__radio-branchshipping--price">
                        Rs 400
                      </div>
                    </div>
                    <div className="cart-content--product_cartsummary__radio-homeshipping">
                      <div className="cart-content--product_cartsummary__radio-homeshipping--label">
                        <input
                          type="radio"
                          id="homeshipping"
                          name="shipping"
                          style={{ height: "1.1rem", width: "1.1rem" }}
                        />

                        <label htmlFor="homeshipping">Home Shipping</label>
                      </div>
                      <div className="cart-content--product_cartsummary__radio-homeshipping--price">
                        Rs 500
                      </div>
                    </div>
                  </div>
                  <div className="cart-content--product_cartsummary__subtotal">
                    <div className="cart-content--product_cartsummary__subtotal-title">
                      Subtotal
                    </div>
                    <div className="cart-content--product_cartsummary__subtotal-price">
                      Rs. {subtotal}
                    </div>
                  </div>
                  <div className="cart-content--product_cartsummary__total">
                    <div className="cart-content--product_cartsummary__total-title">
                      Total
                    </div>
                    <div className="cart-content--product_cartsummary__total-price">
                      Rs 500000
                    </div>
                  </div>
                  <div className="cart-content--product_cartsummary__checkout">
                    <UIButton
                      type="primary"
                      label="Checkout"
                      style={{ width: "22.8rem" }}
                      href="/checkout"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
