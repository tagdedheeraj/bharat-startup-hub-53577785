
import React, { forwardRef } from 'react';

interface YouTubeIframeProps {
  videoId: string;
  isLoading: boolean;
}

const YouTubeIframe = forwardRef<HTMLIFrameElement, YouTubeIframeProps>(
  ({ videoId, isLoading }, ref) => {
    // Ensure video ID is properly sanitized
    const sanitizedVideoId = videoId.trim();
    const currentOrigin = window.location.origin || "https://lovable.dev";
    
    // Create a YouTube URL with parameters optimized for both mobile and desktop
    const youtubeUrl = `https://www.youtube.com/embed/${sanitizedVideoId}?autoplay=1&rel=0&showinfo=0&modestbranding=1&enablejsapi=1&playsinline=1&origin=${encodeURIComponent(currentOrigin)}&controls=1&mute=0&iv_load_policy=3&fs=1`;
    
    console.log("Creating YouTube iframe with URL:", youtubeUrl);
    
    return (
      <iframe
        ref={ref}
        src={youtubeUrl}
        title="YouTube video player"
        className="w-full h-full absolute inset-0 border-0 bg-black"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen; playsinline"
        allowFullScreen
        style={{
          visibility: isLoading ? 'hidden' : 'visible',
          zIndex: 1004, // Ensure video is above other elements
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      ></iframe>
    );
  }
);

YouTubeIframe.displayName = 'YouTubeIframe';

export default YouTubeIframe;
