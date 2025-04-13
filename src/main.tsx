
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './App.css'
import './hide-lovable-badge.css' // Import the CSS to hide the lovable badge

// Make sure we have a root element
const rootElement = document.getElementById("root");
if (!rootElement) {
  const newRoot = document.createElement("div");
  newRoot.id = "root";
  document.body.appendChild(newRoot);
}

// Create root and render app with error handling
try {
  createRoot(document.getElementById("root")!).render(<App />);
  console.log("App successfully mounted");
} catch (error) {
  console.error("Failed to mount app:", error);
  // Show error message directly in DOM if rendering fails
  document.getElementById("root")!.innerHTML = `
    <div style="padding: 20px; text-align: center;">
      <h1>Error Loading Application</h1>
      <p>Please try refreshing the page.</p>
      <button onclick="window.location.reload()">Refresh</button>
    </div>
  `;
}
