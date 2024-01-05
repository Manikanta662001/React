import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [data,setdata] = useState({
    name:'',
    pass:''
  })
  const navigate =useNavigate()
  const handlechange=(e)=>{
    setdata({...data,[e.target.name]:e.target.value})
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    if (data.name==='admin' && data.pass==='admin'){
      navigate('/dashboard',{state:data})
    }
    else{
      alert('not a vald user')
    }

  }
  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input type='text' value={data.name} name='name' onChange={handlechange}/>
          <input type='password' value={data.pass} name='pass' onChange={handlechange}/>
          <button>Submit</button>
        </form>
    </div>
  )
}
