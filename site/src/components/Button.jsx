import React from 'react'

function Button({ title, style, onClick, type }) {
   return (
      <button
         type={type}
         className={style}
         onClick={onClick}
      >
         {title}
      </button>
   )
}

export default Button