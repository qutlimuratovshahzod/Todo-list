import React from 'react';
import ReactDOM from 'react-dom';
import './view/index.css';
import App from './view/App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
<BrowserRouter>
  <App />
</BrowserRouter>,
  document.getElementById('root')
);

