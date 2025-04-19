
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Trash2, WifiOff } from 'lucide-react';
import { YouTubeShort } from '@/components/youtube-shorts/types';
import SimpleYouTubeShortDialog from './SimpleYouTubeShortDialog';
import { useYouTubeShortsData } from './hooks/useYouTubeShortsData';
import { notifyYouTubeShortsUpdated } from '@/components/youtube-shorts/data';
import { toast } from 'sonner';
import { collection, addDoc, deleteDoc, doc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';

interface SimpleYouTubeShortsManagerProps {
  isOffline?: boolean;
}

const SimpleYouTubeShortsManager: React.FC<SimpleYouTubeShortsManagerProps> = ({ isOffline = false }) => {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const { youtubeShorts, setYoutubeShorts, isLoading } = useYouTubeShortsData(isOffline);

  const handleAddShort = async (videoId: string, title: string) => {
    try {
      const newShort: YouTubeShort = {
        id: videoId,
        title: title,
        thumbnail: `https://i3.ytimg.com/vi/${videoId}/maxresdefault.jpg`
      };

      // Check for duplicates
      if (youtubeShorts.some(short => short.id === videoId)) {
        toast.error("This video has already been added");
        return;
      }

      if (!isOffline) {
        // Add to Firestore
        const shortsCollection = collection(db, 'youtubeShorts');
        const docRef = await addDoc(shortsCollection, {
          ...newShort,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp()
        });
        
        newShort.docId = docRef.id;
        notifyYouTubeShortsUpdated();
        toast.success("YouTube short added successfully!");
      } else {
        toast.warning("Added locally only (offline mode)");
      }

      setYoutubeShorts(prev => [newShort, ...prev]);
    } catch (error) {
      console.error("Error adding short:", error);
      toast.error("Failed to add YouTube short");
    }
  };

  const handleDeleteShort = async (shortId: string, docId?: string) => {
    try {
      if (docId && !isOffline) {
        await deleteDoc(doc(db, 'youtubeShorts', docId));
        notifyYouTubeShortsUpdated();
        toast.success("Short deleted successfully!");
      } else if (isOffline) {
        toast.warning("Removed locally only (offline mode)");
      }

      setYoutubeShorts(prev => prev.filter(short => short.id !== shortId));
    } catch (error) {
      console.error("Error deleting short:", error);
      toast.error("Failed to delete YouTube short");
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>YouTube Shorts</CardTitle>
          <CardDescription>Manage YouTube shorts displayed on the website</CardDescription>
        </div>
        <div className="flex items-center gap-2">
          {isOffline && (
            <div className="flex items-center gap-1 text-amber-600 bg-amber-50 px-3 py-1 rounded-full text-sm">
              <WifiOff size={14} />
              <span>Offline Mode</span>
            </div>
          )}
          <Button onClick={() => setIsAddDialogOpen(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Add Short
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="text-center py-8">
            <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto"></div>
            <p className="mt-2 text-sm text-muted-foreground">Loading shorts...</p>
          </div>
        ) : youtubeShorts.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-muted-foreground">No YouTube shorts added yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {youtubeShorts.map((short) => (
              <div 
                key={short.id} 
                className="relative group overflow-hidden rounded-lg border bg-card"
              >
                <img
                  src={short.thumbnail}
                  alt={short.title}
                  className="w-full aspect-video object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://placehold.co/480x360/gray/white?text=Thumbnail+Error";
                  }}
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDeleteShort(short.id, short.docId)}
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete
                  </Button>
                </div>
                <div className="p-3">
                  <h3 className="font-medium truncate">{short.title}</h3>
                  <p className="text-sm text-muted-foreground truncate">ID: {short.id}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        <SimpleYouTubeShortDialog
          open={isAddDialogOpen}
          onOpenChange={setIsAddDialogOpen}
          onSubmit={handleAddShort}
          isOfflineMode={isOffline}
        />
      </CardContent>
    </Card>
  );
};

export default SimpleYouTubeShortsManager;
