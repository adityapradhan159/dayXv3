import React, { useEffect, useRef, useState } from 'react'
import "./dayxHelps.css"
import { motion } from "framer-motion"
import { useDispatch } from 'react-redux'
import { setShowRegisterPopUp } from '../../Redux-Toolkit/PopUpSlice'



const DayxHelps = () => {


    const ttexts = [
        {
            name:"SMB",
            content:[
                "Automate tasks, save time, control costs.",
                "Access real-time insights for quick decision-making.",
                "Plan efficiently with advanced forecasting."
            ]
        },
        {
            name:"VC",
            content:[
                "Conduct due diligence and monitor portfolio health real time.",
                "Make investment decisions based on accurate financial data."
            ]
        },
        {
            name:"Accountant",
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
        display: 'flex',
        overflow:'hidden'
    }

    
    const InvestorsinlineStyle = {
        background: 'var(--G4, linear-gradient(180deg, #E12D4D -31.19%, #CE44C8 148.62%))',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        display: 'flex',
        overflow:'hidden'
    }

    
    const VcsinlineStyle = {
        background: 'linear-gradient(180deg, #FF5E00 0%, #FF9E01 97.92%, rgba(228, 107, 5, 0.00) 100%)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        display: 'flex',
        overflow:'hidden'
    }



  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [replay, setReplay] = useState(true);

  // const [isHovered, setIsHovered] = useState(false);
  // const [isMouseDown, setIsMouseDown] = useState(false);
  // const intervalIdRef = useRef(null);


  // const handleMouseEnter = () => {
  //   setIsHovered(true);
  //   clearInterval(intervalIdRef.current); // Pause the interval
  //   console.log("Mouse Enter")
  // };

  // const handleMouseLeave = () => {
  //   setIsHovered(false);
  //   console.log("Mouse Leave")
  //   if (!isMouseDown) {
  //     startInterval();
  //   }
  // };

  // const handleMouseDown = () => {
  //   setIsMouseDown(true);
  //   clearInterval(intervalIdRef.current); // Pause the interval
  // };

  // const handleMouseUp = () => {
  //   setIsMouseDown(false);
  //   if (!isHovered) {
  //     startInterval();
  //   }
  // };


  // const startInterval = () => {
  //   intervalIdRef.current = setInterval(() => {
  //     setReplay(!replay);
  //     setTimeout(() => {
  //       setReplay(true);
  //       setCurrentTextIndex((prevIndex) => (prevIndex + 1) % ttexts.length);
  //     }, 300);
  //   }, 4000);
  // };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setReplay(!replay);
      setTimeout(() => {
        setReplay(true);
        // Change text after a delay
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % ttexts.length);
      }, 300); // Adjust the delay as needed

    }, 4000);
    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, [replay]);

  // useEffect(() => {
  //   startInterval();
  //   return () => clearInterval(intervalIdRef.current);
  // }, []);

  // useEffect(() => {
  //   // Clear the interval when hovering over dayxHelps_container2
  //   if (isHovered || isMouseDown) {
  //     clearInterval(intervalIdRef.current);
  //   }
  // }, [isHovered,isMouseDown]);





  const shownText = ttexts[currentTextIndex].name;
  const showTextContent = ttexts[currentTextIndex].content;
  // console.log(showTextContent,"Content")
  const letters = Array.from(shownText);

  const container = {
    hidden: {
      opacity: 0,
    },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { type: 'spring', staggerChildren: 0.05, delayChildren: i * 0.1 },
    }),
  };


  const parentDiv = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 60,
      transition: {
        // type: 'spring',
        damping: 15,
        stiffness: 200,
      },
    },
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

    const handlePopUp = () => {
        dispatch(setShowRegisterPopUp({
          show:true,
          showAllInputs:false
        }))
    }




  return (
    <div className='DayxHelps'>
        <div className="DayxHelps_container section-container">

            <div className="dayxHelps_container1">
                <h1>You will love us <br className='br1'/> if you are
                {" "}
                {
                 
                  shownText == "SMB" ? "an"
                  :
                  shownText == "VC" ? "a"
                  :
                  "an"
                }
                {" "}
                <br className='br2'/>

                
                <span style={{display:"inline-block"}}>
                <motion.span
                    // style={{ display: 'flex', overflow: 'hidden' }}
                    style={shownText == "SMB" ? SBMsinlineStyle 
                    : 
                    shownText == "VC" ? VcsinlineStyle
                    : 
                    InvestorsinlineStyle
                  }
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
              // onMouseEnter={handleMouseEnter}
              // onMouseLeave={handleMouseLeave}
              // onMouseDown={handleMouseDown}
              // onMouseUp={handleMouseUp}
              variants={parentDiv}
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
              <div className="redirect_Link" onClick={handlePopUp}>
                <h4>Get started</h4>
                <img src="/assets/LandingPage/rightArrow.svg" alt="" />
              </div>
            </motion.div>

        </div>
    </div>
  )
}

export default DayxHelps