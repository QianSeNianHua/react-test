import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import RoutesConfig from './router/index';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router routes={RoutesConfig} />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
