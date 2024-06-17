"use client";
import { provinces } from "@/lib/provinces";
import { useState } from "react";
import UIInput from "@/ui/uiinput";
import UISelect from "@/ui/uiselect";
import UIButton from "@/ui/uibutton";
import { SideBar } from "@/components/sidebar/page";
export default function Adressbook() {
  const [province, setProvince] = useState("");
  return (
    <>
      <div className="addressbook">
        <div className="frame-wrapper">
          <div className="addressbook-main">
            <div className="addressbook-main--sidebar">
              <SideBar />
            </div>

            <div className="addressbook-main--content">
              <div className="addressbook-main--content__inputs">
                <div className="addressbook-main--content__inputs-title">
                  Delivery Address
                </div>
                <div className="addressbook-main--content__inputs-group">
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
                <div className="addressbook-main--content__inputs-group">
                  <UIInput
                    id="area"
                    label="Area"
                    name="area"
                    placeholder="Area"
                    isRequired
                  />
                  <UIInput
                    id="address"
                    label="Address"
                    name="address"
                    placeholder="Address"
                    isRequired
                  />
                </div>

                <div className="addressbook-main--content__inputs-group">
                  <UIInput
                    type="number"
                    id="phonenumber"
                    label="Phone number"
                    name="phonenumber"
                    placeholder="Phone number"
                    isRequired
                  />
                  <UIInput
                    id="landmark"
                    label="Lamdmark(optional)"
                    name="landmark"
                    placeholder="E.g: Reflex It Solution"
                    isRequired
                  />
                </div>
                <div className="addressbook-main--button">
                  <UIButton type="primary" label="Save changes" />
                </div>
              </div>
              <div className="addressbook-main--content__inputs">
                <div className="addressbook-main--content__inputs-title">
                  Billing Address
                </div>
                <div className="addressbook-main--content__inputs-group">
                  <UISelect
                    label="Province"
                    id="Province"
                    name="province"
                    isRequired
                    placeholder="Province"
                    options={(
                      Object.keys(provinces) as Array<keyof typeof provinces>
                    ).map((option) => ({
                      value: option.toString(),
                      displayValue: option.toString(),
                    }))}
                    showSearch
                    onChange={(e) => setProvince(e.target.value)}
                  />
                  <UISelect
                    label="CITY"
                    id="city"
                    isRequired
                    options={
                      province
                        ? provinces[province].map((option) => ({
                          value: option.toString(),
                          displayValue: option.toString(),
                        }))
                        : []
                    }
                    showSearch
                  />
                </div>
                <div className="addressbook-main--content__inputs-group">
                  <UIInput
                    id="area"
                    label="Area"
                    name="area"
                    placeholder="Area"
                    isRequired
                  />
                  <UIInput
                    id="address"
                    label="Address"
                    name="address"
                    placeholder="Address"
                    isRequired
                  />
                </div>

                <div className="addressbook-main--content__inputs-group">
                  <UIInput
                    type="number"
                    id="phonenumber"
                    label="Phone number"
                    name="phonenumber"
                    placeholder="Phone number"
                    isRequired
                  />
                  <UIInput
                    id="landmark"
                    label="Landmark(optional)"
                    name="landmark"
                    placeholder="E.g: Reflex It Solution"
                    isRequired
                  />
                </div>
                <div className="addressbook-main--button">
                  <UIButton type="primary" label="Save changes" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
