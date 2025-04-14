
import { YouTubeShort } from './types';
import { 
  collection, 
  getDocs, 
  query, 
  where, 
  orderBy, 
  DocumentData 
} from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { isFirestoreAvailable } from '@/lib/firebase/firestore';
import { toast } from 'sonner';

// Initial YouTube shorts data as fallback
export const youtubeShorts: YouTubeShort[] = [
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

// Convert Firestore document to YouTubeShort with proper typing
const convertDocToYouTubeShort = (doc: DocumentData): YouTubeShort => {
  const data = doc.data();
  return {
    id: data.id,
    title: data.title,
    thumbnail: data.thumbnail,
    docId: doc.id // Store the Firestore document ID
  };
};

// Get YouTube shorts from Firebase with improved error handling
export const getYoutubeShorts = async (): Promise<YouTubeShort[]> => {
  try {
    // First check if Firestore is available
    const isAvailable = await isFirestoreAvailable();
    
    if (!isAvailable) {
      console.warn("Firestore is not available, using initial data");
      return youtubeShorts;
    }
    
    // Set up query with ordering
    const shortsCollection = collection(db, 'youtubeShorts');
    const shortsQuery = query(shortsCollection, orderBy('title'));
    const querySnapshot = await getDocs(shortsQuery);
    
    // Check if we have results
    if (querySnapshot.empty) {
      console.log('No YouTube shorts found in Firestore, using initial data');
      return youtubeShorts;
    }
    
    // Convert to YouTubeShort objects
    const shorts: YouTubeShort[] = [];
    querySnapshot.forEach(doc => {
      shorts.push(convertDocToYouTubeShort(doc));
    });
    
    return shorts;
  } catch (error) {
    console.error("Error fetching YouTube shorts:", error);
    toast.error("Could not load YouTube shorts. Using fallback data.");
    return youtubeShorts;
  }
};
