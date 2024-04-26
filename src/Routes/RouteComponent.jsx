import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import Details from '../Components/Details'
import About from '../Components/About'
import Create from '../Components/Create'

const RouteComponent = () => {
  return (
    <div>
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

export default RouteComponent
