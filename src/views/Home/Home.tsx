import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>Home screen</h1>
      <Link to="/pagetwo">Visit Order</Link>
      <br />
      <Link to="/pagethree">Visit Create Orders</Link>
    </div>
  )
}

export default Home
