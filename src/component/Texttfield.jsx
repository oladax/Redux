import React from 'react'

function Texttfield({label, inputProps, onChange, Value}) {
  return (
       <div className='textfield'>
      <label>{label}</label>
      <input type="text" 
        {...inputProps}
        onChange={onChange}
        value={Value}
      />

    </div>
  )
}

export default Texttfield
