import React from 'react'
import {useNavigate,useLocation} from 'react-router-dom'
export default function Dashboard() {
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location,location.pathname,"LOC")
    console.log(location.state.name,location.state.pass)
  return (
    <div>
        <h1>Welcome to Dashboard</h1>
        {location.pathname}
        <button onClick={()=>navigate('/')}>Navigate to content page</button>
        
    </div>
  )
}
