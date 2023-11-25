import React from 'react'
import "./extraordinaryDayx.css"
import AccountingPlanning from './AccountingPlanning/AccountingPlanning'
import RealtimeForecast from './RealtimeForecast/RealtimeForecast'
import Gateway from './Gateway/Gateway'
import DayxChatbot from './DayxChatbot/DayxChatbot'
import IntegrateTools from './IntegrateTools/IntegrateTools'

const ExtraordinaryDayx = () => {
  return (
    <section className='ExtraordinaryDayx'>
        <div className="ExtraordinaryDayx_container section-container">
            <h1>Get the <span>extraordinary</span> done with dayX</h1>


            <div className="ExtraordinaryDayx_container_column1">
                <div className="ExtraordinaryDayx_cards accounting">
                  <AccountingPlanning/>
                </div>
                <div className="ExtraordinaryDayx_cards realtime">
                  <RealtimeForecast/>
                </div>
                <div className="ExtraordinaryDayx_cards gateway">
                  <Gateway/>
                </div>
            </div>
            
            
            <div className="ExtraordinaryDayx_container_column2">
                <div className="ExtraordinaryDayx_cards chatbot">
                  <DayxChatbot/>
                </div>
                <div className="ExtraordinaryDayx_cards integrateTools">
                  <IntegrateTools/>
                </div>
            </div>

           

        </div>
    </section>
  )
}

export default ExtraordinaryDayx


// Integrated accounting and planning is 36%
// RealTime is 27%
// Gateway is 24%

// Chatbot is 47%
// integrate tools is 54%
