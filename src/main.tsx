
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Remove any script-related code that might be adding the "Edit with Lovable" option
createRoot(document.getElementById("root")!).render(<App />);
