import React from 'react'

function Input({ type, name, handleChange, placeholder, style, autoFocus }) {
   return (
      <input
         type={type}
         placeholder={placeholder}
         name={name}
         onChange={(e) => handleChange(e, name)}
         className={style}
         required
         autoComplete='off'
         autoFocus={autoFocus}
      />
   )
}

export default Input