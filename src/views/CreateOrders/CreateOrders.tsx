import React from 'react'
import { Link } from 'react-router-dom'

const CreateOrders = () => {
  return (
    <div>
      <h1>Create Orders screen</h1>
      <Link to="/pagetwo">Visit Order</Link>
      <br />
      <Link to="/">Visit Home Page</Link>
    </div>
  )
}

export default CreateOrders
