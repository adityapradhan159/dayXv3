import React, { useEffect, useRef, useState } from 'react'
import "./heroSection.css"
import Button from '../../ModularComponents/Button/Button'
import Marquee from 'react-fast-marquee'
import { motion } from "framer-motion"
import { useDispatch } from 'react-redux'
import { setShowRegisterPopUp } from '../../Redux-Toolkit/PopUpSlice'
import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';



gsap.registerPlugin(ScrollTrigger);


const HeroSection = () => {



  // const handleCalendlyPopup = () => {
  //   // window.open = 'https://calendly.com/adityapradhan-qw0/30min';
  //   window.open('https://calendly.com/adityapradhan-qw0/30min',"myWindow", 'width=600,height=600');
  // }


  const texts = [
    // 'Supercharge your finance operations', 
    // 'Manage your team effortlessly',
    'Streamline financial planning.',
    'Make decisions, not calculations.',
    'Get instant insights for quick decisions.',
    'Stay ahead with dynamic forecasts.',
    'Chat with your intelligent finance assistant.',
    'Seamlessly consolidate your finance stack.'
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [replay, setReplay] = useState(true);

  useEffect(() => {


    // const elem = document.querySelector('.dayxHelps_container2');

    const intervalId = setInterval(() => {

      setReplay(!replay);


      setTimeout(() => {
        setReplay(true);
       
        // Change text after a delay
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }, 500); // Adjust the delay as needed



    }, 3000);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, [replay]);

  const shownText = texts[currentTextIndex];

  const letters = Array.from(shownText);

  const container = {
    hidden: {
      opacity: 0,
    },
    visible: (i = 1) => ({
      opacity: 1,
      // transition: { staggerChildren: 0.05, delayChildren: i * 0.1 }, Don't delete this.....
      // transition:{
      //   ease: "linear"
      // }
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {

        // type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y:10,
      transition: {
        // type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
  };


  const dispatch = useDispatch()

  const handlePopup = () => {
    dispatch(setShowRegisterPopUp({
      show:true,
      showAllInputs:true
    }))
  }




  const [animationPlayed, setAnimationPlayed] = useState(false);
  const animationRef = useRef(null)

  // useEffect(() => {
  //   // Check if the animation has already been played
  //   if (!sessionStorage.getItem('animationPlayed')) {
  //     // Set the animationPlayed state to true
  //     setAnimationPlayed(true);

  //     // Set a session storage item to indicate that the animation has been played
  //     sessionStorage.setItem('animationPlayed', 'true');
  //   }
  // }, []);

  
  // useEffect(() => {
  //   // Check if the animation has already been played
  //   const isAnimationPlayed = sessionStorage.getItem('animationPlayed');

  //   if (!isAnimationPlayed) {
  //     // Set a session storage item to indicate that the animation has been played
  //     sessionStorage.setItem('animationPlayed', 'true');
  //     // Set the animationPlayed state to true after the initial render
  //     setAnimationPlayed(true);
  //   }
  // }, []);


  const heroRef = useRef(null)
  const divRef = useRef(null)
  const containerRef = useRef(null)


  useEffect(() => {

    gsap.to(animationRef.current,{
      top:'0%',
      duration:2.5,
      delay:.5
    })


    const fadeAnimationRef = [heroRef] 

    fadeAnimationRef.forEach((fadeAnimation) => {
      gsap.to(fadeAnimation.current,{
        opacity:1,
        duration:3,
        delay:.8
      })
    })

    

    gsap.to(divRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        scroller:"body",
        start: "40% 30%",
        // pin: true,
        end:"bottom 20%",
        // markers: true,
        scrub: true
      },
      bottom:"50",
      opacity:.1,
      scale:0
      // scale:0.3,
      // width:"10%",
      // height:"30%"
    });
    
  }, [])
  

  


  return (
    <div className='HeroSection' ref={containerRef}>

        <div className="hero_section_widgets" ref={divRef}>
          <img className='profitability_img' src="/assets/LandingPage/HeroElements/profitability.svg" alt="" />
          <img className='revenue_img' src="/assets/LandingPage/HeroElements/revenue.png" alt="" />
          <img className='totalAssets_img' src="/assets/LandingPage/HeroElements/total assets.svg" alt="" />
          <img className='cashflow_img' src="/assets/LandingPage/HeroElements/Cash Flow.svg" alt="" />
        </div>


        <div className="resp_hero_section_widgets">

          <Marquee autoFill={true}>
            <img className='profitability_img' src="/assets/LandingPage/HeroElements/respProfitability.svg" alt="" />
            <img className='revenue_img' src="/assets/LandingPage/HeroElements/respRevenue.png" alt="" />
            <img className='totalAssets_img' src="/assets/LandingPage/HeroElements/respTotalAssets.svg" alt="" />
            <img className='cashflow_img' src="/assets/LandingPage/HeroElements/respCashflow.svg" alt="" />
          </Marquee>
          
        </div>



        <div ref={animationRef} className="hero_section_background">
          <img src="/assets/LandingPage/heroBackground.svg" alt="" />
        </div>

        <div className="hero_section_description"  ref={heroRef}>
          <h2>AI Powered</h2>
          <h1>Accounting and FP&A Platform</h1>
          {/* <h2 className='light_font_weight'>for your business!</h2> */}
          <h2 className='light_font_weight'>

            <span style={{display:"inline-block"}}>
                <motion.span
                    style={{ display: 'flex', overflow: 'hidden' }}
                    variants={container}
                    initial="hidden"
                    animate={replay ? 'visible' : 'hidden'}
                >
                    {letters}
                    {/* {letters.map((letter, index) => (
                    <motion.span key={index} variants={child}>
                        {letter === ' ' ? '\u00A0' : letter}
                    </motion.span>
                    ))} */}
                </motion.span>
            </span>
          </h2>

          <div className="hero_section_action_btns">
            {/* <Button className={"schedule_call"} name={"Schedule a call"} onClick={handleCalendlyPopup}/> */}
            <Button className={"schedule_call"} name={"Know dayX better"} onClick={handlePopup}/>
            {/* <Button className={"join_waitlist"} name={"Join the waitlist"}/> */}
          </div>
        </div>

        <div className="hero_section_advantages">
          <div className="hero_section_advantages_container">

            <div className="advantages_card">
              <h1>90%</h1>
              <p>Faster Financial <br/> Month Close</p>
            </div>

            <div className="advantages-divider"></div>

            <div className="advantages_card">
              <h1>28hrs</h1>
              <p>Savings per Week<br/> per User</p>
            </div>

            <div className="advantages-divider divider"></div>

            <div className="advantages_card">
              <h1>10x</h1>
              <p>Increase in<br/> Productivity</p>
            </div>

            <div className="advantages-divider"></div>

            <div className="advantages_card">
              <h1>12x</h1>
              <p>Faster Decision<br/> Making Time </p>
            </div>

          </div>
          
        </div>

    </div>
  )
}

export default HeroSection