import React from 'react'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Create from './Components/Create'
import { Route, Routes } from 'react-router-dom'
import Details from './Components/Details'

const App = () => {
  return (
    <div>
    <Navbar/>
    
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />``
        <Route path="/about" element={<About />}>
        <Route path="/about/:id" element={<Details />} />
        </Route>
    </Routes>
    </div>
  )
}

export default App
