"use client"
import { SideBar } from "@/components/sidebar/page";
import { ordersj } from "@/lib/orders";
import UISelect from "@/ui/uiselect";
import Image from "next/image";
import { LiaBell } from "react-icons/lia";
import { Status } from "./status";

export default function Cancellation() {
    return (
        <>
            <div className="bgcancelcontainer">
                <div className="frame-wrapper">
                    <div className="cancellation">
                        <SideBar />
                        <div className="cancellation-content">
                            <div className=" cancellation-content--info">
                                <div className=" cancellation-content--info_title">
                                    <p>My Cancellations
                                    </p>
                                    <div className="cancellation-content--info_title__select">
                                        <UISelect placeholder="Filter"
                                            options={[

                                                { value: "week", displayValue: " Week" },
                                                { value: "month", displayValue: " month" },
                                                { value: "6 months", displayValue: " 6 months" },
                                                { value: "Year", displayValue: "year" },
                                            ]

                                            }
                                        />
                                    </div>
                                </div>
                                <div className=" cancellation-content--info_table">
                                    <table className="cancellation-content--info_table__con">
                                        <thead>
                                            <tr className="headers">
                                                <th>S.N.</th>
                                                <th>Image</th>
                                                <th>Product Name</th>
                                                <th>Category</th>
                                                <th>Price</th>
                                                <th className="quantity">Quantity</th>
                                                <th>Total</th>
                                                <th>Placed On</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {ordersj.map((item) => (
                                                <tr key={item.sn}>
                                                    <td>{item.sn}.</td>
                                                    <td>
                                                        <Image src={item.image} alt="product_image" height={60} width={57} quality={100} style={{ objectFit: "cover" }} />
                                                    </td>
                                                    <td className="name">
                                                        {item.product_name}
                                                    </td>
                                                    <td className="category">
                                                        {item.category}
                                                    </td>
                                                    <td>Rs.{item.price}</td>
                                                    <td className="quantity">{item.quantity}</td>
                                                    <td>Rs.{item.total}</td>
                                                    <td>{item.placed_on}</td>
                                                    <td>
                                                        <Status status={item.status} />
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="cancellation-content--pagination">
                                <div className="cancellation-content--pagination_pagenumber">
                                    Showing 1-09 of 78
                                </div>
                                <div className="cancellation-content--pagination_button">
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