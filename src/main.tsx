
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './hide-lovable-badge.css' // Import the CSS to hide the lovable badge
import React from 'react'

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
