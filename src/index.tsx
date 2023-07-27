import React from 'react';
import { BrowserRouter as Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { GlobalStyle } from './Style/GlobalStyle';
import App from './App';
import ScrollToTop from './Components/ScrollToTop';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <GlobalStyle />
        <Routes basename={process.env.PUBLIC_URL}>
          <ScrollToTop />
          <App />
        </Routes>
    </React.StrictMode>
);

reportWebVitals();
