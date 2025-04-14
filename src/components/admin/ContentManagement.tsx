
import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { FileText } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';
import PageSelector from './content-management/PageSelector';
import PageEditor from './content-management/PageEditor';
import AddPageDialog from './content-management/AddPageDialog';
import { websitePages, pageSections, addNewPage } from './content-management/data';

const ContentManagement: React.FC = () => {
  const [selectedPage, setSelectedPage] = useState<number | null>(null);
  const [pagePath, setPagePath] = useState<string>('');
  const [sections, setSections] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState('pages');
  const [pages, setPages] = useState(websitePages);
  const [addPageDialogOpen, setAddPageDialogOpen] = useState(false);

  const handlePageSelect = (pageId: number) => {
    const page = pages.find(p => p.id === pageId);
    setSelectedPage(pageId);
    
    if (page) {
      setPagePath(page.path);
      const pageSectionData = pageSections[page.path as keyof typeof pageSections] || [];
      setSections(pageSectionData);
    }
  };

  const handleSaveContent = (data: any) => {
    // In a real implementation, this would save the data to a database or CMS
    console.log('Saving content:', data);
    toast.success('Page content saved successfully!');
  };

  const handleAddNewPage = (pageData: { title: string; path: string }) => {
    // Add the new page to our pages array
    const newPage = addNewPage(pageData.title, pageData.path);
    setPages(prevPages => [...prevPages, newPage]);
    
    // Select the newly created page
    setSelectedPage(newPage.id);
    setPagePath(newPage.path);
    setSections([]);
    
    // Switch to editor tab
    setActiveTab('editor');
  };

  const selectedPageObj = selectedPage 
    ? pages.find(p => p.id === selectedPage) || null 
    : null;

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
            <PageSelector 
              pages={pages} 
              selectedPage={selectedPage} 
              onPageSelect={handlePageSelect} 
              onAddNewPage={() => setAddPageDialogOpen(true)}
            />
          </TabsContent>
          
          <TabsContent value="editor">
            <PageEditor 
              selectedPage={selectedPageObj} 
              sections={sections} 
              onSaveContent={handleSaveContent} 
            />
          </TabsContent>
        </Tabs>

        {/* Add Page Dialog */}
        <AddPageDialog 
          open={addPageDialogOpen}
          onOpenChange={setAddPageDialogOpen}
          onAddPage={handleAddNewPage}
        />
      </CardContent>
    </Card>
  );
};

export default ContentManagement;
