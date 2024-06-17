"use client"
import { SideBar } from "@/components/sidebar/page";
import { ordersj } from "@/lib/orders";
import UISelect from "@/ui/uiselect";
import Image from "next/image";

export default function MyReturn() {
    return (
        <>
            <div className="bgreturncontainer">
                <div className="frame-wrapper">
                    <div className="myreturn">
                        <SideBar />
                        <div className="myreturn-content">
                            <div className=" myreturn-content--info">
                                <div className=" myreturn-content--info_title">
                                    <p>My Returns</p>
                                    <div className="myreturn-content--info_title__select">
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
                                <div className=" myreturn-content--info_table">
                                    <table className="myreturn-content--info_table__con">
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
                                                    <td><button>Returned</button></td>
                                                </tr>


                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="myreturn-content--pagination">
                                <div className="myreturn-content--pagination_pagenumber">
                                    Showing 1-09 of 78
                                </div>
                                <div className="myreturn-content--pagination_button">
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