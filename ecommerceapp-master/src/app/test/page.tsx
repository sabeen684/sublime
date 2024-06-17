import { SideBar } from '@/components/sidebar/page'
import React from 'react'
import { ProductSlider } from '../product/[slug]/imgslider'
import FireCard from '@/ui/uifiresalescard/page'
import { data } from '@/lib/data'
import Image from 'next/image'
import { Cover, LOGO } from '@/constants/image'

export default function page() {
  return (
    <>
      <div className="bgtestcontainer">
        <div className="frame-wrapper">
          <div className="dashboard-content--imagecontainer">
            <Image
              src={Cover}
              alt="image"
              width={500}
              height={500}
              quality={100}
              style={{ objectFit: "cover" }}
              className="image"
            />
            <div className="dashboard-content--imagecontainer_logosection">
              <div className="dashboard-content--imagecontainer_logosection__left">
                <span className="dashboard-content--imagecontainer_logosection__left-logocontainer">
                  <Image
                    src={LOGO}
                    alt=""
                    width={500}
                    height={500}
                    className="logo"
                  />
                </span>
                <span className="dashboard-content--imagecontainer_logosection__left-brand">
                  <p className="dashboard-content--imagecontainer_logosection__left-brand--brandname">
                    Evo Store
                  </p>
                  <p>Store link after store is active</p>
                </span>
              </div>
              <span className="dashboard-content--imagecontainer_logosection__right">
                <span className="dashboard-content--imagecontainer_logosection__right-followers">
                  <h3>5.3k</h3>
                  <p>Followers</p>
                </span>
                <span>
                  <h3>91%</h3>
                  <p>Positive Review</p>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

