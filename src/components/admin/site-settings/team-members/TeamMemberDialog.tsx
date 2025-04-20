
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AlertCircle, Upload } from 'lucide-react';
import { toast } from 'sonner';
import { collection, doc, setDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '@/lib/firebase';
import { TeamMember } from './types';

interface TeamMemberDialogProps {
  open: boolean;
  onClose: (created: boolean) => void;
  teamMember: TeamMember | null;
  isOffline: boolean;
}

const teamMemberSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  position: z.string().min(2, { message: 'Position is required' }),
  experience: z.string().min(1, { message: 'Experience is required' }),
  expertise: z.string().min(2, { message: 'Expertise is required' }),
  bio: z.string().min(10, { message: 'Bio must be at least 10 characters' }),
  description: z.string().min(10, { message: 'Description must be at least 10 characters' }),
  linkedinUrl: z.string().url({ message: 'Must be a valid URL' }).or(z.string().length(0)),
  teamSection: z.enum(['leadership', 'domain-experts'])
});

const TeamMemberDialog = ({ open, onClose, teamMember, isOffline }: TeamMemberDialogProps) => {
  const [photoFile, setPhotoFile] = React.useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = React.useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  
  const isEditMode = !!teamMember;
  
  const form = useForm<z.infer<typeof teamMemberSchema>>({
    resolver: zodResolver(teamMemberSchema),
    defaultValues: {
      name: teamMember?.name || '',
      position: teamMember?.position || '',
      experience: teamMember?.experience || '',
      expertise: teamMember?.expertise || '',
      bio: teamMember?.bio || '',
      description: teamMember?.description || '',
      linkedinUrl: teamMember?.linkedinUrl || '',
      teamSection: (teamMember?.teamSection as 'leadership' | 'domain-experts') || 'leadership'
    }
  });
  
  React.useEffect(() => {
    if (teamMember) {
      form.reset({
        name: teamMember.name || '',
        position: teamMember.position || '',
        experience: teamMember.experience || '',
        expertise: teamMember.expertise || '',
        bio: teamMember.bio || '',
        description: teamMember.description || '',
        linkedinUrl: teamMember.linkedinUrl || '',
        teamSection: (teamMember.teamSection as 'leadership' | 'domain-experts') || 'leadership'
      });
      setPhotoPreview(teamMember.photoUrl || null);
    } else {
      form.reset({
        name: '',
        position: '',
        experience: '',
        expertise: '',
        bio: '',
        description: '',
        linkedinUrl: '',
        teamSection: 'leadership'
      });
      setPhotoPreview(null);
    }
    setPhotoFile(null);
  }, [teamMember, form, open]);
  
  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPhotoFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const uploadPhoto = async (id: string): Promise<string> => {
    if (!photoFile) {
      return teamMember?.photoUrl || '';
    }
    
    try {
      const storageRef = ref(storage, `team-members/${id}_${Date.now()}`);
      await uploadBytes(storageRef, photoFile);
      const url = await getDownloadURL(storageRef);
      console.log('Photo uploaded successfully:', url);
      return url;
    } catch (error) {
      console.error('Error uploading photo:', error);
      toast.error('Failed to upload photo');
      throw error;
    }
  };
  
  const onSubmit = async (data: z.infer<typeof teamMemberSchema>) => {
    if (isOffline) {
      toast.error('Cannot save team members while offline');
      return;
    }
    
    try {
      setIsSubmitting(true);
      console.log('Starting to save team member...');
      
      const teamMembersCollection = collection(db, 'teamMembers');
      let documentId;
      let photoUrl = '';
      
      if (isEditMode && teamMember) {
        documentId = teamMember.id;
        console.log('Editing existing team member with ID:', documentId);
        
        try {
          photoUrl = await uploadPhoto(documentId);
          console.log('Photo upload complete, URL:', photoUrl);
          
          const memberRef = doc(db, 'teamMembers', documentId);
          await updateDoc(memberRef, {
            ...data,
            photoUrl: photoUrl || teamMember.photoUrl,
            updatedAt: serverTimestamp()
          });
          
          console.log('Team member updated successfully');
          toast.success('Team member updated successfully');
          onClose(true);
        } catch (error) {
          console.error('Error in update flow:', error);
          toast.error('Failed to update team member');
        }
      } else {
        // Creating a new team member
        console.log('Creating new team member');
        try {
          const newDocRef = doc(teamMembersCollection);
          documentId = newDocRef.id;
          
          photoUrl = await uploadPhoto(documentId);
          console.log('Photo upload complete, URL:', photoUrl);
          
          await setDoc(newDocRef, {
            ...data,
            photoUrl,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp()
          });
          
          console.log('Team member created successfully with ID:', documentId);
          toast.success('Team member added successfully');
          onClose(true);
        } catch (error) {
          console.error('Error in create flow:', error);
          toast.error('Failed to create team member');
        }
      }
    } catch (error) {
      console.error('General error saving team member:', error);
      toast.error('Failed to save team member');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <Dialog open={open} onOpenChange={(open) => !open && onClose(false)}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{isEditMode ? 'Edit Team Member' : 'Add New Team Member'}</DialogTitle>
        </DialogHeader>
        
        {isOffline && (
          <Alert className="border-amber-200 bg-amber-50">
            <AlertCircle className="h-4 w-4 text-amber-600" />
            <AlertDescription className="text-amber-600">
              You are in offline mode. You cannot save changes.
            </AlertDescription>
          </Alert>
        )}
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-24 h-24 border rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                {photoPreview ? (
                  <img src={photoPreview} alt="Preview" className="w-full h-full object-cover" />
                ) : (
                  <Upload className="text-gray-400 h-8 w-8" />
                )}
              </div>
              <div className="flex-1">
                <FormLabel>Photo</FormLabel>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoChange}
                  className="cursor-pointer"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="position"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Position</FormLabel>
                    <FormControl>
                      <Input placeholder="CEO" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="experience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Experience</FormLabel>
                    <FormControl>
                      <Input placeholder="10+ years" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="expertise"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Expertise</FormLabel>
                    <FormControl>
                      <Input placeholder="Business Strategy, Finance" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="linkedinUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>LinkedIn URL (optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="https://linkedin.com/in/username" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Short Description</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="A brief description that appears on cards" 
                      {...field} 
                      className="min-h-[80px]" 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Bio</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="A detailed description of the team member's background" 
                      {...field} 
                      className="min-h-[120px]" 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="teamSection"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Team Section</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a section" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="leadership">Leadership Team</SelectItem>
                      <SelectItem value="domain-experts">Domain Experts</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="flex justify-end gap-2 pt-4">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => onClose(false)}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                disabled={isSubmitting || isOffline}
              >
                {isSubmitting ? 'Saving...' : isEditMode ? 'Update' : 'Create'}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default TeamMemberDialog;
