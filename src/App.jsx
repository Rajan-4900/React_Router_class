import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Navbar from './Components/Navbar'
import User from './Pages/User'
import DynamicUser from './Pages/DynamicUser'

const App = () => {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        {/* this "<Route /> Use to add the path to the search link in the browser" */}
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/user' element={<User />} />
        <Route path='/user/:id' element={<DynamicUser />} />

      </Routes>
    </Router>
    </>
  )
}

export default App