
import { useState, useRef } from 'react';

export const useYouTubePlayerCore = (videoId: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const [playerReady, setPlayerReady] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(100);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [videoQuality, setVideoQuality] = useState('auto');
  
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playerInitAttempted = useRef(false);
  const youtubePlayer = useRef<YTPlayer | null>(null);
  
  // Function to toggle mute state
  const toggleMute = () => {
    try {
      if (youtubePlayer.current) {
        if (isMuted) {
          youtubePlayer.current.unMute();
          youtubePlayer.current.setVolume(volume);
        } else {
          youtubePlayer.current.mute();
        }
        setIsMuted(!isMuted);
      } else if (iframeRef.current && iframeRef.current.contentWindow) {
        // Fallback using postMessage API
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

  // Function to set volume (0-100)
  const updateVolume = (newVolume: number) => {
    try {
      if (youtubePlayer.current) {
        youtubePlayer.current.setVolume(newVolume);
        
        // If setting volume while muted, unmute
        if (isMuted && newVolume > 0) {
          youtubePlayer.current.unMute();
          setIsMuted(false);
        }
        
        setVolume(newVolume);
      } else if (iframeRef.current && iframeRef.current.contentWindow) {
        // Fallback using postMessage API
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify({
            event: 'command',
            func: 'setVolume',
            args: [newVolume]
          }), 
          '*'
        );
        
        // If setting volume while muted, unmute
        if (isMuted && newVolume > 0) {
          iframeRef.current.contentWindow.postMessage(
            JSON.stringify({
              event: 'command',
              func: 'unMute'
            }), 
            '*'
          );
          setIsMuted(false);
        }
        
        setVolume(newVolume);
      }
    } catch (error) {
      console.error("Error updating volume:", error);
    }
  };

  // Function to set playback speed
  const updatePlaybackSpeed = (speed: number) => {
    try {
      if (youtubePlayer.current) {
        youtubePlayer.current.setPlaybackRate(speed);
        setPlaybackSpeed(speed);
      } else if (iframeRef.current && iframeRef.current.contentWindow) {
        // Fallback using postMessage API
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify({
            event: 'command',
            func: 'setPlaybackRate',
            args: [speed]
          }), 
          '*'
        );
        setPlaybackSpeed(speed);
      }
    } catch (error) {
      console.error("Error updating playback speed:", error);
    }
  };

  // Function to set video quality
  const updateVideoQuality = (quality: string) => {
    try {
      if (youtubePlayer.current) {
        youtubePlayer.current.setPlaybackQuality(quality);
        setVideoQuality(quality);
      } else if (iframeRef.current && iframeRef.current.contentWindow) {
        // Fallback using postMessage API
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify({
            event: 'command',
            func: 'setPlaybackQuality',
            args: [quality]
          }), 
          '*'
        );
        setVideoQuality(quality);
      }
    } catch (error) {
      console.error("Error updating video quality:", error);
    }
  };

  return {
    // State
    isLoading,
    setIsLoading,
    loadError,
    setLoadError,
    playerReady,
    setPlayerReady,
    isMuted,
    setIsMuted,
    volume,
    setVolume,
    playbackSpeed,
    setPlaybackSpeed,
    videoQuality,
    setVideoQuality,
    
    // Refs
    iframeRef,
    playerInitAttempted,
    youtubePlayer,
    
    // Functions
    toggleMute,
    updateVolume,
    updatePlaybackSpeed,
    updateVideoQuality
  };
};
