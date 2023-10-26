import React from 'react'

function Button( {onClick, children}) {
  return (
  <div className="buttons">
     <button onClick={onClick}>
      {children}
   </button>
  </div>
  )
}

export default Button
