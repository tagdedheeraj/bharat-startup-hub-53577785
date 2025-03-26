
import { useState, useEffect, useRef } from 'react';
import { Youtube, Play, Pause } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

interface YouTubeShort {
  id: string;
  title: string;
  thumbnail: string;
}

const YouTubeShortsCarousel = () => {
  const [currentVideoId, setCurrentVideoId] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const youtubeShorts: YouTubeShort[] = [
    {
      id: "J4YZoMxz9PU",
      title: "Start Your Business With Minimal Capital",
      thumbnail: "https://i3.ytimg.com/vi/J4YZoMxz9PU/maxresdefault.jpg"
    },
    {
      id: "sU_Kim5tpBw",
      title: "How to Register Your Startup in India",
      thumbnail: "https://i3.ytimg.com/vi/sU_Kim5tpBw/maxresdefault.jpg"
    },
    {
      id: "G9xLmmBbyyI",
      title: "Funding Options for Small Businesses",
      thumbnail: "https://i3.ytimg.com/vi/G9xLmmBbyyI/maxresdefault.jpg"
    },
    {
      id: "xg2qaCQGQ0o",
      title: "Tax Benefits for Startups in India",
      thumbnail: "https://i3.ytimg.com/vi/xg2qaCQGQ0o/maxresdefault.jpg"
    },
    {
      id: "C_Mhig3Fl8k",
      title: "Business Compliance Made Easy",
      thumbnail: "https://i3.ytimg.com/vi/C_Mhig3Fl8k/maxresdefault.jpg"
    }
  ];

  const playVideo = (videoId: string) => {
    setCurrentVideoId(videoId);
    // Pause the auto-slide when a video is playing
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const closeVideo = () => {
    setCurrentVideoId(null);
    // Resume auto-slide when video is closed
    if (!isPaused) {
      startAutoSlide();
    }
  };

  const togglePause = () => {
    setIsPaused(!isPaused);
    if (!isPaused) {
      // Pause the slideshow
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    } else {
      // Resume the slideshow
      startAutoSlide();
    }
  };

  const startAutoSlide = () => {
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    // Set a new interval
    intervalRef.current = window.setInterval(() => {
      const carouselEl = document.querySelector('[data-embla-carousel]');
      if (carouselEl) {
        const nextButton = carouselEl.querySelector('[data-carousel-next]') as HTMLButtonElement;
        if (nextButton) {
          nextButton.click();
        }
      }
    }, 5000); // Change slide every 5 seconds
  };

  useEffect(() => {
    // Start the auto slide when component mounts if not paused
    if (!isPaused) {
      startAutoSlide();
    }

    // Clean up interval on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused]);

  return (
    <div className="relative">
      {currentVideoId ? (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-3xl aspect-video bg-black rounded-lg overflow-hidden">
            <iframe
              src={`https://www.youtube.com/embed/${currentVideoId}?autoplay=1`}
              title="YouTube video player"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button
              onClick={closeVideo}
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 rounded-full p-2 text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      ) : null}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
            <Youtube className="text-red-600" />
            <span>Startup Tips Shorts</span>
          </h2>
          <button
            onClick={togglePause}
            className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full transition-colors"
          >
            {isPaused ? <Play size={18} /> : <Pause size={18} />}
            <span>{isPaused ? "Resume" : "Pause"} Slideshow</span>
          </button>
        </div>

        <Carousel className="w-full">
          <CarouselContent>
            {youtubeShorts.map((short) => (
              <CarouselItem key={short.id} className="md:basis-1/2 lg:basis-1/3">
                <div 
                  className="relative group aspect-[9/16] rounded-xl overflow-hidden cursor-pointer bg-gray-900 transform transition-transform hover:scale-[1.02] shadow-lg"
                  onClick={() => playVideo(short.id)}
                >
                  <img
                    src={short.thumbnail}
                    alt={short.title}
                    className="w-full h-full object-cover transition-opacity group-hover:opacity-80"
                  />
                  <div className="absolute inset-0 flex flex-col justify-between p-4 text-white">
                    <div className="bg-gradient-to-b from-black/70 to-transparent p-2 rounded-lg">
                      <h3 className="font-bold">{short.title}</h3>
                    </div>
                    <div className="flex justify-center items-center">
                      <div className="bg-red-600 rounded-full p-3 opacity-90 group-hover:opacity-100 transform group-hover:scale-110 transition-all">
                        <Play fill="white" size={24} />
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 z-10">
            <CarouselPrevious className="relative left-0" data-carousel-prev />
          </div>
          <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-10">
            <CarouselNext className="relative right-0" data-carousel-next />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default YouTubeShortsCarousel;
