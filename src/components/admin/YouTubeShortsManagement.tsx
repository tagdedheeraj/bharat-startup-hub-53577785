import React, { useState, useEffect } from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Youtube, Plus, Pencil, Trash2, Save, X } from 'lucide-react';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { youtubeShorts as initialYoutubeShorts } from '../youtube-shorts/data';
import { YouTubeShort } from '../youtube-shorts/types';
import { createDocument, updateDocument, deleteDocument } from '@/services/firebaseDataService';

const YouTubeShortsManagement: React.FC = () => {
  const [youtubeShorts, setYoutubeShorts] = useState<YouTubeShort[]>(initialYoutubeShorts);
  const [editingShort, setEditingShort] = useState<YouTubeShort | null>(null);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [pendingDeleteId, setPendingDeleteId] = useState<string | null>(null);

  const addForm = useForm({
    defaultValues: {
      id: '',
      title: '',
      thumbnail: ''
    }
  });

  const editForm = useForm({
    defaultValues: {
      id: '',
      title: '',
      thumbnail: ''
    }
  });

  useEffect(() => {
    if (editingShort) {
      editForm.reset({
        id: editingShort.id,
        title: editingShort.title,
        thumbnail: editingShort.thumbnail
      });
    }
  }, [editingShort, editForm]);

  const handleAddShort = (data: YouTubeShort) => {
    try {
      if (youtubeShorts.some(short => short.id === data.id)) {
        toast.error("A video with this YouTube ID already exists!");
        return;
      }

      if (!data.thumbnail) {
        data.thumbnail = `https://i3.ytimg.com/vi/${data.id}/maxresdefault.jpg`;
      }

      const updatedShorts = [...youtubeShorts, data];
      setYoutubeShorts(updatedShorts);
      
      toast.success("YouTube short added successfully!");
      addForm.reset();
      setIsAddDialogOpen(false);
    } catch (error) {
      console.error("Error adding YouTube short:", error);
      toast.error("Failed to add YouTube short");
    }
  };

  const handleEditShort = (data: YouTubeShort) => {
    try {
      if (!data.thumbnail) {
        data.thumbnail = `https://i3.ytimg.com/vi/${data.id}/maxresdefault.jpg`;
      }

      const updatedShorts = youtubeShorts.map(short => 
        short.id === editingShort?.id ? data : short
      );
      setYoutubeShorts(updatedShorts);
      
      toast.success("YouTube short updated successfully!");
      setIsEditDialogOpen(false);
      setEditingShort(null);
    } catch (error) {
      console.error("Error updating YouTube short:", error);
      toast.error("Failed to update YouTube short");
    }
  };

  const handleDeleteShort = (id: string) => {
    try {
      const updatedShorts = youtubeShorts.filter(short => short.id !== id);
      setYoutubeShorts(updatedShorts);
      
      toast.success("YouTube short deleted successfully!");
      setIsDeleteDialogOpen(false);
      setPendingDeleteId(null);
    } catch (error) {
      console.error("Error deleting YouTube short:", error);
      toast.error("Failed to delete YouTube short");
    }
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
        <div className="flex justify-between mb-6">
          <h3 className="text-lg font-medium">Current YouTube Shorts</h3>
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                Add New Short
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New YouTube Short</DialogTitle>
                <DialogDescription>
                  Enter the details of the YouTube short to add to the homepage.
                </DialogDescription>
              </DialogHeader>
              <Form {...addForm}>
                <form onSubmit={addForm.handleSubmit(handleAddShort)} className="space-y-4">
                  <FormField
                    control={addForm.control}
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
                    control={addForm.control}
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
                    control={addForm.control}
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
                    <Button type="button" variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                      Cancel
                    </Button>
                    <Button type="submit">Add Short</Button>
                  </DialogFooter>
                </form>
              </Form>
            </DialogContent>
          </Dialog>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Preview</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>YouTube ID</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {youtubeShorts.map((short) => (
              <TableRow key={short.id}>
                <TableCell>
                  <img 
                    src={short.thumbnail} 
                    alt={short.title} 
                    className="w-32 h-18 object-cover rounded-md"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://placehold.co/320x180/gray/white?text=Thumbnail+Error";
                    }}
                  />
                </TableCell>
                <TableCell className="font-medium">{short.title}</TableCell>
                <TableCell>{short.id}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => {
                        setEditingShort(short);
                        setIsEditDialogOpen(true);
                      }}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="destructive"
                      size="icon"
                      onClick={() => {
                        setPendingDeleteId(short.id);
                        setIsDeleteDialogOpen(true);
                      }}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit YouTube Short</DialogTitle>
              <DialogDescription>
                Update the details of this YouTube short video.
              </DialogDescription>
            </DialogHeader>
            <Form {...editForm}>
              <form onSubmit={editForm.handleSubmit(handleEditShort)} className="space-y-4">
                <FormField
                  control={editForm.control}
                  name="id"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>YouTube Video ID</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={editForm.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Video Title</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={editForm.control}
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
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => {
                      setIsEditDialogOpen(false);
                      setEditingShort(null);
                    }}
                  >
                    Cancel
                  </Button>
                  <Button type="submit">Save Changes</Button>
                </DialogFooter>
              </form>
            </Form>
          </DialogContent>
        </Dialog>

        <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Confirm Deletion</DialogTitle>
              <DialogDescription>
                Are you sure you want to delete this YouTube short? This action cannot be undone.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => {
                  setIsDeleteDialogOpen(false);
                  setPendingDeleteId(null);
                }}
              >
                Cancel
              </Button>
              <Button 
                type="button" 
                variant="destructive" 
                onClick={() => pendingDeleteId && handleDeleteShort(pendingDeleteId)}
              >
                Delete
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
};

export default YouTubeShortsManagement;
