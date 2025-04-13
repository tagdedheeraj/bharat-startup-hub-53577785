
import { useState, useEffect } from 'react';
import { YouTubeShort } from '@/components/youtube-shorts/types';
import { toast } from 'sonner';
import { youtubeShorts as initialYoutubeShorts } from '@/components/youtube-shorts/data';
import { createDocument, updateDocument, deleteDocument, queryDocuments } from '@/services/firebaseDataService';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export const useYouTubeShortsManager = () => {
  const [youtubeShorts, setYoutubeShorts] = useState<YouTubeShort[]>([]);
  const [editingShort, setEditingShort] = useState<YouTubeShort | null>(null);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [pendingDeleteId, setPendingDeleteId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load YouTube shorts from Firebase on component mount
  useEffect(() => {
    const fetchShorts = async () => {
      setIsLoading(true);
      try {
        // Try to fetch from Firebase first
        const shorts = await queryDocuments<YouTubeShort>('youtubeShorts');
        
        if (shorts && shorts.length > 0) {
          setYoutubeShorts(shorts);
        } else {
          // If no data in Firebase, use the initial data
          console.log('No shorts found in Firebase, using initial data');
          setYoutubeShorts(initialYoutubeShorts);
          
          // Initialize Firebase with initial data if empty
          initialYoutubeShorts.forEach(async (short) => {
            await createDocument('youtubeShorts', short);
          });
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
  }, []);

  const handleAddShort = async (data: YouTubeShort) => {
    try {
      setIsLoading(true);
      if (youtubeShorts.some(short => short.id === data.id)) {
        toast.error("A video with this YouTube ID already exists!");
        return;
      }

      if (!data.thumbnail) {
        data.thumbnail = `https://i3.ytimg.com/vi/${data.id}/maxresdefault.jpg`;
      }

      // Save to Firebase
      const docId = await createDocument('youtubeShorts', data);
      
      // Update local state with the new short and its document ID
      const newShort = { ...data, docId };
      const updatedShorts = [...youtubeShorts, newShort];
      setYoutubeShorts(updatedShorts);
      
      toast.success("YouTube short added successfully!");
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
      if (!data.thumbnail) {
        data.thumbnail = `https://i3.ytimg.com/vi/${data.id}/maxresdefault.jpg`;
      }

      // Find the document ID from the existing short
      const existingShort = youtubeShorts.find(short => short.id === editingShort?.id);
      const docId = existingShort?.docId || editingShort?.id;
      
      if (!docId) {
        toast.error("Cannot identify the video to update");
        return;
      }

      // Update in Firebase
      await updateDocument('youtubeShorts', docId, data);
      
      // Update local state
      const updatedShorts = youtubeShorts.map(short => 
        short.id === editingShort?.id ? { ...data, docId } : short
      );
      setYoutubeShorts(updatedShorts);
      
      toast.success("YouTube short updated successfully!");
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
      if (!pendingDeleteId) return;
      
      // Find the document ID from the existing short
      const existingShort = youtubeShorts.find(short => short.id === pendingDeleteId);
      const docId = existingShort?.docId || pendingDeleteId;
      
      if (!docId) {
        toast.error("Cannot identify the video to delete");
        return;
      }

      // Delete from Firebase
      await deleteDocument('youtubeShorts', docId);
      
      // Update local state
      const updatedShorts = youtubeShorts.filter(short => short.id !== pendingDeleteId);
      setYoutubeShorts(updatedShorts);
      
      toast.success("YouTube short deleted successfully!");
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
    handleAddShort,
    handleEditShort,
    prepareEditShort,
    prepareDeleteShort,
    handleDeleteShort
  };
};
