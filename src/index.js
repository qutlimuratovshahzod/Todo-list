import React from 'react';
import ReactDOM from 'react-dom';
import './view/index.css';
import App from './view/App';
import { BrowserRouter } from 'react-router-dom';
import StroreContext from './logic/store';

ReactDOM.render(
<BrowserRouter>
  <StroreContext>
  <App />
  </StroreContext>
</BrowserRouter>,
  document.getElementById('root')
);

