"use client"
import React from 'react'
import { SideBar } from "@/components/sidebar/page";
import { useState } from "react";
import Stepper from '@/ui/uistepper/page';

export default function Page() {
    const steps = ["Place order", "Processing", "Shipped", "Delivered"]
    const [currentState, setCurrentState] = useState(0)
    const handleStepChange = (step: number) => {
        setCurrentState(step);
    }
    return (
        <>
            <div className="bgtrackcontainer">
                <div className="frame-wrapper">
                    <div className="trackorder">
                        <SideBar />
                        <div className="trackorder-content">
                            <div className=" trackorder-content--info">
                                <div className=" trackorder-content--info_title">
                                    Track Order
                                </div>

                                <div className="trackorder-content--info_progressbar">
                                    <Stepper steps={steps} currentStep={currentState} onStepChange={handleStepChange} />

                                    <div className="trackorder-content--info_progressbar__statecontent">
                                        {
                                            currentState === 0 &&
                                            <>
                                                <div className="trackorder-content--info_progressbar__statecontent-placeorder">
                                                    <div className="trackorder-content--info_progressbar__statecontent-placeorder--content">

                                                        <div className="trackorder-content--info_progressbar__statecontent-placeorder--content_time">
                                                            6.30 pm :
                                                        </div>
                                                        <div className="trackorder-content--info_progressbar__statecontent-placeorder--content_info">
                                                            <div className="trackorder-content--info_progressbar__statecontent-placeorder--content_info__title">
                                                                Order Confirmation:
                                                            </div>
                                                            <div className="trackorder-content--info_progressbar__statecontent-placeorder--content_info__descp">
                                                                We have received your order and sent you a confirmation email with your order details.
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="trackorder-content--info_progressbar__statecontent-placeorder--content">

                                                        <div className="trackorder-content--info_progressbar__statecontent-placeorder--content_time">
                                                            6.35 pm :
                                                        </div>
                                                        <div className="trackorder-content--info_progressbar__statecontent-placeorder--content_info">
                                                            <div className="trackorder-content--info_progressbar__statecontent-placeorder--content_info__title">
                                                                Payment Verification:
                                                            </div>
                                                            <div className="trackorder-content--info_progressbar__statecontent-placeorder--content_info__descp">
                                                                Our system is currently verifying your payment method.
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="trackorder-content--info_progressbar__statecontent-placeorder--content">

                                                        <div className="trackorder-content--info_progressbar__statecontent-placeorder--content_time">
                                                            6.35 pm :
                                                        </div>
                                                        <div className="trackorder-content--info_progressbar__statecontent-placeorder--content_info">
                                                            <div className="trackorder-content--info_progressbar__statecontent-placeorder--content_info__title">
                                                                Order Processing Queue:
                                                            </div>
                                                            <div className="trackorder-content--info_progressbar__statecontent-placeorder--content_info__descp">
                                                                Your order is now in our processing queue. We will begin preparing it shortly.                                                             </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        }
                                        {
                                            currentState === 1 &&
                                            <>
                                                <div className="trackorder-content--info_progressbar__statecontent-placeorder">
                                                    <div className="trackorder-content--info_progressbar__statecontent-processing--content">

                                                        <div className="trackorder-content--info_progressbar__statecontent-processing--content_time">
                                                            6.30 pm :
                                                        </div>
                                                        <div className="trackorder-content--info_progressbar__statecontent-processing--content_info">
                                                            <div className="trackorder-content--info_progressbar__statecontent-processing--content_info__title">
                                                                Preparing Your Items:
                                                            </div>
                                                            <div className="trackorder-content--info_progressbar__statecontent-processing--content_info__descp">
                                                                Your items are being picked from our inventory and prepared for packaging.                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="trackorder-content--info_progressbar__statecontent-processing--content">

                                                        <div className="trackorder-content--info_progressbar__statecontent-processing--content_time">
                                                            6.35 pm :
                                                        </div>
                                                        <div className="trackorder-content--info_progressbar__statecontent-processing--content_info">
                                                            <div className="trackorder-content--info_progressbar__statecontent-processing--content_info__title">
                                                                Quality Check:
                                                            </div>
                                                            <div className="trackorder-content--info_progressbar__statecontent-processing--content_info__descp">
                                                                Each item is undergoing a final quality inspection to make sure it meets our standards before shipment.
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>

                                            </>
                                        }
                                        {
                                            currentState === 2 &&
                                            <>
                                                <div className="trackorder-content--info_progressbar__statecontent-shipped">
                                                    <div className="trackorder-content--info_progressbar__statecontent-shipped--content">

                                                        <div className="trackorder-content--info_progressbar__statecontent-shipped--content_time">
                                                            6.30 pm :
                                                        </div>
                                                        <div className="trackorder-content--info_progressbar__statecontent-shipped--content_info">
                                                            <div className="trackorder-content--info_progressbar__statecontent-shipped--content_info__title">
                                                                Courier Pickup:
                                                            </div>
                                                            <div className="trackorder-content--info_progressbar__statecontent-shipped--content_info__descp">
                                                                Our shipping partner has picked up your package and it is now in transit.
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="trackorder-content--info_progressbar__statecontent-shipped--content">

                                                        <div className="trackorder-content--info_progressbar__statecontent-shipped--content_time">
                                                            6.35 pm :
                                                        </div>
                                                        <div className="trackorder-content--info_progressbar__statecontent-shipped--content_info">
                                                            <div className="trackorder-content--info_progressbar__statecontent-shipped--content_info__title">
                                                                In Transit:
                                                            </div>
                                                            <div className="trackorder-content--info_progressbar__statecontent-shipped--content_info__descp">
                                                                Your package is on its way to the destination. You can track its journey using the tracking number provided.
                                                            </div>

                                                        </div>
                                                    </div>

                                                </div>
                                            </>
                                        }
                                        {
                                            currentState === 3 &&
                                            <>
                                                <div className="trackorder-content--info_progressbar__statecontent-delivered">
                                                    <div className="trackorder-content--info_progressbar__statecontent-delivered--content">

                                                        <div className="trackorder-content--info_progressbar__statecontent-delivered--content_time">
                                                            6.30 pm :
                                                        </div>
                                                        <div className="trackorder-content--info_progressbar__statecontent-delivered--content_info">
                                                            <div className="trackorder-content--info_progressbar__statecontent-delivered--content_info__title">
                                                                Out for Delivery:
                                                            </div>
                                                            <div className="trackorder-content--info_progressbar__statecontent-delivered--content_info__descp">
                                                                Your package is out for delivery and will reach you soon. Please ensure someone is available to receive it.                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="trackorder-content--info_progressbar__statecontent-delivered--content">

                                                        <div className="trackorder-content--info_progressbar__statecontent-delivered--content_time">
                                                            6.35 pm :
                                                        </div>
                                                        <div className="trackorder-content--info_progressbar__statecontent-delivered--content_info">
                                                            <div className="trackorder-content--info_progressbar__statecontent-delivered--content_info__title">
                                                                Delivered:
                                                            </div>
                                                            <div className="trackorder-content--info_progressbar__statecontent-delivered--content_info__descp">
                                                                Your package has been successfully delivered. We hope you enjoy your purchase! If you have any issues, please contact our customer service team for assistance.                                                            </div>

                                                        </div>
                                                    </div>

                                                </div>
                                            </>
                                        }
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}