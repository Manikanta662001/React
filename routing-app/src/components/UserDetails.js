import React from 'react'
import { useParams } from 'react-router-dom'

export default function UserDetails() {
    const {id,name} =useParams()
    // const id =useParams().id
  return (
    <div>UserDetails {id}-{name}</div>
  )
}
