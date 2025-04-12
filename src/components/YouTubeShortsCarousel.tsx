
import { Youtube, Play, Pause } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { useYouTubeCarousel } from './youtube-shorts/useYouTubeCarousel';
import { youtubeShorts } from './youtube-shorts/data';
import VideoPlayer from './youtube-shorts/VideoPlayer';
import ShortCard from './youtube-shorts/ShortCard';
import LoadingSkeleton from './youtube-shorts/LoadingSkeleton';

const YouTubeShortsCarousel = () => {
  const {
    currentVideoId,
    isPaused,
    isLoading,
    hoveredVideo,
    setHoveredVideo,
    playVideo,
    closeVideo,
    togglePause
  } = useYouTubeCarousel(youtubeShorts);

  return (
    <div className="relative py-16 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-slate-900">
      {currentVideoId && <VideoPlayer videoId={currentVideoId} onClose={closeVideo} />}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-2 bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-fadeInLeft">
              <Youtube className="text-red-600" />
              <span>Startup Masterclass Shorts</span>
            </h2>
            <button
              onClick={togglePause}
              className="flex items-center gap-2 bg-white/80 hover:bg-white dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white shadow-md px-4 py-2 rounded-full transition-all hover:scale-105 transform animate-fadeInRight"
            >
              {isPaused ? <Play size={18} className="text-green-600" /> : <Pause size={18} className="text-red-600" />}
              <span>{isPaused ? "Resume" : "Pause"} Slideshow</span>
            </button>
          </div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-fadeIn">
            Quick video tips and insights for entrepreneurs and startup founders. Click on any short to watch the full video.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-xl shadow-xl border border-purple-100 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-6 animate-fadeIn">
          {isLoading ? (
            <LoadingSkeleton />
          ) : (
            <Carousel className="w-full" opts={{ loop: true }}>
              <CarouselContent>
                {youtubeShorts.map((short, index) => (
                  <CarouselItem key={short.id} className="md:basis-1/2 lg:basis-1/3 pl-4 transform transition-all duration-500">
                    <ShortCard 
                      short={short}
                      index={index}
                      isHovered={hoveredVideo === short.id}
                      onPlay={playVideo}
                      onHover={setHoveredVideo}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 z-10">
                <CarouselPrevious className="relative left-0 h-10 w-10 opacity-70 hover:opacity-100 transition-opacity backdrop-blur-sm bg-white/30 dark:bg-black/30 border-purple-200 dark:border-purple-900 hover:bg-white/50 dark:hover:bg-black/50" data-carousel-prev />
              </div>
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                <CarouselNext className="relative right-0 h-10 w-10 opacity-70 hover:opacity-100 transition-opacity backdrop-blur-sm bg-white/30 dark:bg-black/30 border-purple-200 dark:border-purple-900 hover:bg-white/50 dark:hover:bg-black/50" data-carousel-next />
              </div>
            </Carousel>
          )}
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400 animate-fadeIn">Swipe or use arrows to navigate through the shorts</p>
        </div>
      </div>
    </div>
  );
};

export default YouTubeShortsCarousel;
