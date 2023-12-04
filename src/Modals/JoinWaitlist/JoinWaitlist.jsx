import React from 'react'
import "./joinWaitlist.css"
import { Modal } from 'react-bootstrap'
import Input from '../../ModularComponents/Inputs/Input'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { logEvent,getAnalytics } from 'firebase/analytics'
import { setShowRegisterPopUp } from '../../Redux-Toolkit/PopUpSlice'
import { useDispatch, useSelector } from 'react-redux'
import PhoneInput from '../../ModularComponents/PhoneInput/PhoneInput'

const JoinWaitlist = () => {

  const { showRegisterPopUp } = useSelector((state) => state.showPopUp)

    const analytics = getAnalytics()
    const dispatch = useDispatch()
  
    const [userDetails,setUserDetails] = useState({
      name:"",
      email:"",
      orgName:"",
      role:""
    })

    const [countrycode, setCountryCode] = useState(undefined);
    const [contactNo, setContactNo] = useState(undefined)
  
    const [err,setErr] = useState("")
  
  
    const handleChange = e => {
        setErr("")
      setUserDetails( prevValues => {
        return { ...prevValues,[e.target.name]: e.target.value}
      })
    }

    const handlePhoneNo = (value, data) => {
        setErr("")
        setContactNo(value.slice(data?.dialCode?.length));
        setCountryCode(data?.dialCode);
    }
  
  
    const submitRegisterForm = () => {
  
      if(!userDetails.name && !userDetails.email  && !userDetails.contactNo && !userDetails.orgName && !userDetails.role ){
        setErr("Please fill the form above")
      }
      else if(!userDetails.name){
        setErr("Please enter your name")
      }
      else if(!userDetails.email){
        setErr("Please enter your email id")
      }
      else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userDetails.email)){
        setErr("Please enter correct email")
      }
      else if(!contactNo){
        setErr("Please enter your phone number")
      }
      else if(contactNo.length <= 5){
        setErr("Please enter correct phone number")
      }
      else if(!userDetails.orgName){
        setErr("Please enter your company name")
      }
      else if(!userDetails.role){
        setErr("Please enter your role")
      }
      else{
  
        // ===================Registration Api Integration=====================//
        axios.post("https://dev.dayx.ai/api/authorization/register-beta-user",JSON.stringify({...userDetails,contactNo}),
          {
            headers: {
                "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          console.log("Register Response",res)
          // modalHandler(false)
          logEvent(analytics,"Filled the registration form",JSON.stringify({...userDetails,contactNo}))
          setUserDetails({
            name:"",
            email:"",
            orgName:"",
            role:""
          })
          setContactNo("")
          dispatch(setShowRegisterPopUp({
            show:false,
            showAllInputs:false
          }))
        })
        .catch((err) => {
          console.log(err)
          // alert(err?.response?.data?.status_text)
          setErr(err?.response?.data?.status_text)
        })
  
  
        // ================Privyr Integration===============//
  
        let config = {
          method: 'post',
          maxBodyLength: Infinity,
          url: 'https://www.privyr.com/integrations/api/v1/incoming-webhook',
          headers: { 
  
            // 'X-TOKEN': 'ACRXGO9m', 
            'X-TOKEN': 'CKiUoYF6', 
            'Content-Type': 'application/json'
          },
          data : JSON.stringify({
            name:userDetails.name,
            email:userDetails.email,
            phone:contactNo,
            lead_source: "dayX",
            other_fields: {
              Company_Name: userDetails.orgName,
              Role: userDetails.role
            }
          })
        };
        
        axios.request(config)
        .then((response) => {
          console.log(response)
          console.log(JSON.stringify(response.data));
          logEvent(analytics,"Data Register successful in Privyr",JSON.stringify(userDetails))
        //   dispatch(setShowRegisterPopUp({
        //     show:true,
        //     showAllInputs:false
        // }))
        })
        .catch((error) => {
          console.log(error);
        });
  
      }
      
      
    }
  
  
    



  return (
    <div className='JoinWaitlist'>
    <Modal
      className='JoinWaitlist'
      show={true}
      backdrop='static'
      keyboard={false}
      aria-labelledby='contained-modal-title-vcenter'
      centered>
        <Modal.Body className="p-0">
            <div className="JoinWaitlist-container">

                <div className="closePopup">
                    <img src="/assets/popupDismiss2.svg" alt=""  onClick={()=>dispatch(setShowRegisterPopUp({
                      show:false,
                      showAllInputs:false
                    }))}/>
                </div>

                <div className="popUp_web_Background">
                    <img src="/assets/LandingPage/dayxWebImage.svg" alt="" />
                </div>

                <div className="popUp_Background">
                  <img src="/assets/popupBackground.svg" alt="" />
                </div>

                <div className="joinWaitList_Form_container">
                    <div className="logo">
                        <img src="/assets/logo.svg" alt="" />
                    </div>
                    <h3>You are one step close to level up your finance operation</h3>


                    <div className="joinWaitList_Form">
                      <Input label={"Name"} name={'name'} onChange={handleChange}/>
                      <PhoneInput onChange={handlePhoneNo} label={'Phone'}/>
                      <Input label={"Email"} name={'email'} onChange={handleChange}/>
                      {
                        showRegisterPopUp.showAllInputs == true && 
                        <Input label={"Role/Job Title"} name={'role'} onChange={handleChange}/>
                      }
                     
                      <Input label={"Company"} name={'orgName'} onChange={handleChange}/>
                      {
                        err &&
                        <p>*{err}</p>
                      }
                     

                      <div className="form-btn-container">
                        <button onClick={() => submitRegisterForm()}>Submit</button>
                      </div>
                    
                    </div>



                </div>



                {/* <div className="joinWaitlist-descrip">
                    <h1>Join the waitlist!</h1>
                    <p>You are one step close to level up your finance operation.</p>
                    <div className='popupDesign'>
                        <img className='dayXLogo' src="/assets/popupDesign.png" alt="" />
                        <img className='dayXLogo2' src="/assets/dayX.svg" alt="" />
                        <p>AI Powered Accounting and Forecasting Platform </p>
                    </div>
                </div>


                <div className="joinWaitlist-form">

                    <Input label={"Name"} name={'name'} onChange={handleChange}/>
                    <PhoneInput onChange={handlePhoneNo} label={'Phone'}/>
                    <Input label={"Email"} name={'email'} onChange={handleChange}/>
                    <Input label={"Role/Job Title"} name={'role'} onChange={handleChange}/>
                    <Input label={"Company"} name={'orgName'} onChange={handleChange}/>
                    <p>{err}</p>

                    <button onClick={() => submitRegisterForm()}>Submit</button>

                </div> */}
            </div>
        </Modal.Body>
    </Modal>
    
    </div>
  )
}

export default JoinWaitlist