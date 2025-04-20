
import React from 'react';
import { Button } from '@/components/ui/button';
import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus } from 'lucide-react';

interface TeamMembersHeaderProps {
  onAdd: () => void;
}

const TeamMembersHeader = ({ onAdd }: TeamMembersHeaderProps) => {
  return (
    <CardHeader>
      <CardTitle className="flex justify-between items-center">
        <span>Team Members</span>
        <Button onClick={onAdd} className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Add Team Member
        </Button>
      </CardTitle>
      <CardDescription>Manage team members displayed on your website</CardDescription>
    </CardHeader>
  );
};

export default TeamMembersHeader;
