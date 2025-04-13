
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
import { websitePages, pageSections } from './content-management/data';

const ContentManagement: React.FC = () => {
  const [selectedPage, setSelectedPage] = useState<number | null>(null);
  const [pagePath, setPagePath] = useState<string>('');
  const [sections, setSections] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState('pages');

  const handlePageSelect = (pageId: number) => {
    const page = websitePages.find(p => p.id === pageId);
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

  const selectedPageObj = selectedPage 
    ? websitePages.find(p => p.id === selectedPage) || null 
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
              pages={websitePages} 
              selectedPage={selectedPage} 
              onPageSelect={handlePageSelect} 
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
      </CardContent>
    </Card>
  );
};

export default ContentManagement;
