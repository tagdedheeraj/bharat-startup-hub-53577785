
import React, { forwardRef } from 'react';

interface YouTubeIframeProps {
  videoId: string;
  isLoading: boolean;
}

const YouTubeIframe = forwardRef<HTMLIFrameElement, YouTubeIframeProps>(
  ({ videoId, isLoading }, ref) => {
    // Create a more comprehensive YouTube URL with optimized parameters for mobile
    const youtubeUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&showinfo=0&modestbranding=1&enablejsapi=1&playsinline=1&origin=${encodeURIComponent(window.location.origin)}&controls=1&mute=0&iv_load_policy=3&fs=1`;
    
    return (
      <iframe
        ref={ref}
        src={youtubeUrl}
        title="YouTube video player"
        className="w-full h-full absolute inset-0 border-0 bg-black"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
        allowFullScreen
        style={{
          visibility: isLoading ? 'hidden' : 'visible',
          zIndex: 1004, // Ensure video is above other elements
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
        // Use the HTML attribute name directly instead of React property
        // This is added as an HTML attribute directly, not a React prop
        playsinline={1}
      ></iframe>
    );
  }
);

YouTubeIframe.displayName = 'YouTubeIframe';

export default YouTubeIframe;
