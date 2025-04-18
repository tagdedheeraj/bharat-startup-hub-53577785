
import { useState, useEffect } from 'react';
import { TeamMember } from './types';
import { db } from '@/lib/firebase';
import { isFirestoreAvailable } from '@/lib/firebase/firestore';
import { toast } from 'sonner';
import { 
  collection, 
  query, 
  orderBy, 
  getDocs, 
  addDoc, 
  doc, 
  updateDoc, 
  deleteDoc, 
  serverTimestamp 
} from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

// Create a notification function similar to YouTube shorts
const notifyTeamMembersUpdated = () => {
  console.log("Setting team-members-updated flag in localStorage");
  localStorage.setItem('team-members-updated', Date.now().toString());
  
  // Dispatch event for same-window updates
  try {
    window.dispatchEvent(new CustomEvent('team-members-updated'));
  } catch (error) {
    console.error("Error dispatching team-members-updated event:", error);
  }
};

export const useTeamMembersManager = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isOffline, setIsOffline] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Dialog state
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [editingMember, setEditingMember] = useState<TeamMember | null>(null);
  const [pendingDeleteId, setPendingDeleteId] = useState<string | null>(null);
  
  // Load team members on mount
  useEffect(() => {
    const fetchTeamMembers = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        // Check if Firestore is available
        const available = await isFirestoreAvailable();
        setIsOffline(!available);
        
        if (!available) {
          // Load from localStorage if offline
          const cachedData = localStorage.getItem('team-members-cache');
          if (cachedData) {
            setTeamMembers(JSON.parse(cachedData));
            console.log("Loaded team members from cache");
          } else {
            setTeamMembers([]);
            console.log("No cached team members found");
          }
          setIsLoading(false);
          return;
        }
        
        // Fetch from Firestore
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
        
        // Cache the data for offline mode
        localStorage.setItem('team-members-cache', JSON.stringify(fetchedMembers));
        
        console.log(`Successfully loaded ${fetchedMembers.length} team members`);
      } catch (err) {
        console.error("Error fetching team members:", err);
        setError("Failed to load team members. Please try again later.");
        
        // Try to load from cache as fallback
        const cachedData = localStorage.getItem('team-members-cache');
        if (cachedData) {
          setTeamMembers(JSON.parse(cachedData));
          console.log("Loaded team members from cache after error");
        }
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchTeamMembers();
  }, []);
  
  // Function to prepare for editing
  const prepareEditMember = (member: TeamMember | null) => {
    setEditingMember(member);
    setIsEditDialogOpen(!!member);
  };
  
  // Function to prepare for deletion
  const prepareDeleteMember = (id: string | null) => {
    setPendingDeleteId(id);
    setIsDeleteDialogOpen(!!id);
  };
  
  // Add a new team member
  const handleAddMember = async (data: TeamMember) => {
    setIsLoading(true);
    setError(null);
    
    try {
      if (isOffline) {
        // In offline mode, generate a temporary ID
        const offlineId = `temp_${uuidv4()}`;
        const newMember = {
          ...data,
          id: offlineId,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        };
        
        setTeamMembers(prev => [newMember, ...prev]);
        
        // Update cache
        const cachedData = JSON.parse(localStorage.getItem('team-members-cache') || '[]');
        localStorage.setItem('team-members-cache', JSON.stringify([newMember, ...cachedData]));
        
        toast.success("Team member added locally (offline mode)");
        setIsAddDialogOpen(false);
        notifyTeamMembersUpdated();
        return;
      }
      
      // Online mode - save to Firestore
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
      
      // Update cache
      const cachedData = JSON.parse(localStorage.getItem('team-members-cache') || '[]');
      localStorage.setItem('team-members-cache', JSON.stringify([newMember, ...cachedData]));
      
      toast.success("Team member added successfully");
      setIsAddDialogOpen(false);
      notifyTeamMembersUpdated();
    } catch (err) {
      console.error("Error adding team member:", err);
      setError("Failed to add team member. Please try again.");
      toast.error("Failed to add team member");
    } finally {
      setIsLoading(false);
    }
  };
  
  // Edit a team member
  const handleEditMember = async (data: TeamMember) => {
    if (!editingMember) {
      toast.error("No team member selected for editing");
      return;
    }
    
    setIsLoading(true);
    setError(null);
    
    try {
      const updatedMember = {
        ...data,
        id: editingMember.id
      };
      
      if (isOffline) {
        // Update locally in offline mode
        setTeamMembers(prev => 
          prev.map(member => 
            member.id === editingMember.id ? updatedMember : member
          )
        );
        
        // Update cache
        const cachedData = JSON.parse(localStorage.getItem('team-members-cache') || '[]');
        const updatedCache = cachedData.map((member: TeamMember) => 
          member.id === editingMember.id ? updatedMember : member
        );
        localStorage.setItem('team-members-cache', JSON.stringify(updatedCache));
        
        toast.success("Team member updated locally (offline mode)");
        setIsEditDialogOpen(false);
        setEditingMember(null);
        notifyTeamMembersUpdated();
        return;
      }
      
      // Online mode - update in Firestore
      const memberRef = doc(db, 'teamMembers', editingMember.id);
      await updateDoc(memberRef, {
        ...data,
        updatedAt: serverTimestamp()
      });
      
      setTeamMembers(prev => 
        prev.map(member => 
          member.id === editingMember.id ? updatedMember : member
        )
      );
      
      // Update cache
      const cachedData = JSON.parse(localStorage.getItem('team-members-cache') || '[]');
      const updatedCache = cachedData.map((member: TeamMember) => 
        member.id === editingMember.id ? updatedMember : member
      );
      localStorage.setItem('team-members-cache', JSON.stringify(updatedCache));
      
      toast.success("Team member updated successfully");
      setIsEditDialogOpen(false);
      setEditingMember(null);
      notifyTeamMembersUpdated();
    } catch (err) {
      console.error("Error updating team member:", err);
      setError("Failed to update team member. Please try again.");
      toast.error("Failed to update team member");
    } finally {
      setIsLoading(false);
    }
  };
  
  // Delete a team member
  const handleDeleteMember = async () => {
    if (!pendingDeleteId) {
      toast.error("No team member selected for deletion");
      return;
    }
    
    setIsLoading(true);
    setError(null);
    
    try {
      if (isOffline) {
        // Delete locally in offline mode
        setTeamMembers(prev => 
          prev.filter(member => member.id !== pendingDeleteId)
        );
        
        // Update cache
        const cachedData = JSON.parse(localStorage.getItem('team-members-cache') || '[]');
        const updatedCache = cachedData.filter((member: TeamMember) => member.id !== pendingDeleteId);
        localStorage.setItem('team-members-cache', JSON.stringify(updatedCache));
        
        toast.success("Team member deleted locally (offline mode)");
        setIsDeleteDialogOpen(false);
        setPendingDeleteId(null);
        notifyTeamMembersUpdated();
        return;
      }
      
      // Online mode - delete from Firestore
      const memberRef = doc(db, 'teamMembers', pendingDeleteId);
      await deleteDoc(memberRef);
      
      setTeamMembers(prev => 
        prev.filter(member => member.id !== pendingDeleteId)
      );
      
      // Update cache
      const cachedData = JSON.parse(localStorage.getItem('team-members-cache') || '[]');
      const updatedCache = cachedData.filter((member: TeamMember) => member.id !== pendingDeleteId);
      localStorage.setItem('team-members-cache', JSON.stringify(updatedCache));
      
      toast.success("Team member deleted successfully");
      setIsDeleteDialogOpen(false);
      setPendingDeleteId(null);
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
    teamMembers,
    isLoading,
    isOffline,
    error,
    isAddDialogOpen,
    setIsAddDialogOpen,
    isEditDialogOpen,
    isDeleteDialogOpen,
    editingMember,
    pendingDeleteId,
    handleAddMember,
    handleEditMember,
    handleDeleteMember,
    prepareEditMember,
    prepareDeleteMember
  };
};
