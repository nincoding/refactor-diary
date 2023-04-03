import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './styles/GlobalStyle';
import { TAG_ID } from './constants/stringValues';

const root = ReactDOM.createRoot(document.getElementById(TAG_ID.ROOT));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
