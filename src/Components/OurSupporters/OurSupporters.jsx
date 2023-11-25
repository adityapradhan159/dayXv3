import React from 'react'
import "./ourSupporters.css"

const OurSupporters = () => {
  return (
    <div className='OurSupporters'>
        <div className="OurSupporters_container section-container">
            <h1>Building together with our <span>supporters</span></h1>

            <div className="OurSupporters_carousel_container">
                <div className="supporter">
                  <img src="/assets/LandingPage/Supporters/bling.svg" alt="" />
                </div>

                <div className="supporter">
                  <img src="/assets/LandingPage/Supporters/enableMedicine.svg" alt="" />
                </div>

                <div className="supporter">
                  <img src="/assets/LandingPage/Supporters/Animaker.svg" alt="" />
                </div>

                <div className="supporter">
                  <img src="/assets/LandingPage/Supporters/barrix.svg" alt="" />
                </div>

            </div>

        </div>
    </div>
  )
}

export default OurSupporters