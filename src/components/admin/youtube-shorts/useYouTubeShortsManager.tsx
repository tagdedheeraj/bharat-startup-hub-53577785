
import { useState } from 'react';
import { YouTubeShort } from '@/components/youtube-shorts/types';
import { toast } from 'sonner';
import { youtubeShorts as initialYoutubeShorts } from '@/components/youtube-shorts/data';

export const useYouTubeShortsManager = () => {
  const [youtubeShorts, setYoutubeShorts] = useState<YouTubeShort[]>(initialYoutubeShorts);
  const [editingShort, setEditingShort] = useState<YouTubeShort | null>(null);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [pendingDeleteId, setPendingDeleteId] = useState<string | null>(null);

  const handleAddShort = (data: YouTubeShort) => {
    try {
      if (youtubeShorts.some(short => short.id === data.id)) {
        toast.error("A video with this YouTube ID already exists!");
        return;
      }

      if (!data.thumbnail) {
        data.thumbnail = `https://i3.ytimg.com/vi/${data.id}/maxresdefault.jpg`;
      }

      const updatedShorts = [...youtubeShorts, data];
      setYoutubeShorts(updatedShorts);
      
      toast.success("YouTube short added successfully!");
      setIsAddDialogOpen(false);
    } catch (error) {
      console.error("Error adding YouTube short:", error);
      toast.error("Failed to add YouTube short");
    }
  };

  const handleEditShort = (data: YouTubeShort) => {
    try {
      if (!data.thumbnail) {
        data.thumbnail = `https://i3.ytimg.com/vi/${data.id}/maxresdefault.jpg`;
      }

      const updatedShorts = youtubeShorts.map(short => 
        short.id === editingShort?.id ? data : short
      );
      setYoutubeShorts(updatedShorts);
      
      toast.success("YouTube short updated successfully!");
      setIsEditDialogOpen(false);
      setEditingShort(null);
    } catch (error) {
      console.error("Error updating YouTube short:", error);
      toast.error("Failed to update YouTube short");
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

  const handleDeleteShort = () => {
    try {
      if (!pendingDeleteId) return;
      
      const updatedShorts = youtubeShorts.filter(short => short.id !== pendingDeleteId);
      setYoutubeShorts(updatedShorts);
      
      toast.success("YouTube short deleted successfully!");
      setIsDeleteDialogOpen(false);
      setPendingDeleteId(null);
    } catch (error) {
      console.error("Error deleting YouTube short:", error);
      toast.error("Failed to delete YouTube short");
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
    handleAddShort,
    handleEditShort,
    prepareEditShort,
    prepareDeleteShort,
    handleDeleteShort
  };
};
