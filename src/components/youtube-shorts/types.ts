
export interface YouTubeShort {
  id: string;       // YouTube video ID
  title: string;    // Short title
  thumbnail: string; // Thumbnail URL
  docId?: string;   // Firestore document ID (optional for new items)
}
