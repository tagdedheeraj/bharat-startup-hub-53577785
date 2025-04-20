
import React from 'react';
import { Button } from '@/components/ui/button';
import { Pencil, Trash2 } from 'lucide-react';
import { TeamMember } from '../types';

interface TeamMemberListItemProps {
  member: TeamMember;
  onEdit: (member: TeamMember) => void;
  onDelete: (id: string) => void;
}

const TeamMemberListItem = ({ member, onEdit, onDelete }: TeamMemberListItemProps) => {
  return (
    <div key={member.id} className="border rounded-lg p-4 flex">
      <div className="h-20 w-20 bg-gray-200 rounded-lg overflow-hidden mr-4">
        {member.photoUrl && (
          <img
            src={member.photoUrl}
            alt={member.name}
            className="h-full w-full object-cover"
          />
        )}
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-medium">{member.name}</h3>
        <p className="text-sm text-gray-600">{member.position}</p>
        <p className="text-xs text-gray-500 mt-1">
          Experience: {member.experience || 'N/A'}
        </p>
        <div className="mt-3 flex space-x-2">
          <Button
            size="sm"
            variant="outline"
            onClick={() => onEdit(member)}
            className="h-8 px-2"
          >
            <Pencil className="h-3.5 w-3.5 mr-1" />
            Edit
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => onDelete(member.id)}
            className="h-8 px-2 text-destructive hover:text-destructive"
          >
            <Trash2 className="h-3.5 w-3.5 mr-1" />
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberListItem;
