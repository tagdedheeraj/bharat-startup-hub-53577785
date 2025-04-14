
import { useState } from 'react';
import { YouTubeShort } from '@/components/youtube-shorts/types';
import { useNetworkStatus } from './hooks/useNetworkStatus';
import { useYouTubeShortsData } from './hooks/useYouTubeShortsData';
import { useYouTubeShortsCRUD } from './hooks/useYouTubeShortsCRUD';
import { useDialogState } from './hooks/useDialogState';

export const useYouTubeShortsManager = () => {
  // Get network status
  const { isOffline, isLoading: networkLoading } = useNetworkStatus();
  
  // Get YouTube shorts data
  const { 
    youtubeShorts, 
    setYoutubeShorts, 
    isLoading: dataLoading 
  } = useYouTubeShortsData(isOffline);
  
  // Get dialog state management
  const {
    editingShort,
    setEditingShort,
    isAddDialogOpen,
    setIsAddDialogOpen,
    isEditDialogOpen,
    setIsEditDialogOpen,
    isDeleteDialogOpen,
    setIsDeleteDialogOpen,
    pendingDeleteId,
    setPendingDeleteId,
    prepareEditShort,
    prepareDeleteShort
  } = useDialogState();
  
  // Get CRUD operations
  const {
    isLoading: crudLoading,
    handleAddShort: addShort,
    handleEditShort: editShort,
    handleDeleteShort: deleteShort
  } = useYouTubeShortsCRUD(youtubeShorts, setYoutubeShorts, isOffline);
  
  // Combined loading state
  const isLoading = networkLoading || dataLoading || crudLoading;
  
  // Wrapper functions with dialog management
  const handleAddShort = async (data: YouTubeShort) => {
    const success = await addShort(data);
    if (success) {
      setIsAddDialogOpen(false);
    }
  };

  const handleEditShort = async (data: YouTubeShort) => {
    const success = await editShort(data, editingShort);
    if (success) {
      setIsEditDialogOpen(false);
      setEditingShort(null);
    }
  };

  const handleDeleteShort = async () => {
    const success = await deleteShort(pendingDeleteId);
    if (success) {
      setIsDeleteDialogOpen(false);
      setPendingDeleteId(null);
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
