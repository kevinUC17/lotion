import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { useNavigate, BrowserRouter, Link, Navigate} from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
        
        <App />

    </BrowserRouter>
  </React.StrictMode>
);


//hanzhe.wei@ucalgary.ca
reportWebVitals();
