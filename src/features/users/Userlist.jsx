import React from 'react'
import Button from '../../component/Button'
import { Link, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from '../../Userslice';


function Userlist() {

  const dispatch = useDispatch()

  const users = useSelector(store => store.products);

  const handleremoveruser = (id) => {
         dispatch(deleteUser({id}))
  }

   console.log(users)

const renderCard = () => users.map((user) => (
   <div className='crud-data' key={user.id}>
    <div className='data'>
        <h3>{user.name}</h3>
        <span>{user.email}</span>
        <p>{user.textarea}</p>
    </div>
    <div className="delete">
      <NavLink className='link' to={`edit-user/${user.id}`}>
      <span>&#9998;</span>

      </NavLink>

  
      <span
      onClick={() => handleremoveruser(user.id)}
      >&#128465;</span>

    </div>
   </div>
))

  return (
    <main>
      <Link to='Newpost'><Button>New Post</Button></Link>
 <div className='userlist'>
      {users.length ?   renderCard():
      <div className='paras'>     <p className='para'>No user</p>
      </div>
     }
    </div>
    </main>
   
  )
}

export default Userlist
