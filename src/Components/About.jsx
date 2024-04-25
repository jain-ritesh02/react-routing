import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const About = () => {
  return (
    <div style={{padding: "1vw"}}>
      <h1>Library Page</h1>
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
