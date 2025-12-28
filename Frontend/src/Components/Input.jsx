import React from 'react'

export default function Input({ placeholder, type = 'text', value, onChange, classStyle, children }) {

    return (
        <div className="input_container">
            <input type={type} placeholder={placeholder} value={value} onChange={onChange} className={`input ${classStyle}`} />
            {/* <i class="fa-solid fa-eye"></i> */}
            {children}
        </div>
    )
}
