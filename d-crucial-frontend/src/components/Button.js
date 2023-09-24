"use client"

import React from 'react'

const Button = ({ text, disabled = false, className, ...props }) => {
    return (<button type="button" disabled={disabled} className={`${disabled ? 'bg-slate-300' : 'bg-primary'} text-white text-button rounded h-10 shadow-md ${className}`} {...props}><span className="p-2">{text}</span></button>)
}

export default Button