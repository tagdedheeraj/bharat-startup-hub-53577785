
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { FileText } from 'lucide-react';

interface Page {
  id: number;
  title: string;
  path: string;
}

interface PageSelectorProps {
  pages: Page[];
  selectedPage: number | null;
  onPageSelect: (pageId: number) => void;
}

const PageSelector: React.FC<PageSelectorProps> = ({
  pages,
  selectedPage,
  onPageSelect
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      {pages.map((page) => (
        <Card 
          key={page.id} 
          className={`cursor-pointer ${selectedPage === page.id ? 'border-primary' : ''}`}
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
  );
};

export default PageSelector;
