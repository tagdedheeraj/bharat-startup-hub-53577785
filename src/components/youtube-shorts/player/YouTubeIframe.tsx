
import React, { forwardRef } from 'react';

interface YouTubeIframeProps {
  videoId: string;
  isLoading: boolean;
}

/**
 * YouTube iframe component with proper origin configuration
 */
const YouTubeIframe = forwardRef<HTMLIFrameElement, YouTubeIframeProps>(
  ({ videoId, isLoading }, ref) => {
    // Create a safe, properly encoded origin parameter
    const encodedOrigin = encodeURIComponent(window.location.origin);
    
    // Build URL with parameters that won't conflict with each other
    const youtubeUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&showinfo=0&modestbranding=1&enablejsapi=1&playsinline=1&origin=${encodedOrigin}&controls=1&mute=0&iv_load_policy=3&fs=1`;
    
    // Log the URL for debugging purposes
    if (process.env.NODE_ENV !== 'production') {
      console.debug(`Creating YouTube iframe for video ID ${videoId}`);
    }
    
    return (
      <iframe
        ref={ref}
        src={youtubeUrl}
        title={`YouTube video player: ${videoId}`}
        className="w-full h-full absolute inset-0 border-0 bg-black"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
        allowFullScreen
        loading="lazy"
        style={{
          visibility: isLoading ? 'hidden' : 'visible'
        }}
        data-youtube-iframe="true"
      ></iframe>
    );
  }
);

YouTubeIframe.displayName = 'YouTubeIframe';

export default YouTubeIframe;
