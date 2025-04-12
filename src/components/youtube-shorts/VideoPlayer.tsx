
import { X } from 'lucide-react';

interface VideoPlayerProps {
  videoId: string;
  onClose: () => void;
}

const VideoPlayer = ({ videoId, onClose }: VideoPlayerProps) => {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="relative w-full max-w-3xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl border border-white/10 animate-scaleIn">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title="YouTube video player"
          className="w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 rounded-full p-2 text-white transition-colors transform hover:scale-110"
          aria-label="Close video"
        >
          <X className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;
