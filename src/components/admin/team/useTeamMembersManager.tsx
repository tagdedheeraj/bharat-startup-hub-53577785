
import { useState, useEffect } from 'react';
import { TeamMember } from './types';
import { db } from '@/lib/firebase';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import { useTeamDialogState } from './hooks/useTeamDialogState';
import { useTeamOfflineState } from './hooks/useTeamOfflineState';
import { useTeamOperations } from './hooks/useTeamOperations';

export const useTeamMembersManager = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const { isOffline, error, setError } = useTeamOfflineState();
  const dialogState = useTeamDialogState();
  const operations = useTeamOperations(isOffline, setTeamMembers, setError);

  // Load team members on mount
  useEffect(() => {
    const fetchTeamMembers = async () => {
      operations.setIsLoading(true);
      setError(null);
      
      try {
        if (isOffline) {
          const cachedData = localStorage.getItem('team-members-cache');
          if (cachedData) {
            setTeamMembers(JSON.parse(cachedData));
            console.log("Loaded team members from cache");
          } else {
            setTeamMembers([]);
            console.log("No cached team members found");
          }
          operations.setIsLoading(false);
          return;
        }
        
        const teamCollection = collection(db, 'teamMembers');
        const teamQuery = query(teamCollection, orderBy('updatedAt', 'desc'));
        const querySnapshot = await getDocs(teamQuery);
        
        const fetchedMembers: TeamMember[] = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data() as Omit<TeamMember, 'id'>;
          fetchedMembers.push({
            id: doc.id,
            ...data
          } as TeamMember);
        });
        
        setTeamMembers(fetchedMembers);
        localStorage.setItem('team-members-cache', JSON.stringify(fetchedMembers));
        
        console.log(`Successfully loaded ${fetchedMembers.length} team members`);
      } catch (err) {
        console.error("Error fetching team members:", err);
        setError("Failed to load team members. Please try again later.");
        
        const cachedData = localStorage.getItem('team-members-cache');
        if (cachedData) {
          setTeamMembers(JSON.parse(cachedData));
          console.log("Loaded team members from cache after error");
        }
      } finally {
        operations.setIsLoading(false);
      }
    };
    
    fetchTeamMembers();
  }, [isOffline]);

  return {
    teamMembers,
    isLoading: operations.isLoading,
    isOffline,
    error,
    ...dialogState,
    handleAddMember: operations.handleAddMember,
    handleEditMember: (data: TeamMember) => {
      if (dialogState.editingMember) {
        operations.handleEditMember(data, dialogState.editingMember.id);
      }
    },
    handleDeleteMember: () => {
      if (dialogState.pendingDeleteId) {
        operations.handleDeleteMember(dialogState.pendingDeleteId);
      }
    }
  };
};
