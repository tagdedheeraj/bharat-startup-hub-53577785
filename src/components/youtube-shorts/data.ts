import { YouTubeShort } from './types';
import { queryDocuments } from '@/services/firebaseDataService';

// Initial YouTube shorts data
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

// Get YouTube shorts from Firebase
export const getYoutubeShorts = async (): Promise<YouTubeShort[]> => {
  try {
    // Attempt to fetch from Firebase
    const shorts = await queryDocuments<YouTubeShort>('youtubeShorts');
    
    // If there are shorts in Firebase, return them
    if (shorts && shorts.length > 0) {
      return shorts;
    } 
    
    // Otherwise return the initial data
    return youtubeShorts;
  } catch (error) {
    console.error("Error fetching YouTube shorts:", error);
    // Fall back to initial data if there's an error
    return youtubeShorts;
  }
};
