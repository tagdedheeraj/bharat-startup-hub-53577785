
import { X, Volume2, VolumeX } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

interface VideoPlayerProps {
  videoId: string;
  onClose: () => void;
}

const VideoPlayer = ({ videoId, onClose }: VideoPlayerProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const [playerReady, setPlayerReady] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const playerInitAttempted = useRef(false);
  
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
  
  useEffect(() => {
    // Reset states when videoId changes
    setIsLoading(true);
    setLoadError(false);
    setPlayerReady(false);
    playerInitAttempted.current = false;
    
    // Add event listener for message from the iframe
    const handleMessage = (event: MessageEvent) => {
      // Check if message is from YouTube (either youtube.com or youtube-nocookie.com)
      if (event.origin.includes('youtube')) {
        try {
          // Try to parse the message data
          const data = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;
          console.log("YouTube message received:", data);
          
          if (data.event === 'onError' || data.info === 'onError') {
            console.error('YouTube player error:', data);
            setLoadError(true);
            setIsLoading(false);
          }
          
          if (data.event === 'onReady' || data.info === 'onReady') {
            setIsLoading(false);
            setPlayerReady(true);
            console.log('YouTube video is ready to play');
            
            // Try to start the video playback explicitly
            if (iframeRef.current && iframeRef.current.contentWindow) {
              try {
                // Send play command
                iframeRef.current.contentWindow.postMessage(
                  JSON.stringify({
                    event: 'command',
                    func: 'playVideo' 
                  }), 
                  '*'
                );
              } catch (e) {
                console.error("Failed to send play command:", e);
              }
            }
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
              // Auto-close when video ends
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
      if (isLoading && !playerReady) {
        console.log('YouTube video load timeout exceeded, trying alternative method');
        // Try alternative method - reload the iframe with different parameters
        if (iframeRef.current && !playerInitAttempted.current) {
          playerInitAttempted.current = true;
          const iframe = iframeRef.current;
          const originalSrc = iframe.src;
          iframe.src = originalSrc + "&forcereload=1";
        }
      }
    }, 8000);
    
    // Debug log that we're starting to load the video
    console.log(`Loading YouTube video: ${videoId} - ${new Date().toISOString()}`);
    
    return () => {
      window.removeEventListener('message', handleMessage);
      clearTimeout(timeoutId);
    };
  }, [videoId, isLoading, playerReady, onClose]);

  // Create a more resilient YouTube URL with enhanced parameters
  // Use embed-nocookie for better privacy and specify exact parameters needed
  const youtubeUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&showinfo=0&modestbranding=1&enablejsapi=1&playsinline=1&origin=${encodeURIComponent(window.location.origin)}&controls=1&mute=0&iv_load_policy=3&fs=1`;
  
  // When the iframe loads, attempt to send a postMessage to initialize the player
  const handleIframeLoad = () => {
    console.log("YouTube iframe DOM loaded");
    
    // Small delay to ensure YouTube API has time to initialize
    setTimeout(() => {
      try {
        if (iframeRef.current && iframeRef.current.contentWindow) {
          // Try to send a ready check message
          iframeRef.current.contentWindow.postMessage('{"event":"listening"}', '*');
          console.log("Sent listening message to YouTube iframe");
          
          // Also try the standard YouTube iframe API approach
          iframeRef.current.contentWindow.postMessage(
            JSON.stringify({
              event: 'command',
              func: 'playVideo' 
            }), 
            '*'
          );
        }
      } catch (error) {
        console.error("Error communicating with YouTube iframe:", error);
      }
    }, 1000);
  };
  
  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[1000] flex items-center justify-center p-4 animate-fadeIn">
      <div 
        ref={containerRef}
        className="relative w-full max-w-3xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl border border-white/10 animate-scaleIn z-[1001]"
      >
        {loadError ? (
          <div className="w-full h-full flex flex-col items-center justify-center text-white p-6">
            <p className="text-xl font-semibold mb-4">Unable to load video</p>
            <p className="text-center mb-6">The YouTube video (ID: {videoId}) could not be loaded. Please check your internet connection and try again.</p>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <div className="w-full h-full relative">
            {/* Video container - use higher z-index to ensure visibility */}
            <div className="absolute inset-0 z-[1004]">
              <iframe
                ref={iframeRef}
                src={youtubeUrl}
                title="YouTube video player"
                className="w-full h-full absolute inset-0 border-0 bg-black"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                allowFullScreen
                onLoad={handleIframeLoad}
                onError={() => {
                  setLoadError(true);
                  console.error('Error loading YouTube iframe');
                }}
                style={{
                  visibility: isLoading ? 'hidden' : 'visible'
                }}
              ></iframe>
            </div>
            
            {/* Video overlay with gradient to make controls more visible - lower z-index than iframe */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none z-[1003]"></div>
            
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black z-[1006]">
                <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
                <p className="absolute mt-24 text-white/70">Loading video...</p>
              </div>
            )}
          </div>
        )}
        
        {/* Improved close button with pulsing effect - highest z-index */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-black/50 hover:bg-white/20 rounded-full p-2 text-white transition-all transform hover:scale-110 z-[1007] group"
          aria-label="Close video"
        >
          <X className="w-6 h-6 group-hover:text-red-400 transition-colors" />
          <span className="absolute inset-0 rounded-full bg-white/5 animate-ping opacity-75"></span>
        </button>
        
        {/* Mute/Unmute button */}
        <button
          onClick={toggleMute}
          className="absolute bottom-4 right-4 bg-black/50 hover:bg-white/20 rounded-full p-2 text-white transition-all transform hover:scale-110 z-[1007] group"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? (
            <VolumeX className="w-6 h-6 group-hover:text-red-400 transition-colors" />
          ) : (
            <Volume2 className="w-6 h-6 group-hover:text-green-400 transition-colors" />
          )}
        </button>
        
        {/* Video title indicator - also high z-index */}
        <div className="absolute top-4 left-4 z-[1007] bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-lg">
          <p className="text-white text-sm font-medium max-w-[200px] truncate">
            {videoId === "pq22sadiXqQ" ? "Startup Funding Guide" : 
             videoId === "lM3Tswmx8zM" ? "Business Strategy Secrets" : 
             videoId === "xkLNpYiwak8" ? "Business Model Innovation" : 
             videoId === "k6t0Fivw0EQ" ? "Entrepreneurship Success Factors" : 
             "Startup Masterclass"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
