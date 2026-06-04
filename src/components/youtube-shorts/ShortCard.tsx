
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
      className={`relative group aspect-[9/16] w-full rounded-xl overflow-hidden cursor-pointer bg-gray-900 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:z-10 ${isHovered ? 'ring-2 ring-red-500' : ''}`}
      onClick={handlePlay}
      onMouseEnter={() => onHover(short.id)}
      onMouseLeave={() => onHover(null)}
      style={{ animationDelay: `${index * 100}ms` }}
      aria-label={`Play ${short.title} video`}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handlePlay(e as unknown as React.MouseEvent);
        }
      }}
    >
      <img
        src={short.thumbnail}
        alt={short.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-80"
        loading="lazy"
        decoding="async"
        onError={(e) => {
          const img = e.currentTarget;
          if (!img.src.includes('hqdefault')) {
            img.src = `https://i3.ytimg.com/vi/${short.id}/hqdefault.jpg`;
          }
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

      {isHovered && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 animate-pulse" />
          <div className="absolute h-1.5 bottom-0 left-0 right-0 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500" />
        </div>
      )}

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className={`bg-gradient-to-r from-red-600 to-purple-600 rounded-full p-3 sm:p-4 opacity-90 group-hover:opacity-100 transform transition-all duration-300 shadow-lg ${isHovered ? 'scale-110 sm:scale-125' : ''}`}>
          <Play fill="white" className="w-6 h-6 sm:w-8 sm:h-8" />
        </div>

        <div className="hidden sm:block absolute bottom-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-sm font-bold bg-black/70 px-3 py-1.5 rounded-full backdrop-blur-sm">
            Click to play
          </p>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 text-white">
        <div className="bg-black/70 backdrop-blur-sm p-2.5 sm:p-3 rounded-lg shadow-lg transform sm:translate-y-3 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 transition-all duration-300">
          <h3 className="font-bold text-sm sm:text-base md:text-lg line-clamp-2">{short.title}</h3>
        </div>
      </div>

      <div className="absolute top-2 right-2 bg-gradient-to-r from-red-600 to-purple-600 text-white px-2 py-1 rounded-full text-[10px] sm:text-xs font-bold flex items-center gap-1 opacity-90 group-hover:opacity-100 transition-opacity">
        <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping absolute" />
        <span className="w-1.5 h-1.5 bg-white rounded-full relative" />
        <span>SHORTS</span>
      </div>
    </div>
  );
};

export default ShortCard;
