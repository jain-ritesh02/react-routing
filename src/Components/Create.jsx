import React from 'react'
import { useNavigate } from 'react-router-dom'

const Create = () => {
  const navigate = useNavigate()

  return (
    <div style={{padding: "1vw 15vw"}}>
      <h1 style={{color: "red", }}>Create Page</h1>
      <p style={{width: "40%"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat id laudantium voluptates eveniet? Possimus nobis laboriosam qui optio porro adipisci!</p>
      <button onClick={() => navigate(-1)} style={{padding: "1vw", borderRadius: "10px" , cursor: "pointer" , backgroundColor: "blue" , border: "none", color: "white", marginRight: "1vw"}}>Home </button>
      <button onClick={() => navigate("../About")} style={{padding: "1vw", borderRadius: "10px" , cursor: "pointer" , backgroundColor: "blue" , border: "none", color: "white"}}>About </button>
    </div>
  )
}

export default Create
