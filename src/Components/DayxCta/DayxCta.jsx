import React from 'react'
import "./dayxCta.css"
import Button from '../../ModularComponents/Button/Button'
import { useDispatch } from 'react-redux'
import { setShowRegisterPopUp } from '../../Redux-Toolkit/PopUpSlice'

const DayxCta = () => {

  // const dispatch = useDispatch()

  // const handlePopup = () => {
  //   dispatch(setShowRegisterPopUp(true))
  // }


  const handleCalendlyPopup = () => {
    // window.open = 'https://calendly.com/adityapradhan-qw0/30min';
    window.open('https://calendly.com/dayxdemo/30min',"myWindow", 'width=600,height=600');
  }


  return (
    <div className='DayxCta'>

        {/* <div className="dayCta_banner">
            <img src="/assets/LandingPage/heroBackground.svg" alt="" />
        </div> */}

        <div className="DayxCta_container">
            <h1>A quick chat with us <br/> is just the <span>start!</span></h1>
            <div className="cta-btns">
                {/* <Button className={"schedule_call"} name={"Know dayX better"} onClick={handlePopup}/> */}
                <Button className={"schedule_call"} name={"Schedule a call"} onClick={handleCalendlyPopup}/>
                {/* <Button className={"join_waitlist"} name={"Join the waitlist"}/> */}
            </div>
            <div className='connectLink'>
              <a 
                target='_blank'
                href='mailto:contact@dayx.ai'
              >
                <h3>or write to us:
                  {" "}
                  <span>contact@dayx.ai</span>
                </h3>
              </a>
              <img src="/assets/LandingPage/rightArrowWhite.svg" alt="" />
            </div>
            
        </div>

    </div>
  )
}

export default DayxCta