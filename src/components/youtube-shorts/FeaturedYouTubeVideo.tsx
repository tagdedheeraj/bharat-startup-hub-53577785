
import React, { useState } from 'react';
import { Play } from 'lucide-react';
import VideoPlayer from './VideoPlayer';
import { toast } from 'sonner';

const FeaturedYouTubeVideo: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Updated to a video ID that is known to work with embedding
  const videoId = "pq22sadiXqQ"; // Using a known working ID from FirstTimeVideoPopup
  
  const handlePlayClick = () => {
    setIsPlaying(true);
    // Show toast for better user feedback
    toast.info("Loading video player...");
  };
  
  const handleCloseVideo = () => {
    setIsPlaying(false);
  };
  
  return (
    <section className="py-16 bg-gradient-to-r from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-white">Featured Video</h2>
          
          {isPlaying ? (
            <VideoPlayer videoId={videoId} onClose={handleCloseVideo} />
          ) : (
            <div 
              className="relative aspect-video rounded-xl overflow-hidden cursor-pointer shadow-2xl group"
              onClick={handlePlayClick}
            >
              {/* Use higher quality thumbnail with error fallback */}
              <img 
                src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`} 
                alt="Featured video thumbnail" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  // Fallback to standard quality if maxresdefault doesn't exist
                  (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                }}
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-70 transition-opacity"></div>
              
              {/* Play button with enhanced animation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-red-600 rounded-full p-5 opacity-90 group-hover:opacity-100 transform transition-all duration-300 group-hover:scale-110 shadow-lg">
                  <Play fill="white" size={40} />
                </div>
              </div>
              
              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl md:text-2xl font-bold text-white">Startup Success Stories</h3>
                <p className="text-white/80 mt-2">Click to play video</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedYouTubeVideo;
