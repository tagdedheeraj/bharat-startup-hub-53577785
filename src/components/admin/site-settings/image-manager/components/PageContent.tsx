
import React from 'react';
import { TabsContent } from '@/components/ui/tabs';
import { PageConfig } from '../config/pageConfigs';
import { WebsiteImage } from '@/hooks/useWebsiteImages';
import { RotateCw } from 'lucide-react';
import ImageGrid from '../ImageGrid';
import SectionUploader from '../SectionUploader';

interface PageContentProps {
  page: PageConfig;
  loading: boolean;
  images: WebsiteImage[];
  uploading: boolean;
  onUpload: (event: React.ChangeEvent<HTMLInputElement>, section: string, page: string) => void;
  onPreview: (url: string) => void;
  onDelete: (image: WebsiteImage) => void;
  onCopy: (url: string) => void;
  copySuccess: string | null;
}

const PageContent: React.FC<PageContentProps> = ({
  page,
  loading,
  images,
  uploading,
  onUpload,
  onPreview,
  onDelete,
  onCopy,
  copySuccess
}) => {
  return (
    <TabsContent value={page.id} className="space-y-6">
      {page.sections.map((section) => (
        <div key={section.id} className="space-y-4">
          <SectionUploader
            section={section}
            pageId={page.id}
            onUpload={onUpload}
            uploading={uploading}
          />
          
          {loading ? (
            <div className="py-8 flex justify-center">
              <RotateCw className="h-8 w-8 animate-spin text-muted-foreground" />
            </div>
          ) : (
            <ImageGrid
              images={images}
              sectionId={section.id}
              pageId={page.id}
              onPreview={onPreview}
              onDelete={onDelete}
              onCopy={onCopy}
              copySuccess={copySuccess}
            />
          )}
        </div>
      ))}
    </TabsContent>
  );
};

export default PageContent;
