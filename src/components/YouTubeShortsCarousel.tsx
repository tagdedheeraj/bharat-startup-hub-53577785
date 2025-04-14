
import { memo } from 'react';
import { Youtube, Play, Pause, RefreshCw } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { useYouTubeCarousel } from './youtube-shorts/useYouTubeCarousel';
import { youtubeShorts } from './youtube-shorts/data';
import VideoPlayer from './youtube-shorts/VideoPlayer';
import ShortCard from './youtube-shorts/ShortCard';
import LoadingSkeleton from './youtube-shorts/LoadingSkeleton';
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";

const YouTubeShortsCarousel = () => {
  const {
    currentVideoId,
    isPaused,
    isLoading,
    hoveredVideo,
    youtubeShorts: displayedShorts,
    loadError,
    setHoveredVideo,
    playVideo,
    closeVideo,
    togglePause,
    retryLoading,
    isLowPerformanceDevice
  } = useYouTubeCarousel(youtubeShorts);

  // For low performance devices, limit to 3 items maximum
  const optimizedShorts = isLowPerformanceDevice ? displayedShorts.slice(0, 3) : displayedShorts;
  
  // Early debug log to check what shorts are available
  console.log("YouTube Shorts to display:", optimizedShorts);

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

        {loadError && (
          <Alert variant="destructive" className="mb-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
            <AlertDescription className="flex justify-between items-center">
              <span>{loadError}</span>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={retryLoading}
                className="flex items-center gap-1"
              >
                <RefreshCw className="h-4 w-4" /> Retry
              </Button>
            </AlertDescription>
          </Alert>
        )}

        <div className="relative overflow-hidden rounded-xl shadow-xl border border-purple-100 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-6 animate-fadeIn">
          {isLoading ? (
            <LoadingSkeleton />
          ) : optimizedShorts.length === 0 ? (
            <div className="py-12 text-center">
              <h3 className="text-lg font-medium text-gray-600 dark:text-gray-300">No YouTube shorts available</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">Check back later for new content</p>
            </div>
          ) : (
            <Carousel className="w-full" opts={{ loop: true }}>
              <CarouselContent>
                {optimizedShorts.map((short, index) => (
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

// Memoize the component to prevent unnecessary re-renders
export default memo(YouTubeShortsCarousel);
