
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Page {
  id: number;
  title: string;
  path: string;
}

interface PageSelectorProps {
  pages: Page[];
  selectedPage: number | null;
  onPageSelect: (pageId: number) => void;
  onAddNewPage: () => void;
}

const PageSelector: React.FC<PageSelectorProps> = ({
  pages,
  selectedPage,
  onPageSelect,
  onAddNewPage
}) => {
  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Button 
          onClick={onAddNewPage}
          className="flex items-center gap-1"
        >
          <Plus className="h-4 w-4" />
          Create New Page
        </Button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {pages.map((page) => (
          <Card 
            key={page.id} 
            className={`cursor-pointer transition-colors hover:bg-accent/50 ${selectedPage === page.id ? 'border-primary border-2' : ''}`}
            onClick={() => onPageSelect(page.id)}
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
    </div>
  );
};

export default PageSelector;
