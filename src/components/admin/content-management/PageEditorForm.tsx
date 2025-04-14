
import React from 'react';
import { useForm } from 'react-hook-form';
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Save } from 'lucide-react';

interface Section {
  id: number;
  name: string;
  content: string;
}

interface PageFormValues {
  title: string;
  content: string;
  metaDescription: string;
  metaKeywords: string;
}

interface PageEditorFormProps {
  initialValues: PageFormValues;
  sections: Section[];
  onSubmit: (data: any) => void;
}

const PageEditorForm: React.FC<PageEditorFormProps> = ({
  initialValues,
  sections,
  onSubmit
}) => {
  const form = useForm({
    defaultValues: initialValues
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Page Title</FormLabel>
              <FormControl>
                <Input placeholder="Page title" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        
        {sections.map((section) => (
          <div key={section.id} className="p-4 border rounded-md">
            <FormItem>
              <FormLabel>{section.name}</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder={`Edit ${section.name} content`} 
                  defaultValue={section.content}
                  rows={5}
                />
              </FormControl>
            </FormItem>
          </div>
        ))}
        
        <div className="flex gap-4">
          <FormField
            control={form.control}
            name="metaDescription"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Meta Description</FormLabel>
                <FormControl>
                  <Input placeholder="Meta description for SEO" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="metaKeywords"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Meta Keywords</FormLabel>
                <FormControl>
                  <Input placeholder="Keywords separated by commas" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        
        <div className="flex justify-end gap-2">
          <Button type="submit" className="flex items-center">
            <Save className="mr-2 h-4 w-4" />
            Save Changes
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default PageEditorForm;
