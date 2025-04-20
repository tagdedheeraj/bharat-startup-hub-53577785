
import { useState } from 'react';
import { collection, doc, setDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { TeamMember } from '../types';
import { toast } from 'sonner';
import { uploadPhoto } from './usePhotoUpload';

interface UseTeamMemberSubmitProps {
  onClose: (created: boolean) => void;
  teamMember: TeamMember | null;
  isOffline: boolean;
}

export const useTeamMemberSubmit = ({ onClose, teamMember, isOffline }: UseTeamMemberSubmitProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isEditMode = !!teamMember;

  const handleSubmit = async (data: any, photoFile: File | null, photoPreview: string | null) => {
    if (isOffline) {
      toast.error('Cannot save team members while offline');
      return;
    }
    
    try {
      setIsSubmitting(true);
      console.log('Starting to save team member...');
      
      const teamMembersCollection = collection(db, 'teamMembers');
      let documentId;
      let photoUrl = '';
      
      if (isEditMode && teamMember) {
        documentId = teamMember.id;
        console.log('Editing existing team member with ID:', documentId);
        
        try {
          photoUrl = await uploadPhoto(documentId, photoFile);
          console.log('Photo upload complete, URL:', photoUrl);
          
          const memberRef = doc(db, 'teamMembers', documentId);
          await updateDoc(memberRef, {
            ...data,
            photoUrl: photoUrl || teamMember.photoUrl,
            updatedAt: serverTimestamp()
          });
          
          console.log('Team member updated successfully');
          toast.success('Team member updated successfully');
          onClose(true);
        } catch (error) {
          console.error('Error in update flow:', error);
          toast.error('Failed to update team member');
        }
      } else {
        console.log('Creating new team member');
        try {
          const newDocRef = doc(teamMembersCollection);
          documentId = newDocRef.id;
          
          photoUrl = await uploadPhoto(documentId, photoFile);
          console.log('Photo upload complete, URL:', photoUrl);
          
          await setDoc(newDocRef, {
            ...data,
            photoUrl,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp()
          });
          
          console.log('Team member created successfully with ID:', documentId);
          toast.success('Team member added successfully');
          onClose(true);
        } catch (error) {
          console.error('Error in create flow:', error);
          toast.error('Failed to create team member');
        }
      }
    } catch (error) {
      console.error('General error saving team member:', error);
      toast.error('Failed to save team member');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isSubmitting,
    handleSubmit
  };
};
