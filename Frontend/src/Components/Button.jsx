import React from 'react'

export default function Button({ classStyle , onClick ,name, disabled , type='button'}) {
    return (
        <button disabled={disabled} onClick={onClick} className={`btn ${classStyle}`} type={type}>{name}</button>
    )
}
