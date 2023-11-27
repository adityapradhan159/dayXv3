import React from 'react'
import "./accountingPlanning.css"

const AccountingPlanning = () => {
  return (
    <div className='AccountingPlanning'>

        <div className="card_container1">
            <h3>Integrated Accounting and Planning</h3>

            <div className="AccountingPlanning_points">

                <div className="points_div">
                    <div className="marker"></div>
                    <p>Streamline financial planning with smart automation.</p>
                </div>

                <div className="points_div">
                    <div className="marker"></div>
                    <p>Make decisions, not calculations.</p>
                </div>

            </div>
        </div>

        

        <div className="card_container2">

            {/* <div className="Gradientlines">
                <img src="/assets/LandingPage/gradientLines.svg" alt="" />
            </div> */}

            <div className="redirect_Link">
                <h4>Take effective decisions</h4>
                <img src="/assets/LandingPage/rightArrow.svg" alt="" />
            </div>

            <div className="AccountingPlanning-img">
                <object
                  type='image/svg+xml'
                  data='assets/LandingPage/Revenue.svg'>
                </object>
                {/* <img src="/assets/LandingPage/accountPlanning.svg" alt="" /> */}
            </div>

        </div>

    </div>
  )
}

export default AccountingPlanning