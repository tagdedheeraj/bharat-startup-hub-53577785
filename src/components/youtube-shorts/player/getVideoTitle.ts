/**
 * Get title for a video based on ID
 * Simple utility to extract title from known videos
 */
export const getVideoTitle = (videoId: string): string => {
  const videoTitles: Record<string, string> = {
    // Add known video titles here
    'pq22sadiXqQ': 'Startup Funding Guide',
    'lM3Tswmx8zM': 'Business Strategy Secrets',
    'xkLNpYiwak8': 'Business Model Innovation',
    'k6t0Fivw0EQ': 'Entrepreneurship Success Factors',
    // Default fallback for unknown videos
    'default': 'YouTube Video'
  };
  
  return videoTitles[videoId] || videoTitles.default;
};
