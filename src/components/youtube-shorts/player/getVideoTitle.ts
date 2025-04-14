
/**
 * Get a video title by ID, with fallback to a default title
 */
export const getVideoTitle = (videoId: string): string => {
  // Map of known video IDs to their titles
  const titleMap: Record<string, string> = {
    "pq22sadiXqQ": "Startup Funding Guide",
    "lM3Tswmx8zM": "Business Strategy Secrets",
    "xkLNpYiwak8": "Business Model Innovation",
    "k6t0Fivw0EQ": "Entrepreneurship Success Factors",
    "sEKYtxnpAP4": "Startup Growth Strategies", // Added new video title
  };
  
  // Return the mapped title or a default one
  const title = titleMap[videoId];
  
  if (!title) {
    console.log(`No title found for video ID: ${videoId}, using default`);
    return "Startup Masterclass";
  }
  
  return title;
};

/**
 * Validate YouTube ID format
 */
export const isValidYouTubeID = (id: string): boolean => {
  // YouTube IDs are typically 11 characters
  return /^[a-zA-Z0-9_-]{11}$/.test(id);
};

/**
 * Get a thumbnail URL for a YouTube video ID
 */
export const getYouTubeThumbnail = (videoId: string): string => {
  return `https://i3.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
};
