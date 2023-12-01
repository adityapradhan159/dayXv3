import React from 'react'
import "./dayxFeatures.css"

const DayxFeatures = () => {
  return (
    <div className='DayxFeatures'>

      <div className="dayxGradientLogo">
        <img src="/assets/LandingPage/dayxGradientLogo.svg" alt="" />
      </div>

      <div className="dayxWebImage">
        <img src="/assets/LandingPage/dayxWebImage.svg" alt="" />
      </div>

      <div className="DayxFeatures_container section-container">
        <h1>Your go-to tool for <br/> <span>effortless</span> and <span>powerful</span> <br/> financial management</h1>

        <div className="DayFeatures_card_container">
          <div className="DayFeatures_card">
            <h2>Auto Book Close</h2>
            <h3>Focus on strategic decisions, not manual bookkeeping.</h3>
          </div>
          <div className="DayFeatures_card">
            <h2>Financial Intelligence</h2>
            <h3>Make informed decisions based on deep analysis.</h3>
          </div>
          <div className="DayFeatures_card">
            <h2>Real Time Visibility</h2>
            <h3>Stay ahead with up-to-the-minute visibility.</h3>
          </div>
        </div>

      </div>

    </div>
  )
}

export default DayxFeatures