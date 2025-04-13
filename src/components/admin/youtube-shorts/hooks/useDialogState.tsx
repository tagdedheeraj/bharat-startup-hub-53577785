
import { useState } from 'react';
import { YouTubeShort } from '@/components/youtube-shorts/types';

export const useDialogState = () => {
  const [editingShort, setEditingShort] = useState<YouTubeShort | null>(null);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [pendingDeleteId, setPendingDeleteId] = useState<string | null>(null);

  const prepareEditShort = (short: YouTubeShort) => {
    setEditingShort(short);
    setIsEditDialogOpen(true);
  };

  const prepareDeleteShort = (id: string) => {
    setPendingDeleteId(id);
    setIsDeleteDialogOpen(true);
  };

  return {
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
  };
};
