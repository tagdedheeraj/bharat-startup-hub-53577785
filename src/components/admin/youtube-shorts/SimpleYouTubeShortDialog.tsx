
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { validateYouTubeVideo } from '@/components/youtube-shorts/data';

interface SimpleYouTubeShortDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (videoId: string, title: string) => void;
  isOfflineMode?: boolean;
}

const SimpleYouTubeShortDialog: React.FC<SimpleYouTubeShortDialogProps> = ({
  open,
  onOpenChange,
  onSubmit,
  isOfflineMode = false
}) => {
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');
  const [isValidating, setIsValidating] = useState(false);
  const [previewUrl, setPreviewUrl] = useState('');
  const [thumbnailError, setThumbnailError] = useState(false);

  const extractVideoId = (input: string): string | null => {
    try {
      if (input.includes('youtube.com') || input.includes('youtu.be')) {
        const urlObj = new URL(input);
        if (input.includes('youtube.com/shorts/')) {
          return urlObj.pathname.split('/shorts/')[1]?.split('?')[0] || null;
        } else if (input.includes('youtube.com/watch')) {
          return urlObj.searchParams.get('v');
        } else if (input.includes('youtu.be/')) {
          return urlObj.pathname.substring(1).split('?')[0];
        }
      } else if (/^[a-zA-Z0-9_-]{11}$/.test(input)) {
        return input;
      }
      return null;
    } catch (error) {
      console.error('Error parsing YouTube URL:', error);
      return null;
    }
  };

  const handleUrlChange = async (value: string) => {
    setUrl(value);
    const videoId = extractVideoId(value);
    
    if (videoId) {
      // Try maxresdefault first, fallback to mqdefault
      setThumbnailError(false);
      setPreviewUrl(`https://i3.ytimg.com/vi/${videoId}/maxresdefault.jpg`);
      if (!title) {
        setTitle(`YouTube Short #${videoId}`);
      }
    } else {
      setPreviewUrl('');
      setThumbnailError(false);
    }
  };

  const handleThumbnailError = () => {
    const videoId = extractVideoId(url);
    if (videoId) {
      // Fallback to medium quality thumbnail
      setPreviewUrl(`https://i3.ytimg.com/vi/${videoId}/mqdefault.jpg`);
      setThumbnailError(true);
    }
  };

  const handleSubmit = async () => {
    const videoId = extractVideoId(url);
    if (!videoId) {
      toast.error("Please enter a valid YouTube URL or video ID");
      return;
    }

    setIsValidating(true);
    try {
      const isValid = await validateYouTubeVideo(videoId);
      if (!isValid) {
        toast.error("This video doesn't exist or isn't accessible");
        return;
      }

      onSubmit(videoId, title || `YouTube Short #${videoId}`);
      setUrl('');
      setTitle('');
      setPreviewUrl('');
      setThumbnailError(false);
      onOpenChange(false);
    } catch (error) {
      toast.error("Error validating video");
    } finally {
      setIsValidating(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add YouTube Short</DialogTitle>
          <DialogDescription>
            Enter a YouTube video URL or ID to add it to your shorts collection.
            {isOfflineMode && (
              <span className="block mt-2 text-amber-600 text-xs">
                Running in offline mode. Changes will be saved locally.
              </span>
            )}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="url">YouTube URL or Video ID</Label>
            <Input
              id="url"
              placeholder="https://youtube.com/shorts/... or video ID"
              value={url}
              onChange={(e) => handleUrlChange(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="title">Title (Optional)</Label>
            <Input
              id="title"
              placeholder="Enter a title for this short"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {previewUrl && (
            <div className="space-y-2">
              <Label>Preview</Label>
              <div className="relative aspect-video w-full overflow-hidden rounded-lg border bg-muted">
                <img
                  src={previewUrl}
                  alt="Video thumbnail"
                  className="object-cover w-full h-full"
                  onError={handleThumbnailError}
                />
                {thumbnailError && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black/75 text-white text-xs p-1 text-center">
                    Using lower quality thumbnail
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        <DialogFooter>
          <Button
            type="button"
            variant="outline"
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            onClick={handleSubmit}
            disabled={isValidating || !url}
          >
            {isValidating ? "Validating..." : "Add Short"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SimpleYouTubeShortDialog;
