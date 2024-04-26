import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate()
  return (

    <div style={{padding: "1vw 15vw"}}>
      <div style={{display: "flex", alignItems: "center", gap: "50vw"}}>
      <h1 style={{color: "red"}}>About Page</h1>
      <button onClick={() => navigate("/")} style={{padding: "1vw", borderRadius: "10px" , cursor: "pointer" , backgroundColor: "green" , border: "none", color: "white"}}>Home</button>
      </div>
      <p style={{width: "40%"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit rerum blanditiis qui! Officia necessitatibus quis animi beatae nihil deleniti id modi voluptate, quas odio harum neque aperiam magnam libero fugiat.</p>
      <h3 style={{color: "green"}}>Library Section :-</h3>
      <ul style={{listStyle: "none"}}>
        <li style={{marginBottom: ".5vw"}}>
          <Link to="/about/1">Book 1</Link>
        </li>
        <li style={{marginBottom: ".5vw"}}>
          <Link to="/about/2">Book 2</Link>
        </li>
        <li style={{marginBottom: ".5vw"}}>
          <Link to="/about/3">Book 3</Link>
        </li>
      </ul>
      <hr />
      <Outlet/>
    </div>
  )
}

export default About
