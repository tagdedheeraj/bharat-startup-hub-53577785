
import { useEffect, useCallback } from 'react';

export const useYouTubePlayerSetup = (
  videoId: string,
  {
    iframeRef,
    playerInitAttempted,
    youtubePlayer,
    setIsLoading,
    setPlayerReady,
    setLoadError,
    setPlaybackSpeed,
    setVolume,
    setVideoQuality,
    playbackSpeed,
    volume,
    isMuted
  }: any,
  onClose: () => void
) => {
  // Setup the YouTube player once the API is ready
  const setupYouTubePlayer = useCallback(() => {
    if (!iframeRef.current || playerInitAttempted.current) return;
    
    playerInitAttempted.current = true;
    console.log('Setting up YouTube player for video:', videoId);
    
    try {
      // Try to use the YouTube IFrame API directly
      if (window.YT && window.YT.Player) {
        console.log('Creating new YT.Player instance');
        youtubePlayer.current = new window.YT.Player(iframeRef.current, {
          events: {
            'onReady': (event: any) => {
              console.log('YouTube player ready event fired');
              setIsLoading(false);
              setPlayerReady(true);
              
              // Apply initial settings once player is ready
              try {
                const player = event.target;
                
                // Set playback speed
                if (playbackSpeed !== 1) {
                  player.setPlaybackRate(playbackSpeed);
                }
                
                // Set volume
                player.setVolume(volume);
                
                // Set mute state
                if (isMuted) {
                  player.mute();
                } else {
                  player.unMute();
                }
                
                // Start playing
                player.playVideo();
                console.log('Video playback initiated');
              } catch (e) {
                console.error('Error applying initial player settings:', e);
              }
            },
            'onStateChange': (event: any) => {
              console.log('Player state changed:', event.data);
              
              if (event.data === window.YT?.PlayerState.PLAYING) {
                console.log('Video is now playing');
                setIsLoading(false);
                
                // Get available quality levels when video starts playing
                try {
                  const qualities = event.target.getAvailableQualityLevels();
                  console.log('Available quality levels:', qualities);
                } catch (e) {
                  console.error('Error getting quality levels:', e);
                }
              } else if (event.data === window.YT?.PlayerState.ENDED) {
                console.log('Video ended');
                onClose();
              } else if (event.data === window.YT?.PlayerState.PAUSED) {
                console.log('Video paused');
              } else if (event.data === window.YT?.PlayerState.BUFFERING) {
                console.log('Video buffering');
              }
            },
            'onPlaybackQualityChange': (event: any) => {
              // Update the quality state when it changes
              try {
                const quality = event.data;
                console.log('Quality changed to:', quality);
                setVideoQuality(quality);
              } catch (e) {
                console.error('Error handling quality change:', e);
              }
            },
            'onError': (event: any) => {
              console.error('YouTube player error:', event.data);
              
              // Handle specific error codes
              let errorMessage = 'Unknown error occurred';
              switch (event.data) {
                case 2:
                  errorMessage = 'Invalid video ID';
                  break;
                case 5:
                  errorMessage = 'HTML5 player error';
                  break;
                case 100:
                  errorMessage = 'Video not found or removed';
                  break;
                case 101:
                case 150:
                  errorMessage = 'Video playback not allowed in embedded player';
                  break;
              }
              
              console.error(errorMessage);
              setLoadError(true);
              setIsLoading(false);
            }
          }
        });
      } else {
        console.error('YouTube API not available');
        setLoadError(true);
        setIsLoading(false);
      }
    } catch (e) {
      console.error('Error initializing YouTube player:', e);
      // Fall back to regular iframe if API initialization fails
      setIsLoading(false);
      setLoadError(true);
    }
  }, [videoId, isMuted, onClose, playbackSpeed, setIsLoading, setLoadError, setPlayerReady, setVideoQuality, volume]);

  return {
    setupYouTubePlayer
  };
};
