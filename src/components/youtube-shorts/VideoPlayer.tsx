
import { X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

interface VideoPlayerProps {
  videoId: string;
  onClose: () => void;
}

const VideoPlayer = ({ videoId, onClose }: VideoPlayerProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const [playerReady, setPlayerReady] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Reset states when videoId changes
    setIsLoading(true);
    setLoadError(false);
    setPlayerReady(false);
    
    // Add event listener for message from the iframe
    const handleMessage = (event: MessageEvent) => {
      // Check if message is from YouTube
      if (event.origin.includes('youtube.com')) {
        try {
          // Try to parse the message data
          const data = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;
          console.log("YouTube message received:", data);
          
          if (data.event === 'onError') {
            console.error('YouTube player error:', data);
            setLoadError(true);
          }
          if (data.event === 'onReady' || data.info === 'onReady') {
            setIsLoading(false);
            setPlayerReady(true);
            console.log('YouTube video is ready to play');
          }
        } catch (e) {
          // Not a JSON message, ignore
          console.log("Non-JSON message from YouTube:", event.data);
        }
      }
    };
    
    window.addEventListener('message', handleMessage);
    
    // Set a timeout to consider it failed if taking too long
    const timeoutId = setTimeout(() => {
      if (isLoading && !playerReady) {
        console.log('YouTube video load timeout exceeded');
        // Don't set error yet, just log it
      }
    }, 10000);
    
    // Debug log that we're starting to load the video
    console.log(`Loading YouTube video: ${videoId}`);
    
    return () => {
      window.removeEventListener('message', handleMessage);
      clearTimeout(timeoutId);
    };
  }, [videoId, isLoading, playerReady]);

  // Create a more resilient YouTube URL with enhanced parameters
  // Use embed-nocookie for better privacy and specify exact parameters needed
  const youtubeUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&showinfo=0&modestbranding=1&enablejsapi=1&playsinline=1&origin=${encodeURIComponent(window.location.origin)}&controls=1`;
  
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
        }
      } catch (error) {
        console.error("Error communicating with YouTube iframe:", error);
      }
    }, 500);
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
            {/* Video container with proper z-index management */}
            <div className="absolute inset-0 z-[1002] bg-transparent">
              <iframe
                ref={iframeRef}
                src={youtubeUrl}
                title="YouTube video player"
                className="w-full h-full absolute inset-0 border-0"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                onLoad={handleIframeLoad}
                onError={() => {
                  setLoadError(true);
                  console.error('Error loading YouTube iframe');
                }}
              ></iframe>
            </div>
            
            {/* Video overlay with gradient to make controls more visible - lower z-index than iframe */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none z-[1003]"></div>
            
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black z-[1004]">
                <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
                <p className="absolute mt-24 text-white/70">Loading video...</p>
              </div>
            )}
          </div>
        )}
        
        {/* Improved close button with pulsing effect - highest z-index */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-black/50 hover:bg-white/20 rounded-full p-2 text-white transition-all transform hover:scale-110 z-[1005] group"
          aria-label="Close video"
        >
          <X className="w-6 h-6 group-hover:text-red-400 transition-colors" />
          <span className="absolute inset-0 rounded-full bg-white/5 animate-ping opacity-75"></span>
        </button>
        
        {/* Video title indicator - also high z-index */}
        <div className="absolute top-4 left-4 z-[1005] bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-lg">
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
