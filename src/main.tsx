
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './hide-lovable-badge.css' // Import the CSS to hide the lovable badge
import '@/lib/firebase' // Initialize Firebase

createRoot(document.getElementById("root")!).render(<App />);
