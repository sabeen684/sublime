"use client"
import { SideBar } from "@/components/sidebar/page";
import { ordersj } from "@/lib/orders";
import UIButton from "@/ui/uibutton";
import UIInput from "@/ui/uiinput";
import UISelect from "@/ui/uiselect";
import Image from "next/image";

export default function RecentOrders() {
    return (
        <>
            <div className="bgrecentordercontainer">
                <div className="frame-wrapper">
                    <div className="recentorders">
                        <SideBar />
                        <div className="recentorders-content">
                            <div className=" recentorders-content--info">
                                <div className=" recentorders-content--info_title">
                                    <p>Recent Orders</p>
                                    <div className="recentorders-content--info_title__select">
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
                                <div className=" recentorders-content--info_table">
                                    <table className="recentorders-content--info_table__con">
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
                                                <th></th>
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
                                                    <td><button>Re-order</button></td>
                                                </tr>


                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="recentorders-content--pagination">
                                <div className="recentorders-content--pagination_pagenumber">
                                    Showing 1-09 of 78
                                </div>
                                <div className="recentorders-content--pagination_button">
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