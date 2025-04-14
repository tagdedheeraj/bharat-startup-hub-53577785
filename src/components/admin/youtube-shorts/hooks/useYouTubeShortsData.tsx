
import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { YouTubeShort } from '@/components/youtube-shorts/types';
import { youtubeShorts as initialYoutubeShorts, getYoutubeShorts } from '@/components/youtube-shorts/data';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db, isFirestoreAvailable } from '@/lib/firebase';

export const useYouTubeShortsData = (isOffline: boolean) => {
  const [youtubeShorts, setYoutubeShorts] = useState<YouTubeShort[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [networkStatus, setNetworkStatus] = useState({
    isConnected: !isOffline,
    lastChecked: new Date()
  });

  // Function to fetch shorts directly from Firestore
  const fetchShortsFromFirestore = async () => {
    try {
      const shortsCollection = collection(db, 'youtubeShorts');
      const shortsQuery = query(shortsCollection, orderBy('title'));
      const querySnapshot = await getDocs(shortsQuery);
      
      if (querySnapshot.empty) {
        console.log('No YouTube shorts found in Firestore, using initial data');
        return initialYoutubeShorts;
      }
      
      const shorts: YouTubeShort[] = [];
      querySnapshot.forEach(doc => {
        const data = doc.data();
        if (data && data.id) {
          shorts.push({
            id: data.id,
            title: data.title || 'Untitled Video',
            thumbnail: data.thumbnail || `https://i3.ytimg.com/vi/${data.id}/maxresdefault.jpg`,
            docId: doc.id
          });
        }
      });
      
      return shorts.length > 0 ? shorts : initialYoutubeShorts;
    } catch (error) {
      console.error("Error fetching YouTube shorts from Firestore:", error);
      throw error;
    }
  };

  // Fetch YouTube shorts on component mount
  useEffect(() => {
    const fetchShorts = async () => {
      setIsLoading(true);
      try {
        // First check if Firestore is available
        if (!isOffline) {
          const isAvailable = await isFirestoreAvailable();
          setNetworkStatus({
            isConnected: isAvailable,
            lastChecked: new Date()
          });
          
          if (isAvailable) {
            // If Firestore is available, fetch directly
            const shorts = await fetchShortsFromFirestore();
            setYoutubeShorts(shorts);
          } else {
            // If Firestore is not available, use the helper function
            const shorts = await getYoutubeShorts();
            setYoutubeShorts(shorts);
          }
        } else {
          // If explicitly offline, use the helper function
          const shorts = await getYoutubeShorts();
          setYoutubeShorts(shorts);
        }
      } catch (error) {
        console.error("Error fetching YouTube shorts:", error);
        setYoutubeShorts(initialYoutubeShorts);
        toast.error("Failed to load YouTube shorts");
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchShorts();
  }, [isOffline]);

  return { 
    youtubeShorts, 
    setYoutubeShorts, 
    isLoading,
    networkStatus
  };
};
