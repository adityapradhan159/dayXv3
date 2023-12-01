import React, { useEffect, useState } from 'react'
import "./dayxHelps.css"
import { motion } from "framer-motion"



const DayxHelps = () => {


    const ttexts = [
        {
            name:"SMBs",
            content:[
                "Automate tasks, save time, control costs.",
                "Access real-time insights for quick decision-making.",
                "Plan efficiently with advanced forecasting."
            ]
        },
        {
            name:"VCs",
            content:[
                "Conduct due diligence and monitor portfolio health real time.",
                "Make investment decisions based on accurate financial data."
            ]
        },
        {
            name:"Accountants",
            content:[
                "Manage multiple client accounts efficiently.",
                "Collaborate securely, stay compliant, and simplify reporting for clients.",
                "Enhance planning capabilities for effective financial management."
            ]
        }
    ]


    const [counter, setCounter] = useState(0);
    const [currentText, setCurrentText] = useState(ttexts[0].name);
    const [pointsArr,setPointsArr] = useState()

    useEffect(() => {
        const intervalId = setInterval(() => {
        setCounter((prevCounter) => (prevCounter + 1) % ttexts.length);
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {

        const elem = document.getElementById('greeting');
        const elem2 = document.getElementById('dayHelps_Points');
    
        if (elem) {
          elem.classList.add('fadeOut');
        //   elem2.classList.add('fadeOut');
          setTimeout(() => {
            // elem.innerHTML = texts[counter];
            setCurrentText(ttexts[counter].name)
            setPointsArr(ttexts[counter])
            // console.log(ttexts[counter],"Wferfewq")
            elem.classList.remove('fadeOut');
            // elem2.classList.remove('fadeOut');
          }, 500);
        }
        
      }, [counter]);
        


    const SBMsinlineStyle = {
        background: 'linear-gradient(181deg, #16A3B5 53.12%, #2ADBC2 116.64%)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    }

    
    const InvestorsinlineStyle = {
        background: 'var(--G4, linear-gradient(180deg, #E12D4D -31.19%, #CE44C8 148.62%))',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    }

    
    const VcsinlineStyle = {
        background: 'linear-gradient(180deg, #FF5E00 0%, #FF9E01 97.92%, rgba(228, 107, 5, 0.00) 100%)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    }






    const texts = ['SMBs', 'Vcs', 'Accountants'];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [replay, setReplay] = useState(true);

  useEffect(() => {


    // const elem = document.querySelector('.dayxHelps_container2');

    const intervalId = setInterval(() => {

      setReplay(!replay);


      setTimeout(() => {
        setReplay(true);
       
        // Change text after a delay
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % ttexts.length);
      }, 300); // Adjust the delay as needed



    }, 3000);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, [replay]);

  const shownText = ttexts[currentTextIndex].name;
  const showTextContent = ttexts[currentTextIndex].content;
  console.log(showTextContent,"Content")
  const letters = Array.from(shownText);

  const container = {
    hidden: {
      opacity: 0,
    },
    visible: (i = 1) => ({
      opacity: 1,
      // transition: { staggerChildren: 0.05, delayChildren: i * 0.1 },
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




  return (
    <div className='DayxHelps'>
        <div className="DayxHelps_container section-container">

            <div className="dayxHelps_container1">
                {/* <h1>You will love us <br className='br1'/> if you are <br className='br2'/><span id='greeting'
                    style={currentText == "SMBs" ? SBMsinlineStyle 
                    : 
                    currentText == "VCs" ? VcsinlineStyle
                    : 
                    InvestorsinlineStyle
                }
                
                
                >{currentText}</span></h1> */}


                <h1>You will love us <br className='br1'/> if you are <br className='br2'/>

                
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


                </h1>
            
            
            
            </div>


            
            <motion.div 
              className="dayxHelps_container2" key={shownText}
              variants={child}
              initial="hidden"
              animate="visible"
            >
              <h2>dayX helps you </h2>
              <div>
                {showTextContent && showTextContent.map((item, index) => (
                  <motion.div
                    key={index}
                    className="dayHelps_Points"
                    variants={child}
                    initial="hidden"
                    animate="visible"
                  >
                    <div className="marker"></div>
                    <h3>{item}</h3>
                  </motion.div>
                ))}
              </div>
              <div className="redirect_Link">
                <h4>Get started</h4>
                <img src="/assets/LandingPage/rightArrow.svg" alt="" />
              </div>
            </motion.div>


            


            {/* {
                shownText == "SMBs" ?
                <div className="dayxHelps_container2">
                <h2>dayX helps you </h2>


                <div>
                {
                    showTextContent && showTextContent.map((item) => (
                        <div className="dayHelps_Points" >
                            <div className="marker"></div>
                            <h3>{item}</h3>
                        </div>
                    ))
                }
                </div>
                

                <div className="redirect_Link">
                    <h4>Get started</h4>
                    <img src="/assets/LandingPage/rightArrow.svg" alt="" />
                </div>
                </div>

                :

                shownText == "VCs" ?
                <div className="dayxHelps_container2">
                <h2>dayX helps you </h2>


                <div>
                {
                    showTextContent && showTextContent.map((item) => (
                        <div className="dayHelps_Points" >
                            <div className="marker"></div>
                            <h3>{item}</h3>
                        </div>
                    ))
                }
                </div>
                

                <div className="redirect_Link">
                    <h4>Get started</h4>
                    <img src="/assets/LandingPage/rightArrow.svg" alt="" />
                </div>
                </div>

                :

                <div className="dayxHelps_container2">
                <h2>dayX helps you </h2>


                <div>
                {
                    showTextContent && showTextContent.map((item) => (
                        <div className="dayHelps_Points" >
                            <div className="marker"></div>
                            <h3>{item}</h3>
                        </div>
                    ))
                }
                </div>
                

                <div className="redirect_Link">
                    <h4>Get started</h4>
                    <img src="/assets/LandingPage/rightArrow.svg" alt="" />
                </div>
                </div>


            } */}

            








        </div>
    </div>
  )
}

export default DayxHelps