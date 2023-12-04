import React from 'react'
import "./integrateTools.css"
import { useDispatch } from 'react-redux'
import { setShowRegisterPopUp } from '../../../Redux-Toolkit/PopUpSlice'

const IntegrateTools = () => {

    const dispatch = useDispatch()

    const handlePopUp = () => {
        dispatch(setShowRegisterPopUp({
            show:true,
            showAllInputs:false
        }))
    }



  return (
    <div className='IntegrateTools'>
        <div className="card_container1">
            <h3>Integrate and Stay Synced</h3>

            <div className="AccountingPlanning_points">

                <div className="points_div">
                    <div className="marker"></div>
                    <p>Seamlessly integrate dayX with your systems and consolidate your finance stack.</p>
                </div>

            </div>
        </div>

        

        <div className="card_container2">

            <div className="redirect_Link" onClick={handlePopUp}>
                <h4>Integrate tools easily</h4>
                <img src="/assets/LandingPage/rightArrow.svg" alt="" />
            </div>

            <div className="AccountingPlanning-img">
            <object
                  type='image/svg+xml'
                  data='assets/LandingPage/Integrations.svg'>
                </object>
                {/* <img src="/assets/LandingPage/integrateTools.svg" alt="" /> */}
            </div>

        </div>
    </div>
  )
}

export default IntegrateTools