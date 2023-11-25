import React from 'react'
import "./landingPage.css"
import Navbar from '../../Components/Navbar/Navbar'
import HeroSection from '../../Components/HeroSection/HeroSection'
import ExtraordinaryDayx from '../../Components/ExtraordinaryDayx/ExtraordinaryDayx'
import DayxFeatures from '../../Components/DayxFeatures/DayxFeatures'
import DayxHelps from '../../Components/DayxHelps/DayxHelps'
import OurSupporters from '../../Components/OurSupporters/OurSupporters'
import DayxCta from '../../Components/DayxCta/DayxCta'
import Footer from '../../Components/Footer/Footer'

const LandingPage = () => {
  return (
    <div className='LandingPage'>
      <Navbar/>
      <HeroSection/>
      <ExtraordinaryDayx/>
      <DayxFeatures/>
      <DayxHelps/>
      <OurSupporters/>
      <DayxCta/>
      <Footer/>
    </div>
  )
}

export default LandingPage