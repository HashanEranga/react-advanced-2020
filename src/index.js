import React from 'react';

// using reactDom all the components can be render on the index.html
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// using this method the App.js will be rendered into the index.html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
