import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import { ThemeProvider } from '@emotion/react'

// const theme = {
//   fontSizes: [
//     12, 14, 16, 24, 32, 48, 64
//   ],
//   colors: {
//     primary: [
//       "#ffffe4",
//       "#ffe0b2",
//       "#f6f6ff"
//     ],
//     secondary: [
//       "#b5ffff",
//       "#81d4fa",
//       "#4ba2c6"
//     ],
//     warning: [
//       "#ffd0b0",
//       "#ff9e80",
//       "#c96f53"
//     ]
//   },
//   buttons: {
//     primary: {
//       color: 'white',
//       bg: 'primary',
//     },
//     outline: {
//       color: 'primary',
//       bg: 'transparent',
//       boxShadow: 'inset 0 0 0 2px'
//     },
//   },
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
