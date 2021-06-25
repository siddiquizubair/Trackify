import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Home from './components/Home';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Home />
  </BrowserRouter>,
  document.getElementById('root')
);