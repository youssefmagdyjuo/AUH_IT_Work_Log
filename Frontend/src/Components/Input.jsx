import React from 'react'

export default function Input({ placeholder , type = 'text' ,value, onChange,classStyle}) {
    return (
            <input type={type} placeholder={placeholder} value={value} onChange={onChange} className={`input ${classStyle}`} />
    )
}
