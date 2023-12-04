import React from 'react'
import "./realtimeForecast.css"
import { useDispatch } from 'react-redux'
import { setShowRegisterPopUp } from '../../../Redux-Toolkit/PopUpSlice'

const RealtimeForecast = () => {


    const dispatch = useDispatch()

    const handlePopUp = () => {
        dispatch(setShowRegisterPopUp({
            show:true,
            showAllInputs:false
        }))
    }


  return (
    <div className='RealtimeForecast'>

        <div className="card_container1">
            <h3>Real-Time Forecasts</h3>

            <div className="AccountingPlanning_points">

                <div className="points_div">
                    <div className="marker"></div>
                    <p>Get instant insights for quick decisions.</p>
                </div>

                <div className="points_div">
                    <div className="marker"></div>
                    <p>Stay ahead with dynamic forecasts.</p>
                </div>

            </div>
        </div>

        

        <div className="card_container2">

            <div className="redirect_Link" onClick={handlePopUp}>
                <h4>Experience dynamic forecast</h4>
                <img src="/assets/LandingPage/rightArrow.svg" alt="" />
            </div>

            <div className="AccountingPlanning-img">
                <object
                  type='image/svg+xml'
                  data='assets/LandingPage/Cash Flow.svg'>
                </object>
                {/* <img src="/assets/LandingPage/realtimeForecast.svg" alt="" /> */}
            </div>

        </div>


        
    </div>
  )
}

export default RealtimeForecast