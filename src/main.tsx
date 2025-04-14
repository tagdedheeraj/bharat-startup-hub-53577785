
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Function to remove any dynamically added "Edit with Lovable" elements
const removeLovableElements = () => {
  // Remove any dynamically added popup elements
  const removeElements = () => {
    // Target common patterns for third-party popups
    const selectors = [
      '[class*="lovable-"]',
      '[id*="lovable-"]',
      '[data-lovable]',
      '.gpt-engineer-container',
      '.gpt-engineer-button',
      '[class*="gpt-engineer"]',
      '[id*="gpt-engineer"]',
      'div[style*="position: fixed"][style*="bottom: 0"][style*="right: 0"]:not([class])'
    ];
    
    selectors.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(el => {
        if (el && el.parentNode) {
          el.parentNode.removeChild(el);
        }
      });
    });
  };
  
  // Run immediately
  removeElements();
  
  // Run periodically to catch dynamically added elements
  setInterval(removeElements, 500);
  
  // Run after DOM changes
  const observer = new MutationObserver(removeElements);
  observer.observe(document.body, { 
    childList: true, 
    subtree: true 
  });
};

// Create root and render app
createRoot(document.getElementById("root")!).render(<App />);

// Run cleanup after the app has loaded
window.addEventListener('load', removeLovableElements);
