import React from 'react'
import { useNavigate } from 'react-router-dom'

const Create = () => {

  const navigate = useNavigate()
  const submitHandler = () => {
    navigate("/About") 
  }
  
  return (
    <div style={{padding: "2vw" }}>

      <button onClick={submitHandler} style={{padding: "1vw 1.5vw", borderRadius: "10px" , cursor: "pointer" , backgroundColor: "green" , border: "none", color: "white"}}>Submit</button>
    </div>
  )
}

export default Create
