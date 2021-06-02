import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css'
import Header from './components/NavBar'
import ChartPage from './pages/ChartPage'
import MapPage from './pages/MapPage'

export const App = () => {
  return (
    <Router>
      <Header />
      <Route path='/' component={MapPage} exact />
      <Route path='/charts' component={ChartPage} />
    </Router>
  )
}

export default App
