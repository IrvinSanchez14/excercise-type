import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from '../Home'
import Orders from '../Orders'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/pagetwo" component={Orders} />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
