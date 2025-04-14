
import { X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

interface VideoPlayerProps {
  videoId: string;
  onClose: () => void;
}

const VideoPlayer = ({ videoId, onClose }: VideoPlayerProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  useEffect(() => {
    // Reset states when videoId changes
    setIsLoading(true);
    setLoadError(false);
    
    // Add event listener for message from the iframe
    const handleMessage = (event: MessageEvent) => {
      // Check if message is from YouTube
      if (event.origin === 'https://www.youtube.com') {
        try {
          const data = JSON.parse(event.data);
          if (data.event === 'onError') {
            console.error('YouTube player error:', data);
            setLoadError(true);
          }
          if (data.event === 'onReady') {
            setIsLoading(false);
            console.log('YouTube video is ready to play');
          }
        } catch (e) {
          // Not a JSON message, ignore
        }
      }
    };
    
    window.addEventListener('message', handleMessage);
    
    // Set a timeout to consider it failed if taking too long
    const timeoutId = setTimeout(() => {
      if (isLoading) {
        console.log('YouTube video load timeout exceeded');
      }
    }, 10000);
    
    return () => {
      window.removeEventListener('message', handleMessage);
      clearTimeout(timeoutId);
    };
  }, [videoId, isLoading]);

  // Force z-index to ensure video is on top of other elements
  // Make iframe position absolute within container to ensure it fills the space
  // Create a more resilient YouTube URL with additional parameters
  const youtubeUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&enablejsapi=1&origin=${encodeURIComponent(window.location.origin)}`;
  
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-fadeIn">
      <div className="relative w-full max-w-3xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl border border-white/10 animate-scaleIn z-[101]">
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
            {/* Video overlay with gradient to make controls more visible */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none z-[103]"></div>
            
            <iframe
              ref={iframeRef}
              src={youtubeUrl}
              title="YouTube video player"
              className="w-full h-full absolute inset-0"
              style={{ zIndex: 102 }}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              onLoad={() => {
                setIsLoading(false);
                console.log('YouTube iframe loaded');
              }}
              onError={() => {
                setLoadError(true);
                console.error('Error loading YouTube iframe');
              }}
            ></iframe>
            
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black z-[101]">
                <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
              </div>
            )}
          </div>
        )}
        
        {/* Improved close button with pulsing effect */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 rounded-full p-2 text-white transition-all transform hover:scale-110 z-[103] group"
          aria-label="Close video"
        >
          <X className="w-6 h-6 group-hover:text-red-400 transition-colors" />
          <span className="absolute inset-0 rounded-full bg-white/5 animate-ping opacity-75"></span>
        </button>
        
        {/* Video title indicator */}
        <div className="absolute top-4 left-4 z-[103] bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-lg">
          <p className="text-white text-sm font-medium max-w-[200px] truncate">Startup Masterclass</p>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
