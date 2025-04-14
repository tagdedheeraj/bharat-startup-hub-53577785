
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, WifiOff } from 'lucide-react';
import YouTubeShortsTable from './youtube-shorts/YouTubeShortsTable';
import YouTubeShortDialog from './youtube-shorts/YouTubeShortDialog';
import DeleteConfirmationDialog from './youtube-shorts/DeleteConfirmationDialog';
import { useYouTubeShortsManager } from './youtube-shorts/useYouTubeShortsManager';

interface YouTubeShortsManagementProps {
  isOffline?: boolean;
}

const YouTubeShortsManagement: React.FC<YouTubeShortsManagementProps> = ({ isOffline = false }) => {
  const {
    youtubeShorts,
    isLoading,
    isAddDialogOpen,
    setIsAddDialogOpen,
    isEditDialogOpen,
    isDeleteDialogOpen,
    isOffline: hookIsOffline,
    editingShort,
    pendingDeleteId,
    handleAddShort,
    handleEditShort,
    handleDeleteShort,
    prepareEditShort,
    prepareDeleteShort
  } = useYouTubeShortsManager();

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>YouTube Shorts</CardTitle>
          <CardDescription>Manage YouTube shorts displayed on the website</CardDescription>
        </div>
        <div className="flex items-center gap-2">
          {(isOffline || hookIsOffline) && (
            <div className="flex items-center gap-1 text-amber-600 bg-amber-50 px-3 py-1 rounded-full text-sm">
              <WifiOff size={14} />
              <span>Offline Mode</span>
            </div>
          )}
          <Button size="sm" onClick={() => setIsAddDialogOpen(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Add Short
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <YouTubeShortsTable 
          youtubeShorts={youtubeShorts}
          isLoading={isLoading}
          onEdit={prepareEditShort}
          onDelete={prepareDeleteShort}
        />
        
        {/* Add YouTube Short Dialog */}
        <YouTubeShortDialog
          open={isAddDialogOpen}
          onOpenChange={setIsAddDialogOpen}
          onSubmit={handleAddShort}
          title="Add YouTube Short"
          isOfflineMode={isOffline || hookIsOffline}
        />
        
        {/* Edit YouTube Short Dialog */}
        <YouTubeShortDialog
          open={isEditDialogOpen}
          onOpenChange={(open) => !open && editingShort && prepareEditShort(null)}
          onSubmit={handleEditShort}
          title="Edit YouTube Short"
          initialData={editingShort}
          isOfflineMode={isOffline || hookIsOffline}
        />
        
        {/* Delete Confirmation Dialog */}
        <DeleteConfirmationDialog
          open={isDeleteDialogOpen}
          onOpenChange={(open) => !open && pendingDeleteId && prepareDeleteShort(null)}
          onConfirm={handleDeleteShort}
          isOfflineMode={isOffline || hookIsOffline}
        />
      </CardContent>
    </Card>
  );
};

export default YouTubeShortsManagement;
