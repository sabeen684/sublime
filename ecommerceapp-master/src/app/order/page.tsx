"use client";
import { cartdata } from "@/lib/cartdata";
import UIButton from "@/ui/uibutton";
import Image from "next/image";
import React from "react";

export default function Order() {
  return (
    <div className="bgcontainer">
      <div className="frame-wrapper">
        <div className="progresstab">
          <div className="progresstab-title">
            <div className="progresstab-title--name">Complete!</div>
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
        <div className="orderplace">
          <div className="orderplace-title">Thank you! 🎉</div>
          <div className="orderplace-title--subtitle">
            Your order has been Placed
          </div>
          <div className="ordercart">
            <div className="odercart-product">
              <Ordercart />
            </div>
            <table className="Ordercart-product--final">
              <tr>
                <td className="ordercart-product--fina__info">
                  <span>Order code:</span>
                </td>
                <td className="font-w-600">
                  <span className="font-c-success">#0123_45678</span>
                </td>
              </tr>
              <tr>
                <td>Date:</td>
                <td className="font-w-600">October 19, 2024</td>
              </tr>
              <tr>
                <td>Total:</td>
                <td className="font-w-600">Rs. 11,279</td>
              </tr>
              <tr>
                <td>Payment method</td>
                <td className="font-w-600">e-sewa</td>
              </tr>
            </table>
          </div>
          <div className="Rlogin-button">
            <UIButton type="primary" label="Continue shopping " href="/" />
          </div>
        </div>
      </div>
    </div>
  );
}

const Ordercart = () => {
  return (
    <div className="orderitem">
      {cartdata.slice(0, 3).map((item) => {
        return (
          <div key={item.id} className="orderitem-product">
            <div className="orderitem-product--image">
              <Image src={item.img} alt={item.title} width={80} height={96} />
            </div>
          </div>
        );
      })}
    </div>
  );
};
