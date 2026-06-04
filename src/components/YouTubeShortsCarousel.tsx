import { memo, useEffect, useRef } from 'react';
import { Youtube, Play, Pause, RefreshCw } from 'lucide-react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { useYouTubeCarousel } from './youtube-shorts/hooks/useYouTubeCarousel';
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
    refreshShorts,
  } = useYouTubeCarousel(youtubeShorts);

  // Show all videos on every device (no slicing) so users always see the full catalog.
  const optimizedShorts = displayedShorts;
  const shortsCount = optimizedShorts.length;

  // Duplicate slides when there are too few items so loop + autoplay feel smooth.
  const slides = shortsCount > 0 && shortsCount < 4
    ? Array.from({ length: Math.ceil(4 / shortsCount) }).flatMap(() => optimizedShorts)
    : optimizedShorts;

  // Autoplay plugin instance — stable across renders, controllable via play/stop.
  const autoplayRef = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  useEffect(() => {
    const plugin = autoplayRef.current as { play?: () => void; stop?: () => void } | null;
    if (!plugin) return;
    try {
      if (isPaused || currentVideoId) {
        plugin.stop?.();
      } else {
        plugin.play?.();
      }
    } catch {
      // Autoplay may not be attached yet on first render — safe to ignore.
    }
  }, [isPaused, currentVideoId]);

  useEffect(() => {
    const handleShortsUpdated = () => refreshShorts();
    window.addEventListener('youtube-shorts-updated', handleShortsUpdated);
    return () => window.removeEventListener('youtube-shorts-updated', handleShortsUpdated);
  }, [refreshShorts]);

  // Responsive basis: more visible cards as screen widens.
  const basisClass = shortsCount === 1
    ? 'basis-full sm:basis-3/4 md:basis-1/2 lg:basis-2/5'
    : 'basis-[85%] xs:basis-[70%] sm:basis-1/2 md:basis-1/2 lg:basis-1/3 xl:basis-1/4';

  return (
    <section className="relative py-10 sm:py-14 md:py-16 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-slate-900">
      {currentVideoId && <VideoPlayer videoId={currentVideoId} onClose={closeVideo} />}

      <div className="container mx-auto px-3 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold flex items-center justify-center sm:justify-start gap-2 bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              <Youtube className="text-red-600 shrink-0" />
              <span>Startup Masterclass Shorts</span>
            </h2>
            <div className="flex items-center justify-center sm:justify-end gap-2">
              <button
                onClick={refreshShorts}
                className="flex items-center gap-1 bg-white/80 hover:bg-white dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white shadow-md px-3 py-2 rounded-full transition-all hover:scale-105 transform text-sm"
                title="Refresh shorts"
                aria-label="Refresh shorts"
              >
                <RefreshCw size={16} className="text-blue-600" />
                <span className="sr-only md:not-sr-only md:inline-block">Refresh</span>
              </button>
              <button
                onClick={togglePause}
                className="flex items-center gap-1.5 sm:gap-2 bg-white/80 hover:bg-white dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white shadow-md px-3 sm:px-4 py-2 rounded-full transition-all hover:scale-105 transform text-sm"
                aria-label={isPaused ? 'Resume slideshow' : 'Pause slideshow'}
              >
                {isPaused ? <Play size={16} className="text-green-600" /> : <Pause size={16} className="text-red-600" />}
                <span className="hidden xs:inline sm:inline">{isPaused ? 'Resume' : 'Pause'}</span>
              </button>
            </div>
          </div>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-2">
            Quick video tips and insights for entrepreneurs and startup founders. Tap any short to watch the full video.
          </p>
        </div>

        {loadError && (
          <Alert variant="destructive" className="mb-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
            <AlertDescription className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <span className="text-sm">{loadError}</span>
              <Button variant="outline" size="sm" onClick={retryLoading} className="flex items-center gap-1">
                <RefreshCw className="h-4 w-4" /> Retry
              </Button>
            </AlertDescription>
          </Alert>
        )}

        <div className="relative overflow-hidden rounded-xl shadow-xl border border-purple-100 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-3 sm:p-6">
          {isLoading ? (
            <LoadingSkeleton />
          ) : optimizedShorts.length === 0 ? (
            <div className="py-12 text-center">
              <h3 className="text-lg font-medium text-gray-600 dark:text-gray-300">No YouTube shorts available</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">Check back later for new content</p>
            </div>
          ) : (
            <Carousel
              className="w-full"
              opts={{ loop: true, align: 'start', dragFree: false }}
              plugins={[autoplayRef.current]}
            >
              <CarouselContent className="-ml-3 sm:-ml-4">
                {slides.map((short, index) => (
                  <CarouselItem
                    key={`${short.id}-${index}`}
                    className={`pl-3 sm:pl-4 ${basisClass}`}
                  >
                    <div className="mx-auto w-full max-w-[280px] sm:max-w-none">
                      <ShortCard
                        short={short}
                        index={index}
                        isHovered={hoveredVideo === short.id}
                        onPlay={playVideo}
                        onHover={setHoveredVideo}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="absolute left-1 sm:-left-4 top-1/2 -translate-y-1/2 z-10">
                <CarouselPrevious className="relative left-0 h-9 w-9 sm:h-10 sm:w-10 opacity-80 hover:opacity-100 transition-opacity backdrop-blur-sm bg-white/70 dark:bg-black/50 border-purple-200 dark:border-purple-900 hover:bg-white" />
              </div>
              <div className="absolute right-1 sm:-right-4 top-1/2 -translate-y-1/2 z-10">
                <CarouselNext className="relative right-0 h-9 w-9 sm:h-10 sm:w-10 opacity-80 hover:opacity-100 transition-opacity backdrop-blur-sm bg-white/70 dark:bg-black/50 border-purple-200 dark:border-purple-900 hover:bg-white" />
              </div>
            </Carousel>
          )}
        </div>

        <div className="mt-4 sm:mt-6 text-center">
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Auto-sliding — hover or use arrows to navigate</p>
        </div>
      </div>
    </section>
  );
};

export default memo(YouTubeShortsCarousel);
