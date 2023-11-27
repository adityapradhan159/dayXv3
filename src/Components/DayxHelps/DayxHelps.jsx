import React from 'react'
import "./dayxHelps.css"

const DayxHelps = () => {
  return (
    <div className='DayxHelps'>
        <div className="DayxHelps_container section-container">

            <div className="dayxHelps_container1">
                <h1>You will love us if you are <br/><span>SMBs</span></h1>
            </div>

            <div className="dayxHelps_container2">
                <h2>dayX helps you </h2>
                <div className="dayHelps_Points">
                    <div className="marker"></div>
                    <h3>Automate tasks, save time, control costs.</h3>
                </div>

                <div className="dayHelps_Points">
                    <div className="marker"></div>
                    <h3>Access real-time insights for quick decision-making.</h3>
                </div>

                <div className="dayHelps_Points">
                    <div className="marker"></div>
                    <h3>Plan efficiently with advanced forecasting.</h3>
                </div>

                <div className="redirect_Link">
                    <h4>Get started</h4>
                    <img src="/assets/LandingPage/rightArrow.svg" alt="" />
                </div>
            </div>

        </div>
    </div>
  )
}

export default DayxHelps