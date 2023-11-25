import React from 'react'
import "./landingPage.css"
import Navbar from '../../Components/Navbar/Navbar'
import HeroSection from '../../Components/HeroSection/HeroSection'
import ExtraordinaryDayx from '../../Components/ExtraordinaryDayx/ExtraordinaryDayx'

const LandingPage = () => {
  return (
    <div className='LandingPage'>
      <Navbar/>
      <HeroSection/>
      <ExtraordinaryDayx/>
    </div>
  )
}

export default LandingPage