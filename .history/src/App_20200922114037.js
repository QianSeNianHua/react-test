import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Welcome, Welcome2, Clock } from './components/Welcome'
import List from './components/List'
import Hook from './components/Hook'

const name = 'XXX'
let num = 1
const element = (<p index={num}>Hello, {name}</p>)

function getGreeting () {
  return <h1 className="123">Hello, Stranger.</h1>
}

let element2 = React.createElement(
  'p',
  { className: 'element2' },
  'element2'
)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {element}
        {getGreeting()}
        {element2}
        <Welcome name="Sara" />
        <Welcome2 name="Strt" />
        <Clock />
        <List arr={[1, 2, 3, 4]} />
        <Hook />
      </header>
    </div>
  );
}

export default App;
