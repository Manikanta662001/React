import React from 'react'
import { useNavigate } from 'react-router-dom'

function About() {
    const path = window.location.pathname
    console.log(path,"PATH")
  const navigate = useNavigate()

  return (
    <div>About
        <input onClick={()=>navigate(-1)} type='submit'/>

    </div>
  )
}

export default About