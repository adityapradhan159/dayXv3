import React from 'react'
import "./dayxCta.css"
import Button from '../../ModularComponents/Button/Button'

const DayxCta = () => {
  return (
    <div className='DayxCta'>

        <div className="dayCta_banner">
            <img src="/assets/LandingPage/heroBackground.svg" alt="" />
        </div>

        <div className="DayxCta_container">
            <h1>A quick chat with us is just the <span>start!</span></h1>
            <div className="cta-btns">
                <Button className={"schedule_call"} name={"Schedule a call"}/>
                <Button className={"join_waitlist"} name={"Join the waitlist"}/>
            </div>
            <h3>or write to us: <span>contact@dayx.ai</span> </h3>
        </div>

    </div>
  )
}

export default DayxCta