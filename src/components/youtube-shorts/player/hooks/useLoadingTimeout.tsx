
import { useEffect, useRef } from 'react';

interface UseLoadingTimeoutProps {
  isLoading: boolean;
  loadError: boolean;
  retryFunction: () => void;
  timeoutMs?: number;
}

/**
 * Hook for handling loading timeouts
 */
export const useLoadingTimeout = ({
  isLoading,
  loadError,
  retryFunction,
  timeoutMs = 8000
}: UseLoadingTimeoutProps) => {
  const timeoutRef = useRef<number | null>(null);
  
  useEffect(() => {
    // Clean up any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    
    // Only set timeout if we're still loading and don't have an error
    if (isLoading && !loadError) {
      timeoutRef.current = window.setTimeout(() => {
        console.log('YouTube video load timeout exceeded, trying alternative method');
        retryFunction();
      }, timeoutMs) as unknown as number;
      
      console.log(`Loading YouTube video with ${timeoutMs}ms timeout`);
    }
    
    // Cleanup
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [isLoading, loadError, retryFunction, timeoutMs]);
  
  return {
    timeoutRef
  };
};
