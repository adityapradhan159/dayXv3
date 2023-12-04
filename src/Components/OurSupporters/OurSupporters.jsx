import React from 'react'
import "./ourSupporters.css"
import Marquee from 'react-fast-marquee';

const OurSupporters = () => {
  return (
    <div className='OurSupporters'>
        <div className="OurSupporters_container section-container">
            <h1>Building together <br/>with our <span>supporters</span></h1>

            <div className="OurSupporters_carousel_container">

              <div className="leftBlurDiv"></div>
              <div className="rightBlurDiv"></div>

              <Marquee
                autoFill={true}
              >

                <div className="supporter">
                  <img src="/assets/LandingPage/Supporters/bling.svg" alt="" />
                </div>

                <div className="supporter">
                  <img src="/assets/LandingPage/Supporters/enableMedicine.png" alt="" />
                </div>

                <div className="supporter">
                  <img src="/assets/LandingPage/Supporters/Animaker.svg" alt="" />
                </div>

                <div className="supporter">
                  <img src="/assets/LandingPage/Supporters/barrix.svg" alt="" />
                </div>

                <div className="supporter">
                  <img src="/assets/LandingPage/Supporters/mitras.svg" alt="" />
                </div>

              </Marquee>
                

            </div>

        </div>
    </div>
  )
}

export default OurSupporters