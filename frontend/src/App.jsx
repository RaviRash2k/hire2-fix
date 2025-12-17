import React, {useState} from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import TechnicianList from './pages/TechnicianList'
import Profile from './pages/Profile'
import ChatPopup from './components/ChatPopup'

const App = () => {
  
  const [state, setState] = useState("notification");

  return (
    <>
      <Navbar state={state} setState={setState}/>

      <Routes>
        <Route path='/' element={<Home state={state}/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/categories' element={<TechnicianList/>} />
        <Route path="/technician/:id" element={<Profile />} />
      </Routes>

      <ChatPopup />
    </>
  )
}

export default App
