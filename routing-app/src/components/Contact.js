import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Contact() {
  return (
    <div>
        

        <h1>Contact Us</h1>
        <h2>Hello</h2>
        <h4>Gundlurimanikanta142@gmail.com</h4>
        <NavLink to={'lock'}>Lock</NavLink>
        <br/>
        <br/>
        <Outlet/>
    </div>
  )
}

export default Contact