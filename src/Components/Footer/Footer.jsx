import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <div className='Footer'>

        <div className="Footer_background_img">
          <img src="/assets/LandingPage/dayxWebImage.svg" alt="" />
        </div>

        <div className="Footer_container section-container">
            {/* <img src="/assets/logo.svg" alt="" /> */}
            <h4>2023 Copyright - dayX Labs Pvt. Ltd. All rights reserved.</h4>
        </div>
    </div>
  )
}

export default Footer