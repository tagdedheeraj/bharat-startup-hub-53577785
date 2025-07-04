
import { Play } from 'lucide-react';
import { YouTubeShort } from './types';

interface ShortCardProps {
  short: YouTubeShort;
  index: number;
  isHovered: boolean;
  onPlay: (id: string) => void;
  onHover: (id: string | null) => void;
}

const ShortCard = ({ short, index, isHovered, onPlay, onHover }: ShortCardProps) => {
  const handlePlay = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onPlay(short.id);
  };
  
  return (
    <div 
      className={`relative group aspect-[9/16] rounded-xl overflow-hidden cursor-pointer bg-gray-900 transform transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:z-10 ${isHovered ? 'ring-2 ring-red-500' : ''}`}
      onClick={handlePlay}
      onMouseEnter={() => onHover(short.id)}
      onMouseLeave={() => onHover(null)}
      style={{animationDelay: `${index * 100}ms`}}
      aria-label={`Play ${short.title} video`}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handlePlay(e as unknown as React.MouseEvent);
        }
      }}
    >
      {/* Thumbnail image with optimized loading */}
      <img
        src={short.thumbnail}
        alt={short.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-80"
        loading="lazy"
        decoding="async"
        fetchPriority="high"
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
      
      {/* Hover effects with improved visibility */}
      {isHovered && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full h-full pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 animate-pulse"></div>
            <div className="absolute h-1.5 bottom-0 left-0 right-0 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 animate-[width_5s_linear_infinite]"></div>
          </div>
        </div>
      )}
      
      {/* Play button - more prominent for better visibility */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className={`bg-gradient-to-r from-red-600 to-purple-600 rounded-full p-4 opacity-90 group-hover:opacity-100 transform transition-all duration-300 shadow-lg ${isHovered ? 'scale-125 animate-pulse' : ''}`}>
          <Play fill="white" size={32} className={isHovered ? 'animate-pulse' : ''} />
        </div>
        
        {/* Play hint text - more visible */}
        <div className="absolute bottom-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-sm font-bold bg-black/70 px-3 py-1.5 rounded-full backdrop-blur-sm">
            Click to play
          </p>
        </div>
      </div>
      
      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col justify-between p-4 text-white">
        {/* Title card with enhanced blur effect */}
        <div className="bg-black/70 backdrop-blur-sm p-3 rounded-lg shadow-lg transform translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <h3 className="font-bold text-lg line-clamp-2">{short.title}</h3>
        </div>
      </div>
      
      {/* "SHORTS" badge */}
      <div className="absolute top-2 right-2 bg-gradient-to-r from-red-600 to-purple-600 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1 opacity-80 group-hover:opacity-100 transition-opacity">
        <span className="w-2 h-2 bg-white rounded-full animate-ping absolute"></span>
        <span className="w-2 h-2 bg-white rounded-full relative"></span>
        <span>SHORTS</span>
      </div>
    </div>
  );
};

export default ShortCard;
