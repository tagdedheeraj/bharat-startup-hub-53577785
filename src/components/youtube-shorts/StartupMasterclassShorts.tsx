
import { useState } from 'react';
import { Play, Youtube, Award, Clock } from 'lucide-react';
import { YouTubeShort } from './types';
import VideoPlayer from './VideoPlayer';

// Demo Shorts data with guaranteed working video IDs
const demoShorts: YouTubeShort[] = [
  {
    id: "pq22sadiXqQ",
    title: "Startup Funding Essentials",
    thumbnail: "https://i3.ytimg.com/vi/pq22sadiXqQ/maxresdefault.jpg"
  },
  {
    id: "lM3Tswmx8zM",
    title: "Market Validation Strategy",
    thumbnail: "https://i3.ytimg.com/vi/lM3Tswmx8zM/maxresdefault.jpg"
  },
  {
    id: "xkLNpYiwak8",
    title: "Pitch Deck Secrets",
    thumbnail: "https://i3.ytimg.com/vi/xkLNpYiwak8/maxresdefault.jpg"
  }
];

const StartupMasterclassShorts = () => {
  const [currentVideoId, setCurrentVideoId] = useState<string | null>(null);
  const [hoveredShort, setHoveredShort] = useState<string | null>(null);

  const playVideo = (id: string) => {
    setCurrentVideoId(id);
  };

  const closeVideo = () => {
    setCurrentVideoId(null);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-950 dark:to-purple-950">
      {currentVideoId && <VideoPlayer videoId={currentVideoId} onClose={closeVideo} />}
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold flex items-center justify-center gap-2 mb-4">
            <Award className="text-purple-600" />
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Startup Masterclass Shorts
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Essential startup knowledge in bite-sized videos. Learn from industry experts in just minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {demoShorts.map((short) => (
            <div 
              key={short.id}
              className={`relative rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 group
                ${hoveredShort === short.id ? 'ring-2 ring-purple-500 transform scale-[1.02]' : ''}`}
              onClick={() => playVideo(short.id)}
              onMouseEnter={() => setHoveredShort(short.id)}
              onMouseLeave={() => setHoveredShort(null)}
            >
              <div className="aspect-video relative">
                {/* Thumbnail */}
                <img 
                  src={short.thumbnail} 
                  alt={short.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity"></div>
                
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-purple-600/80 rounded-full p-3 opacity-80 group-hover:opacity-100 transform transition-all duration-300 group-hover:scale-110">
                    <Play fill="white" className="h-6 w-6" />
                  </div>
                </div>
                
                {/* Time indicator */}
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-md flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  <span>1:30</span>
                </div>
              </div>
              
              <div className="p-4 bg-white dark:bg-gray-800">
                <h3 className="font-semibold text-lg text-gray-800 dark:text-white mb-2">{short.title}</h3>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <Youtube className="h-4 w-4 mr-1 text-red-600" />
                  <span>Startup Masterclass</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <a 
            href="https://www.youtube.com/@example/shorts" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
          >
            View all Masterclass Shorts
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default StartupMasterclassShorts;
