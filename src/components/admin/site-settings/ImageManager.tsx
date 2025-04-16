
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { RotateCw, AlertCircle } from 'lucide-react';
import { useWebsiteImages, WebsiteImage } from '@/hooks/useWebsiteImages';
import { uploadFile } from '@/services/firebase/storageOperations';
import { toast } from '@/hooks/use-toast';
import ImagePreviewModal from './image-manager/ImagePreviewModal';
import ImageGrid from './image-manager/ImageGrid';
import SectionUploader from './image-manager/SectionUploader';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface PageConfig {
  id: string;
  name: string;
  sections: {
    id: string;
    name: string;
  }[];
}

export const ImageManager = () => {
  const [uploading, setUploading] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState<string | null>(null);
  const [activePage, setActivePage] = useState('home');
  const [copySuccess, setCopySuccess] = useState<string | null>(null);

  const { 
    images, 
    loading: loadingImages, 
    error,
    addImage, 
    deleteImage,
    fetchImages
  } = useWebsiteImages();

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>, section: string, page: string) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      setUploading(true);
      const timestamp = Date.now();
      const path = `website-images/${page}/${section}/${timestamp}_${file.name}`;
      const url = await uploadFile(path, file);
      
      const newImage: Omit<WebsiteImage, 'id'> = {
        url,
        name: file.name,
        section,
        page,
        createdAt: timestamp,
        path
      };
      
      await addImage(newImage);
      
      toast({
        title: "Success",
        description: "Image uploaded successfully",
      });

      // Refresh images after upload
      fetchImages();
    } catch (error) {
      console.error('Error uploading image:', error);
      toast({
        title: "Error",
        description: "Failed to upload image",
        variant: "destructive"
      });
    } finally {
      setUploading(false);
    }
  };

  const handleImageDelete = async (image: WebsiteImage) => {
    try {
      await deleteImage(image.id, image.path);
      
      toast({
        title: "Success",
        description: "Image deleted successfully",
      });
    } catch (error) {
      console.error('Error deleting image:', error);
      toast({
        title: "Error",
        description: "Failed to delete image",
        variant: "destructive"
      });
    }
  };

  const copyImageUrl = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopySuccess(url);
    setTimeout(() => setCopySuccess(null), 2000);
    toast({
      title: "Copied",
      description: "Image URL copied to clipboard",
    });
  };

  const pageConfigs: PageConfig[] = [
    { 
      id: 'home', 
      name: 'Home Page', 
      sections: [
        { id: 'hero', name: 'Hero Section' },
        { id: 'features', name: 'Features Section' },
        { id: 'testimonials', name: 'Testimonials Section' },
        { id: 'stats', name: 'Statistics Section' },
        { id: 'cta', name: 'CTA Section' }
      ] 
    },
    { 
      id: 'about', 
      name: 'About Us Page', 
      sections: [
        { id: 'hero', name: 'Hero Section' },
        { id: 'team', name: 'Team Section' },
        { id: 'mission', name: 'Mission & Vision' },
        { id: 'values', name: 'Core Values' }
      ] 
    },
    { 
      id: 'services', 
      name: 'Services Page', 
      sections: [
        { id: 'hero', name: 'Hero Section' },
        { id: 'offerings', name: 'Service Offerings' },
        { id: 'process', name: 'Process Section' }
      ] 
    },
    { 
      id: 'it-solutions', 
      name: 'IT Solutions Page', 
      sections: [
        { id: 'hero', name: 'Hero Section' },
        { id: 'services', name: 'Services Section' },
        { id: 'seo', name: 'SEO Packages' },
        { id: 'social', name: 'Social Media' },
        { id: 'google-ads', name: 'Google Ads' },
        { id: 'tech-stack', name: 'Tech Stack' }
      ] 
    },
  ];

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
          <TabsList className="mb-4 overflow-x-auto flex w-full">
            {pageConfigs.map((page) => (
              <TabsTrigger key={page.id} value={page.id} className="flex-shrink-0">
                {page.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {pageConfigs.map((page) => (
            <TabsContent key={page.id} value={page.id} className="space-y-6">
              {page.sections.map((section) => (
                <div key={section.id} className="space-y-4">
                  <SectionUploader
                    section={section}
                    pageId={page.id}
                    onUpload={handleImageUpload}
                    uploading={uploading}
                  />
                  
                  {loadingImages ? (
                    <div className="py-8 flex justify-center">
                      <RotateCw className="h-8 w-8 animate-spin text-muted-foreground" />
                    </div>
                  ) : (
                    <ImageGrid
                      images={images}
                      sectionId={section.id}
                      pageId={page.id}
                      onPreview={setSelectedImageUrl}
                      onDelete={deleteImage}
                      onCopy={copyImageUrl}
                      copySuccess={copySuccess}
                    />
                  )}
                </div>
              ))}
            </TabsContent>
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
