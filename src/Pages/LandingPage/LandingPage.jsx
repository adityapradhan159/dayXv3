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
    <div className="LandingPage">
      <Navbar />
      <HeroSection />
      <ExtraordinaryDayx />
      <DayxFeatures />
      <DayxHelps />

      <div className="component_container">
        <div className="background_gradient">
          <img src="/assets/LandingPage/radial_background.svg" alt="" />
        </div>
        <OurSupporters />
        <DayxCta />
        <Footer />
      </div>
    </div>
  );
}

export default LandingPage