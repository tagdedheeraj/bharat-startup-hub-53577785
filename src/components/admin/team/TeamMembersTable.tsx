
import React from 'react';
import { TeamMember } from './types';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Pencil, Trash2 } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface TeamMembersTableProps {
  teamMembers: TeamMember[];
  isLoading: boolean;
  onEdit: (member: TeamMember) => void;
  onDelete: (id: string) => void;
}

const TeamMembersTable: React.FC<TeamMembersTableProps> = ({ 
  teamMembers, 
  isLoading, 
  onEdit, 
  onDelete 
}) => {
  if (isLoading) {
    return (
      <div className="py-8 text-center">
        <div className="inline-block animate-spin h-8 w-8 border-4 border-blue-500 rounded-full border-t-transparent"></div>
        <p className="mt-2 text-muted-foreground">Loading team members...</p>
      </div>
    );
  }

  if (teamMembers.length === 0) {
    return (
      <div className="py-8 text-center">
        <p className="text-muted-foreground">No team members found. Add your first team member above.</p>
      </div>
    );
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Photo</TableHead>
          <TableHead>Name & Details</TableHead>
          <TableHead>Experience</TableHead>
          <TableHead>Section</TableHead>
          <TableHead>Team</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {teamMembers.map((member) => (
          <TableRow key={member.id} className="hover:bg-muted/50">
            <TableCell>
              <Avatar className="h-16 w-16">
                <AvatarImage src={member.photoUrl} alt={member.name} />
                <AvatarFallback>{member.name.slice(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
            </TableCell>
            <TableCell>
              <div className="space-y-1">
                <p className="font-medium text-base">{member.name}</p>
                <p className="text-sm text-muted-foreground">{member.role}</p>
                <p className="text-sm text-muted-foreground line-clamp-2">{member.description}</p>
              </div>
            </TableCell>
            <TableCell>{member.experience}</TableCell>
            <TableCell>
              <span className="capitalize">{member.sectionName.replace('team-', '').replace('-', ' ')}</span>
            </TableCell>
            <TableCell>
              <span className="capitalize">{member.teamSection.replace('-', ' ')}</span>
            </TableCell>
            <TableCell className="text-right">
              <div className="flex justify-end gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => onEdit(member)}
                >
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button
                  variant="destructive"
                  size="icon"
                  onClick={() => onDelete(member.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TeamMembersTable;
