import React from 'react'
import {HashRouter as Router} from 'react-router-dom'
import {renderRoutes} from 'react-router-config'
import routes from './routes'
import './App.scss'

function App() {
  return (
    <div className="App">
      <Router>
        {renderRoutes(routes)}
      </Router>
    </div>
  )
}

export default App
