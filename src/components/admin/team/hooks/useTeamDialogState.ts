
import { useState } from 'react';
import { TeamMember } from '../types';

export const useTeamDialogState = () => {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [editingMember, setEditingMember] = useState<TeamMember | null>(null);
  const [pendingDeleteId, setPendingDeleteId] = useState<string | null>(null);

  const prepareEditMember = (member: TeamMember | null) => {
    setEditingMember(member);
    setIsEditDialogOpen(!!member);
  };

  const prepareDeleteMember = (id: string | null) => {
    setPendingDeleteId(id);
    setIsDeleteDialogOpen(!!id);
  };

  return {
    isAddDialogOpen,
    setIsAddDialogOpen,
    isEditDialogOpen,
    setIsEditDialogOpen,
    isDeleteDialogOpen,
    setIsDeleteDialogOpen,
    editingMember,
    setEditingMember,
    pendingDeleteId,
    setPendingDeleteId,
    prepareEditMember,
    prepareDeleteMember,
  };
};
