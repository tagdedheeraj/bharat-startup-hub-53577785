
import { useState } from 'react';
import { TeamMember } from '../types';
import { db } from '@/lib/firebase';
import { v4 as uuidv4 } from 'uuid';
import { collection, addDoc, doc, updateDoc, deleteDoc, serverTimestamp } from 'firebase/firestore';
import { toast } from 'sonner';
import { notifyTeamMembersUpdated } from '../utils/notifications';

export const useTeamOperations = (
  isOffline: boolean,
  setTeamMembers: React.Dispatch<React.SetStateAction<TeamMember[]>>,
  setError: (error: string | null) => void
) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleAddMember = async (data: TeamMember) => {
    setIsLoading(true);
    setError(null);
    
    try {
      if (isOffline) {
        const offlineId = `temp_${uuidv4()}`;
        const newMember = {
          ...data,
          id: offlineId,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        };
        
        setTeamMembers(prev => [newMember, ...prev]);
        
        const cachedData = JSON.parse(localStorage.getItem('team-members-cache') || '[]');
        localStorage.setItem('team-members-cache', JSON.stringify([newMember, ...cachedData]));
        
        toast.success("Team member added locally (offline mode)");
        notifyTeamMembersUpdated();
        return;
      }
      
      const teamCollection = collection(db, 'teamMembers');
      const docRef = await addDoc(teamCollection, {
        ...data,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });
      
      const newMember = {
        ...data,
        id: docRef.id
      };
      
      setTeamMembers(prev => [newMember, ...prev]);
      
      const cachedData = JSON.parse(localStorage.getItem('team-members-cache') || '[]');
      localStorage.setItem('team-members-cache', JSON.stringify([newMember, ...cachedData]));
      
      toast.success("Team member added successfully");
      notifyTeamMembersUpdated();
    } catch (err) {
      console.error("Error adding team member:", err);
      setError("Failed to add team member. Please try again.");
      toast.error("Failed to add team member");
    } finally {
      setIsLoading(false);
    }
  };

  const handleEditMember = async (data: TeamMember, editingMemberId: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const updatedMember = {
        ...data,
        id: editingMemberId
      };
      
      if (isOffline) {
        setTeamMembers(prev => 
          prev.map(member => 
            member.id === editingMemberId ? updatedMember : member
          )
        );
        
        const cachedData = JSON.parse(localStorage.getItem('team-members-cache') || '[]');
        const updatedCache = cachedData.map((member: TeamMember) => 
          member.id === editingMemberId ? updatedMember : member
        );
        localStorage.setItem('team-members-cache', JSON.stringify(updatedCache));
        
        toast.success("Team member updated locally (offline mode)");
        notifyTeamMembersUpdated();
        return;
      }
      
      const memberRef = doc(db, 'teamMembers', editingMemberId);
      await updateDoc(memberRef, {
        ...data,
        updatedAt: serverTimestamp()
      });
      
      setTeamMembers(prev => 
        prev.map(member => 
          member.id === editingMemberId ? updatedMember : member
        )
      );
      
      const cachedData = JSON.parse(localStorage.getItem('team-members-cache') || '[]');
      const updatedCache = cachedData.map((member: TeamMember) => 
        member.id === editingMemberId ? updatedMember : member
      );
      localStorage.setItem('team-members-cache', JSON.stringify(updatedCache));
      
      toast.success("Team member updated successfully");
      notifyTeamMembersUpdated();
    } catch (err) {
      console.error("Error updating team member:", err);
      setError("Failed to update team member. Please try again.");
      toast.error("Failed to update team member");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteMember = async (memberId: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      if (isOffline) {
        setTeamMembers(prev => 
          prev.filter(member => member.id !== memberId)
        );
        
        const cachedData = JSON.parse(localStorage.getItem('team-members-cache') || '[]');
        const updatedCache = cachedData.filter((member: TeamMember) => member.id !== memberId);
        localStorage.setItem('team-members-cache', JSON.stringify(updatedCache));
        
        toast.success("Team member deleted locally (offline mode)");
        notifyTeamMembersUpdated();
        return;
      }
      
      const memberRef = doc(db, 'teamMembers', memberId);
      await deleteDoc(memberRef);
      
      setTeamMembers(prev => 
        prev.filter(member => member.id !== memberId)
      );
      
      const cachedData = JSON.parse(localStorage.getItem('team-members-cache') || '[]');
      const updatedCache = cachedData.filter((member: TeamMember) => member.id !== memberId);
      localStorage.setItem('team-members-cache', JSON.stringify(updatedCache));
      
      toast.success("Team member deleted successfully");
      notifyTeamMembersUpdated();
    } catch (err) {
      console.error("Error deleting team member:", err);
      setError("Failed to delete team member. Please try again.");
      toast.error("Failed to delete team member");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    setIsLoading,
    handleAddMember,
    handleEditMember,
    handleDeleteMember
  };
};
