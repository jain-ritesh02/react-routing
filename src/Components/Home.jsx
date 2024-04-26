import React from 'react'
import Navbar from './Navbar'
import { Navigate, useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  return (
    <div style={{padding: "1vw 15vw"}}>
      <h1 style={{color: "red", }}>Home Page</h1>
      <p style={{width: "40%"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, repellat. Voluptate illum nobis suscipit earum consectetur perferendis corrupti.</p>
      <p style={{width: "40%"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, repellat. Voluptate illum nobis suscipit earum consectetur perferendis corrupti.</p>
      <p style={{width: "40%"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, repellat. Voluptate illum nobis suscipit earum consectetur perferendis corrupti.</p>
      <button onClick={()=> navigate('./create')} style={{padding: "1vw", backgroundColor: "blue", color: "white", border: "none", borderRadius: "10px", cursor: "pointer"}}>Create</button>
    </div>
  )
}

export default Home
