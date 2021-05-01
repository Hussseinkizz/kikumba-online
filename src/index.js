import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/css/custom.css' // our custom css, off the tail
import './static/fonts/font_styles.css' // our custom fonts
import App from './App';
import { StateProvider } from './hooks/StateProvider';
import reducer, { initialState } from './hooks/StateProvider_Props';


ReactDOM.render(
  <React.StrictMode>
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
