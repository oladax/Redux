import React, { useState } from 'react'
import Texttfield from '../../component/Texttfield'
import Button from '../../component/Button'
import Textarea from '../../component/Textarea'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux'
import { addUser } from '../../Userslice'

function Newpost() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

     const [values, setValues] =useState({
      name: "",
      email: "",
      textarea: ""
     })

     const handlepost = () => {
      setValues({
        name: '',
        email: '',
        textarea: ''
      })
      dispatch(addUser({
        id: uuidv4(),
        name: values.name,
        email: values.email,
        textarea: values.textarea
      }))
      navigate('/')
    }
  return (
    <div className='newpost'>
      <Texttfield
      label="Name*"
      inputProps={{type: "text", placeholder: "oladax"}}
      Value={values.name}
      onChange={(e) => setValues({...values, name: e.target.value})}
      />
      <br />
      <Texttfield
      label="Email*"
      inputProps={{type: "email", placeholder: "oladax@gmail.com"}}
      Value={values.email}
      onChange={(e) => setValues({...values, email: e.target.value})}

      />
        <br />
        <Textarea
        label="Post*"
        placeHolder={{type: "post", placeholder: "what's on your mind?"}}
        Value={values.email}
        onChange={(e) => setValues({...values, textarea: e.target.value})}
        />
      <Button onClick={handlepost}>Post</Button>
    </div>
  )
}

export default Newpost
