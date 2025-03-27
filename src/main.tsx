
import { createRoot } from 'react-dom/client'
import React from 'react' // Add explicit React import
import App from './App.tsx'
import './index.css'
import './hide-lovable-badge.css' // Import the CSS to hide the lovable badge

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
