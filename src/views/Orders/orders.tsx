import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { GetData } from 'src/api/api'

const Orders = () => {
  const a = new GetData()
  const data = a.ExtractingData()

  useEffect(() => {
    data.then((response) => {
      console.log(response.data)
    })
  }, [])

  return (
    <div>
      <h1>Orders screen</h1>
      <Link to="/">Visit Home Page</Link>
      <br />
      <Link to="/pagethree">Visit Create Order</Link>
    </div>
  )
}

export default Orders
