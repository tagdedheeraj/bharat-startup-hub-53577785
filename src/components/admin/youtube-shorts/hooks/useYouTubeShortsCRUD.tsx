
import { useState } from 'react';
import { YouTubeShort } from '@/components/youtube-shorts/types';
import { toast } from 'sonner';
import { 
  collection, 
  doc, 
  addDoc, 
  updateDoc, 
  deleteDoc,
  serverTimestamp 
} from 'firebase/firestore';
import { db, isFirestoreAvailable } from '@/lib/firebase';

export const useYouTubeShortsCRUD = (
  youtubeShorts: YouTubeShort[],
  setYoutubeShorts: React.Dispatch<React.SetStateAction<YouTubeShort[]>>,
  isOffline: boolean
) => {
  const [isLoading, setIsLoading] = useState(false);

  // Add a new YouTube short
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
      return true;
    } catch (error) {
      console.error("Error adding YouTube short:", error);
      toast.error("Failed to add YouTube short");
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  // Edit an existing YouTube short
  const handleEditShort = async (data: YouTubeShort, editingShort: YouTubeShort | null) => {
    try {
      setIsLoading(true);
      
      if (!editingShort) {
        toast.error("No short selected for editing");
        return false;
      }
      
      // Set thumbnail if not provided
      if (!data.thumbnail) {
        data.thumbnail = `https://i3.ytimg.com/vi/${data.id}/maxresdefault.jpg`;
      }

      // Find the existing short
      const existingShortIndex = youtubeShorts.findIndex(
        short => short.id === editingShort.id
      );
      
      if (existingShortIndex === -1) {
        toast.error("Cannot find the short to update");
        return false;
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
      return true;
    } catch (error) {
      console.error("Error updating YouTube short:", error);
      toast.error("Failed to update YouTube short");
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  // Delete a YouTube short
  const handleDeleteShort = async (pendingDeleteId: string | null) => {
    try {
      setIsLoading(true);
      if (!pendingDeleteId) {
        toast.error("No short selected for deletion");
        return false;
      }
      
      // Find the short to delete
      const shortToDelete = youtubeShorts.find(
        short => short.id === pendingDeleteId
      );
      
      if (!shortToDelete) {
        toast.error("Cannot find the short to delete");
        return false;
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
      
      return true;
    } catch (error) {
      console.error("Error deleting YouTube short:", error);
      toast.error("Failed to delete YouTube short");
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    handleAddShort,
    handleEditShort,
    handleDeleteShort
  };
};
