import React from 'react'
import "./button.css"

const Button = ({name,className}) => {
  return (
    <div className='Button'>
        <button className={className}>{name}</button>
    </div>
  )
}

export default Button