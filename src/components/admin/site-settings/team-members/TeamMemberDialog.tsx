
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Form } from '@/components/ui/form';
import { AlertCircle } from 'lucide-react';
import { TeamMember } from './types';
import { usePhotoUpload } from './hooks/usePhotoUpload';
import { useTeamMemberForm } from './hooks/useTeamMemberForm';
import { useTeamMemberOperations } from './hooks/useTeamMemberOperations';
import PhotoUploadSection from './components/PhotoUploadSection';
import BasicInfoSection from './components/BasicInfoSection';
import ExperienceSection from './components/ExperienceSection';
import BioSection from './components/BioSection';
import TeamSectionSelect from './components/TeamSectionSelect';
import { toast } from 'sonner';

interface TeamMemberDialogProps {
  open: boolean;
  onClose: (created: boolean) => void;
  teamMember: TeamMember | null;
  isOffline: boolean;
}

const TeamMemberDialog = ({ open, onClose, teamMember, isOffline }: TeamMemberDialogProps) => {
  const isEditMode = !!teamMember;
  const { photoFile, photoPreview, handlePhotoChange, uploadPhoto, setPhotoPreview } = usePhotoUpload(
    teamMember?.photoUrl || null
  );
  const form = useTeamMemberForm(teamMember);
  const { isSubmitting, saveTeamMember } = useTeamMemberOperations();

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
        teamSection: teamMember.teamSection || 'leadership'
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

  const handleSubmit = async (formData: any) => {
    if (isOffline) {
      toast.error('Cannot save while offline');
      return;
    }

    try {
      let photoUrl = teamMember?.photoUrl || '';
      
      if (photoFile) {
        const documentId = teamMember?.id || 'new';
        photoUrl = await uploadPhoto(documentId, photoFile);
      }

      if (!photoUrl) {
        toast.error('Please upload a photo');
        return;
      }

      // Pass the existing ID when in edit mode
      await saveTeamMember(formData, photoUrl, isEditMode ? teamMember?.id : undefined);
      onClose(true);
    } catch (error) {
      console.error('Error in form submission:', error);
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
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
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
