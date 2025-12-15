import React, {useState} from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import TechnicianList from './pages/TechnicianList'

const App = () => {
  
  const [state, setState] = useState("notification");

  return (
    <div>
      <Navbar state={state} setState={setState}/>
      <Routes>
        <Route path='/' element={<Home state={state}/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/categories' element={<TechnicianList/>} />
      </Routes>
    </div>
  )
}

export default App
