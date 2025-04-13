
import { YouTubeShort } from './types';

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

// In a production application, this would fetch from Firebase
// For now, we'll just return the static data
export const getYoutubeShorts = async (): Promise<YouTubeShort[]> => {
  // In a real application, this would fetch from Firebase
  // Example:
  // const shorts = await queryDocuments<YouTubeShort>('youtubeShorts');
  // return shorts;
  
  return youtubeShorts;
};
