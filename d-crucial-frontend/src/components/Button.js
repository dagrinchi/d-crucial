"use client"

import React from 'react'

const Button = ({ text, disabled = false, ...props }) => {
    return (<button type="button" disabled={disabled} className={`${disabled ? 'bg-slate-300' : 'bg-primary'} text-white text-button rounded h-10 w-[150px] shadow-md mx-4`} {...props}>{text}</button>)
}

export default Button