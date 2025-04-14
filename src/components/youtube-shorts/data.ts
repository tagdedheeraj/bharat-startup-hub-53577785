
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
    id: "lM3Tswmx8zM",
    title: "Business Strategy Secrets",
    thumbnail: "https://i3.ytimg.com/vi/lM3Tswmx8zM/maxresdefault.jpg"
  },
  {
    id: "k6t0Fivw0EQ",
    title: "Entrepreneurship Success Factors",
    thumbnail: "https://i3.ytimg.com/vi/k6t0Fivw0EQ/maxresdefault.jpg"
  },
  {
    id: "pq22sadiXqQ", // Added from FirstTimeVideoPopup for guaranteed working video
    title: "Startup Funding Guide",
    thumbnail: "https://i3.ytimg.com/vi/pq22sadiXqQ/maxresdefault.jpg"
  },
  {
    id: "sEKYtxnpAP4", // New video added per user request
    title: "Startup Growth Strategies",
    thumbnail: "https://i3.ytimg.com/vi/sEKYtxnpAP4/maxresdefault.jpg"
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

// Get YouTube shorts from Firebase with improved error handling
export const getYoutubeShorts = async (): Promise<YouTubeShort[]> => {
  try {
    console.log("Checking Firestore availability...");
    // First check if Firestore is available
    const isAvailable = await isFirestoreAvailable();
    
    if (!isAvailable) {
      console.warn("Firestore is not available, using initial data");
      return youtubeShorts;
    }
    
    console.log("Firestore is available, fetching YouTube shorts...");
    
    // Set up query with ordering and limit to prevent large data fetches
    const shortsCollection = collection(db, 'youtubeShorts');
    const shortsQuery = query(
      shortsCollection, 
      orderBy('title'),
      limit(10) // Limit to reasonable number
    );
    
    console.log("Executing Firestore query...");
    const querySnapshot = await getDocs(shortsQuery);
    
    // Check if we have results
    if (querySnapshot.empty) {
      console.log('No YouTube shorts found in Firestore, using initial data');
      return youtubeShorts;
    }
    
    // Convert to YouTubeShort objects and filter out invalid ones
    const shorts: YouTubeShort[] = [];
    querySnapshot.forEach(doc => {
      const short = convertDocToYouTubeShort(doc);
      if (short) {
        shorts.push(short);
      }
    });
    
    console.log(`Successfully loaded ${shorts.length} YouTube shorts from Firestore`);
    
    // If we got valid shorts, return them, otherwise use initial data
    if (shorts.length > 0) {
      return shorts;
    } else {
      console.log('No valid YouTube shorts found in Firestore, using initial data');
      return youtubeShorts;
    }
  } catch (error) {
    console.error("Error fetching YouTube shorts:", error);
    toast.error("Could not load YouTube shorts. Using fallback data.");
    return youtubeShorts;
  }
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
