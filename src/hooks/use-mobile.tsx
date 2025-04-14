
import { useState, useEffect, useRef, useCallback } from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    // Initial value based on current window width for SSR safety
    if (typeof window === 'undefined') return false;
    
    // Use user agent as a faster initial check to avoid layout thrashing
    const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
    
    // Only check width if UA doesn't suggest mobile
    if (!isMobileUA) {
      return window.innerWidth < MOBILE_BREAKPOINT;
    }
    
    return isMobileUA;
  });
  
  const mqlRef = useRef<MediaQueryList | null>(null);
  
  // Extract media query listener to avoid recreating it on each render
  const handleMediaQueryChange = useCallback((e: MediaQueryListEvent) => {
    setIsMobile(e.matches);
  }, []);

  useEffect(() => {
    // Only create the media query list once and cache the reference
    if (!mqlRef.current && typeof window !== 'undefined') {
      mqlRef.current = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
      
      // Initial check - more performant than querying window.innerWidth
      setIsMobile(mqlRef.current.matches);
    }
    
    const mql = mqlRef.current;
    if (!mql) return;
    
    // Use addEventListener for modern browsers
    mql.addEventListener("change", handleMediaQueryChange);
    
    // Cleanup
    return () => mql.removeEventListener("change", handleMediaQueryChange);
  }, [handleMediaQueryChange]);

  return isMobile;
}
