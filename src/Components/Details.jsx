import React from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'

const Details = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const { pathname } =  useLocation()
  return (
    <div>
        <h3>Details :-</h3>
        <Link style={{color: "Black", textDecoration: "none"}} to={`${pathname}/profile`}>
        Profile
        </Link>
      <p>Book Id: <b>{id}</b></p>
      <button onClick={()=> navigate(-1)} style={{padding: "1vw 2vw", backgroundColor: "red", color: "white", border: "none", borderRadius: "10px"}}>Go Back</button>
    </div>
  )
}

export default Details
