import React from 'react'
import PI from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./phoneInput.css"
import useGeoLocation from 'react-ipgeolocation';

const PhoneInput = ({onChange, label}) => {

    const ReactPhoneInput = PI.default ? PI.default : PI;

    const location = useGeoLocation();

  return (
    <div className='Input'>
    <label htmlFor="">{label}</label>
        <ReactPhoneInput
            className="form-control"
            country={location?.country?.toLowerCase()}
            onChange={onChange}
            enableSearch={true}
            // disableDropdown={"true"}
        />
    </div>
  )
}

export default PhoneInput