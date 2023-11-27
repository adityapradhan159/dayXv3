import React from 'react'
import "./input.css"

const Input = ({label, name, onChange}) => {
  return (
    <div className='Input'>
        <label htmlFor="">{label}</label>
        <input name={name} type="text" onChange={onChange} />
    </div>
  )
}

export default Input