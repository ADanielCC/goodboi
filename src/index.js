import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './components/Main/Main'; // Updated import statement
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main/>
  </React.StrictMode>
);

reportWebVitals();
