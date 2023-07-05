import React from 'react';
import { BrowserRouter as Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GlobalStyle } from './Style/GlobalStyle';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <GlobalStyle />
        <Routes>
          <App />
        </Routes>
    </React.StrictMode>
);

reportWebVitals();
