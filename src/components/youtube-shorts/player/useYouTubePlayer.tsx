
import { useState, useEffect, useRef } from 'react';

/**
 * Hook for managing YouTube player functionality
 */
export const useYouTubePlayer = (videoId: string, onClose: () => void) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playerInitAttempted = useRef(false);
  const youtubePlayer = useRef<YTPlayer | null>(null);
  const playerReadyTimeoutRef = useRef<number | null>(null);
  
  // Function to toggle mute state
  const toggleMute = () => {
    try {
      if (iframeRef.current && iframeRef.current.contentWindow) {
        // Command to be sent to the YouTube iframe
        const command = {
          event: 'command',
          func: isMuted ? 'unMute' : 'mute'
        };
        
        // Send command via postMessage
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify(command), 
          '*'
        );
        
        // Update local state
        setIsMuted(!isMuted);
      }
    } catch (error) {
      console.error("Error toggling mute:", error);
    }
  };

  // Function to retry loading the video
  const retryLoading = () => {
    console.log("Retrying to load video:", videoId);
    setIsLoading(true);
    setLoadError(false);
    playerInitAttempted.current = false;
    
    // Recreate the iframe with a new URL 
    if (iframeRef.current) {
      const iframe = iframeRef.current;
      const currentSrc = iframe.src;
      
      // Clear src to force reload
      iframe.src = '';
      
      // Short delay to ensure DOM updates
      setTimeout(() => {
        // Add a cache-busting parameter to avoid browser caching
        const timestamp = new Date().getTime();
        const baseUrl = currentSrc.split('?')[0];
        iframe.src = `${baseUrl}?autoplay=1&enablejsapi=1&playsinline=1&origin=${encodeURIComponent(window.location.origin)}&controls=1&fs=1&rel=0&t=${timestamp}`;
      }, 100);
    }
  };
  
  // Setup YouTube API and player
  useEffect(() => {
    // Reset states when videoId changes
    setIsLoading(true);
    setLoadError(false);
    playerInitAttempted.current = false;
    
    // Clean up any existing timeout
    if (playerReadyTimeoutRef.current) {
      clearTimeout(playerReadyTimeoutRef.current);
      playerReadyTimeoutRef.current = null;
    }
    
    // Function to load YouTube API
    const loadYouTubeAPI = () => {
      if (window.YT) {
        console.log("YouTube API already loaded");
        setupPlayer();
        return;
      }
      
      console.log("Loading YouTube IFrame API script");
      
      // Create script element
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      
      // Add callback
      window.onYouTubeIframeAPIReady = () => {
        console.log("YouTube API ready");
        setupPlayer();
      };
      
      // Insert script into DOM
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    };
    
    // Setup player once API is ready
    const setupPlayer = () => {
      if (!iframeRef.current || playerInitAttempted.current) return;
      
      playerInitAttempted.current = true;
      console.log("Setting up YouTube player for video:", videoId);
      
      try {
        // Create player using YouTube API
        if (window.YT && window.YT.Player) {
          youtubePlayer.current = new window.YT.Player(iframeRef.current, {
            events: {
              'onReady': (event) => {
                console.log("YouTube player ready");
                setIsLoading(false);
                event.target.playVideo();
              },
              'onStateChange': (event) => {
                // Handle player state changes
                switch(event.data) {
                  case window.YT?.PlayerState.PLAYING:
                    console.log("Video is playing");
                    setIsLoading(false);
                    break;
                  case window.YT?.PlayerState.ENDED:
                    console.log("Video ended");
                    onClose();
                    break;
                  case window.YT?.PlayerState.PAUSED:
                    console.log("Video paused");
                    break;
                  case window.YT?.PlayerState.BUFFERING:
                    console.log("Video buffering");
                    break;
                  case window.YT?.PlayerState.CUED:
                    console.log("Video cued");
                    break;
                }
              },
              'onError': (event) => {
                console.error("YouTube player error:", event);
                setLoadError(true);
                setIsLoading(false);
              }
            }
          });
        }
      } catch (e) {
        console.error('Error initializing YouTube player:', e);
        setIsLoading(false);
        setLoadError(true);
      }
    };
    
    // Start the process
    loadYouTubeAPI();
    
    // Set up message listener for communication from iframe
    const handleMessage = (event: MessageEvent) => {
      // Only process messages from YouTube
      if (event.origin.includes('youtube.com')) {
        try {
          // Parse message data
          const data = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;
          
          // Handle errors
          if (data.event === 'onError' || data.info === 'onError') {
            console.error('YouTube player error from postMessage:', data);
            setLoadError(true);
            setIsLoading(false);
          }
          
          // Handle ready state
          if (data.event === 'onReady' || data.info === 'onReady') {
            console.log('YouTube player ready from postMessage');
            setIsLoading(false);
          }
          
          // Handle state changes
          if (data.event === 'onStateChange' || data.info === 'onStateChange') {
            const playerState = data.info === 'onStateChange' ? data.data : data.data;
            
            if (playerState === 1) { // Playing
              console.log("Video playing from postMessage");
              setIsLoading(false);
            } else if (playerState === 0) { // Ended
              console.log("Video ended from postMessage");
              onClose();
            }
          }
        } catch (e) {
          // Not a JSON message, ignore
          console.log("Received non-JSON message from YouTube");
        }
      }
    };
    
    window.addEventListener('message', handleMessage);
    
    // Set timeout for loading failure
    playerReadyTimeoutRef.current = window.setTimeout(() => {
      if (isLoading && !loadError) {
        console.log('YouTube video load timeout exceeded, trying alternative method');
        retryLoading();
      }
    }, 8000) as unknown as number;
    
    console.log(`Loading YouTube video: ${videoId} - ${new Date().toISOString()}`);
    
    // Cleanup
    return () => {
      window.removeEventListener('message', handleMessage);
      
      if (playerReadyTimeoutRef.current) {
        clearTimeout(playerReadyTimeoutRef.current);
        playerReadyTimeoutRef.current = null;
      }
      
      // Clean up YouTube player
      if (youtubePlayer.current && youtubePlayer.current.destroy) {
        try {
          youtubePlayer.current.destroy();
          youtubePlayer.current = null;
        } catch (e) {
          console.error('Error destroying YouTube player:', e);
        }
      }
    };
  }, [videoId, onClose]);

  return {
    iframeRef,
    isLoading,
    loadError,
    isMuted,
    toggleMute,
    retryLoading
  };
};
