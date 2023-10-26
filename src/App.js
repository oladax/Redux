import React from 'react'
import Userlist from './features/users/Userlist'
import { Route, Routes } from 'react-router-dom'
import Newpost from './features/users/Newpost'
import Edituser from './features/users/Edituser'

function App() {
  return (
    <div>
      <h2>Crud in redux</h2>
      <Routes>
        <Route path='/'  element={<Userlist/>}></Route>
        <Route path='/Newpost'  element={<Newpost/>}></Route>
        <Route path='/edit-user/:id'  element={<Edituser/>}></Route>

      </Routes>
    </div>
  )
}

export default App
