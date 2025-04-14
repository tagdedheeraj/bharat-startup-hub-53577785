import { useState, useEffect, useRef } from 'react';

export const useYouTubePlayer = (videoId: string, onClose: () => void) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const [playerReady, setPlayerReady] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playerInitAttempted = useRef(false);
  const youtubePlayer = useRef<YTPlayer | null>(null);
  
  // Function to toggle mute state
  const toggleMute = () => {
    try {
      if (iframeRef.current && iframeRef.current.contentWindow) {
        // Send postMessage to the YouTube player
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify({
            event: 'command',
            func: isMuted ? 'unMute' : 'mute'
          }), 
          '*'
        );
        setIsMuted(!isMuted);
      }
    } catch (error) {
      console.error("Error toggling mute:", error);
    }
  };

  // Function to retry loading the video
  const retryLoading = () => {
    setIsLoading(true);
    setLoadError(false);
    playerInitAttempted.current = false;
    
    // Recreate the iframe with a new URL to force reload
    if (iframeRef.current) {
      const iframe = iframeRef.current;
      const currentSrc = iframe.src;
      iframe.src = '';
      
      // Short delay to ensure DOM updates
      setTimeout(() => {
        iframe.src = currentSrc.includes('?') 
          ? `${currentSrc.split('?')[0]}?autoplay=1&enablejsapi=1&playsinline=1&origin=${encodeURIComponent(window.location.origin)}&controls=1&fs=1&rel=0`
          : `${currentSrc}?autoplay=1&enablejsapi=1&playsinline=1&origin=${encodeURIComponent(window.location.origin)}&controls=1&fs=1&rel=0`;
      }, 100);
    }
  };
  
  useEffect(() => {
    // Reset states when videoId changes
    setIsLoading(true);
    setLoadError(false);
    setPlayerReady(false);
    playerInitAttempted.current = false;
    
    // Load the YouTube IFrame API script if not already loaded
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
      
      console.log('YouTube IFrame API script loaded');
    }
    
    // Setup the YouTube player once the API is ready
    const setupYouTubePlayer = () => {
      if (!iframeRef.current || playerInitAttempted.current) return;
      
      playerInitAttempted.current = true;
      console.log('Setting up YouTube player for video:', videoId);
      
      try {
        // Try to use the YouTube IFrame API directly
        if (window.YT && window.YT.Player) {
          youtubePlayer.current = new window.YT.Player(iframeRef.current, {
            events: {
              'onReady': (event: any) => {
                console.log('YouTube player ready');
                setIsLoading(false);
                setPlayerReady(true);
                event.target.playVideo();
              },
              'onStateChange': (event: any) => {
                if (event.data === window.YT?.PlayerState.PLAYING) {
                  console.log('Video is now playing');
                  setIsLoading(false);
                } else if (event.data === window.YT?.PlayerState.ENDED) {
                  console.log('Video ended');
                  onClose();
                } else if (event.data === window.YT?.PlayerState.PAUSED) {
                  console.log('Video paused');
                }
              },
              'onError': (event: any) => {
                console.error('YouTube player error:', event);
                setLoadError(true);
                setIsLoading(false);
              }
            }
          });
        }
      } catch (e) {
        console.error('Error initializing YouTube player:', e);
        // Fall back to regular iframe if API initialization fails
        setIsLoading(false);
      }
    };
    
    // Add event listener for YouTube API loaded
    const onYouTubeIframeAPIReady = () => {
      console.log('YouTube IFrame API ready');
      setupYouTubePlayer();
    };
    
    // If API is already loaded, set up player immediately
    if (window.YT && window.YT.Player) {
      console.log('YouTube API already loaded');
      setupYouTubePlayer();
    } else {
      // Otherwise wait for API to load
      window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
    }
    
    // Add event listener for message from the iframe
    const handleMessage = (event: MessageEvent) => {
      // Check if message is from YouTube
      if (event.origin.includes('youtube')) {
        try {
          // Try to parse the message data
          const data = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;
          
          if (data.event === 'onError' || data.info === 'onError') {
            console.error('YouTube player error:', data);
            setLoadError(true);
            setIsLoading(false);
          }
          
          if (data.event === 'onReady' || data.info === 'onReady') {
            setIsLoading(false);
            setPlayerReady(true);
            console.log('YouTube video is ready to play');
          }
          
          // Handle play state change
          if (data.event === 'onStateChange' || data.info === 'onStateChange') {
            const playerState = data.info === 'onStateChange' ? data.data : data.data;
            
            // YouTube player states: -1 (unstarted), 0 (ended), 1 (playing), 2 (paused), 3 (buffering), 5 (video cued)
            if (playerState === 1) {
              console.log("Video is now playing");
              setIsLoading(false);
            } else if (playerState === 0) {
              console.log("Video ended");
              onClose();
            }
          }
        } catch (e) {
          // Not a JSON message or other error, just log
          console.log("Non-JSON message or error from YouTube:", e);
        }
      }
    };
    
    window.addEventListener('message', handleMessage);
    
    // Set a timeout to consider it failed if taking too long
    const timeoutId = setTimeout(() => {
      if (isLoading && !playerReady && !loadError) {
        console.log('YouTube video load timeout exceeded, trying alternative method');
        retryLoading();
      }
    }, 8000);
    
    // Debug log that we're starting to load the video
    console.log(`Loading YouTube video: ${videoId} - ${new Date().toISOString()}`);
    
    return () => {
      window.removeEventListener('message', handleMessage);
      clearTimeout(timeoutId);
      
      // Clean up any YouTube player instance
      if (youtubePlayer.current && youtubePlayer.current.destroy) {
        try {
          youtubePlayer.current.destroy();
        } catch (e) {
          console.error('Error destroying YouTube player:', e);
        }
      }
    };
  }, [videoId, isLoading, playerReady, onClose]);

  return {
    iframeRef,
    isLoading,
    loadError,
    isMuted,
    toggleMute,
    retryLoading
  };
};
