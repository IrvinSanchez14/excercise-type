import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import CreateOrders from '../CreateOrders'
import Home from '../Home'
import Orders from '../Orders'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/pagetwo" component={Orders} />
          <Route path="/pagethree" component={CreateOrders} />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
