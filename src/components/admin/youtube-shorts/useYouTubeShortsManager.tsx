
import { useState, useEffect } from 'react';
import { YouTubeShort } from '@/components/youtube-shorts/types';
import { toast } from 'sonner';
import { youtubeShorts as initialYoutubeShorts, getYoutubeShorts } from '@/components/youtube-shorts/data';
import { 
  collection, 
  doc, 
  addDoc, 
  updateDoc, 
  deleteDoc,
  getDocs,
  serverTimestamp 
} from 'firebase/firestore';
import { db, isFirestoreAvailable } from '@/lib/firebase';

export const useYouTubeShortsManager = () => {
  const [youtubeShorts, setYoutubeShorts] = useState<YouTubeShort[]>([]);
  const [editingShort, setEditingShort] = useState<YouTubeShort | null>(null);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [pendingDeleteId, setPendingDeleteId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isOffline, setIsOffline] = useState(false);

  // Load YouTube shorts on component mount
  useEffect(() => {
    const fetchShorts = async () => {
      setIsLoading(true);
      try {
        const firestoreAvailable = await isFirestoreAvailable();
        setIsOffline(!firestoreAvailable);
        
        const shorts = await getYoutubeShorts();
        setYoutubeShorts(shorts);
        
        if (!firestoreAvailable) {
          toast.warning("Operating in offline mode. Changes won't be saved to the database.");
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
    
    // Add online/offline event listeners
    const handleOnline = () => {
      toast.success("You're back online");
      setIsOffline(false);
      fetchShorts(); // Refresh data when coming back online
    };
    
    const handleOffline = () => {
      toast.warning("You're offline. Changes won't be saved.");
      setIsOffline(true);
    };
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleAddShort = async (data: YouTubeShort) => {
    try {
      setIsLoading(true);
      
      // Check for duplicate
      if (youtubeShorts.some(short => short.id === data.id)) {
        toast.error("A video with this YouTube ID already exists!");
        return;
      }

      // Set thumbnail if not provided
      if (!data.thumbnail) {
        data.thumbnail = `https://i3.ytimg.com/vi/${data.id}/maxresdefault.jpg`;
      }

      let newShort = { ...data };
      
      if (!isOffline) {
        try {
          // Add to Firestore
          const shortsCollection = collection(db, 'youtubeShorts');
          const docRef = await addDoc(shortsCollection, {
            ...data,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp()
          });
          
          // Store the document ID
          newShort.docId = docRef.id;
          toast.success("YouTube short added successfully!");
        } catch (error) {
          console.error("Error adding to Firestore:", error);
          toast.error("Failed to save to database, but added locally");
        }
      } else {
        toast.warning("Added locally only (offline mode)");
      }
      
      // Update local state
      setYoutubeShorts(prev => [...prev, newShort]);
      setIsAddDialogOpen(false);
    } catch (error) {
      console.error("Error adding YouTube short:", error);
      toast.error("Failed to add YouTube short");
    } finally {
      setIsLoading(false);
    }
  };

  const handleEditShort = async (data: YouTubeShort) => {
    try {
      setIsLoading(true);
      
      // Set thumbnail if not provided
      if (!data.thumbnail) {
        data.thumbnail = `https://i3.ytimg.com/vi/${data.id}/maxresdefault.jpg`;
      }

      // Find the existing short
      const existingShortIndex = youtubeShorts.findIndex(
        short => short.id === editingShort?.id
      );
      
      if (existingShortIndex === -1) {
        toast.error("Cannot find the short to update");
        return;
      }
      
      const existingShort = youtubeShorts[existingShortIndex];
      const docId = existingShort.docId;
      
      // Update in Firestore if we have a document ID and we're online
      if (docId && !isOffline) {
        try {
          const shortRef = doc(db, 'youtubeShorts', docId);
          await updateDoc(shortRef, {
            ...data,
            updatedAt: serverTimestamp()
          });
          toast.success("YouTube short updated in database!");
        } catch (error) {
          console.error("Error updating in Firestore:", error);
          toast.error("Failed to update in database, but updated locally");
        }
      } else if (isOffline) {
        toast.warning("Updated locally only (offline mode)");
      }
      
      // Update local state (preserve docId if it exists)
      const updatedShort = { ...data, docId: existingShort.docId };
      const updatedShorts = [...youtubeShorts];
      updatedShorts[existingShortIndex] = updatedShort;
      
      setYoutubeShorts(updatedShorts);
      setIsEditDialogOpen(false);
      setEditingShort(null);
    } catch (error) {
      console.error("Error updating YouTube short:", error);
      toast.error("Failed to update YouTube short");
    } finally {
      setIsLoading(false);
    }
  };

  const prepareEditShort = (short: YouTubeShort) => {
    setEditingShort(short);
    setIsEditDialogOpen(true);
  };

  const prepareDeleteShort = (id: string) => {
    setPendingDeleteId(id);
    setIsDeleteDialogOpen(true);
  };

  const handleDeleteShort = async () => {
    try {
      setIsLoading(true);
      if (!pendingDeleteId) {
        toast.error("No short selected for deletion");
        return;
      }
      
      // Find the short to delete
      const shortToDelete = youtubeShorts.find(
        short => short.id === pendingDeleteId
      );
      
      if (!shortToDelete) {
        toast.error("Cannot find the short to delete");
        return;
      }
      
      const docId = shortToDelete.docId;
      
      // Delete from Firestore if we have a document ID and we're online
      if (docId && !isOffline) {
        try {
          await deleteDoc(doc(db, 'youtubeShorts', docId));
          toast.success("YouTube short deleted from database!");
        } catch (error) {
          console.error("Error deleting from Firestore:", error);
          toast.error("Failed to delete from database, but removed locally");
        }
      } else if (isOffline) {
        toast.warning("Removed locally only (offline mode)");
      }
      
      // Update local state
      setYoutubeShorts(youtubeShorts.filter(
        short => short.id !== pendingDeleteId
      ));
      
      setIsDeleteDialogOpen(false);
      setPendingDeleteId(null);
    } catch (error) {
      console.error("Error deleting YouTube short:", error);
      toast.error("Failed to delete YouTube short");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    youtubeShorts,
    editingShort,
    isAddDialogOpen,
    setIsAddDialogOpen,
    isEditDialogOpen,
    setIsEditDialogOpen,
    isDeleteDialogOpen,
    setIsDeleteDialogOpen,
    pendingDeleteId,
    isLoading,
    isOffline,
    handleAddShort,
    handleEditShort,
    prepareEditShort,
    prepareDeleteShort,
    handleDeleteShort
  };
};
