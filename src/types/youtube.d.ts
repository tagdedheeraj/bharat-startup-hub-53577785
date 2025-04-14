
// YouTube IFrame API Type Declarations
interface YT {
  Player: {
    new (
      elementId: HTMLIFrameElement | string,
      options: {
        events?: {
          onReady?: (event: { target: any }) => void;
          onStateChange?: (event: { data: number }) => void;
          onError?: (event: any) => void;
          onPlaybackQualityChange?: (event: any) => void;
          onPlaybackRateChange?: (event: any) => void;
          onApiChange?: (event: any) => void;
        };
        videoId?: string;
        playerVars?: {
          autoplay?: 0 | 1;
          cc_load_policy?: 1;
          color?: 'red' | 'white';
          controls?: 0 | 1 | 2;
          disablekb?: 0 | 1;
          enablejsapi?: 0 | 1;
          end?: number;
          fs?: 0 | 1;
          hl?: string;
          iv_load_policy?: 1 | 3;
          list?: string;
          listType?: 'playlist' | 'search' | 'user_uploads';
          loop?: 0 | 1;
          modestbranding?: 1;
          origin?: string;
          playlist?: string;
          playsinline?: 0 | 1;
          rel?: 0 | 1;
          start?: number;
          widget_referrer?: string;
          mute?: 0 | 1;
        };
        width?: number | string;
        height?: number | string;
      }
    ): YTPlayer;
  };
  PlayerState: {
    UNSTARTED: number;
    ENDED: number;
    PLAYING: number;
    PAUSED: number;
    BUFFERING: number;
    CUED: number;
  };
}

interface YTPlayer {
  playVideo(): void;
  pauseVideo(): void;
  stopVideo(): void;
  seekTo(seconds: number, allowSeekAhead: boolean): void;
  clearVideo(): void;
  nextVideo(): void;
  previousVideo(): void;
  playVideoAt(index: number): void;
  mute(): void;
  unMute(): void;
  isMuted(): boolean;
  setVolume(volume: number): void;
  getVolume(): number;
  getVideoLoadedFraction(): number;
  getVideoUrl(): string;
  getVideoEmbedCode(): string;
  getPlaylist(): string[];
  getPlaylistIndex(): number;
  getPlayerState(): number;
  getCurrentTime(): number;
  getDuration(): number;
  destroy(): void;
  getIframe(): HTMLIFrameElement;
}

// Extend Window interface to include YouTube IFrame API properties
interface Window {
  YT?: YT;
  onYouTubeIframeAPIReady?: () => void;
}
