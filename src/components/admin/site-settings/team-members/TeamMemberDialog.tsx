
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Form } from '@/components/ui/form';
import { AlertCircle } from 'lucide-react';
import { TeamMember } from './types';
import { usePhotoUpload } from './hooks/usePhotoUpload';
import { useTeamMemberForm } from './hooks/useTeamMemberForm';
import { useTeamMemberSubmit } from './hooks/useTeamMemberSubmit';
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
  const isEditMode = !!teamMember;
  
  const { photoFile, photoPreview, handlePhotoChange, setPhotoPreview } = usePhotoUpload(
    teamMember?.photoUrl || null
  );
  
  const form = useTeamMemberForm(teamMember);
  const { isSubmitting, handleSubmit } = useTeamMemberSubmit({ onClose, teamMember, isOffline });

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

  const onSubmit = form.handleSubmit((data) => handleSubmit(data, photoFile, photoPreview));

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
          <form onSubmit={onSubmit} className="space-y-4">
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
