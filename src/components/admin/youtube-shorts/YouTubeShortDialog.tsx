
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

interface YouTubeShortDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: YouTubeShort) => void;
  defaultValues: YouTubeShort;
  title: string;
  description: string;
  submitLabel: string;
}

const YouTubeShortDialog: React.FC<YouTubeShortDialogProps> = ({
  isOpen,
  onOpenChange,
  onSubmit,
  defaultValues,
  title,
  description,
  submitLabel
}) => {
  const form = useForm<YouTubeShort>({
    defaultValues
  });

  React.useEffect(() => {
    if (isOpen) {
      form.reset(defaultValues);
    }
  }, [isOpen, defaultValues, form]);

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            {description}
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>YouTube Video ID</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="e.g., dQw4w9WgXcQ" 
                      {...field} 
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
