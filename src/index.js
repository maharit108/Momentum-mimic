import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'

import './styles/index.css';
import App from './App';

const appMomentum = (
    <HashRouter>
      <App />
    </HashRouter>
)

ReactDOM.render(appMomentum, document.getElementById('root'))
