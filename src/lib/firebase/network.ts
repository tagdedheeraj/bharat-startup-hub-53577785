
// Add comprehensive network status detection
let isOnline = navigator.onLine;

if (typeof window !== 'undefined') {
  window.addEventListener('online', () => {
    console.log('App is now online');
    isOnline = true;
    
    // Dispatch a custom event that components can listen for
    window.dispatchEvent(new CustomEvent('app-online'));
  });
  
  window.addEventListener('offline', () => {
    console.log('App is now offline');
    isOnline = false;
    
    // Dispatch a custom event that components can listen for
    window.dispatchEvent(new CustomEvent('app-offline'));
  });
}

export const getNetworkStatus = () => isOnline;
