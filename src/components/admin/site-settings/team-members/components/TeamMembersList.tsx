
import React from 'react';
import { Button } from '@/components/ui/button';
import { TeamMember } from '../types';
import TeamMemberListItem from './TeamMemberListItem';

interface TeamMembersListProps {
  members: TeamMember[];
  loading: boolean;
  onEdit: (member: TeamMember) => void;
  onDelete: (id: string) => void;
  onAdd: () => void;
}

const TeamMembersList = ({ members, loading, onEdit, onDelete, onAdd }: TeamMembersListProps) => {
  if (loading) {
    return (
      <div className="flex justify-center py-8">
        <div className="animate-spin h-8 w-8 border-4 border-blue-500 rounded-full border-t-transparent"></div>
      </div>
    );
  }

  if (members.length === 0) {
    return (
      <div className="text-center py-8 border rounded-lg">
        <p className="text-gray-500">No team members found in this section.</p>
        <Button
          variant="outline"
          className="mt-4"
          onClick={onAdd}
        >
          Add Team Member
        </Button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {members.map((member) => (
        <TeamMemberListItem
          key={member.id}
          member={member}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TeamMembersList;
