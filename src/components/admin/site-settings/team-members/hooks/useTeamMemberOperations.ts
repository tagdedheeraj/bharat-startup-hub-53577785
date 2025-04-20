
import { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { TeamMember } from '../types';
import { toast } from 'sonner';

export const useTeamMemberOperations = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const saveTeamMember = async (data: any, photoUrl: string) => {
    try {
      setIsSubmitting(true);
      
      // Validate required fields
      if (!data.name || !data.position || !data.teamSection) {
        throw new Error('Please fill in all required fields');
      }
      
      if (!photoUrl) {
        throw new Error('Please upload a photo');
      }

      const teamMemberData = {
        ...data,
        photoUrl,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      };

      const docRef = await addDoc(collection(db, 'teamMembers'), teamMemberData);
      
      // Clear any cached data
      localStorage.removeItem('team-members-cache');
      
      toast.success('Team member added successfully');
      return docRef.id;
    } catch (error) {
      console.error('Error saving team member:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to save team member');
      throw error;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isSubmitting,
    saveTeamMember
  };
};
