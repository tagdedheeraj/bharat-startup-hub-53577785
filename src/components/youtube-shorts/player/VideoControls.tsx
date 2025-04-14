
import React, { useState } from 'react';
import { X, Volume2, VolumeX, Settings, SkipForward, ChevronsRight } from 'lucide-react';
import { Slider } from "@/components/ui/slider";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface VideoControlsProps {
  isMuted: boolean;
  toggleMute: () => void;
  onClose: () => void;
  videoTitle?: string;
  volume: number;
  updateVolume: (volume: number) => void;
  playbackSpeed: number;
  updatePlaybackSpeed: (speed: number) => void;
  videoQuality: string;
  updateVideoQuality: (quality: string) => void;
  playerReady: boolean;
}

const VideoControls = ({ 
  isMuted, 
  toggleMute, 
  onClose, 
  videoTitle,
  volume,
  updateVolume,
  playbackSpeed,
  updatePlaybackSpeed,
  videoQuality,
  updateVideoQuality,
  playerReady
}: VideoControlsProps) => {
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  
  // Available playback speeds
  const playbackSpeeds = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];
  
  // Available quality options
  const qualityOptions = [
    { value: 'auto', label: 'Auto' },
    { value: 'hd2160', label: '4K (2160p)' },
    { value: 'hd1440', label: 'QHD (1440p)' },
    { value: 'hd1080', label: 'Full HD (1080p)' },
    { value: 'hd720', label: 'HD (720p)' },
    { value: 'large', label: '480p' },
    { value: 'medium', label: '360p' },
    { value: 'small', label: '240p' },
    { value: 'tiny', label: '144p' },
  ];

  return (
    <>
      {/* Close button with pulsing effect */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 bg-black/50 hover:bg-white/20 rounded-full p-2 text-white transition-all transform hover:scale-110 z-[1007] group"
        aria-label="Close video"
      >
        <X className="w-6 h-6 group-hover:text-red-400 transition-colors" />
        <span className="absolute inset-0 rounded-full bg-white/5 animate-ping opacity-75"></span>
      </button>
      
      {/* Volume control */}
      <div className="absolute bottom-4 right-4 flex items-center gap-2 z-[1007]">
        {/* Volume slider - visible on hover or when clicked */}
        {showVolumeSlider && (
          <div className="bg-black/70 p-2 rounded-full backdrop-blur-sm flex items-center gap-2 w-32 animate-fadeIn">
            <Slider
              value={[volume]}
              min={0}
              max={100}
              step={1}
              onValueChange={(values) => updateVolume(values[0])}
              className="w-full"
            />
          </div>
        )}
        
        {/* Mute/Unmute button */}
        <button
          onClick={toggleMute}
          onMouseEnter={() => setShowVolumeSlider(true)}
          onMouseLeave={() => setShowVolumeSlider(false)}
          className="bg-black/50 hover:bg-white/20 rounded-full p-2 text-white transition-all transform hover:scale-110 group"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? (
            <VolumeX className="w-6 h-6 group-hover:text-red-400 transition-colors" />
          ) : (
            <Volume2 className="w-6 h-6 group-hover:text-green-400 transition-colors" />
          )}
        </button>
      </div>
      
      {/* Settings dropdown (playback speed, quality) */}
      <div className="absolute bottom-4 right-16 z-[1007]">
        <DropdownMenu>
          <DropdownMenuTrigger asChild disabled={!playerReady}>
            <button
              className="bg-black/50 hover:bg-white/20 rounded-full p-2 text-white transition-all transform hover:scale-110 group disabled:opacity-50 disabled:pointer-events-none"
              aria-label="Video settings"
            >
              <Settings className="w-6 h-6 group-hover:text-blue-400 transition-colors" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="min-w-[200px] bg-black/90 backdrop-blur-md text-white border border-white/20">
            <DropdownMenuLabel>Video Settings</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-white/20" />
            
            {/* Playback Speed Section */}
            <DropdownMenuGroup>
              <DropdownMenuLabel className="text-sm text-gray-400">Playback Speed</DropdownMenuLabel>
              <div className="px-2 py-1.5 grid grid-cols-4 gap-1">
                {playbackSpeeds.map((speed) => (
                  <button
                    key={speed}
                    onClick={() => updatePlaybackSpeed(speed)}
                    className={`px-2 py-1 text-xs rounded ${playbackSpeed === speed 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-black/50 hover:bg-white/10 text-white/90'}`}
                  >
                    {speed === 1 ? 'Normal' : `${speed}x`}
                  </button>
                ))}
              </div>
            </DropdownMenuGroup>
            
            <DropdownMenuSeparator className="bg-white/20" />
            
            {/* Quality Section */}
            <DropdownMenuGroup>
              <DropdownMenuLabel className="text-sm text-gray-400">Quality</DropdownMenuLabel>
              <div className="px-2 py-1.5">
                <Select 
                  value={videoQuality} 
                  onValueChange={updateVideoQuality}
                >
                  <SelectTrigger className="w-full bg-black/70 border-white/20 text-white">
                    <SelectValue placeholder="Select quality" />
                  </SelectTrigger>
                  <SelectContent className="bg-black/90 backdrop-blur-md text-white border border-white/20">
                    {qualityOptions.map((option) => (
                      <SelectItem 
                        key={option.value} 
                        value={option.value}
                        className="hover:bg-white/10"
                      >
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      
      {/* Video title indicator */}
      {videoTitle && (
        <div className="absolute top-4 left-4 z-[1007] bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-lg">
          <p className="text-white text-sm font-medium max-w-[200px] truncate">
            {videoTitle}
          </p>
        </div>
      )}
    </>
  );
};

export default VideoControls;
