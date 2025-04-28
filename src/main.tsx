
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './components/header/styles.css';
import { Toaster } from './components/ui/toaster';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
