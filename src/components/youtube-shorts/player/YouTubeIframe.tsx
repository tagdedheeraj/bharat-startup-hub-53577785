
import React, { forwardRef } from 'react';

interface YouTubeIframeProps {
  videoId: string;
  isLoading: boolean;
}

const YouTubeIframe = forwardRef<HTMLIFrameElement, YouTubeIframeProps>(
  ({ videoId, isLoading }, ref) => {
    const encodedOrigin = encodeURIComponent(window.location.origin);
    const youtubeUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&enablejsapi=1&playsinline=1&origin=${encodedOrigin}&controls=1&fs=1&modestbranding=1&rel=0&showinfo=1`;
    
    return (
      <iframe
        ref={ref}
        src={youtubeUrl}
        title={`YouTube video player: ${videoId}`}
        className="w-full h-full absolute inset-0 border-0 bg-black"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
        allowFullScreen
        loading="eager"
        style={{
          opacity: isLoading ? 0 : 1,
          visibility: 'visible',
          zIndex: 9500
        }}
        data-youtube-iframe="true"
        aria-label="YouTube video player"
      ></iframe>
    );
  }
);

YouTubeIframe.displayName = 'YouTubeIframe';

export default YouTubeIframe;
