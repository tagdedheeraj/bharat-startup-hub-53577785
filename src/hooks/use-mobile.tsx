
import { useState, useEffect, useRef } from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    // Initial value based on current window width for SSR safety
    if (typeof window === 'undefined') return false;
    return window.innerWidth < MOBILE_BREAKPOINT;
  });
  
  const mqlRef = useRef<MediaQueryList | null>(null);

  useEffect(() => {
    // Only create the media query list once
    if (!mqlRef.current && typeof window !== 'undefined') {
      mqlRef.current = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    }
    
    const mql = mqlRef.current;
    if (!mql) return;
    
    // Initial check - more performant than querying window.innerWidth
    setIsMobile(mql.matches);
    
    // Use a more efficient change handler
    const onChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };
    
    // Use addEventListener for modern browsers
    mql.addEventListener("change", onChange);
    
    // Cleanup
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return isMobile;
}
