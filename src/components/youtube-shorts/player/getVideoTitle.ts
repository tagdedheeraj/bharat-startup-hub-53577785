
export const getVideoTitle = (videoId: string): string => {
  // Map of known video IDs to their titles
  const titleMap: Record<string, string> = {
    "pq22sadiXqQ": "Startup Funding Guide",
    "lM3Tswmx8zM": "Business Strategy Secrets",
    "xkLNpYiwak8": "Business Model Innovation",
    "k6t0Fivw0EQ": "Entrepreneurship Success Factors",
    "JX2sZHuY8NU": "Erkenci Kuş - Pehla Panchi",
  };
  
  // Return the mapped title or a default one
  return titleMap[videoId] || "Startup Masterclass";
};
