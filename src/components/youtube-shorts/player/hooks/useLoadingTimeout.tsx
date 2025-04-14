
import { useEffect, useRef } from 'react';

/**
 * Hook to handle loading timeout and retry functionality
 */
export const useLoadingTimeout = ({
  isLoading,
  playerReady,
  loadError,
  retryLoading,
  timeout = 8000
}: {
  isLoading: boolean;
  playerReady: boolean;
  loadError: boolean;
  retryLoading: () => void;
  timeout?: number;
}) => {
  const timeoutIdRef = useRef<number | null>(null);

  useEffect(() => {
    // Set a timeout to consider it failed if taking too long
    timeoutIdRef.current = window.setTimeout(() => {
      if (isLoading && !playerReady && !loadError) {
        console.log('YouTube video load timeout exceeded, trying alternative method');
        retryLoading();
      }
    }, timeout);
    
    return () => {
      if (timeoutIdRef.current !== null) {
        clearTimeout(timeoutIdRef.current);
        timeoutIdRef.current = null;
      }
    };
  }, [isLoading, playerReady, loadError, retryLoading, timeout]);
};
