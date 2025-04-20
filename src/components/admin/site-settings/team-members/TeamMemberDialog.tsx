import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Form } from '@/components/ui/form';
import { AlertCircle } from 'lucide-react';
import { toast } from 'sonner';
import { collection, doc, setDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { TeamMember } from './types';
import { usePhotoUpload } from './hooks/usePhotoUpload';
import { useTeamMemberForm } from './hooks/useTeamMemberForm';
import PhotoUploadSection from './components/PhotoUploadSection';
import BasicInfoSection from './components/BasicInfoSection';
import ExperienceSection from './components/ExperienceSection';
import BioSection from './components/BioSection';
import TeamSectionSelect from './components/TeamSectionSelect';

interface TeamMemberDialogProps {
  open: boolean;
  onClose: (created: boolean) => void;
  teamMember: TeamMember | null;
  isOffline: boolean;
}

const TeamMemberDialog = ({ open, onClose, teamMember, isOffline }: TeamMemberDialogProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isEditMode = !!teamMember;
  
  const { photoFile, photoPreview, handlePhotoChange, uploadPhoto, setPhotoPreview } = usePhotoUpload(
    teamMember?.photoUrl || null
  );
  
  const form = useTeamMemberForm(teamMember);

  React.useEffect(() => {
    if (teamMember) {
      form.reset({
        name: teamMember.name || '',
        position: teamMember.position || '',
        experience: teamMember.experience || '',
        expertise: teamMember.expertise || '',
        bio: teamMember.bio || '',
        description: teamMember.description || '',
        linkedinUrl: teamMember.linkedinUrl || '',
        teamSection: (teamMember.teamSection as 'leadership' | 'domain-experts') || 'leadership'
      });
      setPhotoPreview(teamMember.photoUrl || null);
    } else {
      form.reset({
        name: '',
        position: '',
        experience: '',
        expertise: '',
        bio: '',
        description: '',
        linkedinUrl: '',
        teamSection: 'leadership'
      });
      setPhotoPreview(null);
    }
  }, [teamMember, form, setPhotoPreview]);

  const onSubmit = async (data: any) => {
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
          photoUrl = await uploadPhoto(documentId);
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
          
          photoUrl = await uploadPhoto(documentId);
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

  return (
    <Dialog open={open} onOpenChange={(open) => !open && onClose(false)}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{isEditMode ? 'Edit Team Member' : 'Add New Team Member'}</DialogTitle>
        </DialogHeader>
        
        {isOffline && (
          <Alert className="border-amber-200 bg-amber-50">
            <AlertCircle className="h-4 w-4 text-amber-600" />
            <AlertDescription className="text-amber-600">
              You are in offline mode. You cannot save changes.
            </AlertDescription>
          </Alert>
        )}
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <PhotoUploadSection 
              photoPreview={photoPreview} 
              onPhotoChange={handlePhotoChange}
            />
            
            <BasicInfoSection form={form} />
            <ExperienceSection form={form} />
            <BioSection form={form} />
            <TeamSectionSelect form={form} />
            
            <div className="flex justify-end gap-2 pt-4">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => onClose(false)}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                disabled={isSubmitting || isOffline}
              >
                {isSubmitting ? 'Saving...' : isEditMode ? 'Update' : 'Create'}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default TeamMemberDialog;
