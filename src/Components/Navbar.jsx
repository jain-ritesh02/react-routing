import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
   <nav style={{display: "flex", alignItems: "center",justifyContent: "center" , gap: "1vw"}}>
    <NavLink style={(e) => e.isActive === true ? {color: "green", } : {color: "black"}} to="/">Home</NavLink>
    <NavLink style={(e) => e.isActive === true ? {color: "green"} : {color: "black"}} to="/create">Create</NavLink>
    <NavLink style={(e) => e.isActive === true ? {color: "green"} : {color: "black"}} to="/about">About</NavLink>
   </nav>
    </div>
  )
}

export default Navbar
