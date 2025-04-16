
import React from 'react';
import { TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PageConfig } from '../config/pageConfigs';

interface PageTabsProps {
  pageConfigs: PageConfig[];
}

const PageTabs: React.FC<PageTabsProps> = ({ pageConfigs }) => {
  return (
    <TabsList className="mb-4 overflow-x-auto flex w-full">
      {pageConfigs.map((page) => (
        <TabsTrigger key={page.id} value={page.id} className="flex-shrink-0">
          {page.name}
        </TabsTrigger>
      ))}
    </TabsList>
  );
};

export default PageTabs;
