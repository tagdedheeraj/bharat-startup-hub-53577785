
import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { 
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage 
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { FileText, Save, Edit, Image, Link, FileCode, Eye } from 'lucide-react';
import { toast } from 'sonner';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Mock data for available pages
const websitePages = [
  { id: 1, title: 'Home Page', path: '/' },
  { id: 2, title: 'About Us', path: '/about' },
  { id: 3, title: 'Services', path: '/services' },
  { id: 4, title: 'Contact', path: '/contact' },
  { id: 5, title: 'Success Stories', path: '/success-stories' },
  { id: 6, title: 'FAQs', path: '/faqs' },
  { id: 7, title: 'CA Services', path: '/ca-services' },
  { id: 8, title: 'Funding Consultation', path: '/services/funding-consultation' },
  { id: 9, title: 'Certificate Marketing', path: '/services/certificate-marketing' },
  { id: 10, title: 'Legal Consultation', path: '/services/legal-consultation' },
];

// Mock data for page sections
const pageSections = {
  '/': [
    { id: 1, name: 'Hero Section', content: 'Welcome to our platform!' },
    { id: 2, name: 'Features Section', content: 'Our platform offers...' },
    { id: 3, name: 'Testimonials', content: 'What our customers say...' },
  ],
  '/about': [
    { id: 1, name: 'Company History', content: 'Our company was founded...' },
    { id: 2, name: 'Our Mission', content: 'Our mission is to...' },
    { id: 3, name: 'Team Members', content: 'Our dedicated team...' },
  ],
  // Add more page sections as needed
};

const ContentManagement: React.FC = () => {
  const [selectedPage, setSelectedPage] = useState<number | null>(null);
  const [pagePath, setPagePath] = useState<string>('');
  const [sections, setSections] = useState<any[]>([]);
  const [editMode, setEditMode] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);
  const [activeTab, setActiveTab] = useState('pages');

  const form = useForm({
    defaultValues: {
      title: '',
      content: '',
      metaDescription: '',
      metaKeywords: '',
    }
  });

  const handlePageSelect = (pageId: number) => {
    const page = websitePages.find(p => p.id === pageId);
    setSelectedPage(pageId);
    
    if (page) {
      setPagePath(page.path);
      const pageSectionData = pageSections[page.path as keyof typeof pageSections] || [];
      setSections(pageSectionData);
      
      form.reset({
        title: page.title,
        content: '',
        metaDescription: 'Meta description for ' + page.title,
        metaKeywords: 'keywords, for, ' + page.title,
      });
    }
  };

  const handleSaveContent = (data: any) => {
    // In a real implementation, this would save the data to a database or CMS
    console.log('Saving content:', data);
    toast.success('Page content saved successfully!');
    setEditMode(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="h-5 w-5" />
          Content Management
        </CardTitle>
        <CardDescription>
          Manage and edit website pages and content
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="pages">Website Pages</TabsTrigger>
            <TabsTrigger value="editor">Page Editor</TabsTrigger>
          </TabsList>
          
          <TabsContent value="pages">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              {websitePages.map((page) => (
                <Card 
                  key={page.id} 
                  className={`cursor-pointer ${selectedPage === page.id ? 'border-primary' : ''}`}
                  onClick={() => handlePageSelect(page.id)}
                >
                  <CardContent className="p-4 flex items-center gap-3">
                    <FileText className="h-5 w-5 text-primary" />
                    <div>
                      <h3 className="font-medium">{page.title}</h3>
                      <p className="text-sm text-muted-foreground">{page.path}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="editor">
            {selectedPage ? (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold">
                    Editing: {websitePages.find(p => p.id === selectedPage)?.title}
                  </h3>
                  <div className="flex gap-2">
                    <Button 
                      variant={editMode ? "default" : "outline"} 
                      onClick={() => { 
                        setEditMode(true);
                        setPreviewMode(false);
                      }}
                    >
                      <Edit className="mr-2 h-4 w-4" />
                      Edit
                    </Button>
                    <Button 
                      variant={previewMode ? "default" : "outline"} 
                      onClick={() => {
                        setPreviewMode(true);
                        setEditMode(false);
                      }}
                    >
                      <Eye className="mr-2 h-4 w-4" />
                      Preview
                    </Button>
                  </div>
                </div>
                
                {editMode ? (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleSaveContent)} className="space-y-6">
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
                ) : previewMode ? (
                  <div className="border p-6 rounded-md">
                    <h2 className="text-2xl font-bold mb-4">{form.watch('title')}</h2>
                    {sections.map((section) => (
                      <div key={section.id} className="mb-6">
                        <h3 className="text-lg font-medium mb-2">{section.name}</h3>
                        <p>{section.content}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center p-8 border rounded-md">
                    <FileCode className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-lg font-medium">Select an option</h3>
                    <p className="text-muted-foreground">
                      Click "Edit" to modify page content or "Preview" to see how it looks
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center p-8 border rounded-md mt-4">
                <FileText className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium">No page selected</h3>
                <p className="text-muted-foreground">
                  Please select a page from the "Website Pages" tab to edit its content
                </p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ContentManagement;
