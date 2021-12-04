import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// including bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import 'bootstrap/dist/js/bootstrap.bundle'

import { BrowserRouter } from "react-router-dom"

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

