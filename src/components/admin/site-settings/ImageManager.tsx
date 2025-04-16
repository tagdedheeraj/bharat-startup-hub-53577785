
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs } from '@/components/ui/tabs';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import ImagePreviewModal from './image-manager/ImagePreviewModal';
import { pageConfigs } from './image-manager/config/pageConfigs';
import { useImageOperations } from './image-manager/hooks/useImageOperations';
import PageTabs from './image-manager/components/PageTabs';
import PageContent from './image-manager/components/PageContent';

export const ImageManager = () => {
  const [selectedImageUrl, setSelectedImageUrl] = useState<string | null>(null);
  const [activePage, setActivePage] = useState('home');

  const {
    images,
    loading,
    error,
    uploading,
    copySuccess,
    handleImageUpload,
    handleCopyUrl,
    deleteImage
  } = useImageOperations();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Website Images</CardTitle>
        <CardDescription>Manage images across different sections of your website</CardDescription>
      </CardHeader>
      <CardContent>
        {error && (
          <Alert variant="destructive" className="mb-4">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              Error loading images. Please try again later.
            </AlertDescription>
          </Alert>
        )}

        <Tabs defaultValue="home" value={activePage} onValueChange={setActivePage}>
          <PageTabs pageConfigs={pageConfigs} />
          
          {pageConfigs.map((page) => (
            <PageContent
              key={page.id}
              page={page}
              loading={loading}
              images={images}
              uploading={uploading}
              onUpload={handleImageUpload}
              onPreview={setSelectedImageUrl}
              onDelete={deleteImage}
              onCopy={handleCopyUrl}
              copySuccess={copySuccess}
            />
          ))}
        </Tabs>
      </CardContent>

      {selectedImageUrl && (
        <ImagePreviewModal
          imageUrl={selectedImageUrl}
          onClose={() => setSelectedImageUrl(null)}
        />
      )}
    </Card>
  );
};
