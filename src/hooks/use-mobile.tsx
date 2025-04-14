
import { useState, useEffect, useRef } from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined)
  const mqlRef = useRef<MediaQueryList | null>(null);

  useEffect(() => {
    // Only create the media query list once
    if (!mqlRef.current) {
      mqlRef.current = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    }
    
    const mql = mqlRef.current;
    
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

  return !!isMobile;
}
