
import React, { forwardRef } from 'react';

interface YouTubeIframeProps {
  videoId: string;
  isLoading: boolean;
}

const YouTubeIframe = forwardRef<HTMLIFrameElement, YouTubeIframeProps>(
  ({ videoId, isLoading }, ref) => {
    // Enhanced YouTube URL with additional parameters for better controls
    const youtubeUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&showinfo=0&modestbranding=1&enablejsapi=1&playsinline=1&origin=${encodeURIComponent(window.location.origin)}&controls=1&mute=0&iv_load_policy=3&fs=1&cc_load_policy=0&cc_lang_pref=en`;
    
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
          visibility: isLoading ? 'hidden' : 'visible'
        }}
      ></iframe>
    );
  }
);

YouTubeIframe.displayName = 'YouTubeIframe';

export default YouTubeIframe;
