import React, { useState } from 'react'
import Texttfield from '../../component/Texttfield'
import Button from '../../component/Button'
import Textarea from '../../component/Textarea'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { editUser } from '../../Userslice'

function Edituser() {
const params  = useParams()
const dispatch = useDispatch()
const users = useSelector(store => store.products);
const  existinguser = users.filter(user => user.id === params.id);
const {name, email, textarea} = existinguser[0]
    const navigate = useNavigate();

    const [values, setValues] =useState({
     name: name,
     email: email,
     textarea: textarea
    })

    const Editusers = () => {
     setValues({
       name: '',
       email: '',
       textarea: ""
     })
     dispatch(editUser({
      id: params.id,
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
       placeHolder={{type: "post", placeholder: "Edit your previous texts"}}
       Value={values.textarea}
       onChange={(e) => setValues({...values, textarea: e.target.value})}
       />
     <Button onClick={Editusers}>Edit</Button>
   </div>
 )
}

export default Edituser
