"use client"
import React from 'react'

const InputComp = ({
    type,
    label,
    onChange
}) => {
    return (
        <input
            type={type}
            placeholder={label}
            name={label}
            className='border border-blue-500 p-2 rounded-full w-1/2'
            onChange={onChange}
        />)
}

export default InputComp