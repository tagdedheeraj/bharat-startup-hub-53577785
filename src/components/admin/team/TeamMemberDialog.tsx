
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { TeamMember } from './types';
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
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface TeamMemberDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: TeamMember) => void;
  title: string;
  isOfflineMode?: boolean;
  initialData?: TeamMember | null;
}

const teamSections = [
  { value: "leadership", label: "Leadership Team" },
  { value: "domain-experts", label: "Domain Experts" }
];

const sectionOptions = [
  { value: "team-ceo", label: "CEO/Founder" },
  { value: "team-legal", label: "Legal Director" },
  { value: "team-funding", label: "Head of Funding" },
  { value: "team-marketing", label: "Marketing Director" },
  { value: "team-tech", label: "Technology Advisor" },
  { value: "team-finance", label: "Financial Consultant" }
];

const TeamMemberDialog: React.FC<TeamMemberDialogProps> = ({
  open,
  onOpenChange,
  onSubmit,
  title,
  isOfflineMode = false,
  initialData = null
}) => {
  const defaultValues: Partial<TeamMember> = initialData || {
    name: '',
    role: '',
    description: '',
    sectionName: '',
    photoUrl: '',
    experience: '',
    expertise: '',
    bio: '',
    linkedinUrl: '',
    teamSection: 'leadership',
    id: ''
  };

  const form = useForm<TeamMember>({
    defaultValues: defaultValues as TeamMember
  });

  useEffect(() => {
    if (open) {
      form.reset(defaultValues as TeamMember);
    }
  }, [open, initialData, form, defaultValues]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            Enter the team member details below.
            {isOfflineMode && (
              <span className="block mt-2 text-amber-600 text-xs">
                Running in offline mode. Changes will be saved locally.
              </span>
            )}
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  rules={{ required: "Name is required" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="role"
                  rules={{ required: "Role is required" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Role/Position</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., CEO, Director of Marketing" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="experience"
                  rules={{ required: "Experience is required" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Experience</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., 20+ years" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="expertise"
                  rules={{ required: "Expertise is required" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Expertise</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Venture Capital, Business Strategy" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="linkedinUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>LinkedIn URL</FormLabel>
                      <FormControl>
                        <Input placeholder="https://linkedin.com/in/..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="teamSection"
                  rules={{ required: "Team section is required" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Team Section</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select team section" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {teamSections.map(section => (
                            <SelectItem key={section.value} value={section.value}>
                              {section.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="sectionName"
                  rules={{ required: "Section name is required" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Position Type</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a position type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {sectionOptions.map(option => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="photoUrl"
                  rules={{ required: "Photo URL is required" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Photo URL</FormLabel>
                      <FormControl>
                        <Input placeholder="URL to the team member's photo" {...field} />
                      </FormControl>
                      {field.value && (
                        <div className="mt-2">
                          <Avatar className="h-20 w-20">
                            <AvatarImage src={field.value} alt="Preview" />
                            <AvatarFallback>{form.getValues('name')?.slice(0, 2).toUpperCase()}</AvatarFallback>
                          </Avatar>
                        </div>
                      )}
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <FormField
              control={form.control}
              name="description"
              rules={{ required: "Description is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Short Description</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Brief description (displayed in cards)" 
                      className="min-h-[80px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="bio"
              rules={{ required: "Bio is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Bio</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Detailed biography" 
                      className="min-h-[120px]"
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
              <Button type="submit">Save</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default TeamMemberDialog;
