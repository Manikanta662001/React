import React from 'react'
import {NavLink} from 'react-router-dom'
function Header() {
  return (
    <div>
        <nav className='navbar bg-dark justify-content-center'>
        <li className='nav-item'>
              <NavLink to={'/refresh'}>Refresh</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to={'/sidebar'} >Sidebar</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to={'/dashboard'}>Dashboard</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to={'/about'}>About</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to={'/contact'}>Contact</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to={'/login'}>Login</NavLink>
            </li>
            
            <li className='nav-item'>
              <NavLink to={'/logout'}>Logout</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to={'/profile'}>Profile</NavLink>
            </li>
        </nav>
    </div>
  )
}

export default Header