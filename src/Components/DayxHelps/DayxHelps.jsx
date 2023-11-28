import React, { useEffect, useState } from 'react'
import "./dayxHelps.css"



// const FADE_INTERVAL_MS = 1750
// const WORD_CHANGE_INTERVAL_MS = FADE_INTERVAL_MS * 2
// const WORDS_TO_ANIMATE = ['SMBs','Investors','VCs']

const DayxHelps = () => {

//     const [fadeProp, setFadeProp] = useState({ fade: 'fade-in' })
//   const [wordOrder, setWordOrder] = useState(0)

//   useEffect(() => {
//     const fadeTimeout = setInterval(() => {
//       fadeProp.fade === 'fade-in' ? setFadeProp({ fade: 'fade-out' }) : setFadeProp({ fade: 'fade-in' })
//     }, FADE_INTERVAL_MS)

//     return () => clearInterval(fadeTimeout)
//   }, [fadeProp])

//   useEffect(() => {
//     const wordTimeout = setInterval(() => {
//       setWordOrder((prevWordOrder) => (prevWordOrder + 1) % WORDS_TO_ANIMATE.length)
//     }, WORD_CHANGE_INTERVAL_MS)

//     return () => clearInterval(wordTimeout)
//   }, [])


    const texts = ["SMBs", "Investors", "VCs"];

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

   

  return (
    <div className='DayxHelps'>
        <div className="DayxHelps_container section-container">

            <div className="dayxHelps_container1">
                <h1>You will love us <br className='br1'/> if you are <br className='br2'/><span id='greeting'
                    style={currentText == "SMBs" ? SBMsinlineStyle 
                    : 
                    currentText == "VCs" ? VcsinlineStyle
                    : 
                    InvestorsinlineStyle
                }
                
                
                >{currentText}</span></h1>
            </div>

            <div className="dayxHelps_container2">
                <h2>dayX helps you </h2>


                <div id='dayHelps_Points'>
                {
                    pointsArr && pointsArr?.content.map((item) => (
                        <div className="dayHelps_Points" >
                            <div className="marker"></div>
                            <h3>{item}</h3>
                        </div>
                    ))
                }
                </div>
                

                

                {/* <div className="dayHelps_Points">
                    <div className="marker"></div>
                    <h3>Access real-time insights for quick decision-making.</h3>
                </div>

                <div className="dayHelps_Points">
                    <div className="marker"></div>
                    <h3>Plan efficiently with advanced forecasting.</h3>
                </div> */}

                <div className="redirect_Link">
                    <h4>Get started</h4>
                    <img src="/assets/LandingPage/rightArrow.svg" alt="" />
                </div>
            </div>

        </div>
    </div>
  )
}

export default DayxHelps