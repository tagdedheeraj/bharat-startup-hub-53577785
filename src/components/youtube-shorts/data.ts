import { YouTubeShort } from './types';
import { 
  collection, 
  getDocs, 
  query, 
  where, 
  orderBy, 
  DocumentData,
  limit,
  Timestamp
} from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { isFirestoreAvailable } from '@/lib/firebase/firestore';
import { toast } from 'sonner';

// Initial YouTube shorts data as fallback with verified IDs
export const youtubeShorts: YouTubeShort[] = [
  {
    id: "9xVDjuKP5gs",
    title: "Startup Masterclass",
    thumbnail: "https://i3.ytimg.com/vi/9xVDjuKP5gs/maxresdefault.jpg"
  },
  {
    id: "xoJEsLIgUQg",
    title: "Startup Masterclass",
    thumbnail: "https://i3.ytimg.com/vi/xoJEsLIgUQg/maxresdefault.jpg"
  }
];

// Helper to get thumbnail URL if missing
const getYouTubeThumbnail = (videoId: string): string => {
  return `https://i3.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
};

// Validate YouTube ID format
const isValidYouTubeID = (id: string): boolean => {
  // YouTube IDs are typically 11 characters
  return /^[a-zA-Z0-9_-]{11}$/.test(id);
};

// Convert Firestore document to YouTubeShort with proper typing and validation
const convertDocToYouTubeShort = (doc: DocumentData): YouTubeShort | null => {
  try {
    const data = doc.data();
    
    // Skip invalid entries
    if (!data || !data.id || !isValidYouTubeID(data.id)) {
      console.warn("Invalid YouTube short data:", data);
      return null;
    }
    
    return {
      id: data.id,
      title: data.title || "Untitled Video",
      // Use provided thumbnail or generate from YouTube ID
      thumbnail: data.thumbnail || getYouTubeThumbnail(data.id),
      docId: doc.id // Store the Firestore document ID
    };
  } catch (error) {
    console.error("Error converting doc to YouTubeShort:", error);
    return null;
  }
};

// Always return the static curated YouTube shorts (Firestore overrides disabled)
export const getYoutubeShorts = async (_timestamp?: number): Promise<YouTubeShort[]> => {
  return youtubeShorts;
};

// Add function to validate if YouTube video exists
export const validateYouTubeVideo = async (videoId: string): Promise<boolean> => {
  try {
    // YouTube data API would be better but requires API key
    // This is a simple check that at least verifies the thumbnail exists
    const response = await fetch(`https://img.youtube.com/vi/${videoId}/0.jpg`);
    return response.status === 200;
  } catch (error) {
    console.error("Error validating YouTube video:", error);
    return false;
  }
};

// Function to notify other components about shorts updates
export const notifyYouTubeShortsUpdated = () => {
  console.log("Setting youtube-shorts-updated flag in localStorage");
  localStorage.setItem('youtube-shorts-updated', Date.now().toString());
  
  // Dispatch event for same-window updates (when admin panel and home page are in same window)
  try {
    window.dispatchEvent(new CustomEvent('youtube-shorts-updated'));
  } catch (error) {
    console.error("Error dispatching youtube-shorts-updated event:", error);
  }
};
