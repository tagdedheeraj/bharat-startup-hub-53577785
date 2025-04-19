
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { TeamMember } from './types';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import TeamMemberBasicInfo from './dialog/TeamMemberBasicInfo';
import TeamMemberPhotoSection from './dialog/TeamMemberPhotoSection';
import TeamMemberSectionSelect from './dialog/TeamMemberSectionSelect';
import TeamMemberBioFields from './dialog/TeamMemberBioFields';

interface TeamMemberDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: TeamMember) => void;
  title: string;
  isOfflineMode?: boolean;
  initialData?: TeamMember | null;
}

const TeamMemberDialog: React.FC<TeamMemberDialogProps> = ({
  open,
  onOpenChange,
  onSubmit,
  title,
  isOfflineMode = false,
  initialData = null
}) => {
  const defaultValues: Partial<TeamMember> = initialData || {
    name: '',
    role: '',
    description: '',
    sectionName: '',
    photoUrl: '',
    experience: '',
    expertise: '',
    bio: '',
    linkedinUrl: '',
    teamSection: 'leadership',
    id: ''
  };

  const form = useForm<TeamMember>({
    defaultValues: defaultValues as TeamMember
  });

  useEffect(() => {
    if (open) {
      form.reset(defaultValues as TeamMember);
    }
  }, [open, initialData, form, defaultValues]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            Enter the team member details below.
            {isOfflineMode && (
              <span className="block mt-2 text-amber-600 text-xs">
                Running in offline mode. Changes will be saved locally.
              </span>
            )}
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <TeamMemberBasicInfo form={form} />
              <div className="space-y-4">
                <TeamMemberSectionSelect form={form} />
                <TeamMemberPhotoSection form={form} />
              </div>
            </div>
            <TeamMemberBioFields form={form} />
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
                Cancel
              </Button>
              <Button type="submit">Save</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default TeamMemberDialog;
