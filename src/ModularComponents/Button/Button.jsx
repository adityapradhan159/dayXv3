import React from 'react'
import "./button.css"

const Button = ({name,className,onClick}) => {
  return (
    <div className='Button'>
        <button className={className} onClick={onClick}>{name}</button>
    </div>
  )
}

export default Button