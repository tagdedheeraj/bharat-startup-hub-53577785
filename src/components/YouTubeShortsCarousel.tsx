import { useState, useEffect, useRef } from 'react';
import { Youtube, Play, Pause, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";

interface YouTubeShort {
  id: string;
  title: string;
  thumbnail: string;
}

const YouTubeShortsCarousel = () => {
  const [currentVideoId, setCurrentVideoId] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const intervalRef = useRef<number | null>(null);
  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null);

  const youtubeShorts: YouTubeShort[] = [
    {
      id: "lM3Tswmx8zM",
      title: "Business Strategy Secrets",
      thumbnail: "https://i3.ytimg.com/vi/lM3Tswmx8zM/maxresdefault.jpg"
    },
    {
      id: "xkLNpYiwak8",
      title: "Business Model Innovation",
      thumbnail: "https://i3.ytimg.com/vi/xkLNpYiwak8/maxresdefault.jpg"
    },
    {
      id: "k6t0Fivw0EQ",
      title: "Entrepreneurship Success Factors",
      thumbnail: "https://i3.ytimg.com/vi/k6t0Fivw0EQ/maxresdefault.jpg"
    }
  ];

  const playVideo = (videoId: string) => {
    setCurrentVideoId(videoId);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    toast("Playing video", {
      description: youtubeShorts.find(short => short.id === videoId)?.title,
      icon: <Play className="h-5 w-5 text-green-500" />
    });
  };

  const closeVideo = () => {
    setCurrentVideoId(null);
    if (!isPaused) {
      startAutoSlide();
    }
  };

  const togglePause = () => {
    setIsPaused(!isPaused);
    toast(isPaused ? "Auto-sliding resumed" : "Auto-sliding paused", {
      icon: isPaused ? <Play className="h-5 w-5 text-green-500" /> : <Pause className="h-5 w-5 text-orange-500" />
    });
    if (!isPaused) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    } else {
      startAutoSlide();
    }
  };

  const startAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = window.setInterval(() => {
      const carouselEl = document.querySelector('[data-embla-carousel]');
      if (carouselEl) {
        const nextButton = carouselEl.querySelector('[data-carousel-next]') as HTMLButtonElement;
        if (nextButton) {
          nextButton.click();
        }
      }
    }, 5000);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    if (!isPaused) {
      startAutoSlide();
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      clearTimeout(timer);
    };
  }, [isPaused]);

  return (
    <div className="relative py-16 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-slate-900">
      {currentVideoId ? (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="relative w-full max-w-3xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl border border-white/10 animate-scaleIn">
            <iframe
              src={`https://www.youtube.com/embed/${currentVideoId}?autoplay=1`}
              title="YouTube video player"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button
              onClick={closeVideo}
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 rounded-full p-2 text-white transition-colors transform hover:scale-110"
              aria-label="Close video"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      ) : null}

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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="aspect-[9/16] animate-pulse">
                  <Skeleton className="w-full h-full rounded-xl bg-gray-200 dark:bg-gray-700" />
                </div>
              ))}
            </div>
          ) : (
            <Carousel className="w-full" opts={{ loop: true }}>
              <CarouselContent>
                {youtubeShorts.map((short, index) => (
                  <CarouselItem key={short.id} className="md:basis-1/2 lg:basis-1/3 pl-4 transform transition-all duration-500">
                    <div 
                      className="relative group aspect-[9/16] rounded-xl overflow-hidden cursor-pointer bg-gray-900 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:z-10"
                      onClick={() => playVideo(short.id)}
                      onMouseEnter={() => setHoveredVideo(short.id)}
                      onMouseLeave={() => setHoveredVideo(null)}
                      style={{animationDelay: `${index * 100}ms`}}
                    >
                      <img
                        src={short.thumbnail}
                        alt={short.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-80"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
                      
                      {hoveredVideo === short.id && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="relative w-full h-full pointer-events-none">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 animate-pulse"></div>
                            <div className="absolute h-1 bottom-0 left-0 right-0 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 animate-[width_5s_linear_infinite]"></div>
                          </div>
                        </div>
                      )}
                      
                      <div className="absolute inset-0 flex flex-col justify-between p-4 text-white">
                        <div className="bg-black/50 backdrop-blur-sm p-3 rounded-lg transform translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                          <h3 className="font-bold text-lg">{short.title}</h3>
                        </div>
                        <div className="flex justify-center items-center">
                          <div className="bg-gradient-to-r from-red-600 to-purple-600 rounded-full p-3 opacity-90 group-hover:opacity-100 transform group-hover:scale-110 transition-all duration-300 shadow-lg">
                            <Play fill="white" size={24} className="animate-pulse" />
                          </div>
                        </div>
                      </div>
                      <div className="absolute top-2 right-2 bg-gradient-to-r from-red-600 to-purple-600 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="w-2 h-2 bg-white rounded-full animate-ping absolute"></span>
                        <span className="w-2 h-2 bg-white rounded-full relative"></span>
                        <span>SHORTS</span>
                      </div>
                    </div>
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
