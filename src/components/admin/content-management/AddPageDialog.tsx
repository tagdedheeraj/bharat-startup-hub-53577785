
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

// Define the form schema
const formSchema = z.object({
  title: z.string().min(3, {
    message: "Page title must be at least 3 characters",
  }),
  path: z.string().min(1, {
    message: "Page path is required",
  }).refine(path => path.startsWith('/'), {
    message: "Path must start with /"
  }),
});

type FormValues = z.infer<typeof formSchema>;

interface AddPageDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAddPage: (page: { title: string; path: string }) => void;
}

const AddPageDialog: React.FC<AddPageDialogProps> = ({
  open,
  onOpenChange,
  onAddPage,
}) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      path: '/',
    },
  });

  const onSubmit = (data: FormValues) => {
    // Since data is validated by zod schema, we know that title and path are defined
    onAddPage({
      title: data.title,
      path: data.path
    });
    form.reset();
    onOpenChange(false);
    toast.success("New page created successfully!");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create New Page</DialogTitle>
          <DialogDescription>
            Add a new page to your website. Fill in the required information below.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Page Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Home Page" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is the display name of your page.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="path"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Page Path</FormLabel>
                  <FormControl>
                    <Input placeholder="/about" {...field} />
                  </FormControl>
                  <FormDescription>
                    The URL path for this page (e.g., /about, /services/web-design)
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <Button type="submit">Create Page</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddPageDialog;
