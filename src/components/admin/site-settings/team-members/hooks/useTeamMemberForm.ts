
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TeamMember } from '../types';
import { teamMemberSchema, TeamMemberFormData } from '../schema/teamMemberSchema';

export const useTeamMemberForm = (teamMember: TeamMember | null) => {
  const form = useForm<TeamMemberFormData>({
    resolver: zodResolver(teamMemberSchema),
    defaultValues: {
      name: teamMember?.name || '',
      position: teamMember?.position || '',
      experience: teamMember?.experience || '',
      expertise: teamMember?.expertise || '',
      bio: teamMember?.bio || '',
      description: teamMember?.description || '',
      linkedinUrl: teamMember?.linkedinUrl || '',
      teamSection: (teamMember?.teamSection as 'leadership' | 'domain-experts') || 'leadership'
    }
  });

  return form;
};
