import React from 'react'
import "./dayxChatbot.css"

const DayxChatbot = () => {
  return (
    <div className='DayxChatbot'>
        <div className="card_container1">
            <h3>GPT-Like Smart Bot Powered by LLM</h3>

            <div className="AccountingPlanning_points">

                <div className="points_div">
                    <div className="marker"></div>
                    <p>Chat with an intelligent assistant.</p>
                </div>

                <div className="points_div">
                    <div className="marker"></div>
                    <p>Instant insights, plain language.</p>
                </div>

            </div>
        </div>

        

        <div className="card_container2">

            <div className="redirect_Link">
                <h4>Get your assistant</h4>
                <img src="/assets/LandingPage/rightArrow.svg" alt="" />
            </div>

            <div className="AccountingPlanning-img">
                <object
                  type='image/svg+xml'
                  data='assets/LandingPage/Assistant.svg'>
                </object>
                {/* <img src="/assets/LandingPage/chatbot.svg" alt="" /> */}
            </div>

        </div>
    </div>
  )
}

export default DayxChatbot