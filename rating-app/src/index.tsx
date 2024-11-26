import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const container = document.getElementById('root');
if (!container) {
  throw new Error("Failed to find the root element");
}
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Measuring performance
reportWebVitals();
