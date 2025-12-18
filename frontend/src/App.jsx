import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/home'
import Doctors from './pages/doctors'
import Login from './pages/Login'
import About from './pages/about'
import MyProfile from './pages/MyProfile'
import Contacts from './pages/Contacts'
import MyAppointments from './pages/MyAppointments'
import Appointment from './pages/Appointment'

const App=()=> {
  return (
    <div >
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/doctor' element={<Doctors/>}/>
      <Route path='/doctor/:speciality' element={<Doctors/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/my-profile' element={<MyProfile/>}/>
      <Route path='/contact' element={<Contacts/>}/>
      <Route path='/my-appointments' element={<MyAppointments/>}/>
      <Route path='/appointment/:docId' element={<Appointment/>}/>
    </Routes>
   
    </div>
  )
}

export default App