
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
import './components/header/styles.css';
import { Toaster } from './components/ui/toaster';
import AppProviders from './components/AppProviders';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <AppProviders>
        <App />
        <Toaster />
      </AppProviders>
    </Router>
  </React.StrictMode>,
);
