import React from 'react'

function Textarea({label, value, placeHolder, onChange}) {
  return (
    <div className='textfield'>
      <label>{label}</label>
      <textarea
        {...placeHolder}
        onChange={onChange}
        value={value}
        cols={30}
        rows={15}
      />
    </div>
  )
}

export default Textarea
