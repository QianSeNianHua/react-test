import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {renderRoutes} from 'react-router-config'
import routes from './routes'
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        {renderRoutes(routes)}
      </Router>
    </div>
  );
}

export default App;
