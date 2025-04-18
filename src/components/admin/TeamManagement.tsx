
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RefreshCw, UserPlus, Users } from 'lucide-react';
import TeamMembersTable from './team/TeamMembersTable';
import TeamMemberDialog from './team/TeamMemberDialog';
import DeleteConfirmationDialog from './team/DeleteConfirmationDialog';
import { useTeamMembersManager } from './team/useTeamMembersManager';
import { Alert, AlertDescription } from "@/components/ui/alert";

interface TeamManagementProps {
  isOffline?: boolean;
}

const TeamManagement: React.FC<TeamManagementProps> = ({ isOffline = false }) => {
  const {
    teamMembers,
    isLoading,
    isAddDialogOpen,
    setIsAddDialogOpen,
    isEditDialogOpen,
    isDeleteDialogOpen,
    isOffline: hookIsOffline,
    editingMember,
    pendingDeleteId,
    handleAddMember,
    handleEditMember,
    handleDeleteMember,
    prepareEditMember,
    prepareDeleteMember,
    error
  } = useTeamMembersManager();

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Team Members Management
          </CardTitle>
          <CardDescription>Manage team members displayed on the website</CardDescription>
        </div>
        <div className="flex items-center gap-2">
          {(isOffline || hookIsOffline) && (
            <div className="flex items-center gap-1 text-amber-600 bg-amber-50 px-3 py-1 rounded-full text-sm">
              <RefreshCw size={14} className="animate-spin" />
              <span>Offline Mode</span>
            </div>
          )}
          <Button size="sm" onClick={() => setIsAddDialogOpen(true)}>
            <UserPlus className="h-4 w-4 mr-2" />
            Add Team Member
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {error && (
          <Alert variant="destructive" className="mb-6">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        
        <TeamMembersTable 
          teamMembers={teamMembers}
          isLoading={isLoading}
          onEdit={prepareEditMember}
          onDelete={prepareDeleteMember}
        />
        
        {/* Add Team Member Dialog */}
        <TeamMemberDialog
          open={isAddDialogOpen}
          onOpenChange={setIsAddDialogOpen}
          onSubmit={handleAddMember}
          title="Add Team Member"
          isOfflineMode={isOffline || hookIsOffline}
        />
        
        {/* Edit Team Member Dialog */}
        <TeamMemberDialog
          open={isEditDialogOpen}
          onOpenChange={(open) => !open && prepareEditMember(null)}
          onSubmit={handleEditMember}
          title="Edit Team Member"
          initialData={editingMember}
          isOfflineMode={isOffline || hookIsOffline}
        />
        
        {/* Delete Confirmation Dialog */}
        <DeleteConfirmationDialog
          open={isDeleteDialogOpen}
          onOpenChange={(open) => !open && pendingDeleteId && prepareDeleteMember(null)}
          onConfirm={handleDeleteMember}
          isOfflineMode={isOffline || hookIsOffline}
          entityName="team member"
        />
      </CardContent>
    </Card>
  );
};

export default TeamManagement;
