
import React from 'react';
import { useForm } from 'react-hook-form';
import { YouTubeShort } from '@/components/youtube-shorts/types';
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
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { toast } from 'sonner';

interface YouTubeShortDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: YouTubeShort) => void;
  title: string;
  isOfflineMode?: boolean;
  initialData?: YouTubeShort | null;
}

const YouTubeShortDialog: React.FC<YouTubeShortDialogProps> = ({
  open,
  onOpenChange,
  onSubmit,
  title,
  isOfflineMode = false,
  initialData = null
}) => {
  const defaultValues: YouTubeShort = initialData || {
    id: '',
    title: '',
    thumbnail: ''
  };

  const form = useForm<YouTubeShort>({
    defaultValues
  });

  // Reset form when dialog opens or initialData changes
  React.useEffect(() => {
    if (open) {
      form.reset(defaultValues);
    }
  }, [open, initialData, form, defaultValues]);

  const description = initialData ? 
    "Edit the YouTube short details below." : 
    "Enter the YouTube video URL or ID below.";

  const submitLabel = initialData ? "Update" : "Add";

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    try {
      // Handle different URL formats
      let videoId = '';
      if (value.includes('youtube.com') || value.includes('youtu.be')) {
        const url = new URL(value);
        if (value.includes('youtube.com/shorts/')) {
          videoId = url.pathname.split('/shorts/')[1];
        } else if (value.includes('youtube.com/watch')) {
          videoId = url.searchParams.get('v') || '';
        } else if (value.includes('youtu.be/')) {
          videoId = url.pathname.substring(1);
        }
      } else {
        // Assume it's a direct video ID
        videoId = value;
      }

      // Clean up video ID
      videoId = videoId.split('?')[0].split('&')[0];

      if (videoId) {
        form.setValue('id', videoId);
      }
    } catch (error) {
      console.error('Error parsing YouTube URL:', error);
    }
  };
  
  const handleDialogSubmit = (data: YouTubeShort) => {
    if (!data.id) {
      toast.error("Please enter a valid YouTube video URL or ID");
      return;
    }
    onSubmit(data);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            {description}
            {isOfflineMode && (
              <span className="block mt-2 text-amber-600 text-xs">
                Running in offline mode. Changes will be saved locally.
              </span>
            )}
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleDialogSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>YouTube Video URL or ID</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Enter YouTube URL or video ID" 
                      onChange={(e) => {
                        handleUrlChange(e);
                        field.onChange(e);
                      }}
                      value={field.value}
                      autoComplete="off"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Video Title</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Title of the video" 
                      {...field} 
                      autoComplete="off"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="thumbnail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Thumbnail URL (Optional)</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Leave blank to use YouTube default thumbnail" 
                      {...field} 
                      autoComplete="off"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
                Cancel
              </Button>
              <Button type="submit">{submitLabel}</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default YouTubeShortDialog;
