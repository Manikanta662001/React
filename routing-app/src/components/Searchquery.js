import React from 'react'
import { useLocation } from 'react-router-dom'

function Searchquery() {
    const query = new URLSearchParams(useLocation().search)
    console.log(query,"666")
    console.log(query.get('name'),query.get('age'))
  return (
    <div>Searchquery</div>
  )
}

export default Searchquery