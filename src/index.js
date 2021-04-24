import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/css/custom.css' // our custom css, off the tail
import './static/fonts/font_styles.css' // our custom fonts
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
