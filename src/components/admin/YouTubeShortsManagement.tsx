
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Youtube, WifiOff } from 'lucide-react';
import { YouTubeShort } from '../youtube-shorts/types';
import { Alert, AlertDescription } from '@/components/ui/alert';

// Import refactored components
import YouTubeShortDialog from './youtube-shorts/YouTubeShortDialog';
import DeleteConfirmationDialog from './youtube-shorts/DeleteConfirmationDialog';
import YouTubeShortsTable from './youtube-shorts/YouTubeShortsTable';
import { useYouTubeShortsManager } from './youtube-shorts/useYouTubeShortsManager';
import { Skeleton } from '@/components/ui/skeleton';

const YouTubeShortsManagement: React.FC = () => {
  const {
    youtubeShorts,
    editingShort,
    isAddDialogOpen,
    setIsAddDialogOpen,
    isEditDialogOpen,
    setIsEditDialogOpen,
    isDeleteDialogOpen,
    setIsDeleteDialogOpen,
    isLoading,
    isOffline,
    handleAddShort,
    handleEditShort,
    prepareEditShort,
    prepareDeleteShort,
    handleDeleteShort
  } = useYouTubeShortsManager();

  const emptyShort: YouTubeShort = {
    id: '',
    title: '',
    thumbnail: ''
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Youtube className="h-5 w-5 text-red-600" />
          YouTube Shorts Management
        </CardTitle>
        <CardDescription>
          Manage the YouTube Shorts videos displayed on the homepage
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isOffline && (
          <Alert variant="destructive" className="mb-4">
            <WifiOff className="h-4 w-4 mr-2" />
            <AlertDescription>
              You are currently offline. Changes will only be saved locally and won't sync with the database until you're back online.
            </AlertDescription>
          </Alert>
        )}
        
        <div className="flex justify-between mb-6">
          <h3 className="text-lg font-medium">Current YouTube Shorts</h3>
          <Button 
            className="flex items-center gap-2"
            onClick={() => setIsAddDialogOpen(true)}
            disabled={isLoading}
          >
            <Plus className="h-4 w-4" />
            Add New Short
          </Button>
        </div>

        {isLoading ? (
          <div className="space-y-4">
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-full" />
          </div>
        ) : (
          <YouTubeShortsTable 
            shorts={youtubeShorts}
            onEdit={prepareEditShort}
            onDelete={prepareDeleteShort}
          />
        )}

        {/* Add Dialog */}
        <YouTubeShortDialog
          isOpen={isAddDialogOpen}
          onOpenChange={setIsAddDialogOpen}
          onSubmit={handleAddShort}
          defaultValues={emptyShort}
          title="Add New YouTube Short"
          description="Enter the details of the YouTube short to add to the homepage."
          submitLabel="Add Short"
        />

        {/* Edit Dialog */}
        <YouTubeShortDialog
          isOpen={isEditDialogOpen}
          onOpenChange={setIsEditDialogOpen}
          onSubmit={handleEditShort}
          defaultValues={editingShort || emptyShort}
          title="Edit YouTube Short"
          description="Update the details of this YouTube short video."
          submitLabel="Save Changes"
        />

        {/* Delete Confirmation Dialog */}
        <DeleteConfirmationDialog
          isOpen={isDeleteDialogOpen}
          onOpenChange={setIsDeleteDialogOpen}
          onConfirm={handleDeleteShort}
        />
      </CardContent>
    </Card>
  );
};

export default YouTubeShortsManagement;
