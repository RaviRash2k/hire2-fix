import React, {useState} from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'

const App = () => {
  
  const [state, setState] = useState("notification");

  return (
    <div>
      <Navbar state={state} setState={setState}/>
      <Routes>
        <Route path='/' element={<Home state={state}/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </div>
  )
}

export default App
