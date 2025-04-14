
import { YouTubeShort } from "../types";

// Import demo shorts data to get video titles
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

// Get video title by ID
export const getVideoTitle = (videoId: string): string => {
  const foundVideo = demoShorts.find(short => short.id === videoId);
  return foundVideo?.title || "YouTube Short";
};
