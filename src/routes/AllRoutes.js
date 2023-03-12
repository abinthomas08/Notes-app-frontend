import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Login from '../pages/Login'
import NotesPage from '../pages/NotesPage'
import SignUp from '../pages/SignUp'
import PrivateRoute from './PrivateRoutes'



function AllRoutes() {
  return (

    <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/register' element={<SignUp/>} />
        <Route path='/login' element={<Login/>} />
        <Route path="/notes" element={<PrivateRoute ><NotesPage /></PrivateRoute>}></Route>
        
    </Routes>
    
  )
}

export default AllRoutes