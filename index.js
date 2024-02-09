import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import Navigation from './components/navbar';
import loginForm from './components/loginForm';
import Home from './components/home';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  React.createElement(Home, {}, null),
  document.getElementById('root')
);

reportWebVitals();
