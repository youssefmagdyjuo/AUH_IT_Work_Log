import React from 'react'

export default function Textarea({name, id, value, onChange, placeholder}) {
    return (
        <div className='textarea_container'>
            <textarea name={name} id={id} value={value} onChange={onChange} placeholder={placeholder}></textarea>
        </div>
    )
}
