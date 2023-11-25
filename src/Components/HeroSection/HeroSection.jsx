import React from 'react'
import "./heroSection.css"
import Button from '../../ModularComponents/Button/Button'

const HeroSection = () => {
  return (
    <div className='HeroSection'>
        <div className="hero_section_background">
          <img src="/assets/LandingPage/heroBackground.svg" alt="" />
        </div>

        <div className="hero_section_description">
          <h2>AI Powered</h2>
          <h1>Accounting and FP&A Platform</h1>
          <h2 className='light_font_weight'>for your business!</h2>

          <div className="hero_section_action_btns">
            <Button className={"schedule_call"} name={"Schedule a call"}/>
            <Button className={"join_waitlist"} name={"Join the waitlist"}/>
          </div>
        </div>

        <div className="hero_section_advantages">
          <div className="hero_section_advantages_container">

            <div className="advantages_card">
              <h1>90%</h1>
              <p>Faster Financial Month Close</p>
            </div>

            <div className="advantages-divider"></div>

            <div className="advantages_card">
              <h1>28hrs</h1>
              <p>Savings per Week per User</p>
            </div>

            <div className="advantages-divider"></div>

            <div className="advantages_card">
              <h1>10x</h1>
              <p>Increase in Productivity</p>
            </div>

            <div className="advantages-divider"></div>

            <div className="advantages_card">
              <h1>12x</h1>
              <p>Faster Decision Making Time </p>
            </div>

          </div>
          
        </div>

    </div>
  )
}

export default HeroSection