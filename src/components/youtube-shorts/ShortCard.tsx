
import React from 'react';
import { Play, Youtube } from 'lucide-react';
import { YouTubeShort } from './types';

interface ShortCardProps {
  short: YouTubeShort;
  index: number;
  isHovered: boolean;
  onPlay: (id: string) => void;
  onHover: (id: string | null) => void;
}

const ShortCard: React.FC<ShortCardProps> = ({
  short,
  index,
  isHovered,
  onPlay,
  onHover
}) => {
  // Handler to ensure video plays on both mobile and desktop
  const handlePlay = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("ShortCard: Play clicked for video ID:", short.id);
    onPlay(short.id);
  };
  
  return (
    <div 
      className={`group relative overflow-hidden rounded-lg shadow-lg h-full transform transition-transform duration-300
        ${isHovered ? 'scale-[1.03] shadow-xl ring-2 ring-purple-500' : 'hover:scale-[1.02]'}`}
      onMouseEnter={() => onHover(short.id)}
      onMouseLeave={() => onHover(null)}
      onClick={handlePlay}
      role="button"
      aria-label={`Play ${short.title} video`}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handlePlay(e as unknown as React.MouseEvent);
        }
      }}
    >
      {/* Thumbnail container */}
      <div className="aspect-video bg-gray-900 overflow-hidden relative">
        {/* Thumbnail image */}
        <img
          src={short.thumbnail}
          alt={short.title}
          className={`w-full h-full object-cover transition-all duration-500
            ${isHovered ? 'scale-110 blur-[1px]' : 'group-hover:scale-105'}`}
          loading="lazy"
          onError={(e) => {
            // Fallback for thumbnail load errors
            (e.target as HTMLImageElement).src = "https://placehold.co/1280x720/gray/white?text=Thumbnail+Error";
          }}
        />
        
        {/* Dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-70 group-hover:opacity-90"></div>
        
        {/* Play button (shown on hover/focus) */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform 
          transition-all duration-300 bg-purple-600/90 rounded-full p-4
          ${isHovered ? 'scale-110 opacity-100' : 'scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100'}`}>
          <Play className="h-5 w-5 text-white" fill="white" />
        </div>
      </div>
      
      {/* Video info */}
      <div className="p-3 bg-white dark:bg-gray-800">
        <h3 className="font-medium text-gray-900 dark:text-white text-base truncate">{short.title}</h3>
        <div className="flex items-center mt-2 text-xs text-gray-500 dark:text-gray-400">
          <Youtube className="h-3.5 w-3.5 mr-1 text-red-600" />
          <span>Startup Masterclass</span>
        </div>
      </div>
    </div>
  );
};

export default ShortCard;
